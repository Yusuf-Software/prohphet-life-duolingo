import { useState, useEffect, useCallback } from 'react';
import { UserProgress, Level, Section } from '@/types/journey';
import { JOURNEY_DATA } from '@/data/journey';

const STORAGE_KEY = 'prophet_journey_progress';

const INITIAL_PROGRESS: UserProgress = {
  completedLevelIds: [],
  totalStars: 0,
  currentHearts: 3,
  lastPlayedTimestamp: Date.now(),
  dailyStreak: 0,
  questionsAnsweredToday: 0,
  mistakeStack: [],
};

export function useJourney() {
  const [progress, setProgress] = useState<UserProgress>(() => {
    if (typeof window === 'undefined') return INITIAL_PROGRESS;
    
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return INITIAL_PROGRESS;

    try {
      const parsed = JSON.parse(saved) as UserProgress;
      
      // Handle Daily Streak & Daily Quest reset
      const now = new Date();
      const lastPlayed = new Date(parsed.lastPlayedTimestamp);
      const isSameDay = now.toDateString() === lastPlayed.toDateString();
      
      let newStreak = parsed.dailyStreak;
      let questionsToday = isSameDay ? parsed.questionsAnsweredToday : 0;

      // If it's a new day, check if streak should continue or reset
      if (!isSameDay) {
        const diffTime = Math.abs(now.getTime() - lastPlayed.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) {
          // Streak continues
        } else {
          newStreak = 0; // Streak broken
        }
      }

      return {
        ...parsed,
        dailyStreak: newStreak,
        questionsAnsweredToday: questionsToday,
        lastPlayedTimestamp: Date.now(),
      };
    } catch (e) {
      console.error("Failed to load progress", e);
      return INITIAL_PROGRESS;
    }
  });

  // Save progress
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completeLevel = useCallback((levelId: string, starsEarned: number, questionsCount: number) => {
    setProgress(prev => {
      const isFirstTime = !prev.completedLevelIds.includes(levelId);
      const newCompleted = isFirstTime 
        ? [...prev.completedLevelIds, levelId] 
        : prev.completedLevelIds;
      
      // Update streak if it's a new day and they just finished a level
      const now = new Date();
      const lastPlayed = new Date(prev.lastPlayedTimestamp);
      const isNewDay = now.toDateString() !== lastPlayed.toDateString();
      
      return {
        ...prev,
        completedLevelIds: newCompleted,
        totalStars: prev.totalStars + starsEarned,
        questionsAnsweredToday: prev.questionsAnsweredToday + questionsCount,
        dailyStreak: isNewDay ? prev.dailyStreak + 1 : prev.dailyStreak,
        lastPlayedTimestamp: Date.now(),
      };
    });
  }, []);

  const updateHearts = useCallback((delta: number) => {
    setProgress(prev => ({
      ...prev,
      currentHearts: Math.max(0, Math.min(3, prev.currentHearts + delta)),
    }));
  }, []);

  const addMistake = useCallback((questionId: string) => {
    setProgress(prev => ({
      ...prev,
      mistakeStack: Array.from(new Set([...prev.mistakeStack, questionId])),
    }));
  }, []);

  const removeMistake = useCallback((questionId: string) => {
    setProgress(prev => ({
      ...prev,
      mistakeStack: prev.mistakeStack.filter(id => id !== questionId),
    }));
  }, []);

  const isLevelUnlocked = useCallback((levelId: string) => {
    // Flatten all levels to find the index
    const allLevels = JOURNEY_DATA.sections.flatMap(s => s.levels);
    const levelIndex = allLevels.findIndex(l => l.id === levelId);
    
    if (levelIndex === 0) return true; // First level always unlocked
    
    const previousLevel = allLevels[levelIndex - 1];
    return progress.completedLevelIds.includes(previousLevel.id);
  }, [progress.completedLevelIds]);

  const getSectionProgress = useCallback((sectionId: string) => {
    const section = JOURNEY_DATA.sections.find(s => s.id === sectionId);
    if (!section) return { completed: 0, total: 0 };
    
    const completedCount = section.levels.filter(l => 
      progress.completedLevelIds.includes(l.id)
    ).length;
    
    return {
      completed: completedCount,
      total: section.levels.length
    };
  }, [progress.completedLevelIds]);

  const resetHearts = useCallback(() => {
    setProgress(prev => ({ ...prev, currentHearts: 3 }));
  }, []);

  return {
    progress,
    completeLevel,
    updateHearts,
    addMistake,
    removeMistake,
    isLevelUnlocked,
    getSectionProgress,
    resetHearts,
    journeyData: JOURNEY_DATA
  };
}
