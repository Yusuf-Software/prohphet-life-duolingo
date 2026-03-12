'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { useJourney } from '@/hooks/useJourney';
import { Level, Question } from '@/types/journey';
import Roadmap from './Roadmap';
import { 
  CheckCircle2, 
  XCircle, 
  Trophy, 
  ArrowRight, 
  RotateCcw, 
  Star, 
  Heart, 
  Award, 
  Sparkles, 
  Brain, 
  X,
  ChevronRight,
  Home,
  Lightbulb
} from 'lucide-react';
import Image from 'next/image';

export default function QuizApp() {
  const { 
    progress, 
    completeLevel, 
    updateHearts, 
    addMistake, 
    removeMistake, 
    resetHearts,
    journeyData 
  } = useJourney();

  const [currentStep, setCurrentStep] = useState<'journey' | 'quiz' | 'result' | 'gameover'>('journey');
  const [activeLevel, setActiveLevel] = useState<Level | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sessionScore, setSessionScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showFeedback, setShowFeedback] = useState<'success' | 'error' | null>(null);
  const [sessionHearts, setSessionHearts] = useState(3);
  const [sessionQuestions, setSessionQuestions] = useState<Question[]>([]);

  // Initialize session
  const startLevel = (level: Level) => {
    let questions = [...level.questions];
    
    // Review Level Logic: Pull from mistakes or previous levels
    if (level.type === 'Review') {
      const allQuestions = journeyData.sections.flatMap(s => s.levels.flatMap(l => l.questions));
      const mistakes = allQuestions.filter(q => progress.mistakeStack.includes(q.id));
      
      if (mistakes.length >= 3) {
        questions = mistakes.sort(() => Math.random() - 0.5).slice(0, 5);
      } else {
        // Fallback: random questions from completed levels
        const completedLevels = journeyData.sections.flatMap(s => s.levels).filter(l => progress.completedLevelIds.includes(l.id));
        const pool = completedLevels.flatMap(l => l.questions);
        questions = pool.sort(() => Math.random() - 0.5).slice(0, 5);
      }
    }

    setSessionQuestions(questions);
    setActiveLevel(level);
    setCurrentQuestionIndex(0);
    setSessionScore(0);
    setSessionHearts(progress.currentHearts);
    setSelectedOption(null);
    setIsAnswered(false);
    setShowFeedback(null);
    setCurrentStep('quiz');
  };

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    
    const currentQuestion = sessionQuestions[currentQuestionIndex];
    const isCorrect = index === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      setSessionScore(prev => prev + 1);
      setShowFeedback('success');
      removeMistake(currentQuestion.id);
    } else {
      setSessionHearts(prev => prev - 1);
      updateHearts(-1);
      addMistake(currentQuestion.id);
      setShowFeedback('error');
      
      if (sessionHearts <= 1) {
        setTimeout(() => setCurrentStep('gameover'), 1500);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < sessionQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowFeedback(null);
    } else {
      finishSession();
    }
  };

  const finishSession = () => {
    if (activeLevel) {
      const starsEarned = sessionScore;
      completeLevel(activeLevel.id, starsEarned, sessionQuestions.length);
      
      if (sessionScore === sessionQuestions.length) {
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#10b981', '#f59e0b', '#6366f1']
        });
      }
    }
    setCurrentStep('result');
  };

  const currentQuestion = sessionQuestions[currentQuestionIndex];
  const progressPercent = sessionQuestions.length > 0 ? ((currentQuestionIndex) / sessionQuestions.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-[#FDFCF0] font-sans">
      <AnimatePresence mode="wait">
        {currentStep === 'journey' && (
          <motion.div
            key="journey"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pt-8"
          >
            <Roadmap 
              sections={journeyData.sections}
              completedLevelIds={progress.completedLevelIds}
              unlockedLevelIds={[]} // Handled internally by Roadmap for now
              onLevelClick={startLevel}
              dailyStreak={progress.dailyStreak}
              stars={progress.totalStars}
              hearts={progress.currentHearts}
              questionsToday={progress.questionsAnsweredToday}
            />
          </motion.div>
        )}

        {currentStep === 'quiz' && currentQuestion && (
          <motion.div
            key="quiz"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="max-w-2xl mx-auto p-4 sm:p-8 space-y-6"
          >
            {/* Top Bar */}
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setCurrentStep('journey')}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={24} className="text-gray-400" />
              </button>
              <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  className="h-full bg-green-500"
                />
              </div>
              <div className="flex items-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <Heart 
                    key={i} 
                    size={24} 
                    className={i < sessionHearts ? "text-red-500 fill-red-500" : "text-gray-300"} 
                  />
                ))}
              </div>
            </div>

            {/* Question Card */}
            <div className="bg-white p-8 rounded-[3rem] shadow-xl border-b-8 border-gray-100 space-y-6">
              {currentQuestion.imageUrl && (
                <div className="relative w-full h-56 rounded-3xl overflow-hidden shadow-inner bg-gray-50 border-4 border-gray-50">
                  <Image
                    src={currentQuestion.imageUrl}
                    alt="Question visual"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              
              <h2 className="text-3xl font-black text-gray-800 text-center leading-tight">
                {currentQuestion.question}
              </h2>

              <div className="grid gap-4">
                {currentQuestion.options.map((option, index) => {
                  const isSelected = selectedOption === index;
                  const isCorrect = index === currentQuestion.correctAnswer;
                  
                  let buttonClass = "w-full p-6 text-xl font-bold rounded-3xl border-b-4 transition-all text-right flex items-center justify-between ";
                  
                  if (!isAnswered) {
                    buttonClass += "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-gray-700";
                  } else {
                    if (isCorrect) {
                      buttonClass += "bg-green-100 border-green-500 text-green-700";
                    } else if (isSelected) {
                      buttonClass += "bg-red-100 border-red-500 text-red-700";
                    } else {
                      buttonClass += "bg-white border-gray-100 opacity-50 text-gray-400";
                    }
                  }

                  return (
                    <motion.button
                      key={index}
                      whileTap={!isAnswered ? { scale: 0.98, y: 2 } : {}}
                      onClick={() => handleOptionSelect(index)}
                      disabled={isAnswered}
                      className={buttonClass}
                    >
                      <span className="flex-1">{option}</span>
                      {isAnswered && isCorrect && <CheckCircle2 className="text-green-500" />}
                      {isAnswered && isSelected && !isCorrect && <XCircle className="text-red-500" />}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Feedback Drawer */}
            <AnimatePresence>
              {showFeedback && (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 100, opacity: 0 }}
                  className={`fixed bottom-0 left-0 right-0 p-8 pb-12 rounded-t-[3rem] shadow-2xl z-50 ${
                    showFeedback === 'success' ? 'bg-green-100' : 'bg-red-100'
                  }`}
                >
                  <div className="max-w-2xl mx-auto flex flex-col items-center justify-between gap-6">
                    <div className="w-full flex items-start gap-4">
                      <div className={`w-16 h-16 rounded-2xl flex-shrink-0 flex items-center justify-center text-white shadow-lg ${
                        showFeedback === 'success' ? 'bg-green-500' : 'bg-red-500'
                      }`}>
                        {showFeedback === 'success' ? <Sparkles size={32} /> : <X size={32} />}
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-black ${
                          showFeedback === 'success' ? 'text-green-700' : 'text-red-700'
                        }`}>
                          {showFeedback === 'success' ? 'ماشااللە! زۆر باشە' : 'ئای! هەڵەیە'}
                        </h3>
                        
                        {showFeedback === 'success' && currentQuestion.funFact && (
                          <div className="mt-2 bg-white/50 p-3 rounded-xl border border-green-200 flex gap-2">
                            <Lightbulb className="text-yellow-500 flex-shrink-0" size={18} />
                            <p className="text-sm font-bold text-green-800">{currentQuestion.funFact}</p>
                          </div>
                        )}

                        {showFeedback === 'error' && (
                          <p className="text-red-600 font-bold mt-1">
                            وەڵامی ڕاست: {currentQuestion.options[currentQuestion.correctAnswer]}
                          </p>
                        )}
                      </div>
                    </div>
                    <button
                      onClick={handleNext}
                      className={`w-full px-12 py-4 rounded-2xl font-black text-xl text-white shadow-xl transition-transform active:scale-95 ${
                        showFeedback === 'success' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'
                      }`}
                    >
                      بەردەوام بە
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}

        {currentStep === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-md mx-auto mt-20 text-center space-y-8 bg-white p-10 rounded-[3.5rem] shadow-2xl border-b-8 border-gray-100"
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 text-yellow-400 animate-bounce">
                <Sparkles size={40} fill="currentColor" />
              </div>
              <div className="w-24 h-24 bg-yellow-100 rounded-3xl flex items-center justify-center mx-auto text-yellow-600 shadow-inner">
                <Trophy size={48} />
              </div>
            </div>
            
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-gray-800">ئاستەکە تەواو بوو!</h2>
              <p className="text-xl text-gray-500 font-bold">تۆ زۆر زیرەکی!</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FDFCF0] p-6 rounded-3xl border-b-4 border-gray-100">
                <p className="text-xs text-gray-400 font-black uppercase tracking-widest mb-1">وەڵامی ڕاست</p>
                <div className="text-4xl font-black text-gray-800">
                  {sessionScore} <span className="text-lg text-gray-300">/ {sessionQuestions.length}</span>
                </div>
              </div>
              <div className="bg-[#FDFCF0] p-6 rounded-3xl border-b-4 border-gray-100">
                <p className="text-xs text-gray-400 font-black uppercase tracking-widest mb-1">ئەستێرە</p>
                <div className="text-4xl font-black text-yellow-600 flex items-center justify-center gap-1">
                  +{sessionScore}
                  <Star size={20} fill="currentColor" />
                </div>
              </div>
            </div>

            <button
              onClick={() => setCurrentStep('journey')}
              className="w-full py-5 bg-indigo-600 text-white text-2xl font-black rounded-3xl flex items-center justify-center gap-3 hover:bg-indigo-700 transition-all shadow-xl active:scale-95"
            >
              گەڕانەوە بۆ گەشتەکە
              <Home size={24} />
            </button>
          </motion.div>
        )}

        {currentStep === 'gameover' && (
          <motion.div
            key="gameover"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-md mx-auto mt-20 text-center space-y-8 bg-white p-10 rounded-[3.5rem] shadow-2xl border-b-8 border-red-100"
          >
            <div className="w-24 h-24 bg-red-100 rounded-3xl flex items-center justify-center mx-auto text-red-600">
              <Heart size={48} />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-4xl font-black text-red-600">دڵەکانت نەما!</h2>
              <p className="text-xl text-gray-500 font-bold">خەم مەخۆ، دووبارە تاقی بکەرەوە</p>
            </div>

            <button
              onClick={() => {
                resetHearts();
                setCurrentStep('journey');
              }}
              className="w-full py-5 bg-red-500 text-white text-2xl font-black rounded-3xl flex items-center justify-center gap-3 hover:bg-red-600 transition-all shadow-xl active:scale-95"
            >
              گەڕانەوە
              <RotateCcw size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
