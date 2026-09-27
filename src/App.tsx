/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Volume2,
  VolumeX,
  Sparkles,
  ArrowLeft,
  Calendar,
  Heart,
  Church,
  Search,
} from 'lucide-react';
import {
  BibleSmurf,
  AgpeyaSmurf,
  PhotographerSmurf,
  AnnouncementsSmurf,
  IdeasSmurf,
  VerseSmurf,
} from './components/SmurfCharacters';
import { OpeningWelcome } from './components/OpeningWelcome';
import { FloatingCompanion } from './components/FloatingCompanion';
import { SectionModals } from './components/SectionModals';
import { ambientSound } from './utils/audioSynth';

interface TileData {
  id: 'bible' | 'agpeya' | 'photos' | 'announcements' | 'ideas' | 'verse';
  title: string;
  subtitle: string;
  meta: string;
  accentBg: string;
  borderHover: string;
  CharacterComponent: React.ComponentType<{ size?: number; className?: string }>;
  tag: string;
}

const NAVIGATION_TILES: TileData[] = [
  {
    id: 'bible',
    title: 'الكتاب المقدس اليوم',
    subtitle: '«إنجيل النهارده هنقراه سوا»',
    meta: 'متى 5: 14-16 · قراءة مسموعة · تأمل يومي',
    accentBg: 'from-sky-50/70 via-white to-sky-50/30',
    borderHover: 'hover:border-sky-300',
    CharacterComponent: BibleSmurf,
    tag: 'قراءة الإنجيل',
  },
  {
    id: 'agpeya',
    title: 'الأجبية',
    subtitle: '«وقت صلاتك مع ربنا»',
    meta: 'باكر · الغروب · النوم · مسبحة الخادم',
    accentBg: 'from-amber-50/70 via-white to-amber-50/30',
    borderHover: 'hover:border-amber-300',
    CharacterComponent: AgpeyaSmurf,
    tag: 'صلوات السواعي',
  },
  {
    id: 'photos',
    title: 'صور الخدام',
    subtitle: '«ذكرياتنا سوا»',
    meta: 'ألبوم الرحلات · كرنفال مدارس الأحد · لقاءات',
    accentBg: 'from-pink-50/60 via-white to-pink-50/20',
    borderHover: 'hover:border-pink-300',
    CharacterComponent: PhotographerSmurf,
    tag: 'ذكريات ومحبة',
  },
  {
    id: 'announcements',
    title: 'تنبيهات الخدام',
    subtitle: '«كل جديد من فريق الخدمة»',
    meta: 'اجتماع التحضير · افتقاد المخدومين · رحلات',
    accentBg: 'from-blue-50/60 via-white to-blue-50/20',
    borderHover: 'hover:border-blue-300',
    CharacterComponent: AnnouncementsSmurf,
    tag: 'لوحة الإعلانات',
  },
  {
    id: 'ideas',
    title: 'أفكار للخدمة',
    subtitle: '«أفكار تساعدك في الخدمة»',
    meta: 'ألعاب حركية · أشغال يدوية · وسائل إيضاح',
    accentBg: 'from-yellow-50/70 via-white to-yellow-50/30',
    borderHover: 'hover:border-yellow-300',
    CharacterComponent: IdeasSmurf,
    tag: 'أنشطة الفصل',
  },
  {
    id: 'verse',
    title: 'آية اليوم',
    subtitle: '«آية النهارده ليك»',
    meta: 'تشجيع روحي · تأمل للخادم · بطاقة مشاركة',
    accentBg: 'from-purple-50/60 via-white to-purple-50/20',
    borderHover: 'hover:border-purple-300',
    CharacterComponent: VerseSmurf,
    tag: 'بركة اليوم',
  },
];

