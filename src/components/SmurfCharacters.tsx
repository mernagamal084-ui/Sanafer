import React from 'react';

interface SmurfProps {
  className?: string;
  size?: number;
}

// 1. Welcome Smurf (Friendly waving hand, wide smile, welcoming open arms)
export const WelcomeSmurf: React.FC<SmurfProps> = ({ className = '', size = 180 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 200"
        className="w-full h-full drop-shadow-md overflow-visible"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Soft magical glow */}
        <circle cx="100" cy="105" r="75" fill="#e0f2fe" opacity="0.45" className="animate-pulse-glow" />

        {/* Shadow under feet */}
        <ellipse cx="100" cy="180" rx="42" ry="7" fill="#cbd5e1" opacity="0.5" />

        {/* Feet / Shoes */}
        <ellipse cx="78" cy="172" rx="14" ry="9" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2.5" />
        <ellipse cx="122" cy="172" rx="14" ry="9" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2.5" />

        {/* Legs & White Pants */}
        <path
          d="M72 135 C72 165 74 170 86 170 C92 170 96 155 100 148 C104 155 108 170 114 170 C126 170 128 165 128 135 Z"
          fill="#ffffff"
          stroke="#e2e8f0"
          strokeWidth="2.5"
        />
        {/* Soft shading on pants */}
        <path d="M96 148 C98 156 102 156 104 148" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />

        {/* Body / Torso (Blue skin) */}
        <ellipse cx="100" cy="122" rx="26" ry="24" fill="#38bdf8" />
        <ellipse cx="100" cy="124" rx="20" ry="18" fill="#7dd3fc" opacity="0.4" />

        {/* Left Arm (Relaxed / welcoming) */}
        <path
          d="M75 115 C60 120 52 132 60 142 C64 146 72 142 74 135"
          fill="#38bdf8"
          stroke="#0284c7"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Left hand rounded */}
        <circle cx="60" cy="141" r="7" fill="#38bdf8" />

        {/* Right Arm (Waving enthusiastically!) */}
        <g className="animate-hand-wave" style={{ transformOrigin: '125px 115px' }}>
          <path
            d="M125 115 C140 106 152 92 146 80 C143 74 135 78 130 87"
            fill="#38bdf8"
            stroke="#0284c7"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Hand waving */}
          <circle cx="147" cy="78" r="8" fill="#38bdf8" />
          <circle cx="152" cy="74" r="3.5" fill="#38bdf8" />
          <circle cx="148" cy="70" r="3.5" fill="#38bdf8" />
          <circle cx="143" cy="69" r="3.5" fill="#38bdf8" />
        </g>

        {/* Head (Blue) */}
        <ellipse cx="100" cy="85" rx="30" ry="27" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />

        {/* Big Smurf Round Nose */}
        <ellipse cx="100" cy="87" rx="10" ry="8" fill="#7dd3fc" stroke="#0284c7" strokeWidth="1.5" />
        <ellipse cx="98" cy="85" rx="4" ry="2.5" fill="#bae6fd" opacity="0.9" />

        {/* Eyes (Blinking animation) */}
        <g className="animate-eye-blink" style={{ transformOrigin: '100px 75px' }}>
          {/* Left Eye */}
          <ellipse cx="89" cy="75" rx="6.5" ry="9" fill="#ffffff" stroke="#0284c7" strokeWidth="1.2" />
          <circle cx="90" cy="76" r="3.8" fill="#0f172a" />
          <circle cx="91.5" cy="74.5" r="1.5" fill="#ffffff" />

          {/* Right Eye */}
          <ellipse cx="111" cy="75" rx="6.5" ry="9" fill="#ffffff" stroke="#0284c7" strokeWidth="1.2" />
          <circle cx="110" cy="76" r="3.8" fill="#0f172a" />
          <circle cx="111.5" cy="74.5" r="1.5" fill="#ffffff" />
        </g>

        {/* Warm Joyful Smile */}
        <path
          d="M89 97 C94 104 106 104 111 97"
          stroke="#0f172a"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="#f43f5e"
        />
        {/* Rosy Cheeks */}
        <circle cx="80" cy="91" r="5" fill="#f472b6" opacity="0.35" />
        <circle cx="120" cy="91" r="5" fill="#f472b6" opacity="0.35" />

        {/* Cute Smurf Ears */}
        <path d="M70 85 C66 82 66 90 71 92" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
        <path d="M130 85 C134 82 134 90 129 92" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />

        {/* Classic White Phrygian Hat */}
        <path
          d="M68 76 C70 54 85 30 115 28 C135 27 150 40 142 56 C136 68 116 66 112 58 C108 50 96 46 88 56 C82 64 78 72 73 78 Z"
          fill="#ffffff"
          stroke="#e2e8f0"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Hat soft brim curve over forehead */}
        <path
          d="M67 76 C78 68 122 68 133 76 C135 80 130 82 122 81 C102 78 86 80 67 76 Z"
          fill="#ffffff"
          stroke="#e2e8f0"
          strokeWidth="2.5"
        />
        {/* Hat curved tip highlight */}
        <path d="M125 35 C136 38 140 48 135 53" stroke="#f1f5f9" strokeWidth="3" strokeLinecap="round" />

        {/* Tiny golden cross necklace / spiritual servant pin */}
        <g transform="translate(100, 126)">
          <path d="M0 -5 L0 6 M-4 -2 L4 -2" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          <circle cx="0" cy="0" r="1" fill="#fef08a" />
        </g>
      </svg>
    </div>
  );
};

