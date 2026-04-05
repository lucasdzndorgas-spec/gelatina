/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowLeft, Heart, Hospital, Users, Calendar, CheckCircle2, ArrowDown, Lightbulb, Rocket, Ban, AlertTriangle, Leaf, Star, XCircle, Clock, Sun, Moon, Sparkles } from "lucide-react";

export default function App() {
  const [view, setView] = useState<"landing" | "quiz-intro" | "quiz-age" | "quiz-body-type" | "quiz-target-areas" | "quiz-famosas" | "quiz-name" | "quiz-impact" | "quiz-happiness" | "quiz-barriers" | "quiz-goals" | "quiz-how-it-works" | "quiz-weight" | "quiz-height" | "quiz-target-weight" | "quiz-goal-confirmation" | "quiz-pregnancies" | "quiz-routine" | "quiz-sleep" | "quiz-water" | "quiz-result" | "quiz-how-to-use" | "quiz-commitment" | "quiz-loading-final" | "quiz-video-explanation" | "quiz-dream-body" | "quiz-final-confirmation" | "quiz-transformations" | "quiz-final-loading" | "quiz-vsl" | "quiz-final-processing" | "quiz-checkout">("landing");
  const [userName, setUserName] = useState("");
  const [currentWeight, setCurrentWeight] = useState(75);
  const [targetWeight, setTargetWeight] = useState(65);
  const [userHeight, setUserHeight] = useState(165);

  const goToQuizIntro = () => setView("quiz-intro");
  const goToQuizAge = () => setView("quiz-age");
  const goToQuizBodyType = () => setView("quiz-body-type");
  const goToQuizTargetAreas = () => setView("quiz-target-areas");
  const goToQuizFamosas = () => setView("quiz-famosas");
  const goToQuizName = () => setView("quiz-name");
  const goToQuizImpact = (name: string) => {
    setUserName(name);
    setView("quiz-impact");
  };
  const goToQuizHappiness = () => setView("quiz-happiness");
  const goToQuizBarriers = () => setView("quiz-barriers");
  const goToQuizGoals = () => setView("quiz-goals");
  const goToQuizHowItWorks = () => setView("quiz-how-it-works");
  const goToQuizWeight = () => setView("quiz-weight");
  const goToQuizHeight = (weight: number) => {
    setCurrentWeight(weight);
    setView("quiz-height");
  };
  const goToQuizTargetWeight = (height: number) => {
    setUserHeight(height);
    setView("quiz-target-weight");
  };
  const goToQuizGoalConfirmation = (target: number) => {
    setTargetWeight(target);
    setView("quiz-goal-confirmation");
  };
  const goToQuizPregnancies = () => setView("quiz-pregnancies");
  const goToQuizRoutine = () => setView("quiz-routine");
  const goToQuizSleep = () => setView("quiz-sleep");
  const goToQuizWater = () => setView("quiz-water");
  const goToQuizResult = () => setView("quiz-result");
  const goToQuizHowToUse = () => setView("quiz-how-to-use");
  const goToQuizCommitment = () => setView("quiz-commitment");
  const goToQuizLoadingFinal = () => setView("quiz-loading-final");
  const goToQuizVideoExplanation = () => setView("quiz-video-explanation");
  const goToQuizDreamBody = () => setView("quiz-dream-body");
  const goToQuizFinalConfirmation = () => setView("quiz-final-confirmation");
  const goToQuizTransformations = () => setView("quiz-transformations");
  const goToQuizFinalLoading = () => setView("quiz-final-loading");
  const goToQuizVSL = () => setView("quiz-vsl");
  const goToQuizFinalProcessing = () => setView("quiz-final-processing");
  const goToQuizCheckout = () => setView("quiz-checkout");
  
  const goBackFromIntro = () => setView("landing");
  const goBackFromAge = () => setView("quiz-intro");
  const goBackFromBodyType = () => setView("quiz-age");
  const goBackFromTargetAreas = () => setView("quiz-body-type");
  const goBackFromFamosas = () => setView("quiz-target-areas");
  const goBackFromName = () => setView("quiz-famosas");
  const goBackFromImpact = () => setView("quiz-name");
  const goBackFromHappiness = () => setView("quiz-impact");
  const goBackFromBarriers = () => setView("quiz-happiness");
  const goBackFromGoals = () => setView("quiz-barriers");
  const goBackFromHowItWorks = () => setView("quiz-goals");
  const goBackFromWeight = () => setView("quiz-how-it-works");
  const goBackFromHeight = () => setView("quiz-weight");
  const goBackFromTargetWeight = () => setView("quiz-height");
  const goBackFromGoalConfirmation = () => setView("quiz-target-weight");
  const goBackFromPregnancies = () => setView("quiz-goal-confirmation");
  const goBackFromRoutine = () => setView("quiz-pregnancies");
  const goBackFromSleep = () => setView("quiz-routine");
  const goBackFromWater = () => setView("quiz-sleep");
  const goBackFromResult = () => setView("quiz-water");
  const goBackFromHowToUse = () => setView("quiz-result");
  const goBackFromCommitment = () => setView("quiz-how-to-use");
  const goBackFromVideoExplanation = () => setView("quiz-loading-final");
  const goBackFromDreamBody = () => setView("quiz-video-explanation");
  const goBackFromFinalConfirmation = () => setView("quiz-dream-body");
  const goBackFromTransformations = () => setView("quiz-final-confirmation");
  const goBackFromFinalLoading = () => setView("quiz-transformations");
  const goBackFromVSL = () => setView("quiz-final-loading");

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-sans">
      <AnimatePresence mode="wait">
        {view === "landing" && (
          <LandingPage key="landing" onStart={goToQuizIntro} />
        )}
        {view === "quiz-intro" && (
          <QuizIntro key="quiz-intro" onBack={goBackFromIntro} onNext={goToQuizAge} />
        )}
        {view === "quiz-age" && (
          <QuizAge key="quiz-age" onBack={goBackFromAge} onNext={goToQuizBodyType} />
        )}
        {view === "quiz-body-type" && (
          <QuizBodyType key="quiz-body-type" onBack={goBackFromBodyType} onNext={goToQuizTargetAreas} />
        )}
        {view === "quiz-target-areas" && (
          <QuizTargetAreas key="quiz-target-areas" onBack={goBackFromTargetAreas} onNext={goToQuizFamosas} />
        )}
        {view === "quiz-famosas" && (
          <QuizFamosas key="quiz-famosas" onBack={goBackFromFamosas} onNext={goToQuizName} />
        )}
        {view === "quiz-name" && (
          <QuizName key="quiz-name" onBack={goBackFromName} onNext={goToQuizImpact} />
        )}
        {view === "quiz-impact" && (
          <QuizImpact key="quiz-impact" name={userName} onBack={goBackFromImpact} onNext={goToQuizHappiness} />
        )}
        {view === "quiz-happiness" && (
          <QuizHappiness key="quiz-happiness" onBack={goBackFromHappiness} onNext={goToQuizBarriers} />
        )}
        {view === "quiz-barriers" && (
          <QuizBarriers key="quiz-barriers" onBack={goBackFromBarriers} onNext={goToQuizGoals} />
        )}
        {view === "quiz-goals" && (
          <QuizGoals key="quiz-goals" onBack={goBackFromGoals} onNext={goToQuizHowItWorks} />
        )}
        {view === "quiz-how-it-works" && (
          <QuizHowItWorks key="quiz-how-it-works" name={userName} onBack={goBackFromHowItWorks} onNext={goToQuizWeight} />
        )}
        {view === "quiz-weight" && (
          <QuizWeight key="quiz-weight" onBack={goBackFromWeight} onNext={goToQuizHeight} />
        )}
        {view === "quiz-height" && (
          <QuizHeight key="quiz-height" onBack={goBackFromHeight} onNext={goToQuizTargetWeight} />
        )}
        {view === "quiz-target-weight" && (
          <QuizTargetWeight key="quiz-target-weight" currentWeight={currentWeight} onBack={goBackFromTargetWeight} onNext={goToQuizGoalConfirmation} />
        )}
        {view === "quiz-goal-confirmation" && (
          <QuizGoalConfirmation key="quiz-goal-confirmation" name={userName} currentWeight={currentWeight} targetWeight={targetWeight} onBack={goBackFromGoalConfirmation} onNext={goToQuizPregnancies} />
        )}
        {view === "quiz-pregnancies" && (
          <QuizPregnancies key="quiz-pregnancies" onBack={goBackFromPregnancies} onNext={goToQuizRoutine} />
        )}
        {view === "quiz-routine" && (
          <QuizRoutine key="quiz-routine" onBack={goBackFromRoutine} onNext={goToQuizSleep} />
        )}
        {view === "quiz-sleep" && (
          <QuizSleep key="quiz-sleep" onBack={goBackFromSleep} onNext={goToQuizWater} />
        )}
        {view === "quiz-water" && (
          <QuizWater key="quiz-water" onBack={goBackFromWater} onNext={goToQuizResult} />
        )}
        {view === "quiz-result" && (
          <QuizResult key="quiz-result" name={userName} weight={currentWeight} height={userHeight} onBack={goBackFromResult} onNext={goToQuizHowToUse} />
        )}
        {view === "quiz-how-to-use" && (
          <HowToUse key="quiz-how-to-use" onBack={goBackFromHowToUse} onNext={goToQuizCommitment} />
        )}
        {view === "quiz-commitment" && (
          <QuizCommitment key="quiz-commitment" onBack={goBackFromCommitment} onNext={goToQuizLoadingFinal} />
        )}
        {view === "quiz-loading-final" && (
          <QuizLoadingFinal key="quiz-loading-final" onNext={goToQuizVideoExplanation} />
        )}
        {view === "quiz-video-explanation" && (
          <QuizVideoExplanation key="quiz-video-explanation" onBack={goBackFromVideoExplanation} onNext={goToQuizDreamBody} />
        )}
        {view === "quiz-dream-body" && (
          <QuizDreamBody key="quiz-dream-body" onBack={goBackFromDreamBody} onNext={goToQuizFinalConfirmation} />
        )}
        {view === "quiz-final-confirmation" && (
          <QuizFinalConfirmation key="quiz-final-confirmation" name={userName} currentWeight={currentWeight} targetWeight={targetWeight} onBack={goBackFromFinalConfirmation} onNext={goToQuizTransformations} />
        )}
        {view === "quiz-transformations" && (
          <QuizTransformations key="quiz-transformations" onBack={goBackFromTransformations} onNext={goToQuizFinalLoading} />
        )}
        {view === "quiz-final-loading" && (
          <QuizFinalLoading key="quiz-final-loading" onNext={goToQuizVSL} />
        )}
        {view === "quiz-vsl" && (
          <QuizVSL key="quiz-vsl" name={userName} onBack={goBackFromVSL} onNext={goToQuizFinalProcessing} />
        )}
        {view === "quiz-final-processing" && (
          <QuizFinalProcessing key="quiz-final-processing" onNext={goToQuizCheckout} />
        )}
        {view === "quiz-checkout" && (
          <QuizCheckout key="quiz-checkout" name={userName} />
        )}
      </AnimatePresence>
    </div>
  );
}