export default function App() {
  const [showOpening, setShowOpening] = useState(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Auto-check if user has visited in this session
  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('smurf_village_intro_seen');
    if (hasSeenIntro === 'true') {
      setShowOpening(false);
    }
  }, []);

  const handleCompleteOpening = () => {
    setShowOpening(false);
    sessionStorage.setItem('smurf_village_intro_seen', 'true');
  };

  const handleReplayWelcome = () => {
    setShowOpening(true);
  };

  const handleToggleAudio = () => {
    const active = ambientSound.toggle();
    setIsAudioPlaying(active);
  };

  const filteredTiles = NAVIGATION_TILES.filter(
    (tile) =>
      tile.title.includes(searchQuery) ||
      tile.subtitle.includes(searchQuery) ||
      tile.meta.includes(searchQuery)
  );

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800 flex flex-col justify-between selection:bg-sky-100 selection:text-sky-900 relative">
      {/* Signature Opening Welcome Animation (Mobile & Desktop) */}
      {showOpening && <OpeningWelcome onComplete={handleCompleteOpening} />}

      {/* Floating Village Companion */}
      <FloatingCompanion
        onReplayWelcome={handleReplayWelcome}
        onOpenAgpeya={() => setActiveSection('agpeya')}
        onOpenVerse={() => setActiveSection('verse')}
      />

      {/* Section Detail Modals */}
      <SectionModals
        isOpen={activeSection !== null}
        onClose={() => setActiveSection(null)}
        activeSection={activeSection}
      />

      {/* Background Soft Ambient Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft upper clouds */}
        <div className="absolute -top-12 right-1/4 w-[450px] h-[180px] bg-white/80 rounded-full blur-2xl animate-cloud-drift" />
        <div
          className="absolute top-16 -left-20 w-[380px] h-[160px] bg-sky-100/40 rounded-full blur-3xl animate-cloud-drift"
          style={{ animationDelay: '-16s' }}
        />
        {/* Soft bottom warm glow */}
        <div className="absolute -bottom-20 right-1/3 w-[500px] h-[250px] bg-amber-50/50 rounded-full blur-3xl" />
      </div>

      {/* Top Bar Contract (1 Row, 3 Zones) */}
      <header className="relative z-20 w-full border-b border-slate-100 bg-white/85 backdrop-blur-md sticky top-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Zone 1: Single text element Brand Wordmark */}
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-sky-100/80 flex items-center justify-center text-sky-600 shadow-xs">
              <Church className="w-4 h-4" />
            </span>
            <button
              onClick={() => setActiveSection(null)}
              className="text-base sm:text-lg font-bold text-slate-900 tracking-tight cursor-pointer hover:text-sky-600 transition-colors"
            >
              قرية الخدمة
            </button>
          </div>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-slate-600">
            <button
              onClick={() => setActiveSection('bible')}
              className="hover:text-sky-600 transition-colors cursor-pointer"
            >
              الكتاب المقدس
            </button>
            <button
              onClick={() => setActiveSection('agpeya')}
              className="hover:text-sky-600 transition-colors cursor-pointer"
            >
              الأجبية
            </button>
            <button
              onClick={() => setActiveSection('photos')}
              className="hover:text-sky-600 transition-colors cursor-pointer"
            >
              الذكريات
            </button>
            <button
              onClick={() => setActiveSection('announcements')}
              className="hover:text-sky-600 transition-colors cursor-pointer"
            >
              التنبيهات
            </button>
            <button
              onClick={() => setActiveSection('ideas')}
              className="hover:text-sky-600 transition-colors cursor-pointer"
            >
              أفكار الخدمة
            </button>
            <button
              onClick={() => setActiveSection('verse')}
              className="hover:text-sky-600 transition-colors cursor-pointer"
            >
              آية اليوم
            </button>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-2.5">
            {/* Ambient Sound Toggle */}
            <button
              onClick={handleToggleAudio}
              className={`p-2 rounded-xl text-xs font-medium border transition-all cursor-pointer flex items-center gap-1.5 ${
                isAudioPlaying
                  ? 'bg-amber-50 border-amber-200 text-amber-800'
                  : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
              }`}
              title={isAudioPlaying ? 'إيقاف النغمات الهادئة' : 'تشغيل نغمات قيثارة هادئة'}
              aria-label="نغمات هادئة"
            >
              {isAudioPlaying ? (
                <>
                  <Volume2 className="w-4 h-4 text-amber-500 animate-pulse" />
                  <span className="hidden sm:inline text-xs">نغمات هادئة</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-slate-400" />
                  <span className="hidden sm:inline text-xs text-slate-500">موسيقى هادئة</span>
                </>
              )}
            </button>

            {/* Replay Welcome Button */}
            <button
              onClick={handleReplayWelcome}
              className="px-3 py-1.5 rounded-xl bg-sky-500 hover:bg-sky-600 active:scale-98 text-white text-xs font-medium transition-all shadow-xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>مرحبا بالقرية</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 flex-1 w-full">
        {/* Hero Banner / Spiritual Welcome */}
        <section className="mb-10 sm:mb-14 text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-sky-800 px-3 py-1 rounded-full bg-sky-50 border border-sky-100">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span>قرية الخدام ومدارس الأحد · روح الفرح والمحبة</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            واحة الخدمة الروحية
          </h1>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            «كَمَا خَدَمَ ابْنُ الإِنْسَانِ، لاَ لِيُخْدَمَ بَلْ لِيَخْدِمَ وَلِيَبْذِلَ نَفْسَهُ فِدْيَةً عَنْ كَثِيرِينَ»
          </p>

          {/* Quick Search & Filter bar for easy navigation */}
          <div className="pt-2 max-w-md mx-auto relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="ابحث عن قسم، قراءة، أو فكرة في القرية..."
              className="w-full py-2.5 pr-10 pl-4 text-xs rounded-2xl bg-white border border-slate-200/90 shadow-xs focus:outline-hidden focus:border-sky-400 focus:ring-2 focus:ring-sky-100 transition-all text-slate-700"
            />
            <Search className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </section>

        {/* The Six Navigation Tiles Grid */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredTiles.map((tile) => {
              const Character = tile.CharacterComponent;
              return (
                <motion.div
                  key={tile.id}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setActiveSection(tile.id)}
                  className={`group relative p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/80 ${tile.borderHover} shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden text-right`}
                >
                  {/* Gentle gradient wash top corner */}
                  <div
                    className={`absolute top-0 right-0 left-0 h-28 bg-gradient-to-b ${tile.accentBg} opacity-50 pointer-events-none`}
                  />

                  {/* Top: Small Illustration & Section Badge */}
                  <div className="relative z-10 flex items-start justify-between mb-4">
                    {/* Character Pose */}
                    <div className="w-20 h-20 rounded-2xl bg-white/90 border border-slate-100 shadow-xs flex items-center justify-center p-1 group-hover:scale-105 transition-transform duration-300">
                      <Character size={72} />
                    </div>

                    {/* Unboxed Metadata & Category */}
                    <div className="text-left">
                      <span className="text-[11px] font-semibold text-sky-700 block">
                        {tile.tag}
                      </span>
                    </div>
                  </div>

                  {/* Middle: Title & Subtitle */}
                  <div className="relative z-10 space-y-1.5 mb-5">
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {tile.title}
                    </h3>

                    <p className="text-sm font-medium text-slate-700 leading-snug">
                      {tile.subtitle}
                    </p>

                    {/* Subtle unboxed metadata with bullet separators */}
                    <div className="pt-2 text-xs text-slate-500 font-normal">
                      <span>{tile.meta}</span>
                    </div>
                  </div>

                  {/* Bottom: Subtle interaction affordance */}
                  <div className="relative z-10 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-sky-600">
                    <span className="group-hover:translate-x-[-3px] transition-transform">
                      استكشف الآن
                    </span>
                    <ArrowLeft className="w-4 h-4 text-sky-500 group-hover:translate-x-[-4px] transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredTiles.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm">
              لم نعثر على نتائج مطابقة للبحث في قرية الخدمة.
            </div>
          )}
        </section>

        {/* Quiet Spiritual Notice / Servant Motto Section */}
        <section className="mt-14 sm:mt-18 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-50/50 via-white to-amber-50/50 border border-slate-200/80 text-center space-y-2 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-1.5 text-xs text-amber-800 font-semibold">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>رسالة إلى كل خادم وخادمة</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            الخدمة ليست مجرد درس يُلقى، بل قلب ينبض بحب المسيح، وابتسامة صادقة تحتضن طفلاً، وصلاة مرفوعة بالدموع لأجل كل نفس أمانة في يدك.
          </p>
        </section>
      </main>

      {/* Quiet Footer */}
      <footer className="relative z-10 border-t border-slate-100 bg-white/70 py-6 mt-12 text-center text-xs text-slate-400">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Church className="w-4 h-4 text-sky-500" />
            <span className="font-semibold text-slate-600">قرية الخدمة</span>
            <span>·</span>
            <span>مدارس الأحد والتربية الكنسية</span>
          </div>

          <div className="text-slate-400">
            «كُونُوا أُمَنَاءَ إِلَى الْمَوْتِ فَسَأُعْطِيكُمْ إِكْلِيلَ الْحَيَاةِ»
          </div>
        </div>
      </footer>
    </div>
  );
}