// 2. Bible Smurf (Sitting peacefully reading the Holy Gospel)
export const BibleSmurf: React.FC<SmurfProps> = ({ className = '', size = 95 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible" fill="none">
        {/* Gentle aura */}
        <circle cx="60" cy="65" r="42" fill="#f0fdf4" opacity="0.7" />
        
        {/* Sitting shadow */}
        <ellipse cx="60" cy="106" rx="35" ry="6" fill="#cbd5e1" opacity="0.4" />

        {/* Cross-legged white pants */}
        <path
          d="M34 94 C34 104 48 106 60 105 C72 106 86 104 86 94 C86 86 78 84 60 84 C42 84 34 86 34 94 Z"
          fill="#ffffff"
          stroke="#e2e8f0"
          strokeWidth="2"
        />
        {/* Shoes */}
        <ellipse cx="36" cy="100" rx="9" ry="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
        <ellipse cx="84" cy="100" rx="9" ry="5" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />

        {/* Torso leaning forward slightly */}
        <ellipse cx="60" cy="74" rx="16" ry="15" fill="#38bdf8" />

        {/* Head tilted down slightly towards the Gospel */}
        <ellipse cx="60" cy="52" rx="18" ry="16" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.2" />

        {/* Closed / Peaceful Reading Eyes */}
        <path d="M51 49 C53 53 57 53 59 49" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M63 49 C65 53 69 53 71 49" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />

        {/* Smurf Nose */}
        <ellipse cx="60" cy="54" rx="6.5" ry="5" fill="#7dd3fc" stroke="#0284c7" strokeWidth="1.2" />

        {/* Gentle peaceful smile */}
        <path d="M55 60 C58 63 62 63 65 60" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />

        {/* Phrygian Hat tilted back */}
        <path
          d="M42 46 C44 30 55 14 74 13 C86 12 95 20 90 30 C86 37 73 35 70 31 C68 26 61 24 55 31 C52 36 49 41 46 47 Z"
          fill="#ffffff"
          stroke="#e2e8f0"
          strokeWidth="2"
        />
        <path d="M42 46 C50 41 72 41 78 46" stroke="#e2e8f0" strokeWidth="2" fill="#ffffff" />

        {/* The Open Holy Bible in his lap */}
        <g transform="translate(60, 82)">
          {/* Bible pages */}
          <path
            d="M-22 -8 C-10 -11 0 -9 0 -5 C0 10 -10 8 -22 6 Z"
            fill="#fffbeb"
            stroke="#fef08a"
            strokeWidth="1.5"
          />
          <path
            d="M22 -8 C10 -11 0 -9 0 -5 C0 10 10 8 22 6 Z"
            fill="#ffffff"
            stroke="#fef08a"
            strokeWidth="1.5"
          />
          {/* Spine & Ribbon */}
          <line x1="0" y1="-7" x2="0" y2="12" stroke="#b45309" strokeWidth="2" />
          <path d="M0 6 C2 12 5 14 2 18" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />

          {/* Tiny cross on page */}
          <path d="M-11 -2 L-11 3 M-13 0 L-9 0" stroke="#d97706" strokeWidth="1.2" />

          {/* Smurf Hands holding sides of Bible */}
          <ellipse cx="-20" cy="0" rx="4" ry="3.5" fill="#38bdf8" />
          <ellipse cx="20" cy="0" rx="4" ry="3.5" fill="#38bdf8" />
        </g>
      </svg>
    </div>
  );
};