function LandingPage({ onStart }: { onStart: () => void; key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center px-4 py-8 md:py-12"
    >
      {/* Logo */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <img 
          src="https://i.imgur.com/ZeOccM7.png" 
          alt="Mounjaro Gelatina Logo" 
          className="h-20 md:h-28 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Hero Section */}
      <div className="relative w-full max-w-md mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="relative z-10 w-full"
        >
          <img 
            src="https://i.imgur.com/L3pZvqK.png" 
            alt="Gelatina Mounjaro Hero" 
            className="w-full h-auto drop-shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Description Text */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-10 text-center max-w-sm"
      >
        <p className="text-gray-600 text-lg leading-relaxed">
          Descubra como ativar seu metabolismo e perder até <span className="text-[#9333ea] font-bold">12kg em 30 dias</span> com a <span className="text-[#9333ea] font-bold">Gelatina Mounjaro</span>!
        </p>
      </motion.div>

      {/* CTA Button */}
      <motion.button
        onClick={onStart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="mt-8 bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-lg md:text-xl py-4 px-6 rounded-2xl shadow-[0_10px_20px_-5px_rgba(22,163,74,0.4)] transition-all duration-300 flex items-center gap-2"
      >
        Quero saber se funciona para mim! 🔥
      </motion.button>

      {/* Trust Badges */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-8 flex items-center justify-center gap-4 text-gray-500 text-sm font-medium"
      >
        <div className="flex items-center gap-1">
          <Check className="w-4 h-4 text-green-500" />
          <span>127.000+ mulheres</span>
        </div>
        <span className="text-gray-300">•</span>
        <div className="flex items-center gap-1">
          <Check className="w-4 h-4 text-green-500" />
          <span>100% Natural</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function QuizIntro({ onBack, onNext }: { onBack: () => void; onNext: () => void; key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div> {/* Spacer for balance */}
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "10%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 flex flex-col items-center px-6 py-12 text-center max-w-md mx-auto">
        {/* Gelatin Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <img 
            src="https://i.imgur.com/AnK5p7i.png" 
            alt="Gelatina Mounjaro" 
            className="w-64 h-64 object-contain rounded-3xl"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://imgur.com/AnK5p7i.png";
            }}
          />
        </motion.div>

        {/* Text */}
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-extrabold text-gray-800 mb-4"
        >
          Vamos começar sua jornada! 🚀
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-500 text-lg leading-relaxed mb-10"
        >
          Responda algumas perguntas rápidas para personalizar seu plano.
        </motion.p>

        {/* Button */}
        <motion.button
          onClick={onNext}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-xl shadow-purple-200 flex items-center justify-center gap-2"
        >
          Vamos lá! 💪
        </motion.button>
      </main>
    </motion.div>
  );
}

function QuizAge({ onBack, onNext }: { onBack: () => void; onNext: () => void; key?: string }) {
  const options = [
    { label: "18 - 27 anos", emoji: "🌸" },
    { label: "28 - 39 anos", emoji: "💐" },
    { label: "40 - 54 anos", emoji: "🌺" },
    { label: "54+ anos", emoji: "🌷" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "10%" }}
          animate={{ width: "20%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-10 max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
            Qual a sua idade?
          </h2>
          <p className="text-gray-500 text-base">
            Selecione sua faixa etária.
          </p>
        </div>

        <div className="space-y-4">
          {options.map((option, index) => (
            <motion.button
              key={option.label}
              onClick={onNext}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full flex items-center justify-between p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-purple-200 transition-all group"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{option.emoji}</span>
                <span className="text-lg font-bold text-gray-700">{option.label}</span>
              </div>
              <div className="w-6 h-6 rounded-full border-2 border-gray-200 group-hover:border-purple-300 transition-colors" />
            </motion.button>
          ))}
        </div>
      </main>
    </motion.div>
  );
}

function QuizBodyType({ onBack, onNext }: { onBack: () => void; onNext: () => void; key?: string }) {
  const options = [
    { label: "Médio", img: "https://i.imgur.com/ZvoiaWm.png" },
    { label: "Plus Size", img: "https://i.imgur.com/K77Z7vx.png" },
    { label: "Acima do peso", img: "https://i.imgur.com/f8F1Wdu.png" },
    { label: "Sobrepeso", img: "https://i.imgur.com/HWwre5O.png" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "20%" }}
          animate={{ width: "30%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-4 py-10 max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2">
            Como você classifica <span className="text-purple-500">o seu corpo?</span>
          </h2>
          <p className="text-gray-500 text-base">
            Selecione a opção que melhor te descreve
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {options.map((option, index) => (
            <motion.button
              key={option.label}
              onClick={onNext}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative aspect-square rounded-3xl overflow-hidden group shadow-md"
            >
              <img 
                src={option.img} 
                alt={option.label} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <span className="text-white font-bold text-base">{option.label}</span>
                <div className="w-6 h-6 rounded-full border-2 border-white/50 group-hover:border-white transition-colors" />
              </div>
            </motion.button>
          ))}
        </div>
      </main>
    </motion.div>
  );
}

function QuizTargetAreas({ onBack, onNext }: { onBack: () => void; onNext: () => void; key?: string }) {
  const [selected, setSelected] = useState<string[]>([]);

  const options = [
    { id: "papada", label: "Papada", emoji: "💁" },
    { id: "bracos", label: "Braços", emoji: "💪" },
    { id: "barriga", label: "Barriga", emoji: "🎯" },
    { id: "cintura", label: "Cintura", emoji: "👙" },
    { id: "gluteos", label: "Glúteos", emoji: "🍑" },
    { id: "coxas", label: "Coxas", emoji: "🦵" },
    { id: "corpo-todo", label: "Corpo Todo", emoji: "✨" },
  ];

  const toggle = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "30%" }}
          animate={{ width: "40%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-4 py-8 max-w-md mx-auto w-full flex flex-col">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2 leading-tight">
            Quais as áreas que você <span className="text-purple-500">mais quer perder gordura?</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Toque nas áreas desejadas.
          </p>
        </div>

        <div className="flex-1 flex gap-4 items-start">
          {/* Left Image */}
          <div className="w-1/2 sticky top-0">
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              src="https://i.imgur.com/zfOkZ8u.png" 
              alt="Body Reference" 
              className="w-full h-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right Options */}
          <div className="w-1/2 space-y-2">
            {options.map((option, index) => (
              <motion.button
                key={option.id}
                onClick={() => toggle(option.id)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${
                  selected.includes(option.id) 
                    ? "border-purple-500 bg-purple-50 shadow-sm" 
                    : "border-gray-100 bg-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{option.emoji}</span>
                  <span className={`text-sm font-bold ${selected.includes(option.id) ? "text-purple-700" : "text-gray-700"}`}>
                    {option.label}
                  </span>
                </div>
                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                  selected.includes(option.id) ? "bg-purple-500 border-purple-500" : "border-gray-300"
                }`}>
                  {selected.includes(option.id) && <Check className="w-3 h-3 text-white" strokeWidth={4} />}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Footer Button */}
        <div className="mt-8 pb-8">
          <motion.button
            onClick={selected.length > 0 ? onNext : undefined}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-5 rounded-2xl font-bold text-lg shadow-lg transition-all ${
              selected.length > 0 
                ? "bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white shadow-purple-200" 
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continuar
          </motion.button>
        </div>
      </main>
    </motion.div>
  );
}

function QuizFamosas({ onBack, onNext }: { onBack: () => void; onNext: () => void; key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "40%" }}
          animate={{ width: "50%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-4 py-8 max-w-md mx-auto w-full flex flex-col">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2 leading-tight">
            Sim, até as famosas <span className="text-purple-500">estão usando! ⭐</span>
          </h2>
          <p className="text-gray-500 text-sm">
            A Gelatina Mounjaro é tendência entre celebridades e influenciadoras.
          </p>
        </div>

        {/* News Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-8">
          {/* G1 Header */}
          <div className="bg-[#c4170c] px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img 
                src="https://i.imgur.com/BbPBba6.png" 
                alt="Logo" 
                className="h-6 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-white/80 font-bold text-sm tracking-widest">SAÚDE</span>
          </div>

          <div className="p-5">
            <h3 className="text-xl font-extrabold text-gray-900 leading-tight mb-3">
              Simone Mendes comenta sobre como a famosa 'gelatina do TikTok' ajudou na perda de peso. Cantora eliminou 30kg em apenas 3 meses.
            </h3>
            
            <div className="flex flex-col mb-4">
              <span className="text-[10px] text-gray-400 font-medium">Por <span className="text-[#c4170c]">Gustavo Foster</span>, g1 RS</span>
              <span className="text-[10px] text-gray-400">01/05/2026 02h00 · Atualizado há 6 horas</span>
            </div>

            {/* Social Icons Placeholder */}
            <div className="flex gap-2 mb-6">
              <div className="flex-1 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/124/124010.png" 
                  alt="Facebook" 
                  className="w-5 h-5 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
                <img 
                  src="https://cdn-icons-png.flaticon.com/512/733/733585.png" 
                  alt="WhatsApp" 
                  className="w-5 h-5 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex-1 h-10 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-100">
                <div className="w-5 h-5 text-gray-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-full h-full">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <polyline points="16 6 12 2 8 6" />
                    <line x1="12" y1="2" x2="12" y2="15" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Before/After Image */}
            <div className="rounded-2xl overflow-hidden shadow-inner bg-gray-100">
              <img 
                src="https://i.imgur.com/mrAOTz2.png" 
                alt="Simone Mendes Antes e Depois" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Footer Button */}
        <div className="mt-auto pb-8">
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 rounded-2xl font-bold text-lg shadow-lg bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white shadow-purple-200"
          >
            Continuar
          </motion.button>
        </div>
      </main>
    </motion.div>
  );
}

function QuizName({ onBack, onNext }: { onBack: () => void; onNext: (name: string) => void; key?: string }) {
  const [name, setName] = useState("");

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "50%" }}
          animate={{ width: "60%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-12 max-w-md mx-auto w-full flex flex-col items-center">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-3">
            Qual é o seu nome?
          </h2>
          <p className="text-gray-500 text-lg">
            Para personalizarmos sua experiência.
          </p>
        </div>

        <div className="w-full mb-8">
          <input 
            type="text" 
            placeholder="Seu primeiro nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-5 bg-white border border-gray-200 rounded-2xl text-lg focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all shadow-sm"
          />
        </div>

        <motion.button
          onClick={name.trim().length > 0 ? () => onNext(name) : undefined}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-5 rounded-2xl font-bold text-xl shadow-lg transition-all ${
            name.trim().length > 0 
              ? "bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white shadow-purple-200" 
              : "bg-gray-200 text-gray-400 cursor-not-allowed"
          }`}
        >
          Continuar
        </motion.button>
      </main>
    </motion.div>
  );
}

function QuizImpact({ name, onBack, onNext }: { name: string; onBack: () => void; onNext: () => void; key?: string }) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    { 
      id: "autoestima", 
      title: "Afeta minha autoestima", 
      desc: "Me sinto insegura com meu corpo", 
      icon: <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />,
      bgColor: "bg-pink-50"
    },
    { 
      id: "saude", 
      title: "Afeta minha saúde", 
      desc: "Sinto cansaço, dores e falta de energia", 
      icon: <Hospital className="w-6 h-6 text-purple-500" />,
      bgColor: "bg-purple-50"
    },
    { 
      id: "relacionamentos", 
      title: "Afeta meus relacionamentos", 
      desc: "Evito encontros e situações sociais", 
      icon: <Users className="w-6 h-6 text-indigo-600" />,
      bgColor: "bg-indigo-50"
    },
    { 
      id: "rotina", 
      title: "Afeta minha rotina", 
      desc: "Dificuldade em fazer tarefas simples", 
      icon: <Calendar className="w-6 h-6 text-blue-500" />,
      bgColor: "bg-blue-50"
    },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "60%" }}
          animate={{ width: "70%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-10 max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2 leading-tight">
            <span className="text-pink-500 lowercase">{name}</span>, como o peso <span className="text-purple-500">afeta sua vida?</span>
          </h2>
          <p className="text-gray-500 text-base">
            Entender isso nos ajuda a criar seu protocolo ideal
          </p>
        </div>

        <div className="space-y-4">
          {options.map((option, index) => (
            <motion.button
              key={option.id}
              onClick={() => {
                setSelected(option.id);
                setTimeout(onNext, 300);
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl border transition-all text-left ${
                selected === option.id 
                  ? "border-purple-500 bg-purple-50 shadow-md" 
                  : "border-gray-100 bg-white shadow-sm hover:border-purple-200"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${option.bgColor}`}>
                {option.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-base">{option.title}</h3>
                <p className="text-gray-500 text-xs">{option.desc}</p>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                selected === option.id ? "border-purple-500 bg-purple-500" : "border-gray-200"
              }`}>
                {selected === option.id && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
            </motion.button>
          ))}
        </div>
      </main>
    </motion.div>
  );
}

function QuizHappiness({ onBack, onNext }: { onBack: () => void; onNext: () => void; key?: string }) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    { id: "nao-feliz", label: "Não estou feliz", emoji: "😤" },
    { id: "poderia-melhor", label: "Poderia ser melhor", emoji: "🙄" },
    { id: "trabalhando-nisso", label: "Estou trabalhando nisso", emoji: "💪" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "70%" }}
          animate={{ width: "80%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-10 max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2 leading-tight">
            Você está feliz com <span className="text-purple-500">sua aparência atual?</span>
          </h2>
          <p className="text-gray-500 text-base">
            Seja sincera consigo mesma
          </p>
        </div>

        <div className="space-y-4">
          {options.map((option, index) => (
            <motion.button
              key={option.id}
              onClick={() => {
                setSelected(option.id);
                setTimeout(onNext, 300);
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`w-full flex items-center gap-4 p-5 rounded-2xl border transition-all text-left ${
                selected === option.id 
                  ? "border-purple-500 bg-purple-50 shadow-md" 
                  : "border-gray-100 bg-white shadow-sm hover:border-purple-200"
              }`}
            >
              <div className="text-2xl shrink-0">
                {option.emoji}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg">{option.label}</h3>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                selected === option.id ? "border-purple-500 bg-purple-500" : "border-gray-200"
              }`}>
                {selected === option.id && <div className="w-2 h-2 rounded-full bg-white" />}
              </div>
            </motion.button>
          ))}
        </div>
      </main>
    </motion.div>
  );
}

function QuizBarriers({ onBack, onNext }: { onBack: () => void; onNext: () => void; key?: string }) {
  const [selected, setSelected] = useState<string[]>([]);

  const options = [
    { id: "tempo", label: "Falta de tempo", emoji: "⏰" },
    { id: "autocontrole", label: "Falta de autocontrole", emoji: "🍫" },
    { id: "financeiro", label: "Questões financeiras", emoji: "💰" },
    { id: "constancia", label: "Falta de constância", emoji: "📉" },
  ];

  const toggleOption = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "80%" }}
          animate={{ width: "85%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-10 max-w-md mx-auto w-full flex flex-col">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2 leading-tight">
            O que te impede de emagrecer?
          </h2>
          <p className="text-gray-500 text-base">
            Selecione todas as barreiras que você enfrenta
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {options.map((option, index) => (
            <motion.button
              key={option.id}
              onClick={() => toggleOption(option.id)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`w-full flex items-center gap-4 p-5 rounded-2xl border transition-all text-left ${
                selected.includes(option.id) 
                  ? "border-purple-500 bg-purple-50 shadow-md" 
                  : "border-gray-100 bg-white shadow-sm hover:border-purple-200"
              }`}
            >
              <div className="text-2xl shrink-0">
                {option.emoji}
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg">{option.label}</h3>
              </div>
              <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                selected.includes(option.id) ? "border-purple-500 bg-purple-500" : "border-gray-200"
              }`}>
                {selected.includes(option.id) && <Check className="w-4 h-4 text-white" />}
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-auto pb-8">
          <motion.button
            onClick={selected.length > 0 ? onNext : undefined}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-5 rounded-2xl font-bold text-lg shadow-lg transition-all ${
              selected.length > 0 
                ? "bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white shadow-purple-200" 
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continuar
          </motion.button>
        </div>
      </main>
    </motion.div>
  );
}

function QuizGoals({ onBack, onNext }: { onBack: () => void; onNext: () => void; key?: string }) {
  const [selected, setSelected] = useState<string[]>([]);

  const options = [
    { id: "energia", label: "Ter mais energia", emoji: "⚡" },
    { id: "roupas", label: "Usar roupas que amo", emoji: "👗" },
    { id: "autoestima", label: "Melhorar autoestima", emoji: "💖" },
    { id: "saude", label: "Ter mais saúde", emoji: "💪" },
    { id: "leve", label: "Me sentir mais leve", emoji: "🦋" },
    { id: "elogios", label: "Receber elogios", emoji: "⭐" },
  ];

  const toggleOption = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "85%" }}
          animate={{ width: "90%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-10 max-w-md mx-auto w-full flex flex-col">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2 leading-tight">
            O que você quer conquistar?
          </h2>
          <p className="text-gray-500 text-base">
            Selecione seus maiores objetivos
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {options.map((option, index) => (
            <motion.button
              key={option.id}
              onClick={() => toggleOption(option.id)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all text-center relative ${
                selected.includes(option.id) 
                  ? "border-purple-500 bg-purple-50 shadow-md" 
                  : "border-gray-100 bg-white shadow-sm hover:border-purple-200"
              }`}
            >
              <div className="text-3xl">
                {option.emoji}
              </div>
              <span className="font-bold text-gray-800 text-sm leading-tight">
                {option.label}
              </span>
              
              <div className={`absolute top-3 right-3 w-5 h-5 rounded border flex items-center justify-center transition-colors ${
                selected.includes(option.id) ? "bg-purple-500 border-purple-500" : "border-gray-200"
              }`}>
                {selected.includes(option.id) && <Check className="w-3 h-3 text-white" strokeWidth={4} />}
              </div>
            </motion.button>
          ))}
        </div>

        <div className="mt-auto pb-8">
          <motion.button
            onClick={selected.length > 0 ? onNext : undefined}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-5 rounded-2xl font-bold text-lg shadow-lg transition-all ${
              selected.length > 0 
                ? "bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white shadow-purple-200" 
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continuar
          </motion.button>
        </div>
      </main>
    </motion.div>
  );
}

function QuizHowItWorks({ name, onBack, onNext }: { name: string; onBack: () => void; onNext: () => void; key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "35%" }}
          animate={{ width: "40%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-8 max-w-md mx-auto w-full flex flex-col">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2 leading-tight">
            Ótimo, <span className="text-pink-500 lowercase">{name}</span>! Veja como funciona 🎉
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            A <span className="text-purple-600 font-bold">Gelatina Mounjaro</span> ativa a queima de gordura <span className="text-pink-500 font-bold">natural</span> com ingredientes caseiros que você prepara em minutos.
          </p>
        </div>

        {/* Checkmark Items */}
        <div className="space-y-3 mb-8">
          {[
            "Fácil de preparar",
            "2 vezes ao dia",
            "Receita 100% Natural"
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * idx }}
              className="flex items-center gap-3 p-3 bg-green-50/50 border border-green-100 rounded-xl"
            >
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
              <span className="text-gray-700 font-bold text-sm">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* Steps Box */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 mb-8">
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm shrink-0">1</div>
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                <img src="https://i.imgur.com/J5GFCPY.png" alt="Antes" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">Antes</h4>
                <p className="text-gray-500 text-xs">Gordura acumulada e metabolismo lento</p>
              </div>
            </div>

            <div className="flex justify-center py-1">
              <ArrowDown className="w-5 h-5 text-purple-300" />
            </div>

            {/* Step 2 */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm shrink-0">2</div>
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                <img src="https://i.imgur.com/Z51Tv4t.png" alt="Gelatina" className="w-full h-full object-contain p-1" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="font-bold text-purple-600 text-sm">🍮 Gelatina Mounjaro</h4>
                <p className="text-gray-500 text-xs">Receita caseira simples e poderosa</p>
              </div>
            </div>

            <div className="flex justify-center py-1">
              <ArrowDown className="w-5 h-5 text-purple-300" />
            </div>

            {/* Step 3 */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm shrink-0">3</div>
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                <img src="https://i.imgur.com/geUVJrr.png" alt="Queima" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 text-sm">Queima natural ativada 🔥</h4>
                <p className="text-gray-500 text-xs">Metabolismo acelerado sem dietas</p>
              </div>
            </div>

            <div className="flex justify-center py-1">
              <ArrowDown className="w-5 h-5 text-green-400" />
            </div>

            {/* Step 4 */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                <Check className="w-4 h-4" strokeWidth={4} />
              </div>
              <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-50 shrink-0 border border-gray-100">
                <img src="https://i.imgur.com/OslbLdZ.png" alt="Depois" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="font-bold text-green-600 text-sm">Corpo dos sonhos!</h4>
                <p className="text-gray-500 text-xs">Resultado visível em poucas semanas</p>
              </div>
            </div>
          </div>
        </div>

        {/* Purple Tip Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-purple-50 border border-purple-100 rounded-2xl p-4 mb-8 text-center"
        >
          <p className="text-purple-700 text-sm font-medium leading-relaxed">
            <Lightbulb className="w-4 h-4 inline-block mr-1 text-yellow-500" /> <span className="text-purple-800 font-bold">Receita caseira</span> que ativa o <span className="font-bold italic">GLP-1</span>, o mesmo hormônio do Mounjaro, de forma <span className="text-purple-600 font-bold">100% natural!</span>
          </p>
        </motion.div>

        {/* Button */}
        <div className="mt-auto pb-8">
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 rounded-2xl font-bold text-lg shadow-lg bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white shadow-purple-200 flex items-center justify-center gap-2"
          >
            Entendi! Continuar <Rocket className="w-5 h-5" />
          </motion.button>
        </div>
      </main>
    </motion.div>
  );
}

function QuizHeight({ onBack, onNext }: { onBack: () => void; onNext: (h: number) => void; key?: string }) {
  const [height, setHeight] = useState(165);

  const adjustHeight = (amount: number) => {
    setHeight(prev => {
      const next = prev + amount;
      if (next < 140) return 140;
      if (next > 210) return 210;
      return next;
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "45%" }}
          animate={{ width: "50%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-10 max-w-md mx-auto w-full flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2 leading-tight">
            Qual é sua altura?
          </h2>
          <p className="text-gray-500 text-sm">
            Precisamos disso para calcular seu IMC
          </p>
        </div>

        {/* Height Display */}
        <div className="flex items-baseline gap-2 mb-12">
          <span className="text-7xl font-black text-purple-600 tracking-tighter">{height}</span>
          <span className="text-2xl font-bold text-gray-500">cm</span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 mb-12">
          <button 
            onClick={() => adjustHeight(-5)}
            className="w-14 h-14 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl hover:bg-purple-100 transition-colors shadow-sm"
          >
            -5
          </button>
          <button 
            onClick={() => adjustHeight(-1)}
            className="w-14 h-14 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 font-bold text-2xl hover:bg-purple-100 transition-colors shadow-sm"
          >
            -
          </button>
          <button 
            onClick={() => adjustHeight(1)}
            className="w-14 h-14 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 font-bold text-2xl hover:bg-purple-100 transition-colors shadow-sm"
          >
            +
          </button>
          <button 
            onClick={() => adjustHeight(5)}
            className="w-14 h-14 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl hover:bg-purple-100 transition-colors shadow-sm"
          >
            +5
          </button>
        </div>

        {/* Range Labels */}
        <div className="w-full flex justify-between px-4 text-gray-400 text-sm font-medium mb-16">
          <span>140 cm</span>
          <span>200 cm</span>
        </div>

        {/* Button */}
        <div className="w-full mt-auto pb-8">
          <motion.button
            onClick={() => onNext(height)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 rounded-2xl font-bold text-lg shadow-lg bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white shadow-purple-200"
          >
            Continuar
          </motion.button>
        </div>
      </main>
    </motion.div>
  );
}
function QuizWeight({ onBack, onNext }: { onBack: () => void; onNext: (w: number) => void; key?: string }) {
  const [weight, setWeight] = useState(75);

  const adjustWeight = (amount: number) => {
    setWeight(prev => {
      const next = prev + amount;
      if (next < 45) return 45;
      if (next > 150) return 150;
      return next;
    });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "40%" }}
          animate={{ width: "45%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-10 max-w-md mx-auto w-full flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2 leading-tight">
            Qual é seu peso atual?
          </h2>
          <p className="text-gray-500 text-sm">
            Seja sincera para um resultado preciso
          </p>
        </div>

        {/* Weight Display */}
        <div className="flex items-baseline gap-2 mb-12">
          <span className="text-7xl font-black text-purple-600 tracking-tighter">{weight}</span>
          <span className="text-2xl font-bold text-gray-500">kg</span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 mb-12">
          <button 
            onClick={() => adjustWeight(-5)}
            className="w-14 h-14 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl hover:bg-purple-100 transition-colors shadow-sm"
          >
            -5
          </button>
          <button 
            onClick={() => adjustWeight(-1)}
            className="w-14 h-14 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 font-bold text-2xl hover:bg-purple-100 transition-colors shadow-sm"
          >
            -
          </button>
          <button 
            onClick={() => adjustWeight(1)}
            className="w-14 h-14 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 font-bold text-2xl hover:bg-purple-100 transition-colors shadow-sm"
          >
            +
          </button>
          <button 
            onClick={() => adjustWeight(5)}
            className="w-14 h-14 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl hover:bg-purple-100 transition-colors shadow-sm"
          >
            +5
          </button>
        </div>

        {/* Range Labels */}
        <div className="w-full flex justify-between px-4 text-gray-400 text-sm font-medium mb-16">
          <span>45 kg</span>
          <span>150 kg</span>
        </div>

        {/* Button */}
        <div className="w-full mt-auto pb-8">
          <motion.button
            onClick={() => onNext(weight)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 rounded-2xl font-bold text-lg shadow-lg bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white shadow-purple-200"
          >
            Continuar
          </motion.button>
        </div>
      </main>
    </motion.div>
  );
}

function QuizTargetWeight({ currentWeight, onBack, onNext }: { currentWeight: number; onBack: () => void; onNext: (w: number) => void; key?: string }) {
  const [targetWeight, setTargetWeight] = useState(Math.max(40, currentWeight - 10));

  const adjustWeight = (amount: number) => {
    setTargetWeight(prev => {
      const next = prev + amount;
      if (next < 40) return 40;
      if (next >= currentWeight) return currentWeight - 1;
      return next;
    });
  };

  const weightToLose = currentWeight - targetWeight;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "50%" }}
          animate={{ width: "55%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-10 max-w-md mx-auto w-full flex flex-col items-center">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2 leading-tight">
            Qual é seu peso desejado?
          </h2>
          <p className="text-gray-500 text-sm">
            Qual o peso que você sonha alcançar?
          </p>
        </div>

        {/* Weight Display */}
        <div className="flex items-baseline gap-2 mb-12">
          <span className="text-7xl font-black text-purple-600 tracking-tighter">{targetWeight}</span>
          <span className="text-2xl font-bold text-gray-500">kg</span>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-4 mb-12">
          <button 
            onClick={() => adjustWeight(-5)}
            className="w-14 h-14 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl hover:bg-purple-100 transition-colors shadow-sm"
          >
            -5
          </button>
          <button 
            onClick={() => adjustWeight(-1)}
            className="w-14 h-14 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 font-bold text-2xl hover:bg-purple-100 transition-colors shadow-sm"
          >
            -
          </button>
          <button 
            onClick={() => adjustWeight(1)}
            className="w-14 h-14 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 font-bold text-2xl hover:bg-purple-100 transition-colors shadow-sm"
          >
            +
          </button>
          <button 
            onClick={() => adjustWeight(5)}
            className="w-14 h-14 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl hover:bg-purple-100 transition-colors shadow-sm"
          >
            +5
          </button>
        </div>

        {/* Range Labels */}
        <div className="w-full flex justify-between px-4 text-gray-400 text-sm font-medium mb-8">
          <span>40 kg</span>
          <span>{currentWeight - 1} kg</span>
        </div>

        {/* Goal Badge */}
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          key={weightToLose}
          className="bg-green-100 text-green-700 px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 mb-12 shadow-sm border border-green-200"
        >
          Meta: perder {weightToLose} kg 🎯
        </motion.div>

        {/* Button */}
        <div className="w-full mt-auto pb-8">
          <motion.button
            onClick={() => onNext(targetWeight)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 rounded-2xl font-bold text-lg shadow-lg bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white shadow-purple-200"
          >
            Continuar
          </motion.button>
        </div>
      </main>
    </motion.div>
  );
}

function QuizGoalConfirmation({ name, currentWeight, targetWeight, onBack, onNext }: { name: string; currentWeight: number; targetWeight: number; onBack: () => void; onNext: () => void; key?: string }) {
  const diff = currentWeight - targetWeight;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "55%" }}
          animate={{ width: "60%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-8 max-w-md mx-auto w-full flex flex-col items-center">
        {/* Illustration */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full mb-8 flex items-center justify-center"
        >
          <img 
            src="https://i.imgur.com/EP55aA2.png" 
            alt="Goal Illustration" 
            className="w-full max-w-[280px] h-auto"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full bg-purple-50/50 rounded-[32px] p-8 text-center mb-12 shadow-sm"
        >
          <h2 className="text-2xl font-extrabold text-gray-800 mb-4 leading-tight">
            Esse é um ótimo objetivo, <span className="text-pink-500 capitalize">{name || "querida"}</span>!
          </h2>
          
          <div className="flex justify-center mb-4">
            <Heart className="w-6 h-6 text-purple-500 fill-purple-500" />
          </div>

          <p className="text-gray-500 font-bold mb-6">
            Meta: {currentWeight}kg → {targetWeight}kg ({diff}kg)
          </p>

          <p className="text-gray-600 leading-relaxed">
            Agora vamos ajustar o próximo passo para você começar a perceber diferença <span className="text-purple-600 font-bold">já nos primeiros dias.</span>
          </p>
        </motion.div>

        {/* Button */}
        <div className="w-full mt-auto pb-8">
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 rounded-2xl font-bold text-lg shadow-lg bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white shadow-purple-200 flex items-center justify-center gap-2"
          >
            Ok, Vamos lá! 🚀
          </motion.button>
        </div>
      </main>
    </motion.div>
  );
}

function QuizPregnancies({ onBack, onNext }: { onBack: () => void; onNext: () => void; key?: string }) {
  const options = [
    { id: "0", label: "Nunca estive grávida", icon: <Ban className="w-6 h-6 text-red-500" /> },
    { id: "1", label: "1 gestação", icon: <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-xs">1</div> },
    { id: "2", label: "2 gestações", icon: <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-xs">2</div> },
    { id: "3+", label: "3 ou mais gestações", icon: <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-xs">3</div> },
  ];

  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelected(id);
    setTimeout(onNext, 400);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "60%" }}
          animate={{ width: "65%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-8 max-w-md mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2 leading-tight">
            <span className="text-purple-600">Quantas gestações</span> você já teve?
          </h2>
          <p className="text-gray-500 text-sm">
            Isso ajuda a personalizar seu plano.
          </p>
        </div>

        <div className="space-y-4">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-200 ${
                selected === option.id 
                  ? "border-purple-500 bg-purple-50 shadow-md" 
                  : "border-gray-100 bg-white hover:border-purple-200"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  {option.icon}
                </div>
                <span className={`font-bold text-lg ${selected === option.id ? "text-purple-700" : "text-gray-700"}`}>
                  {option.label}
                </span>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                selected === option.id ? "border-purple-500 bg-purple-500" : "border-gray-200"
              }`}>
                {selected === option.id && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
            </button>
          ))}
        </div>
      </main>
    </motion.div>
  );
}

function QuizRoutine({ onBack, onNext }: { onBack: () => void; onNext: () => void; key?: string }) {
  const options = [
    { id: "work-out", label: "Trabalho fora de casa", icon: "🏢" },
    { id: "home-office", label: "Trabalho em home office", icon: "🏠" },
    { id: "family", label: "Cuido da casa/família", icon: "👨‍👩‍👧‍👦" },
    { id: "study", label: "Estudo", icon: "📚" },
  ];

  const [selected, setSelected] = useState<string[]>([]);

  const toggleOption = (id: string) => {
    setSelected(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "65%" }}
          animate={{ width: "70%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-8 max-w-md mx-auto w-full flex flex-col">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2 leading-tight">
            Como é sua <span className="text-purple-600">rotina diária?</span>
          </h2>
          <p className="text-gray-500 text-sm">
            Selecione todas as que se encaixam.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => toggleOption(option.id)}
              className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-200 ${
                selected.includes(option.id)
                  ? "border-purple-500 bg-purple-50 shadow-md" 
                  : "border-gray-100 bg-white hover:border-purple-200"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{option.icon}</span>
                <span className={`font-bold text-lg ${selected.includes(option.id) ? "text-purple-700" : "text-gray-700"}`}>
                  {option.label}
                </span>
              </div>
              <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-colors ${
                selected.includes(option.id) ? "border-purple-500 bg-purple-500" : "border-gray-200"
              }`}>
                {selected.includes(option.id) && <Check className="w-4 h-4 text-white" />}
              </div>
            </button>
          ))}
        </div>

        <div className="mt-auto pb-8">
          <motion.button
            onClick={onNext}
            disabled={selected.length === 0}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-5 rounded-2xl font-bold text-lg shadow-lg flex items-center justify-center gap-2 transition-all duration-200 ${
              selected.length > 0
                ? "bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white shadow-purple-200"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continuar
          </motion.button>
        </div>
      </main>
    </motion.div>
  );
}

function QuizSleep({ onBack, onNext }: { onBack: () => void; onNext: () => void; key?: string }) {
  const options = [
    { id: "less-5", label: "Menos de 5 horas", icon: "😴" },
    { id: "5-7", label: "5 a 7 horas", icon: "🛌" },
    { id: "7-9", label: "7 a 9 horas", icon: "😊" },
    { id: "more-9", label: "Mais de 9 horas", icon: "💤" },
  ];

  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelected(id);
    setTimeout(onNext, 400);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "70%" }}
          animate={{ width: "75%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-8 max-w-md mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2 leading-tight">
            Quantas horas <span className="text-purple-600">você dorme por noite?</span>
          </h2>
          <p className="text-gray-500 text-sm">
            O sono é essencial para o emagrecimento.
          </p>
        </div>

        <div className="space-y-4">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-200 ${
                selected === option.id 
                  ? "border-purple-500 bg-purple-50 shadow-md" 
                  : "border-gray-100 bg-white hover:border-purple-200"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{option.icon}</span>
                <span className={`font-bold text-lg ${selected === option.id ? "text-purple-700" : "text-gray-700"}`}>
                  {option.label}
                </span>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                selected === option.id ? "border-purple-500 bg-purple-500" : "border-gray-200"
              }`}>
                {selected === option.id && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
            </button>
          ))}
        </div>
      </main>
    </motion.div>
  );
}

function QuizWater({ onBack, onNext }: { onBack: () => void; onNext: () => void; key?: string }) {
  const options = [
    { id: "almost-nothing", label: "Quase nada", icon: "🌵" },
    { id: "less-1", label: "Menos de 1 litro", icon: "💧" },
    { id: "1-2", label: "1 a 2 litros", icon: "💦" },
    { id: "more-2", label: "Mais de 2 litros", icon: "🌊" },
  ];

  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelected(id);
    setTimeout(onNext, 400);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "75%" }}
          animate={{ width: "80%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-8 max-w-md mx-auto w-full">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-2 leading-tight">
            Quanta água você <span className="text-purple-600">bebe por dia?</span>
          </h2>
          <p className="text-gray-500 text-sm">
            A hidratação acelera resultados.
          </p>
        </div>

        <div className="space-y-4">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-200 ${
                selected === option.id 
                  ? "border-purple-500 bg-purple-50 shadow-md" 
                  : "border-gray-100 bg-white hover:border-purple-200"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{option.icon}</span>
                <span className={`font-bold text-lg ${selected === option.id ? "text-purple-700" : "text-gray-700"}`}>
                  {option.label}
                </span>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                selected === option.id ? "border-purple-500 bg-purple-500" : "border-gray-200"
              }`}>
                {selected === option.id && <div className="w-2 h-2 bg-white rounded-full" />}
              </div>
            </button>
          ))}
        </div>
      </main>
    </motion.div>
  );
}

function QuizResult({ name, weight, height, onBack, onNext }: { name: string; weight: number; height: number; onBack: () => void; onNext: () => void; key?: string }) {
  const bmi = (weight / ((height / 100) ** 2)).toFixed(1);
  const bmiValue = parseFloat(bmi);
  
  let status = "";
  let colorClass = "";
  
  if (bmiValue < 18.5) {
    status = "Abaixo do peso";
    colorClass = "text-yellow-500";
  } else if (bmiValue < 25) {
    status = "Peso normal";
    colorClass = "text-green-500";
  } else if (bmiValue < 30) {
    status = "Sobrepeso";
    colorClass = "text-orange-500";
  } else {
    status = "Obesidade";
    colorClass = "text-red-500";
  }

  const alerts = [
    "Metabolismo desacelerado",
    "Risco de acúmulo de gordura visceral",
    "Hormônios de saciedade desregulados"
  ];

  const benefits = [
    "Receita 100% Natural",
    "Ativa o GLP-1 do seu corpo",
    "Queima de Gordura localizada",
    "Regula o seu Metabolismo",
    "Leveza e corpo Desinchado",
    "Menos impulsos por doces",
    "Fácil de fazer e seguir"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "80%" }}
          animate={{ width: "90%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-8 max-w-md mx-auto w-full">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-gray-800 leading-tight">
            Resultado da sua <span className="text-purple-600 font-black">análise, {name}</span>
          </h2>
        </div>

        {/* BMI Card */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 mb-6 text-center">
          <div className="text-7xl font-black text-purple-600 mb-2 tracking-tighter">
            {bmi}
          </div>
          <div className="text-gray-500 font-bold text-lg mb-6">
            Seu IMC: <span className={colorClass}>{status}</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-red-600 font-bold text-sm mb-4">
            <AlertTriangle className="w-5 h-5" />
            Sinais de alerta identificados:
          </div>

          <div className="space-y-3 text-left max-w-[280px] mx-auto">
            {alerts.map((alert, idx) => (
              <div key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="text-sm">{alert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Secret Box */}
        <div className="bg-green-50 border border-green-100 rounded-2xl p-5 mb-8 flex gap-4 items-start">
          <Leaf className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
          <p className="text-green-800 text-sm font-bold leading-relaxed">
            O segredo para secar: <span className="text-green-600">ativar o GLP-1.</span> A <span className="text-purple-600">Gelatina Mounjaro</span> é o "interruptor" hormonal natural!
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-10">
          <h3 className="text-lg font-extrabold text-gray-800 mb-6 flex items-center justify-center gap-2 whitespace-nowrap">
            Benefícios da <span className="text-purple-600">Gelatina Mounjaro</span> 👇
          </h3>
          <div className="space-y-3">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="bg-green-50/50 border border-green-100/50 rounded-xl p-4 flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-bold text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden mb-10">
          <img 
            src="https://i.imgur.com/aawGBdc.png" 
            alt="Transformação" 
            className="w-full h-auto object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="p-6 text-center">
            <p className="text-gray-800 font-black text-xl mb-2 italic">
              "Perdi 12kg em 5 semanas!"
            </p>
            <p className="text-gray-500 text-sm font-bold mb-4">
              Maria, 32 anos - São Paulo
            </p>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="pb-12">
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 rounded-2xl font-bold text-lg shadow-lg bg-gradient-to-r from-[#a855f7] to-[#ec4899] text-white shadow-purple-200"
          >
            Continuar
          </motion.button>
        </div>
      </main>
    </motion.div>
  );
}

function HowToUse({ onBack, onNext }: { onBack: () => void; onNext: () => void; key?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "90%" }}
          animate={{ width: "95%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-8 max-w-md mx-auto w-full">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-extrabold text-gray-800 leading-tight">
            Como usar a <span className="text-purple-600 font-black">Gelatina Mounjaro</span>
          </h2>
          <p className="text-gray-500 font-bold mt-2">
            Simples, prático e eficaz
          </p>
        </div>

        {/* Main Illustration */}
        <div className="flex justify-center mb-8">
          <img 
            src="https://i.imgur.com/gWTRMTa.png" 
            alt="Como usar" 
            className="w-full max-w-[300px] h-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Steps List */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-6 mb-8 space-y-6">
          {/* Step 1 */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-black text-lg flex-shrink-0">
              1
            </div>
            <div className="flex-1">
              <h4 className="font-black text-gray-800">Prepare a gelatina</h4>
              <p className="text-gray-500 text-xs font-bold">Receita simples do app</p>
            </div>
            <Sparkles className="w-6 h-6 text-orange-400" />
          </div>

          <div className="h-px bg-gray-100 w-full ml-14" />

          {/* Step 2 */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center text-white font-black text-lg flex-shrink-0">
              2
            </div>
            <div className="flex-1">
              <h4 className="font-black text-gray-800">Consuma 2x ao dia</h4>
              <p className="text-gray-500 text-xs font-bold">Manhã e antes de dormir</p>
            </div>
            <Clock className="w-6 h-6 text-purple-400" />
          </div>

          <div className="h-px bg-gray-100 w-full ml-14" />

          {/* Step 3 */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white font-black text-lg flex-shrink-0">
              3
            </div>
            <div className="flex-1">
              <h4 className="font-black text-gray-800">Siga por 30 dias</h4>
              <p className="text-gray-500 text-xs font-bold">Protocolo completo</p>
            </div>
            <Calendar className="w-6 h-6 text-green-400" />
          </div>
        </div>

        {/* Routine Timeline */}
        <div className="bg-purple-50/50 rounded-2xl p-6 mb-10">
          <div className="flex justify-between items-center relative">
            {/* Connecting Lines */}
            <div className="absolute top-4 left-[20%] right-[20%] h-px bg-purple-200 -z-10" />
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                <Sun className="w-6 h-6 text-orange-400" />
              </div>
              <div className="text-center">
                <p className="font-black text-gray-800 text-xs">Manhã</p>
                <p className="text-gray-500 text-[10px] font-bold">Em jejum</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-center">
                <p className="font-black text-gray-800 text-xs">Dia</p>
                <p className="text-gray-500 text-[10px] font-bold">Sem fome</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center">
                <Moon className="w-6 h-6 text-blue-400" />
              </div>
              <div className="text-center">
                <p className="font-black text-gray-800 text-xs">Noite</p>
                <p className="text-gray-500 text-[10px] font-bold">Antes de dormir</p>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="pb-12">
          <motion.button
            onClick={onNext}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 rounded-2xl font-bold text-lg shadow-lg bg-[#22c55e] text-white flex items-center justify-center gap-2"
          >
            <Check className="w-6 h-6" />
            Sim, eu me comprometo!
          </motion.button>
        </div>
      </main>
    </motion.div>
  );
}

function QuizCommitment({ onBack, onNext }: { onBack: () => void; onNext: () => void; key?: string }) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    { id: "sim", label: "Sim me comprometo!", emoji: "🤩" },
    { id: "hoje", label: "Quero começar hoje", emoji: "😎" },
    { id: "nao-sei", label: "Não sei...", emoji: "🧐" }
  ];

  const handleSelect = (id: string) => {
    setSelected(id);
    setTimeout(onNext, 400);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-between border-b border-gray-100">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-50 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-500" />
        </button>
        
        <div className="absolute left-1/2 -translate-x-1/2">
          <img 
            src="https://i.imgur.com/ZeOccM7.png" 
            alt="Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="w-10"></div>
      </header>

      {/* Progress Bar */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "95%" }}
          animate={{ width: "98%" }}
          className="h-full bg-purple-500"
        />
      </div>

      {/* Content */}
      <main className="flex-1 px-6 py-8 max-w-md mx-auto w-full">
        {/* Illustration */}
        <div className="flex justify-center mb-6">
          <img 
            src="https://i.imgur.com/H0XOMH9.png" 
            alt="Comprometimento" 
            className="w-full max-w-[280px] h-auto"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="bg-[#ec4899] text-white px-4 py-2 rounded-full flex items-center gap-2 text-[10px] font-black uppercase tracking-wider shadow-sm">
            <span role="img" aria-label="lock">🔐</span>
            PARA LIBERAR SEU PLANO, PRECISO SABER:
          </div>
        </div>

        {/* Question */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-extrabold text-gray-800 leading-tight">
            Você se compromete a aplicar o <span className="text-purple-600">protocolo</span> por pelo menos <span className="text-gray-900">1 semana</span> para poder ver os resultados?
          </h2>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`w-full p-5 rounded-2xl border-2 transition-all flex items-center justify-between group ${
                selected === option.id 
                  ? "border-purple-500 bg-purple-50 shadow-md" 
                  : "border-gray-100 hover:border-purple-200 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{option.emoji}</span>
                <span className={`font-black text-lg ${selected === option.id ? "text-purple-700" : "text-gray-700"}`}>
                  {option.label}
                </span>
              </div>
              <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                selected === option.id 
                  ? "border-purple-500 bg-purple-500" 
                  : "border-gray-300 group-hover:border-purple-300"
              }`}>
                {selected === option.id && <Check className="w-4 h-4 text-white" />}
              </div>
            </button>
          ))}
        </div>
      </main>
    </motion.div>
  );
}

function QuizLoadingFinal({ onNext }: { onNext: () => void; key?: string }) {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Verificando compatibilidade hormonal...",
    "Calculando déficit calórico ideal...",
    "Ajustando protocolo metabólico...",
    "Finalizando seu plano personalizado..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onNext, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    const messageTimer = setInterval(() => {
      setMessageIndex((prev) => (prev < messages.length - 1 ? prev + 1 : prev));
    }, 1500);

    return () => {
      clearInterval(timer);
      clearInterval(messageTimer);
    };
  }, [onNext]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-center border-b border-gray-100">
        <img 
          src="https://i.imgur.com/ZeOccM7.png" 
          alt="Logo" 
          className="h-14 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </header>

      {/* Progress Bar Top */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "98%" }}
          animate={{ width: "100%" }}
          className="h-full bg-purple-500"
        />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        {/* Circular Progress */}
        <div className="relative w-48 h-48 mb-12">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="88"
              stroke="#e5e7eb"
              strokeWidth="12"
              fill="transparent"
            />
            <motion.circle
              cx="96"
              cy="96"
              r="88"
              stroke="#d946ef"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={552.92}
              strokeDashoffset={552.92 - (552.92 * progress) / 100}
              strokeLinecap="round"
              transition={{ duration: 0.1 }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-black text-purple-600">{progress}%</span>
          </div>
        </div>

        {/* Status Message */}
        <div className="text-center space-y-6">
          <motion.div 
            key={messageIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 text-lg font-bold text-gray-800"
          >
            <span className="text-2xl">🧬</span>
            {messages[messageIndex]}
          </motion.div>

          {/* Animated Dots */}
          <div className="flex justify-center gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{
                  backgroundColor: i <= (progress / 20) ? "#d946ef" : "#9ca3af",
                  scale: i <= (progress / 20) ? [1, 1.2, 1] : 1
                }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
                className="w-2.5 h-2.5 rounded-full"
              />
            ))}
          </div>

          <p className="text-gray-500 font-medium italic">Aguarde um momento...</p>
        </div>
      </main>
    </motion.div>
  );
}

function QuizVideoExplanation({ onBack, onNext }: { onBack: () => void; onNext: () => void; key?: string }) {
  const [progress, setProgress] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Add Vturb script
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    script.async = true;
    document.head.appendChild(script);

    // Safety timeout: if the video doesn't start or messages fail, show button after 76s
    const safetyTimer = setTimeout(() => {
      setShowButton(true);
      setProgress(100);
      setIsStarted(true);
    }, 76000);

    const handleMessage = (event: MessageEvent) => {
      try {
        let data = event.data;
        if (typeof data === 'string') {
          // Check for play event
          if (data.includes('smartplayer-play') || data.includes('play')) {
            setIsStarted(true);
          }
          
          // Check for timeupdate event
          if (data.includes('smartplayer-timeupdate')) {
            const parsed = JSON.parse(data);
            if (parsed.time) {
              if (parsed.time >= 71) {
                setShowButton(true);
              }
            }
          }
        } else if (typeof data === 'object' && data.event) {
          if (data.event === 'smartplayer-play') {
            setIsStarted(true);
          }
          if (data.event === 'smartplayer-timeupdate' && data.time) {
            if (data.time >= 71) {
              setShowButton(true);
            }
          }
        }
      } catch (e) {
        // Ignore parse errors
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      window.removeEventListener('message', handleMessage);
      clearTimeout(safetyTimer);
    };
  }, []);

  // Fallback timer that starts when video starts
  useEffect(() => {
    if (!isStarted || showButton) return;

    const duration = 71; // 71 seconds (01:11)
    const intervalTime = 100;
    const totalSteps = (duration * 1000) / intervalTime;
    const stepIncrement = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setShowButton(true);
          return 100;
        }
        return prev + stepIncrement;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isStarted, showButton]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-center border-b border-gray-100">
        <button 
          onClick={onBack}
          className="absolute left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-600" />
        </button>
        <img 
          src="https://i.imgur.com/ZeOccM7.png" 
          alt="Logo" 
          className="h-14 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </header>

      {/* Progress Bar Top */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "98%" }}
          animate={{ width: "99%" }}
          className="h-full bg-purple-500"
        />
      </div>

      <main className="flex-1 px-6 py-8 max-w-md mx-auto w-full flex flex-col items-center">
        <h2 className="text-xl font-extrabold text-center leading-tight mb-6">
          Agora assista à explicação rápida de <span className="text-purple-600">1 Minuto</span> e entenda por que esse método está chamando atenção 👀
        </h2>

        {/* Yellow Banner */}
        <div className="bg-amber-400 px-4 py-2 rounded-lg font-black text-sm mb-6 flex items-center gap-2 shadow-sm">
          Clique no vídeo para Assistir ⬇️
        </div>

        {/* Vturb Video Player */}
        <div 
          className="w-full max-w-[400px] mx-auto shadow-2xl rounded-3xl overflow-hidden mb-6 cursor-pointer"
          onClick={() => setIsStarted(true)}
        >
          <div 
            id="ifr_69d203fc28bdf9783f89c945_wrapper" 
            style={{ margin: "0 auto", width: "100%", maxWidth: "400px" }}
            dangerouslySetInnerHTML={{
              __html: `
                <div style="position: relative; padding: 177.77777777777777% 0 0 0;" id="ifr_69d203fc28bdf9783f89c945_aspect"> 
                  <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_69d203fc28bdf9783f89c945" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/43165318-5701-4b0d-b67d-d2948ecdfc5f/players/69d203fc28bdf9783f89c945/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> 
                </div>
              `
            }}
          />
        </div>

        {/* Continue Button */}
        <div className="w-full min-h-[80px] flex items-center justify-center">
          <AnimatePresence>
            {showButton && (
              <motion.button 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                onClick={onNext}
                className="w-full py-5 bg-[#27a66d] text-white rounded-2xl font-black text-xl shadow-lg hover:bg-[#1f8c5a] transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                Entendi, quero continuar
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </main>
    </motion.div>
  );
}

function QuizDreamBody({ onBack, onNext }: { onBack: () => void; onNext: () => void; key?: string }) {
  const [selected, setSelected] = useState<string | null>(null);

  const options = [
    { id: "toned", label: "Em forma e definida", emoji: "🏋️‍♀️" },
    { id: "natural", label: "Natural e saudável", emoji: "🌿" }
  ];

  const handleSelect = (id: string) => {
    setSelected(id);
    setTimeout(onNext, 400);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-center border-b border-gray-100">
        <button 
          onClick={onBack}
          className="absolute left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-600" />
        </button>
        <img 
          src="https://i.imgur.com/ZeOccM7.png" 
          alt="Logo" 
          className="h-14 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </header>

      {/* Progress Bar Top */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "99%" }}
          animate={{ width: "99.5%" }}
          className="h-full bg-purple-500"
        />
      </div>

      <main className="flex-1 px-6 py-8 max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
            <span className="text-purple-600">Qual o corpo</span> dos seus sonhos?
          </h2>
          <p className="text-gray-500 mt-2 font-medium">Escolha sua meta.</p>
        </div>

        {/* Options */}
        <div className="space-y-4">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className={`w-full p-6 rounded-2xl border-2 transition-all flex items-center justify-between group ${
                selected === option.id 
                  ? "border-purple-500 bg-purple-50 shadow-md" 
                  : "border-gray-100 hover:border-purple-200 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{option.emoji}</span>
                <span className={`font-bold text-xl ${selected === option.id ? "text-purple-700" : "text-gray-700"}`}>
                  {option.label}
                </span>
              </div>
              <div className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-colors ${
                selected === option.id 
                  ? "border-purple-500 bg-purple-500" 
                  : "border-gray-300 group-hover:border-purple-300"
              }`}>
                {selected === option.id && <Check className="w-5 h-5 text-white" />}
              </div>
            </button>
          ))}
        </div>
      </main>
    </motion.div>
  );
}

function QuizFinalConfirmation({ name, currentWeight, targetWeight, onBack, onNext }: { name: string; currentWeight: number; targetWeight: number; onBack: () => void; onNext: () => void; key?: string }) {
  const diff = currentWeight - targetWeight;
  const minRange = Math.max(1, diff - 2);
  const maxRange = diff + 1;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-center border-b border-gray-100">
        <button 
          onClick={onBack}
          className="absolute left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-600" />
        </button>
        <img 
          src="https://i.imgur.com/ZeOccM7.png" 
          alt="Logo" 
          className="h-14 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </header>

      {/* Progress Bar Top */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "99.5%" }}
          animate={{ width: "100%" }}
          className="h-full bg-purple-500"
        />
      </div>

      <main className="flex-1 px-6 py-12 max-w-md mx-auto w-full flex flex-col items-center text-center">
        {/* Target Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-pink-50 rounded-full flex items-center justify-center relative">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-pink-500 rounded-full border-4 border-white shadow-sm flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            {/* Darts */}
            <div className="absolute -top-2 -right-2 transform rotate-45">
              <Rocket className="w-8 h-8 text-blue-400 fill-blue-400" />
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 leading-tight mb-6">
          <span className="text-purple-600">{name || "Você"}</span>, você gostaria de perder entre <span className="text-purple-600">{minRange}</span> e <span className="text-pink-500">{maxRange} kilos</span> em poucas semanas?
        </h2>

        <p className="text-gray-500 text-lg font-medium mb-10 leading-relaxed">
          Baseado no seu perfil, esse resultado é totalmente alcançável com a Gelatina Mounjaro!
        </p>

        {/* CTA Button */}
        <button 
          onClick={onNext}
          className="w-full py-5 bg-[#27a66d] text-white rounded-2xl font-black text-xl shadow-lg hover:bg-[#1f8c5a] transition-all active:scale-95 flex items-center justify-center gap-2"
        >
          SIM! Quero muito começar! 🔥
        </button>
      </main>
    </motion.div>
  );
}

function QuizTransformations({ onBack, onNext }: { onBack: () => void; onNext: () => void; key?: string }) {
  const transformations = [
    {
      name: "Giovanna",
      age: 34,
      location: "São Paulo",
      quote: "Bizarro... Perdi 7kg em 3 semanas!",
      img: "https://i.imgur.com/se1EjJY.png"
    },
    {
      name: "Sandra",
      age: 39,
      location: "Rio de Janeiro",
      quote: "Minha barriga sumiu! Não acredito!",
      img: "https://i.imgur.com/uMrs7S6.png"
    },
    {
      name: "Cláudia",
      age: 35,
      location: "Belo Horizonte",
      quote: "Voltei a usar minhas roupas antigas!",
      img: "https://i.imgur.com/VQqiwaf.png"
    },
    {
      name: "Patrícia",
      age: 31,
      location: "Curitiba",
      quote: "Quem usa tem resultado 🤩 🙌 ",
      img: "https://i.imgur.com/DvWFT2o.png"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white px-4 py-4 flex items-center justify-center border-b border-gray-100">
        <button 
          onClick={onBack}
          className="absolute left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-600" />
        </button>
        <img 
          src="https://i.imgur.com/ZeOccM7.png" 
          alt="Logo" 
          className="h-14 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </header>

      {/* Progress Bar Top */}
      <div className="fixed top-[72px] left-0 right-0 z-50 w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "99.5%" }}
          animate={{ width: "100%" }}
          className="h-full bg-purple-500"
        />
      </div>

      <main className="flex-1 px-4 pt-24 pb-12 max-w-md mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-gray-900 leading-tight">
            Histórias de Transformação
          </h2>
          <p className="text-gray-500 mt-2 font-medium">
            Veja quem já transformou o corpo com a Gelatina Mounjaro
          </p>
        </div>

        {/* Transformation Cards */}
        <div className="space-y-8">
          {transformations.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100"
            >
              <div className="aspect-[3/4] w-full relative">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-black text-gray-900 mb-2">
                  "{item.quote}"
                </h3>
                <p className="text-gray-500 font-medium">
                  {item.name}, {item.age} - {item.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Button at the end of the list */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <button 
            onClick={onNext}
            className="w-full py-5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl font-black text-xl shadow-lg hover:scale-105 transition-transform active:scale-95 flex items-center justify-center gap-2"
          >
            Pegar meu protocolo ✨
          </button>
        </motion.div>
      </main>
    </motion.div>
  );
}

function QuizFinalLoading({ onNext }: { onNext: () => void; key?: string }) {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onNext, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onNext]);

  useEffect(() => {
    if (progress > 25) setStep(1);
    if (progress > 50) setStep(2);
    if (progress > 75) setStep(3);
    if (progress === 100) setStep(4);
  }, [progress]);

  const checklist = [
    "Analisando suas respostas",
    "Calculando seu déficit calórico",
    "Selecionando ingredientes ideais",
    "Verificação concluída!"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="px-4 py-4 flex items-center justify-center border-b border-gray-100">
        <img 
          src="https://i.imgur.com/ZeOccM7.png" 
          alt="Logo" 
          className="h-14 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </header>

      {/* Progress Bar Top */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "99.5%" }}
          animate={{ width: "100%" }}
          className="h-full bg-purple-500"
        />
      </div>

      <main className="flex-1 px-6 py-12 flex flex-col items-center justify-center max-w-md mx-auto w-full">
        {/* Circular Progress */}
        <div className="relative w-48 h-48 mb-12">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="80"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              className="text-gray-100"
            />
            <motion.circle
              cx="96"
              cy="96"
              r="80"
              stroke="currentColor"
              strokeWidth="12"
              fill="transparent"
              strokeDasharray={502.6}
              animate={{ strokeDashoffset: 502.6 - (502.6 * progress) / 100 }}
              className="text-pink-500"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-black text-gray-900">{progress}%</span>
          </div>
        </div>

        <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">
          Verificando seus dados...
        </h2>

        <div className="w-full space-y-4">
          {checklist.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors ${step > index ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}>
                {step > index ? <Check className="w-4 h-4" /> : <div className="w-2 h-2 bg-current rounded-full" />}
              </div>
              <span className={`font-medium transition-colors ${step > index ? 'text-gray-900' : 'text-gray-400'}`}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </main>
    </motion.div>
  );
}

function QuizVSL({ name, onBack, onNext }: { name: string; onBack: () => void; onNext: () => void; key?: string }) {
  const [showButton, setShowButton] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    // Add Vturb script
    const script = document.createElement("script");
    script.src = "https://scripts.converteai.net/lib/js/smartplayer-wc/v4/sdk.js";
    script.async = true;
    document.head.appendChild(script);

    // Safety timeout: if the video doesn't start or messages fail, show button after 136s
    const safetyTimer = setTimeout(() => {
      setShowButton(true);
      setProgress(100);
      setIsStarted(true);
    }, 136000);

    const handleMessage = (event: MessageEvent) => {
      try {
        let data = event.data;
        if (typeof data === 'string') {
          if (data.includes('smartplayer-play') || data.includes('play')) {
            setIsStarted(true);
          }
          if (data.includes('smartplayer-timeupdate')) {
            const parsed = JSON.parse(data);
            if (parsed.time) {
              if (parsed.time >= 131) {
                setShowButton(true);
              }
            }
          }
        } else if (typeof data === 'object' && data.event) {
          if (data.event === 'smartplayer-play') {
            setIsStarted(true);
          }
          if (data.event === 'smartplayer-timeupdate' && data.time) {
            if (data.time >= 131) {
              setShowButton(true);
            }
          }
        }
      } catch (e) {
        // Ignore parse errors
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      window.removeEventListener('message', handleMessage);
      clearTimeout(safetyTimer);
    };
  }, []);

  // Fallback timer
  useEffect(() => {
    if (!isStarted || showButton) return;

    const duration = 131; // 131 seconds fallback (02:11)
    const intervalTime = 100;
    const totalSteps = (duration * 1000) / intervalTime;
    const stepIncrement = 100 / totalSteps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setShowButton(true);
          return 100;
        }
        return prev + stepIncrement;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isStarted, showButton]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="relative px-4 py-4 flex items-center justify-center border-b border-gray-100">
        <button 
          onClick={onBack}
          className="absolute left-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-purple-600" />
        </button>
        <img 
          src="https://i.imgur.com/ZeOccM7.png" 
          alt="Logo" 
          className="h-14 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </header>

      {/* Progress Bar Top */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "99.5%" }}
          animate={{ width: "100%" }}
          className="h-full bg-purple-500"
        />
      </div>

      <main className="flex-1 px-4 py-8 max-w-md mx-auto w-full flex flex-col items-center">
        {/* Success Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200">
            <Check className="w-10 h-10 text-white stroke-[3px]" />
          </div>
        </div>

        <h2 className="text-2xl font-black text-center leading-tight mb-6">
          <span className="text-purple-600">{name || "sd"}</span>, Seu protocolo foi feito com <span className="text-purple-600">Sucesso!</span>
        </h2>

        {/* Info Box */}
        <div className="w-full bg-green-50 border border-green-100 rounded-xl p-4 mb-6 text-center">
          <p className="text-green-800 font-medium flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            Assista o vídeo de 2 minutos para pegar o seu Protocolo Personalizado
          </p>
        </div>

        {/* Video Call to Action */}
        <div className="bg-amber-400 px-4 py-2 rounded-lg mb-4 flex items-center gap-2 font-black text-sm shadow-sm">
          Clique no vídeo para Assistir ⬇️
        </div>

        {/* Vturb Video Player */}
        <div 
          className="w-full max-w-[400px] mx-auto shadow-2xl rounded-3xl overflow-hidden cursor-pointer"
          onClick={() => setIsStarted(true)}
        >
          <div 
            id="ifr_69d2089432c35a227a004276_wrapper" 
            style={{ margin: "0 auto", width: "100%", maxWidth: "400px" }}
            dangerouslySetInnerHTML={{
              __html: `
                <div style="position: relative; padding: 177.77777777777777% 0 0 0;" id="ifr_69d2089432c35a227a004276_aspect"> 
                  <iframe frameborder="0" allowfullscreen src="about:blank" id="ifr_69d2089432c35a227a004276" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" referrerpolicy="origin" onload=" this.onload=null, this.src='https://scripts.converteai.net/43165318-5701-4b0d-b67d-d2948ecdfc5f/players/69d2089432c35a227a004276/v4/embed.html' +(location.search||'?') +'&vl=' +encodeURIComponent(location.href)"></iframe> 
                </div>
              `
            }}
          />
        </div>

        {/* Continue Button */}
        <div className="w-full min-h-[80px] flex items-center justify-center mt-8">
          <AnimatePresence>
            {showButton && (
              <motion.button 
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                onClick={onNext}
                className="w-full py-5 bg-[#27a66d] text-white rounded-2xl font-black text-xl shadow-lg hover:bg-[#1f8c5a] transition-all active:scale-95 flex items-center justify-center gap-2 animate-bounce"
              >
                RECEBER MEU PROTOCOLO ✨
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </main>
    </motion.div>
  );
}

function QuizFinalProcessing({ onNext }: { onNext: () => void; key?: string }) {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onNext, 800);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onNext]);

  useEffect(() => {
    if (progress > 15) setStep(1);
    if (progress > 30) setStep(2);
    if (progress > 45) setStep(3);
    if (progress > 60) setStep(4);
    if (progress > 75) setStep(5);
    if (progress === 100) setStep(6);
  }, [progress]);

  const checklist = [
    "Perfil metabólico analisado",
    "Meta de peso calculada",
    "Compatibilidade verificada",
    "Protocolo de 30 dias montado",
    "Bônus exclusivos selecionados",
    "Oferta especial preparada"
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col min-h-screen bg-white"
    >
      {/* Header */}
      <header className="px-4 py-4 flex items-center justify-center border-b border-gray-100">
        <img 
          src="https://i.imgur.com/ZeOccM7.png" 
          alt="Logo" 
          className="h-14 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </header>

      {/* Progress Bar Top */}
      <div className="w-full h-1.5 bg-gray-100">
        <motion.div 
          initial={{ width: "99.5%" }}
          animate={{ width: "100%" }}
          className="h-full bg-purple-500"
        />
      </div>

      <main className="flex-1 px-6 py-12 flex flex-col items-center max-w-md mx-auto w-full">
        {/* Banner */}
        <div className="w-full bg-gradient-to-br from-purple-600 via-pink-500 to-purple-700 rounded-3xl p-8 mb-8 text-center relative overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <h2 className="text-2xl font-black text-white leading-tight">
              Seu protocolo da <br />
              <span className="text-yellow-300">Gelatina Mounjaro</span> <br />
              de 30 dias está pronto!
            </h2>
            <div className="mt-4 flex justify-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <ArrowDown className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Checklist */}
        <div className="w-full space-y-6 mb-12">
          {checklist.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${step > index ? 'bg-green-500 text-white scale-110' : 'bg-gray-100 text-gray-300'}`}>
                {step > index ? <Check className="w-5 h-5" /> : <Sparkles className="w-4 h-4" />}
              </div>
              <span className={`text-lg font-bold transition-colors duration-300 ${step > index ? 'text-gray-900' : 'text-gray-300'}`}>
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-full px-4">
          <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden mb-4 shadow-inner">
            <motion.div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
              animate={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-gray-500 font-bold text-center italic">
            Aguarde enquanto finalizamos tudo para você...
          </p>
        </div>
      </main>
    </motion.div>
  );
}

function QuizCheckout({ name }: { name: string; key?: string }) {
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const faqItems = [
    {
      q: "A Gelatina Mounjaro realmente funciona?",
      a: "Sim! A Gelatina Mounjaro foi desenvolvida com base em estudos clínicos que comprovam a eficácia de seus ingredientes na ativação do metabolismo e redução da absorção de gorduras. Milhares de mulheres já transformaram seus corpos seguindo nosso protocolo."
    },
    {
      q: "Quanto tempo leva para ver resultados?",
      a: "Os primeiros resultados, como redução do inchaço e aumento da disposição, costumam aparecer já na primeira semana. A perda de peso significativa é observada entre a segunda e a quarta semana de uso contínuo."
    },
    {
      q: "É seguro? Tem efeitos colaterais?",
      a: "Sim, é 100% seguro. Nossa fórmula é composta por ingredientes naturais e não possui contraindicações ou efeitos colaterais conhecidos. No entanto, gestantes e lactantes devem consultar um médico antes de iniciar qualquer protocolo."
    },
    {
      q: "Como vou receber o protocolo?",
      a: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com os dados de acesso ao nosso aplicativo exclusivo, onde encontrará a receita completa, o passo a passo de 30 dias e todos os bônus."
    },
    {
      q: "E se não funcionar pra mim?",
      a: "Nós confiamos tanto no nosso método que oferecemos uma garantia incondicional de 30 dias. Se você seguir o protocolo e não tiver resultados, basta nos enviar um e-mail e devolveremos todo o seu dinheiro."
    },
    {
      q: "O pagamento é seguro?",
      a: "Sim, utilizamos as plataformas de pagamento mais seguras do Brasil. Seus dados estão 100% protegidos por criptografia de ponta a ponta."
    },
    {
      q: "Preciso comprar ingredientes caros?",
      a: "Não! Todos os ingredientes da Gelatina Mounjaro são acessíveis e podem ser encontrados em qualquer supermercado ou loja de produtos naturais próxima a você."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col min-h-screen bg-white pb-20"
    >
      {/* Header Logo */}
      <header className="py-4 flex justify-center bg-white border-b border-gray-100">
        <img 
          src="https://i.imgur.com/ZeOccM7.png" 
          alt="Logo" 
          className="h-12 w-auto object-contain"
          referrerPolicy="no-referrer"
        />
      </header>

      {/* Countdown Banner */}
      <div className="bg-[#e946bc] py-3 px-4 flex items-center justify-center gap-2 sticky top-0 z-50">
        <Clock className="w-5 h-5 text-white animate-pulse" />
        <p className="text-white font-bold text-sm sm:text-base">
          Seu protocolo expira em: <span className="font-black text-lg ml-1">{formatTime(timeLeft)}</span>
        </p>
      </div>

      <main className="max-w-md mx-auto w-full px-4 pt-8">
        {/* Success Message Header */}
        <div className="text-center mb-8">
          <p className="text-purple-600 font-black text-xl mb-2">
            {name || "Você"}, seu
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 shadow-sm">
            <h1 className="text-2xl font-black text-[#27a66d] leading-tight text-center">
              Plano da Gelatina de 30 dias foi Gerado com Sucesso!
            </h1>
          </div>
          <p className="text-gray-500 mt-4 text-sm font-medium leading-relaxed text-center">
            Ele é exclusivo e gerado só uma vez, não saia dessa página para não perdê-lo
          </p>
        </div>

        {/* Transformation Image */}
        <div className="relative mb-12">
          <div className="p-0">
            <img 
              src="https://i.imgur.com/M8l8Z6j.png" 
              alt="Transformação" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <div className="flex justify-between px-8 mt-2">
              <span className="bg-gray-100 text-gray-500 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Antes</span>
              <span className="bg-green-100 text-green-600 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">Depois ✨</span>
            </div>
          </div>
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg border border-gray-100">
            <div className="bg-green-500 rounded-full p-2">
              <Check className="w-8 h-8 text-white stroke-[3px]" />
            </div>
          </div>
        </div>

        {/* Treatment Plan Section */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-center text-white">
            <p className="text-xs font-bold uppercase tracking-widest mb-1 opacity-80">Seu Plano Exclusivo</p>
            <h2 className="text-2xl font-black flex items-center justify-center gap-2">
              1 Mês de Tratamento 🎯
            </h2>
          </div>
          
          <div className="p-6 space-y-4">
            <p className="text-gray-600 text-center font-medium mb-6">
              <span className="text-purple-600 font-bold">{name || "Você"}</span>, seguindo o protocolo certinho, veja o que vai acontecer:
            </p>

            {[
              { week: "SEMANA 1", result: "Desincha e primeiros resultados", icon: Sparkles, color: "purple" },
              { week: "SEMANA 2", result: "Perda de até 3 kg", icon: Rocket, color: "pink" },
              { week: "SEMANA 3", result: "Perda de 5 a 7 kg", icon: Heart, color: "red" },
              { week: "SEMANA 4", result: "Perda de 9 a 12 kg", icon: Star, color: "green", meta: true },
            ].map((step, idx) => (
              <div key={idx} className={`flex items-center gap-4 p-4 rounded-2xl border ${step.meta ? 'bg-green-50 border-green-100' : 'bg-gray-50 border-gray-100'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shadow-sm ${
                  step.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  step.color === 'pink' ? 'bg-pink-100 text-pink-600' :
                  step.color === 'red' ? 'bg-red-100 text-red-600' :
                  'bg-green-100 text-green-600'
                }`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className={`text-[10px] font-black uppercase tracking-wider ${
                    step.color === 'purple' ? 'text-purple-400' :
                    step.color === 'pink' ? 'text-pink-400' :
                    step.color === 'red' ? 'text-red-400' :
                    'text-green-400'
                  }`}>{step.week}</p>
                  <p className="text-gray-900 font-bold">{step.result}</p>
                </div>
                {step.meta && (
                  <span className="bg-green-500 text-white text-[10px] font-black px-2 py-1 rounded-lg">META</span>
                )}
              </div>
            ))}

            <div className="mt-8 p-4 bg-green-50 border border-green-100 rounded-2xl text-center">
              <p className="text-green-700 font-black flex items-center justify-center gap-2">
                🎉 Resultado esperado: -9 a 12 kg em 30 dias
              </p>
            </div>
          </div>
        </div>

        {/* Main Offer Card */}
        <div className="bg-white rounded-3xl border-2 border-pink-500 shadow-2xl overflow-hidden mb-12 relative">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-center text-white">
            <h3 className="text-xl font-black mb-1">Gelatina Mounjaro + APP Protocolo Completo</h3>
            <p className="text-xs font-bold opacity-80 uppercase tracking-widest">Acesso Vitalício</p>
          </div>

          <div className="p-8 flex flex-col items-center">
            <div className="w-40 h-40 bg-pink-50 rounded-3xl flex items-center justify-center mb-8 shadow-inner">
              <img 
                src="https://i.imgur.com/AnK5p7i.png" 
                alt="Produto" 
                className="w-32 h-32 object-contain drop-shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <ul className="w-full space-y-3 mb-8">
              {[
                "Receita completa da Gelatina Mounjaro",
                "Protocolo de 30 dias passo a passo",
                "Acesso ao Aplicativo Exclusivo",
                "Lista completa dos ingredientes",
                "Dicas para acelerar resultados",
                "Acesso vitalício ao app"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                  <div className="bg-green-100 rounded-full p-1">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            {/* Bonus Box */}
            <div className="w-full bg-purple-50 border border-purple-100 rounded-2xl p-4 mb-8 space-y-3">
              <p className="text-purple-800 font-black text-sm flex items-center gap-2">
                🎁 BÔNUS: Dietas completas
              </p>
              <p className="text-purple-800 font-black text-sm flex items-center gap-2">
                🎁 BÔNUS: Receitas doces saudáveis
              </p>
              <p className="text-purple-800 font-black text-sm flex items-center gap-2">
                🎁 BÔNUS: Aulas em vídeo de pilates na parede
              </p>
            </div>

            {/* Pricing */}
            <div className="text-center mb-8">
              <p className="text-gray-400 line-through text-sm font-bold">TUDO ISSO DE R$ 109,00</p>
              <p className="text-gray-600 text-xs font-bold uppercase tracking-widest mt-1">Por apenas</p>
              <p className="text-[#27a66d] text-5xl font-black mt-2">R$ 27</p>
              <p className="text-gray-500 text-sm font-bold mt-1">Ou 6x de R$ 5,32</p>
            </div>

            <button 
              onClick={() => window.location.href = "https://go.tribopay.com.br/cp18cyyvop"}
              className="w-full py-5 bg-[#27a66d] text-white rounded-2xl font-black text-xl shadow-lg hover:bg-[#1f8c5a] transition-all active:scale-95 flex items-center justify-center gap-2 animate-pulse"
            >
              QUERO COMEÇAR 🥰
            </button>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-8 text-center mb-12">
          <div className="w-24 h-24 mx-auto mb-6">
            <img 
              src="https://i.imgur.com/Msqa0BV.png" 
              alt="Garantia" 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <h4 className="text-xl font-black text-gray-900 mb-4">Garantia de Reembolso</h4>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Todo produto é obrigado a dar no mínimo 7 dias de garantia, porém confiamos tanto na fórmula que oferecemos 30 dias corridos.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed font-bold">
            Ou seja, se você não gostar ou não funcionar pra você, nós reembolsaremos cada centavo que você pagou, sem questionar.
          </p>
        </div>

        <button 
          onClick={() => window.location.href = "https://go.tribopay.com.br/cp18cyyvop"}
          className="w-full py-5 bg-[#27a66d] text-white rounded-2xl font-black text-xl shadow-lg hover:bg-[#1f8c5a] transition-all active:scale-95 flex items-center justify-center gap-2 mb-12"
        >
          QUERO COMEÇAR 🥰
        </button>

        {/* FAQ Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-black text-gray-900 text-center mb-8 flex items-center justify-center gap-2">
            <span className="text-red-500 text-3xl">?</span> Perguntas Frequentes
          </h3>
          
          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left"
                >
                  <span className="font-bold text-gray-800 pr-4">{item.q}</span>
                  <div className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-45' : ''}`}>
                    <Sparkles className="w-5 h-5 text-purple-400" />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden bg-gray-50"
                    >
                      <div className="p-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        <button 
          onClick={() => window.location.href = "https://go.tribopay.com.br/cp18cyyvop"}
          className="w-full py-5 bg-[#27a66d] text-white rounded-2xl font-black text-xl shadow-lg hover:bg-[#1f8c5a] transition-all active:scale-95 flex items-center justify-center gap-2 mb-8"
        >
          QUERO COMEÇAR 🥰
        </button>

        {/* Footer Info */}
        <div className="text-center space-y-4">
          <p className="text-gray-400 text-xs font-bold flex items-center justify-center gap-2 uppercase tracking-widest">
            🔒 Compra 100% segura • Garantia de 30 dias
          </p>
        </div>
      </main>
    </motion.div>
  );
}


