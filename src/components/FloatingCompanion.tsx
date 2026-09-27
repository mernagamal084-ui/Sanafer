import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { WelcomeSmurf } from './SmurfCharacters';
import { X, Sparkles, RotateCcw, HeartHandshake, BookOpen } from 'lucide-react';

interface FloatingCompanionProps {
  onReplayWelcome: () => void;
  onOpenAgpeya: () => void;
  onOpenVerse: () => void;
}

const COMPANION_MESSAGES = [
  'يا مرحب بيك في القرية! ربنا يبارك خدمتك وتعب محبتك النهارده 💙',
  'افتكر دايماً: ابتسامتك في وش طفل بتنقله حب ربنا يسوع ✨',
  'صلي قبل ما تبدأ، والمسيح هيبارك كل كلمة بتقولها في الفصل 🙏',
  'أنت مش لوحدك، ملايكة الخدمة والسما كلها بتفرح بأمانتك 🕊️',
];

export const FloatingCompanion: React.FC<FloatingCompanionProps> = ({
  onReplayWelcome,
  onOpenAgpeya,
  onOpenVerse,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messageIdx, setMessageIdx] = useState(0);

  const nextMessage = () => {
    setMessageIdx((prev) => (prev + 1) % COMPANION_MESSAGES.length);
  };

  return (
    <div className="fixed bottom-4 left-4 z-40 flex flex-col items-start select-none">
      {/* Speech Bubble / Mini Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="mb-2 w-72 max-w-[calc(100vw-2rem)] rounded-2xl bg-white border border-sky-100 p-3.5 shadow-xl shadow-sky-900/5 text-right relative"
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2.5 left-2.5 p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
              aria-label="إغلاق"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Title / Identity */}
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-semibold text-sky-900">سنفور الخادم رفيقك</span>
            </div>

            {/* Warm encouraging message */}
            <p className="text-xs text-slate-600 leading-relaxed min-h-[38px] mb-3">
              {COMPANION_MESSAGES[messageIdx]}
            </p>

            {/* Action buttons */}
            <div className="flex flex-col gap-1.5 pt-2 border-t border-slate-100">
              <button
                onClick={nextMessage}
                className="w-full text-right text-[11px] font-medium text-sky-700 hover:bg-sky-50 px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>كلمة تشجيع تانية</span>
                <Sparkles className="w-3 h-3 text-amber-500" />
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenVerse();
                }}
                className="w-full text-right text-[11px] font-medium text-slate-700 hover:bg-slate-50 px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>آية اليوم لقلبك</span>
                <BookOpen className="w-3 h-3 text-sky-500" />
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenAgpeya();
                }}
                className="w-full text-right text-[11px] font-medium text-slate-700 hover:bg-slate-50 px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>صلاة خادم سريعة</span>
                <HeartHandshake className="w-3 h-3 text-rose-400" />
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                  onReplayWelcome();
                }}
                className="w-full text-right text-[11px] text-slate-500 hover:text-slate-800 hover:bg-slate-50 px-2.5 py-1.5 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>مشاهدة ترحيب القرية مرة أخرى</span>
                <RotateCcw className="w-3 h-3 text-slate-400" />
              </button>
            </div>

            {/* Bubble pointer towards the character */}
            <div className="absolute -bottom-1.5 left-6 w-3 h-3 bg-white border-b border-l border-sky-100 rotate-[-45deg]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Smurf Character Avatar Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center justify-center p-1 rounded-full bg-white/95 border border-sky-200/80 shadow-lg shadow-sky-500/10 hover:shadow-sky-500/20 transition-all cursor-pointer"
        aria-label="رفيق قرية الخدمة"
        title="سنفور رفيق الخدمة - اضغط للحديث"
      >
        {/* Soft background pulse */}
        <span className="absolute inset-0 rounded-full bg-sky-200/40 animate-ping opacity-25 pointer-events-none" />

        <div className="w-13 h-13 overflow-hidden rounded-full flex items-center justify-center bg-gradient-to-b from-sky-50 to-white">
          <WelcomeSmurf size={68} className="translate-y-1" />
        </div>

        {/* Tiny greeting pill on first sight */}
        {!isOpen && (
          <span className="hidden sm:inline-flex absolute right-full mr-2.5 whitespace-nowrap px-2.5 py-1 rounded-full bg-white/95 text-slate-700 text-[11px] font-medium border border-sky-100 shadow-xs pointer-events-none group-hover:block transition-all">
            رفيقك في الخدمة 💙
          </span>
        )}
      </motion.button>
    </div>
  );
};