// 3. Agpeya Smurf (Holding tiny prayer book with a cross, reverent posture)
export const AgpeyaSmurf: React.FC<SmurfProps> = ({ className = '', size = 95 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible" fill="none">
        {/* Soft prayer candlelight warm glow */}
        <circle cx="60" cy="60" r="42" fill="#fef3c7" opacity="0.5" />
        <ellipse cx="60" cy="106" rx="28" ry="5" fill="#cbd5e1" opacity="0.35" />

        {/* White pants & feet */}
        <path d="M48 85 C46 102 46 104 53 104 C57 104 59 95 61 92 C63 95 65 104 69 104 C76 104 76 102 74 85 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
        <ellipse cx="49" cy="105" rx="8" ry="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
        <ellipse cx="73" cy="105" rx="8" ry="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />

        {/* Torso */}
        <ellipse cx="61" cy="74" rx="16" ry="14" fill="#38bdf8" />

        {/* Head */}
        <ellipse cx="61" cy="50" rx="18" ry="16" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.2" />

        {/* Soft attentive eyes */}
        <circle cx="55" cy="46" r="2.2" fill="#0f172a" />
        <circle cx="67" cy="46" r="2.2" fill="#0f172a" />

        {/* Nose */}
        <ellipse cx="61" cy="51" rx="6" ry="5" fill="#7dd3fc" stroke="#0284c7" strokeWidth="1.2" />

        {/* Warm smile */}
        <path d="M57 58 C59 60 63 60 65 58" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />

        {/* Classic Hat */}
        <path
          d="M43 45 C44 28 55 15 72 14 C84 13 93 21 88 31 C84 38 72 36 69 31 C67 27 60 25 55 31 C52 36 49 41 46 46 Z"
          fill="#ffffff"
          stroke="#e2e8f0"
          strokeWidth="2"
        />
        <path d="M42 45 C50 40 73 40 80 45" stroke="#e2e8f0" strokeWidth="2" fill="#ffffff" />

        {/* Hands holding Burgundy / Red Agpeya Book */}
        <g transform="translate(61, 74)">
          {/* Agpeya Book cover */}
          <rect x="-11" y="-12" width="22" height="26" rx="2" fill="#991b1b" stroke="#7f1d1d" strokeWidth="1.2" />
          {/* Gold cross on Agpeya cover */}
          <path d="M0 -6 L0 6 M-5 -2 L5 -2" stroke="#fef08a" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="0" cy="-2" r="1.2" fill="#ffffff" />

          {/* Smurf blue hands holding the book reverently */}
          <circle cx="-11" cy="0" r="4.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
          <circle cx="11" cy="0" r="4.5" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
};

// 4. Photographer Smurf (Holding a cute camera with flash, ready for memories)
export const PhotographerSmurf: React.FC<SmurfProps> = ({ className = '', size = 95 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible" fill="none">
        <circle cx="60" cy="60" r="42" fill="#fdf2f8" opacity="0.6" />
        <ellipse cx="60" cy="106" rx="28" ry="5" fill="#cbd5e1" opacity="0.35" />

        {/* Legs & Shoes */}
        <path d="M48 85 C46 102 46 104 53 104 C57 104 59 95 61 92 C63 95 65 104 69 104 C76 104 76 102 74 85 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
        <ellipse cx="49" cy="105" rx="8" ry="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
        <ellipse cx="73" cy="105" rx="8" ry="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />

        {/* Torso */}
        <ellipse cx="61" cy="74" rx="16" ry="14" fill="#38bdf8" />

        {/* Head */}
        <ellipse cx="61" cy="50" rx="18" ry="16" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.2" />

        {/* Winking / Focusing one eye for photo */}
        {/* Left eye open with excitement */}
        <ellipse cx="53" cy="45" rx="3.5" ry="4.5" fill="#ffffff" stroke="#0284c7" strokeWidth="1" />
        <circle cx="54" cy="45" r="2" fill="#0f172a" />
        {/* Right eye winking */}
        <path d="M66 45 C68 43 71 43 73 45" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" />

        {/* Nose */}
        <ellipse cx="61" cy="51" rx="6" ry="5" fill="#7dd3fc" stroke="#0284c7" strokeWidth="1.2" />

        {/* Joyful grin */}
        <path d="M55 58 C58 62 64 62 67 58" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />

        {/* Hat */}
        <path
          d="M43 45 C44 28 55 15 72 14 C84 13 93 21 88 31 C84 38 72 36 69 31 C67 27 60 25 55 31 C52 36 49 41 46 46 Z"
          fill="#ffffff"
          stroke="#e2e8f0"
          strokeWidth="2"
        />
        <path d="M42 45 C50 40 73 40 80 45" stroke="#e2e8f0" strokeWidth="2" fill="#ffffff" />

        {/* Camera with strap and flash */}
        <g transform="translate(61, 74)">
          {/* Camera Strap */}
          <path d="M-14 -18 C-10 -8 0 0 0 0 C0 0 10 -8 14 -18" stroke="#475569" strokeWidth="1.5" fill="none" />

          {/* Camera Body */}
          <rect x="-15" y="-6" width="30" height="20" rx="3" fill="#0f172a" stroke="#334155" strokeWidth="1.2" />
          <rect x="-13" y="-4" width="26" height="5" fill="#1e293b" />

          {/* Lens */}
          <circle cx="0" cy="4" r="6" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.5" />
          <circle cx="0" cy="4" r="3.5" fill="#0369a1" />
          <circle cx="1.5" cy="2.5" r="1.2" fill="#ffffff" />

          {/* Flash bulb with tiny sparkle */}
          <rect x="-11" y="-9" width="6" height="3" rx="1" fill="#f8fafc" />
          <polygon points="-8,-12 -6,-8 -4,-12 -8,-10" fill="#fef08a" opacity="0.9" />

          {/* Blue Smurf Hands on camera */}
          <circle cx="-14" cy="2" r="4.5" fill="#38bdf8" />
          <circle cx="14" cy="2" r="4.5" fill="#38bdf8" />
        </g>
      </svg>
    </div>
  );
};

// 5. Announcements Smurf (Holding shiny golden bell and service scroll)
export const AnnouncementsSmurf: React.FC<SmurfProps> = ({ className = '', size = 95 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible" fill="none">
        <circle cx="60" cy="60" r="42" fill="#eff6ff" opacity="0.6" />
        <ellipse cx="60" cy="106" rx="28" ry="5" fill="#cbd5e1" opacity="0.35" />

        {/* Legs & Shoes */}
        <path d="M48 85 C46 102 46 104 53 104 C57 104 59 95 61 92 C63 95 65 104 69 104 C76 104 76 102 74 85 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
        <ellipse cx="49" cy="105" rx="8" ry="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
        <ellipse cx="73" cy="105" rx="8" ry="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />

        {/* Torso */}
        <ellipse cx="61" cy="74" rx="16" ry="14" fill="#38bdf8" />

        {/* Head */}
        <ellipse cx="61" cy="50" rx="18" ry="16" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.2" />

        {/* Alert, energetic eyes */}
        <circle cx="55" cy="46" r="2.5" fill="#0f172a" />
        <circle cx="56" cy="45" r="0.9" fill="#ffffff" />
        <circle cx="67" cy="46" r="2.5" fill="#0f172a" />
        <circle cx="68" cy="45" r="0.9" fill="#ffffff" />

        {/* Nose */}
        <ellipse cx="61" cy="51" rx="6" ry="5" fill="#7dd3fc" stroke="#0284c7" strokeWidth="1.2" />

        {/* Singing / Announcing Mouth */}
        <ellipse cx="61" cy="59" rx="3.5" ry="4" fill="#e11d48" />

        {/* Hat */}
        <path
          d="M43 45 C44 28 55 15 72 14 C84 13 93 21 88 31 C84 38 72 36 69 31 C67 27 60 25 55 31 C52 36 49 41 46 46 Z"
          fill="#ffffff"
          stroke="#e2e8f0"
          strokeWidth="2"
        />
        <path d="M42 45 C50 40 73 40 80 45" stroke="#e2e8f0" strokeWidth="2" fill="#ffffff" />

        {/* Left hand holding rolled announcement parchment */}
        <g transform="translate(44, 76)">
          <path d="M-6 -8 L-6 10 C-6 12 -2 12 -2 10 L-2 -8 Z" fill="#fef3c7" stroke="#d97706" strokeWidth="1" />
          <circle cx="0" cy="0" r="4.5" fill="#38bdf8" />
        </g>

        {/* Right arm lifted holding Golden Ringing Bell */}
        <g transform="translate(80, 58)">
          {/* Ring soundwaves */}
          <path d="M8 -14 C12 -12 14 -8 13 -4" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
          <path d="M-8 -14 C-12 -12 -14 -8 -13 -4" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />

          {/* Bell handle */}
          <rect x="-1.5" y="-12" width="3" height="8" rx="1.5" fill="#78350f" />
          {/* Golden Bell body */}
          <path
            d="M-7 -4 C-6 -8 6 -8 7 -4 C8 2 10 5 11 6 C9 8 -9 8 -11 6 C-10 5 -8 2 -7 -4 Z"
            fill="#fbbf24"
            stroke="#d97706"
            strokeWidth="1.2"
          />
          {/* Bell clapper */}
          <circle cx="0" cy="8" r="2" fill="#b45309" />

          {/* Blue hand */}
          <circle cx="-5" cy="0" r="4.5" fill="#38bdf8" />
        </g>
      </svg>
    </div>
  );
};

// 6. Ideas Smurf (Holding glowing warm light bulb with eureka pose)
export const IdeasSmurf: React.FC<SmurfProps> = ({ className = '', size = 95 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible" fill="none">
        <circle cx="60" cy="60" r="42" fill="#fefce8" opacity="0.7" />
        <ellipse cx="60" cy="106" rx="28" ry="5" fill="#cbd5e1" opacity="0.35" />

        {/* Legs & Shoes */}
        <path d="M48 85 C46 102 46 104 53 104 C57 104 59 95 61 92 C63 95 65 104 69 104 C76 104 76 102 74 85 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
        <ellipse cx="49" cy="105" rx="8" ry="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
        <ellipse cx="73" cy="105" rx="8" ry="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />

        {/* Torso */}
        <ellipse cx="61" cy="74" rx="16" ry="14" fill="#38bdf8" />

        {/* Head */}
        <ellipse cx="61" cy="50" rx="18" ry="16" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.2" />

        {/* Inspired bright eyes */}
        <circle cx="55" cy="46" r="2.5" fill="#0f172a" />
        <circle cx="56" cy="45" r="1" fill="#ffffff" />
        <circle cx="67" cy="46" r="2.5" fill="#0f172a" />
        <circle cx="68" cy="45" r="1" fill="#ffffff" />

        {/* Nose */}
        <ellipse cx="61" cy="51" rx="6" ry="5" fill="#7dd3fc" stroke="#0284c7" strokeWidth="1.2" />

        {/* Big inspired Eureka smile */}
        <path d="M55 58 C58 63 64 63 67 58" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" />

        {/* Hat */}
        <path
          d="M43 45 C44 28 55 15 72 14 C84 13 93 21 88 31 C84 38 72 36 69 31 C67 27 60 25 55 31 C52 36 49 41 46 46 Z"
          fill="#ffffff"
          stroke="#e2e8f0"
          strokeWidth="2"
        />
        <path d="M42 45 C50 40 73 40 80 45" stroke="#e2e8f0" strokeWidth="2" fill="#ffffff" />

        {/* Left hand index finger pointing up "Eureka!" */}
        <g transform="translate(42, 60)">
          <path d="M0 0 L-2 -10 C-2 -12 2 -12 2 -10 L2 0 Z" fill="#38bdf8" stroke="#0284c7" strokeWidth="1" />
          <circle cx="0" cy="0" r="4.5" fill="#38bdf8" />
        </g>

        {/* Right hand holding glowing light bulb */}
        <g transform="translate(80, 56)">
          {/* Glow ring */}
          <circle cx="0" cy="-6" r="14" fill="#fef08a" opacity="0.45" className="animate-pulse-glow" />

          {/* Light rays */}
          <line x1="0" y1="-22" x2="0" y2="-18" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="12" y1="-18" x2="9" y2="-15" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="-12" y1="-18" x2="-9" y2="-15" stroke="#f59e0b" strokeWidth="1.5" strokeLinecap="round" />

          {/* Glass bulb */}
          <path
            d="M-6 -2 C-8 -5 -9 -9 -6 -13 C-3 -17 3 -17 6 -13 C9 -9 8 -5 6 -2 Z"
            fill="#fef08a"
            stroke="#eab308"
            strokeWidth="1.2"
          />
          {/* Bulb base */}
          <rect x="-3" y="-2" width="6" height="4" rx="1" fill="#94a3b8" />

          {/* Smurf blue hand */}
          <circle cx="-3" cy="4" r="4.5" fill="#38bdf8" />
        </g>
      </svg>
    </div>
  );
};

// 7. Verse Smurf (Holding open Bible / verse card with sunbeams)
export const VerseSmurf: React.FC<SmurfProps> = ({ className = '', size = 95 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" className="w-full h-full overflow-visible" fill="none">
        <circle cx="60" cy="60" r="42" fill="#faf5ff" opacity="0.7" />
        <ellipse cx="60" cy="106" rx="28" ry="5" fill="#cbd5e1" opacity="0.35" />

        {/* Legs & Shoes */}
        <path d="M48 85 C46 102 46 104 53 104 C57 104 59 95 61 92 C63 95 65 104 69 104 C76 104 76 102 74 85 Z" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
        <ellipse cx="49" cy="105" rx="8" ry="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />
        <ellipse cx="73" cy="105" rx="8" ry="4" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="1.5" />

        {/* Torso */}
        <ellipse cx="61" cy="74" rx="16" ry="14" fill="#38bdf8" />

        {/* Head */}
        <ellipse cx="61" cy="50" rx="18" ry="16" fill="#38bdf8" stroke="#0284c7" strokeWidth="1.2" />

        {/* Loving, joyful eyes */}
        <circle cx="55" cy="46" r="2.5" fill="#0f172a" />
        <circle cx="56" cy="45" r="1" fill="#ffffff" />
        <circle cx="67" cy="46" r="2.5" fill="#0f172a" />
        <circle cx="68" cy="45" r="1" fill="#ffffff" />

        {/* Nose */}
        <ellipse cx="61" cy="51" rx="6" ry="5" fill="#7dd3fc" stroke="#0284c7" strokeWidth="1.2" />

        {/* Grateful sweet smile */}
        <path d="M56 58 C58 61 64 61 66 58" stroke="#0f172a" strokeWidth="1.5" strokeLinecap="round" />

        {/* Hat */}
        <path
          d="M43 45 C44 28 55 15 72 14 C84 13 93 21 88 31 C84 38 72 36 69 31 C67 27 60 25 55 31 C52 36 49 41 46 46 Z"
          fill="#ffffff"
          stroke="#e2e8f0"
          strokeWidth="2"
        />
        <path d="M42 45 C50 40 73 40 80 45" stroke="#e2e8f0" strokeWidth="2" fill="#ffffff" />

        {/* Hands presenting illuminated parchment / verse card */}
        <g transform="translate(61, 74)">
          {/* Subtle heavenly rays behind tablet */}
          <circle cx="0" cy="2" r="18" fill="#fef08a" opacity="0.3" />

          {/* Parchment verse card */}
          <rect x="-16" y="-8" width="32" height="22" rx="3" fill="#ffffff" stroke="#cbd5e1" strokeWidth="1.2" />
          <rect x="-14" y="-6" width="28" height="18" rx="2" fill="#f8fafc" />

          {/* Calligraphic verse lines representation */}
          <line x1="-10" y1="-2" x2="10" y2="-2" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" />
          <line x1="-8" y1="2" x2="8" y2="2" stroke="#64748b" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="-5" y1="6" x2="5" y2="6" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" />

          {/* Little red heart / cross symbol on top */}
          <circle cx="0" cy="-6" r="2" fill="#f43f5e" />

          {/* Smurf hands holding the edges */}
          <circle cx="-16" cy="3" r="4.5" fill="#38bdf8" />
          <circle cx="16" cy="3" r="4.5" fill="#38bdf8" />
        </g>
      </svg>
    </div>
  );
};
