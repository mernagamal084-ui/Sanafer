import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  BookOpen,
  Volume2,
  VolumeX,
  CheckCircle2,
  Flame,
  Plus,
  RotateCcw,
  Copy,
  Check,
  Share2,
  Sparkles,
  MapPin,
  Calendar,
  Layers,
  Clock,
  Heart,
  ExternalLink,
} from 'lucide-react';
import {
  TODAY_GOSPEL,
  AGPEYA_PRAYERS,
  SERVANT_PHOTOS,
  SERVANT_ANNOUNCEMENTS,
  SERVICE_IDEAS,
  VERSES_COLLECTION,
  PhotoItem,
} from '../data/villageContent';
import {
  BibleSmurf,
  AgpeyaSmurf,
  PhotographerSmurf,
  AnnouncementsSmurf,
  IdeasSmurf,
  VerseSmurf,
} from './SmurfCharacters';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string | null;
}

export const SectionModals: React.FC<ModalProps> = ({ isOpen, onClose, activeSection }) => {
  // Shared state for interactive elements
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [hasCompletedBibleReading, setHasCompletedBibleReading] = useState(false);

  // Agpeya state
  const [selectedPrayerId, setSelectedPrayerId] = useState('baker');
  const [candleLit, setCandleLit] = useState(true);
  const [tasbehaCount, setTasbehaCount] = useState(0);

  // Photos state
  const [photoFilter, setPhotoFilter] = useState<'all' | 'trips' | 'carnival' | 'meetings' | 'activities'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  // Announcements state
  const [announcementFilter, setAnnouncementFilter] = useState<'all' | 'urgent' | 'meeting'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Ideas state
  const [ideaCategory, setIdeaCategory] = useState<'all' | 'games' | 'crafts' | 'visuals' | 'spiritual'>('all');
  const [bookmarkedIdeas, setBookmarkedIdeas] = useState<string[]>([]);

  // Verses state
  const [verseIndex, setVerseIndex] = useState(0);
  const [hasCopiedVerse, setHasCopiedVerse] = useState(false);

  const currentPrayer = AGPEYA_PRAYERS.find((p) => p.id === selectedPrayerId) || AGPEYA_PRAYERS[0];
  const currentVerse = VERSES_COLLECTION[verseIndex % VERSES_COLLECTION.length];

  const handleCopyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyVerse = () => {
    const textToCopy = `${currentVerse.verseText}\n— ${currentVerse.reference}`;
    navigator.clipboard.writeText(textToCopy);
    setHasCopiedVerse(true);
    setTimeout(() => setHasCopiedVerse(false), 2200);
  };

  const toggleBookmark = (id: string) => {
    setBookmarkedIdeas((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  if (!isOpen || !activeSection) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/35 backdrop-blur-xs transition-opacity"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
          className="relative w-full max-w-2xl max-h-[88vh] flex flex-col bg-white rounded-3xl border border-sky-100 shadow-2xl overflow-hidden z-10 text-right"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 bg-slate-50/50">
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
              aria-label="إغلاق النافذة"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Title & Section Emblem */}
            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-xs text-sky-600 block font-normal">
                  {activeSection === 'bible' && 'قراءات الإنجيل اليومية'}
                  {activeSection === 'agpeya' && 'صلوات السواعي الروحية'}
                  {activeSection === 'photos' && 'ألبوم ذكريات الخدمة'}
                  {activeSection === 'announcements' && 'لوحة تنبيهات الخدام'}
                  {activeSection === 'ideas' && 'بنك أفكار مدارس الأحد'}
                  {activeSection === 'verse' && 'آية اليوم وتشجيع الخادم'}
                </span>
                <h2 className="text-lg font-bold text-slate-900 leading-tight">
                  {activeSection === 'bible' && 'الكتاب المقدس اليوم'}
                  {activeSection === 'agpeya' && 'الأجبية المقدسة'}
                  {activeSection === 'photos' && 'صور الخدام وذكرياتنا'}
                  {activeSection === 'announcements' && 'تنبيهات فريق الخدمة'}
                  {activeSection === 'ideas' && 'أفكار ملهمة للخدمة'}
                  {activeSection === 'verse' && 'آية اليوم لقلبك'}
                </h2>
              </div>

              {/* Mini character representation in header */}
              <div className="w-10 h-10 rounded-full bg-white border border-sky-100 flex items-center justify-center shrink-0 shadow-xs">
                {activeSection === 'bible' && <BibleSmurf size={36} />}
                {activeSection === 'agpeya' && <AgpeyaSmurf size={36} />}
                {activeSection === 'photos' && <PhotographerSmurf size={36} />}
                {activeSection === 'announcements' && <AnnouncementsSmurf size={36} />}
                {activeSection === 'ideas' && <IdeasSmurf size={36} />}
                {activeSection === 'verse' && <VerseSmurf size={36} />}
              </div>
            </div>
          </div>

          {/* Modal Body Content (Scrollable) */}
          <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-6">
            {/* 1. BIBLE SECTION */}
            {activeSection === 'bible' && (
              <div className="space-y-6">
                {/* Passage Header & Controls */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-100">
                  <div className="text-xs text-slate-500">
                    <span>{TODAY_GOSPEL.arabicDate}</span>
                    <span className="mx-1.5" aria-hidden="true">·</span>
                    <span className="font-semibold text-slate-700">{TODAY_GOSPEL.title}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Audio reader simulation */}
                    <button
                      onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                        isPlayingAudio
                          ? 'bg-sky-500 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {isPlayingAudio ? (
                        <>
                          <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                          <span>إيقاف القراءة</span>
                        </>
                      ) : (
                        <>
                          <VolumeX className="w-3.5 h-3.5" />
                          <span>استماع للقراءة</span>
                        </>
                      )}
                    </button>

                    {/* Font size toggle */}
                    <button
                      onClick={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors"
                      title="تغيير حجم الخط"
                    >
                      {fontSize === 'normal' ? 'خط كبير A+' : 'خط عادي A-'}
                    </button>
                  </div>
                </div>

                {isPlayingAudio && (
                  <div className="p-3 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-between text-xs text-sky-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-sky-500 animate-ping" />
                      <span>قراءة هادئة لإنجيل اليوم مع خلفية تأملية خاشعة...</span>
                    </div>
                    <span className="text-[11px] text-sky-600">01:45</span>
                  </div>
                )}

                {/* Holy Text */}
                <div
                  className={`bg-amber-50/30 border border-amber-100/80 rounded-2xl p-5 leading-loose text-slate-800 transition-all ${
                    fontSize === 'large' ? 'text-lg sm:text-xl font-medium' : 'text-base font-normal'
                  }`}
                >
                  <h3 className="text-base font-bold text-amber-900 mb-3 text-center">
                    {TODAY_GOSPEL.passageTitle}
                  </h3>
                  {TODAY_GOSPEL.verses.map((verse, idx) => (
                    <p key={idx} className="mb-2.5 last:mb-0">
                      {verse}
                    </p>
                  ))}
                </div>

                {/* Lessons for Kids and Servants */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100">
                    <h4 className="text-xs font-bold text-sky-900 mb-1.5 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                      <span>فكرة الدرس للأطفال في الفصل</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {TODAY_GOSPEL.lessonForKids}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100">
                    <h4 className="text-xs font-bold text-amber-900 mb-1.5 flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 text-amber-600" />
                      <span>رسالة خاصة لقلب الخادم</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">
                      {TODAY_GOSPEL.lessonForServants}
                    </p>
                  </div>
                </div>

                {/* Mark as Completed */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <button
                    onClick={() => setHasCompletedBibleReading(!hasCompletedBibleReading)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      hasCompletedBibleReading
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{hasCompletedBibleReading ? 'قرأت إنجيل اليوم بنجاح ✓' : 'تحديد كـ "قرأت إنجيل اليوم"'}</span>
                  </button>

                  <span className="text-xs text-slate-400">
                    «سراج لرجلي كلامك ونور لسبيلي»
                  </span>
                </div>
              </div>
            )}

            {/* 2. AGPEYA SECTION */}
            {activeSection === 'agpeya' && (
              <div className="space-y-6">
                {/* Candle & Tasbeha Atmosphere Bar */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-amber-50/80 via-orange-50/30 to-amber-50/80 border border-amber-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setCandleLit(!candleLit)}
                      className={`relative p-2 rounded-xl border transition-all cursor-pointer ${
                        candleLit
                          ? 'bg-amber-100/90 border-amber-200 text-amber-700 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-400'
                      }`}
                      title={candleLit ? 'إطفاء الشمعة' : 'إشعال شمعة الصلاة'}
                    >
                      <Flame className={`w-5 h-5 ${candleLit ? 'text-amber-500 animate-pulse' : 'text-slate-400'}`} />
                    </button>
                    <div>
                      <span className="text-xs font-semibold text-amber-950 block">
                        {candleLit ? 'شمعة الصلاة مضيئة ✨' : 'أشعل شمعة لوقت هادئ مع الله'}
                      </span>
                      <span className="text-[11px] text-amber-800/80">
                        اجعل دقائق صلاتك مكرسة لسلام قلبك وخدمتك
                      </span>
                    </div>
                  </div>

                  {/* Tasbeha clicker */}
                  <div className="flex items-center gap-1.5 bg-white/90 px-3 py-1.5 rounded-xl border border-amber-200/60 shadow-xs">
                    <span className="text-xs text-slate-600 font-medium">مسبحة الخادم:</span>
                    <button
                      onClick={() => setTasbehaCount(tasbehaCount + 1)}
                      className="px-2 py-0.5 rounded-md bg-amber-500 hover:bg-amber-600 text-white font-mono text-xs font-bold transition-transform active:scale-90"
                    >
                      +{tasbehaCount}
                    </button>
                    {tasbehaCount > 0 && (
                      <button
                        onClick={() => setTasbehaCount(0)}
                        className="text-slate-400 hover:text-slate-600 p-0.5"
                        title="إعادة ضبط"
                      >
                        <RotateCcw className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Prayer Selector Tabs */}
                <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto">
                  {AGPEYA_PRAYERS.map((prayer) => (
                    <button
                      key={prayer.id}
                      onClick={() => setSelectedPrayerId(prayer.id)}
                      className={`flex-1 min-w-[90px] py-2 px-3 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                        selectedPrayerId === prayer.id
                          ? 'bg-white text-sky-900 shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      {prayer.title}
                    </button>
                  ))}
                </div>

                {/* Selected Prayer Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                    <span className="font-semibold text-slate-700">{currentPrayer.subtitle}</span>
                    <span>{currentPrayer.time}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600 font-normal">
                    <span className="font-semibold text-slate-700 block mb-1">المزمور المقترح:</span>
                    {currentPrayer.keyPsalm}
                  </div>

                  <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs text-slate-800 leading-relaxed text-sm">
                    <h4 className="font-bold text-sky-900 mb-2 text-xs">مقتطف من قطع الصلاة:</h4>
                    <p className="font-normal text-slate-700">{currentPrayer.excerpt}</p>
                  </div>

                  <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 text-xs text-slate-700 leading-relaxed">
                    <span className="font-bold text-rose-900 block mb-1">طلبة الخادم الروحية:</span>
                    <p>{currentPrayer.servantSupplication}</p>
                  </div>
                </div>
              </div>
            )}

            {/* 3. SERVANT PHOTOS SECTION */}
            {activeSection === 'photos' && (
              <div className="space-y-5">
                {/* Category filter tabs */}
                <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto">
                  <button
                    onClick={() => setPhotoFilter('all')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                      photoFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    كل الذكريات ({SERVANT_PHOTOS.length})
                  </button>
                  <button
                    onClick={() => setPhotoFilter('trips')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                      photoFilter === 'trips' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    رحلات وخلوات
                  </button>
                  <button
                    onClick={() => setPhotoFilter('carnival')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                      photoFilter === 'carnival' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    كرنفالات وفصول
                  </button>
                  <button
                    onClick={() => setPhotoFilter('meetings')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                      photoFilter === 'meetings' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    لقاءات الخدام
                  </button>
                </div>

                {/* Photos Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SERVANT_PHOTOS.filter((item) => photoFilter === 'all' || item.category === photoFilter).map(
                    (photo) => (
                      <div
                        key={photo.id}
                        onClick={() => setSelectedPhoto(photo)}
                        className="group relative p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
                      >
                        {/* Illustrated photo frame / placeholder */}
                        <div
                          className={`w-full h-32 rounded-xl bg-gradient-to-br ${photo.colorBg} flex items-center justify-center text-4xl mb-3 relative overflow-hidden`}
                        >
                          <span className="group-hover:scale-110 transition-transform">{photo.emoji}</span>
                          <span className="absolute bottom-2 left-2 text-[10px] text-slate-500 bg-white/80 px-2 py-0.5 rounded-md backdrop-blur-xs">
                            {photo.date}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-slate-900 mb-1 leading-snug group-hover:text-sky-600 transition-colors">
                            {photo.title}
                          </h4>
                          <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-2 font-normal">
                            {photo.description}
                          </p>
                        </div>

                        <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-100">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-slate-400" />
                            <span>{photo.location}</span>
                          </span>
                          <span className="text-sky-600 group-hover:underline">عرض التفاصيل</span>
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Lightbox Preview if a photo is selected */}
                {selectedPhoto && (
                  <div className="p-4 rounded-2xl bg-sky-50/70 border border-sky-200 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-sky-950 text-sm">{selectedPhoto.title}</span>
                      <button
                        onClick={() => setSelectedPhoto(null)}
                        className="text-slate-400 hover:text-slate-600 font-bold"
                      >
                        ✕
                      </button>
                    </div>
                    <p className="text-slate-700 leading-relaxed">{selectedPhoto.description}</p>
                    <div className="flex items-center gap-3 text-slate-500 pt-1 text-[11px]">
                      <span>التاريخ: {selectedPhoto.date}</span>
                      <span>·</span>
                      <span>المكان: {selectedPhoto.location}</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* 4. SERVANT ANNOUNCEMENTS SECTION */}
            {activeSection === 'announcements' && (
              <div className="space-y-4">
                {/* Filter */}
                <div className="flex items-center justify-between text-xs text-slate-500 pb-2 border-b border-slate-100">
                  <div className="flex items-center gap-1 p-0.5 bg-slate-100 rounded-lg">
                    <button
                      onClick={() => setAnnouncementFilter('all')}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                        announcementFilter === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      الكل
                    </button>
                    <button
                      onClick={() => setAnnouncementFilter('urgent')}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                        announcementFilter === 'urgent' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      هام وعاجل
                    </button>
                    <button
                      onClick={() => setAnnouncementFilter('meeting')}
                      className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                        announcementFilter === 'meeting' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'
                      }`}
                    >
                      مواعيد
                    </button>
                  </div>

                  <span className="text-slate-400 text-[11px]">محدث باستمرار لفريق الخدمة</span>
                </div>

                {/* Announcement Cards */}
                <div className="space-y-3">
                  {SERVANT_ANNOUNCEMENTS.filter(
                    (ann) => announcementFilter === 'all' || ann.tag === announcementFilter
                  ).map((ann) => (
                    <div
                      key={ann.id}
                      className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-sky-200 shadow-xs transition-all space-y-2.5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1 text-xs text-slate-500">
                            <span className="font-semibold text-sky-700">{ann.tagLabel}</span>
                            <span aria-hidden="true">·</span>
                            <span>{ann.date}</span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 leading-snug">{ann.title}</h4>
                        </div>

                        <button
                          onClick={() => handleCopyText(`${ann.title}\n${ann.content}`, ann.id)}
                          className="p-1.5 rounded-lg text-slate-400 hover:text-sky-600 hover:bg-sky-50 transition-colors"
                          title="نسخ التنبيه"
                        >
                          {copiedId === ann.id ? (
                            <Check className="w-4 h-4 text-emerald-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{ann.content}</p>

                      <div className="text-[11px] text-slate-400 pt-1 flex items-center justify-between">
                        <span>المسؤول: {ann.speakerOrOrganizer}</span>
                        {copiedId === ann.id && (
                          <span className="text-emerald-600 text-[11px] font-medium">تم نسخ التنبيه!</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. SERVICE IDEAS SECTION */}
            {activeSection === 'ideas' && (
              <div className="space-y-5">
                {/* Category filters */}
                <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl overflow-x-auto">
                  <button
                    onClick={() => setIdeaCategory('all')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                      ideaCategory === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    كل الأفكار
                  </button>
                  <button
                    onClick={() => setIdeaCategory('games')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                      ideaCategory === 'games' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    ألعاب ومسابقات
                  </button>
                  <button
                    onClick={() => setIdeaCategory('crafts')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                      ideaCategory === 'crafts' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    أشغال يدوية
                  </button>
                  <button
                    onClick={() => setIdeaCategory('visuals')}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors ${
                      ideaCategory === 'visuals' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    وسائل إيضاح
                  </button>
                </div>

                {/* Ideas list */}
                <div className="space-y-4">
                  {SERVICE_IDEAS.filter((idea) => ideaCategory === 'all' || idea.category === ideaCategory).map(
                    (idea) => {
                      const isBookmarked = bookmarkedIdeas.includes(idea.id);
                      return (
                        <div
                          key={idea.id}
                          className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-amber-200 transition-all space-y-3"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="flex items-center gap-2 mb-1 text-xs text-slate-500 font-normal">
                                <span className="font-semibold text-amber-700">{idea.categoryLabel}</span>
                                <span aria-hidden="true">·</span>
                                <span>العمر: {idea.targetAge}</span>
                                <span aria-hidden="true">·</span>
                                <span>الوقت: {idea.duration}</span>
                              </div>
                              <h4 className="text-sm font-bold text-slate-900">{idea.title}</h4>
                            </div>

                            <button
                              onClick={() => toggleBookmark(idea.id)}
                              className={`p-2 rounded-xl border transition-colors ${
                                isBookmarked
                                  ? 'bg-amber-50 border-amber-200 text-amber-600'
                                  : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600'
                              }`}
                              title={isBookmarked ? 'محفوظة في أفكارك' : 'حفظ الفكرة'}
                            >
                              <Heart className={`w-4 h-4 ${isBookmarked ? 'fill-amber-500 text-amber-500' : ''}`} />
                            </button>
                          </div>

                          <p className="text-xs text-slate-600 leading-relaxed font-normal">{idea.description}</p>

                          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs space-y-1.5">
                            <span className="font-bold text-slate-800 block text-[11px]">خطوات التنفيذ بالفصل:</span>
                            {idea.steps.map((step, sIdx) => (
                              <div key={sIdx} className="flex items-start gap-2 text-slate-600">
                                <span className="text-amber-500 font-bold">·</span>
                                <span>{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </div>
            )}

            {/* 6. VERSE OF THE DAY SECTION */}
            {activeSection === 'verse' && (
              <div className="space-y-6">
                {/* Verse Card with calligraphic aura */}
                <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-sky-50/50 via-white to-amber-50/30 border border-sky-100 shadow-sm text-center space-y-4 overflow-hidden">
                  <div className="inline-flex items-center gap-1.5 text-xs text-sky-800 font-semibold px-3 py-1 rounded-full bg-sky-100/60">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                    <span>آية اليوم لكل خادم ومخدوم</span>
                  </div>

                  <p className="text-lg sm:text-2xl font-bold text-slate-900 leading-relaxed font-serif px-2">
                    {currentVerse.verseText}
                  </p>

                  <div className="text-sm font-semibold text-amber-800">
                    {currentVerse.reference}
                  </div>

                  {/* Actions for verse */}
                  <div className="flex items-center justify-center gap-3 pt-2">
                    <button
                      onClick={handleCopyVerse}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-700 transition-colors cursor-pointer"
                    >
                      {hasCopiedVerse ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>تم النسخ ✓</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>نسخ الآية</span>
                        </>
                      )}
                    </button>

                    <button
                      onClick={() => setVerseIndex(verseIndex + 1)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-xs font-medium text-sky-700 transition-colors cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>عرض آية أخرى</span>
                    </button>
                  </div>
                </div>

                {/* Spiritual Meditation for Servant */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-rose-500" />
                    <span>تأمل لقلبك في خدمتك اليوم:</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {currentVerse.meditation}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 space-y-1.5 text-xs">
                  <span className="font-bold text-amber-950 block">صلاة قصيرة لليوم:</span>
                  <p className="text-slate-700 font-normal">{currentVerse.prayerPoint}</p>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-5 py-3 border-t border-slate-100 bg-slate-50/40 flex items-center justify-between text-xs text-slate-400">
            <span>قرية الخدمة · كنيستنا ومدارس الأحد</span>
            <button
              onClick={onClose}
              className="text-xs font-medium text-sky-600 hover:text-sky-800 transition-colors cursor-pointer"
            >
              إغلاق
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
