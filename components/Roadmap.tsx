'use client';

import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Section, Level } from '@/types/journey';
import { Lock, Check, Star, BookOpen, RefreshCw, Flame, Heart, Trophy } from 'lucide-react';

interface RoadmapProps {
  sections: Section[];
  completedLevelIds: string[];
  unlockedLevelIds: string[]; // We'll pass this from the hook logic
  onLevelClick: (level: Level) => void;
  dailyStreak: number;
  stars: number;
  hearts: number;
  questionsToday: number;
}

export default function Roadmap({ 
  sections, 
  completedLevelIds, 
  onLevelClick,
  dailyStreak,
  stars,
  hearts,
  questionsToday
}: RoadmapProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to current level
  useEffect(() => {
    // Basic implementation: find the first non-completed level and scroll to it
    // In a real app, we'd use refs for each node
  }, []);

  const isLevelUnlocked = (levelId: string) => {
    const allLevels = sections.flatMap(s => s.levels);
    const index = allLevels.findIndex(l => l.id === levelId);
    if (index === 0) return true;
    return completedLevelIds.includes(allLevels[index - 1].id);
  };

  return (
    <div className="w-full max-w-2xl mx-auto pb-24">
      {/* Global Stats Header */}
      <header className="sticky top-4 z-50 mx-4 mb-8 bg-white/90 backdrop-blur-md p-4 rounded-[2rem] shadow-xl border-2 border-gray-100 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
            <Flame size={18} className="text-orange-500 fill-orange-500" />
            <span className="font-black text-orange-600">{dailyStreak}</span>
          </div>
          <div className="flex items-center gap-1 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-100">
            <Star size={18} className="text-yellow-500 fill-yellow-500" />
            <span className="font-black text-yellow-600">{stars}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-red-50 px-3 py-1.5 rounded-full border border-red-100">
            <Heart size={18} className="text-red-500 fill-red-500" />
            <span className="font-black text-red-600">{hearts}</span>
          </div>
        </div>
      </header>

      {/* Daily Quest Card */}
      <div className="mx-4 mb-12 bg-gradient-to-r from-indigo-500 to-purple-600 p-6 rounded-[2.5rem] text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <h3 className="text-lg font-black mb-1">ئەرکی ئەمڕۆ 🌟</h3>
          <p className="text-sm opacity-90 font-bold">٥ پرسیار وەڵام بدەوە بۆ وەرگرتنی خەڵات!</p>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex-1 h-3 bg-white/20 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, (questionsToday / 5) * 100)}%` }}
                className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
              />
            </div>
            <span className="text-xs font-black">{questionsToday}/٥</span>
          </div>
        </div>
        <Trophy className="absolute -right-4 -bottom-4 opacity-20 rotate-12" size={120} />
      </div>

      {/* Sections & Levels */}
      <div className="space-y-16">
        {sections.map((section, sIndex) => {
          const sectionProgress = section.levels.filter(l => completedLevelIds.includes(l.id)).length;
          
          return (
            <div key={section.id} className="relative">
              {/* Section Header */}
              <div className="px-6 mb-12">
                <div className={`inline-block px-4 py-1 rounded-full text-white text-xs font-black uppercase tracking-widest mb-2 ${section.themeColor}`}>
                  بەشی {sIndex + 1}
                </div>
                <h2 className="text-3xl font-black text-gray-800">{section.title}</h2>
                <p className="text-gray-500 font-bold text-sm mt-1">{section.description}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="text-xs font-black text-gray-400">{sectionProgress} / {section.levels.length} تەواو کراوە</span>
                </div>
              </div>

              {/* Levels Path */}
              <div className="flex flex-col items-center gap-12 relative">
                {/* SVG Path Connector (Conceptual) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1.5 bg-gray-100 -translate-x-1/2 -z-10" />

                {section.levels.map((level, lIndex) => {
                  const unlocked = isLevelUnlocked(level.id);
                  const completed = completedLevelIds.includes(level.id);
                  const isCurrent = unlocked && !completed;
                  
                  // Zig-zag layout
                  const xOffset = lIndex % 2 === 0 ? 40 : -40;

                  return (
                    <div key={level.id} className="relative flex flex-col items-center">
                      <motion.button
                        whileHover={unlocked ? { scale: 1.1 } : { x: [xOffset-2, xOffset+2, xOffset] }}
                        whileTap={unlocked ? { scale: 0.95 } : {}}
                        onClick={() => unlocked && onLevelClick(level)}
                        className={`
                          w-20 h-20 rounded-[2rem] flex items-center justify-center shadow-xl border-4 transition-all relative
                          ${completed ? 'bg-green-500 border-green-600 text-white' : 
                            unlocked ? 'bg-white border-gray-200 text-gray-700' : 
                            'bg-gray-100 border-gray-200 text-gray-300'}
                          ${isCurrent ? 'ring-4 ring-yellow-400 ring-offset-4 animate-pulse' : ''}
                        `}
                        style={{ x: xOffset }}
                      >
                        {completed ? (
                          <Check size={32} strokeWidth={3} />
                        ) : !unlocked ? (
                          <Lock size={32} />
                        ) : level.type === 'Lesson' ? (
                          <BookOpen size={32} className="text-blue-500" />
                        ) : level.type === 'Review' ? (
                          <RefreshCw size={32} className="text-purple-500" />
                        ) : (
                          <Star size={32} className="text-yellow-500 fill-yellow-500" />
                        )}

                        {/* Level Number Badge */}
                        <div className={`absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black border-2 ${
                          unlocked ? 'bg-white border-gray-200 text-gray-400' : 'bg-gray-50 border-gray-100 text-gray-300'
                        }`}>
                          {lIndex + 1}
                        </div>
                      </motion.button>
                      
                      <motion.div 
                        style={{ x: xOffset }}
                        className={`mt-3 font-black text-sm text-center max-w-[120px] ${unlocked ? 'text-gray-700' : 'text-gray-300'}`}
                      >
                        {level.title}
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
