import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WelcomeSmurf } from './SmurfCharacters';
import { Sparkles, ArrowLeft, Church } from 'lucide-react';

interface OpeningWelcomeProps {
  onComplete: () => void;
  isReplay?: boolean;
}

export const OpeningWelcome: React.FC<OpeningWelcomeProps> = ({ onComplete, isReplay = false }) => {
  const [phase, setPhase] = useState<'intro' | 'transitioning'>('intro');

  const handleEnter = () => {
    if (phase === 'transitioning') return;
    setPhase('transitioning');
    setTimeout(() => {
      onComplete();
    }, 900);
  };

  // Optional auto-progress after 4.5 seconds on initial entry so it's effortless
  useEffect(() => {
    const timer = setTimeout(() => {
      handleEnter();
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key="opening-overlay"
        initial={{ opacity: isReplay ? 0 : 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-sky-50 via-white to-amber-50/40 p-4 sm:p-6 text-slate-800"
      >
        {/* Soft Background Animated Clouds */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-10 left-10 w-72 h-36 bg-white/70 rounded-full blur-2xl animate-cloud-drift" />
          <div className="absolute top-20 -right-10 w-96 h-48 bg-sky-100/50 rounded-full blur-3xl animate-cloud-drift" style={{ animationDelay: '-12s' }} />
          <div className="absolute bottom-12 left-1/4 w-80 h-32 bg-amber-100/40 rounded-full blur-2xl" />

          {/* Gentle floating golden dust particles */}
          <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-amber-300 opacity-60 animate-pulse-glow" />
          <div className="absolute top-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-sky-300 opacity-60 animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 rounded-full bg-amber-400 opacity-50 animate-pulse-glow" style={{ animationDelay: '2.5s' }} />
        </div>

        {/* Top quiet header indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full max-w-md flex items-center justify-between pt-2 text-xs text-slate-500"
        >
          <div className="flex items-center gap-1.5 font-medium text-sky-700">
            <Church className="w-4 h-4 text-sky-500" />
            <span>قرية الخدمة ومدارس الأحد</span>
          </div>
          <button
            onClick={handleEnter}
            className="text-slate-400 hover:text-slate-700 transition-colors cursor-pointer px-2 py-1 rounded"
          >
            تخطي للمحتوى
          </button>
        </motion.div>

        {/* Centered Hero Smurf & Greeting: 40-50% Viewport Height on mobile */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-lg text-center px-4 my-auto">
          {/* Smurf Character Container with smooth shrink animation when transitioning */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 15 }}
            animate={
              phase === 'intro'
                ? { scale: 1, opacity: 1, y: 0 }
                : {
                    scale: 0.28,
                    x: -140,
                    y: 280,
                    opacity: 0.9,
                  }
            }
            transition={{
              type: 'spring',
              stiffness: 110,
              damping: 18,
            }}
            className="flex items-center justify-center my-1 select-none"
          >
            <div className="h-[38vh] max-h-[340px] aspect-square flex items-center justify-center">
              <WelcomeSmurf size={280} className="w-full h-full max-w-[280px] max-h-[280px]" />
            </div>
          </motion.div>

          {/* Warm Welcome Typography */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={phase === 'intro' ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="space-y-2 mt-2 max-w-md"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-sky-100 shadow-xs text-xs font-medium text-sky-800">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>واو... أنا دخلت قرية السنافر بجد ✨</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 leading-tight">
              أهلاً بيك في قرية الخدمة!
            </h1>

            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              مكان روحي هادئ ومفرح يجمع خادمي وأطفال مدارس الأحد، بصلوات وقراءات وأفكار ملهمة ليوم مبارك.
            </p>
          </motion.div>
        </div>

        {/* Bottom CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={phase === 'intro' ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="relative z-10 w-full max-w-xs pb-4 text-center"
        >
          <button
            onClick={handleEnter}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-2xl bg-sky-500 hover:bg-sky-600 active:scale-98 text-white font-medium text-sm shadow-md shadow-sky-500/20 hover:shadow-lg hover:shadow-sky-500/25 transition-all cursor-pointer"
          >
            <span>ادخل إلى القرية</span>
            <ArrowLeft className="w-4 h-4 rtl:rotate-0" />
          </button>
          <p className="text-[11px] text-slate-400 mt-2">
            «كَمَا خَدَمَ ابْنُ الإِنْسَانِ، لاَ لِيُخْدَمَ بَلْ لِيَخْدِمَ»
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
