export type NodeType = 'Lesson' | 'Quiz' | 'Review' | 'Boss';

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  funFact?: string;
  imageUrl?: string;
}

export interface Level {
  id: string;
  title: string;
  type: NodeType;
  questions: Question[];
}

export interface Section {
  id: string;
  title: string;
  description: string;
  themeColor: string; // Tailwind color class like 'bg-emerald-500'
  levels: Level[];
}

export interface JourneyData {
  sections: Section[];
}

export interface UserProgress {
  completedLevelIds: string[];
  totalStars: number;
  currentHearts: number;
  lastPlayedTimestamp: number;
  dailyStreak: number;
  questionsAnsweredToday: number;
  mistakeStack: string[]; // Question IDs
}
