import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Phase 0: Character waves & says "Hi!"
    // Phase 1: Says "Welcome to my portfolio!"
    // Phase 2: Says "Initializing workspace..."
    // Phase 3: "Let's build something great!" -> Portal Opens

    const phaseTimer1 = setTimeout(() => setPhase(1), 600);
    const phaseTimer2 = setTimeout(() => setPhase(2), 1400);
    const phaseTimer3 = setTimeout(() => setPhase(3), 2100);

    // Progress counter: smoothly fills up to 100% over ~2.4 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 80);

    const completeTimer = setTimeout(() => {
      triggerExit();
    }, 2800);

    return () => {
      clearTimeout(phaseTimer1);
      clearTimeout(phaseTimer2);
      clearTimeout(phaseTimer3);
      clearTimeout(completeTimer);
      clearInterval(interval);
    };
  }, []);

  const triggerExit = () => {
    setIsExiting(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 700);
  };

  const dialogMessages = [
    'Hey there! 👋',
    "I'm Jashvanth Balakirushnan",
    'Full-Stack Software Engineer 💻',
    'Entering Portfolio Gateway... 🚀',
  ];

  return (
    <div className={`loading-portal-screen${isExiting ? ' exit' : ''}`} aria-label="Loading Portfolio">
      {/* Background ambient cyber glow grid */}
      <div className="portal-grid-bg" />
      <div className="portal-light-beam" />

      {/* Skip button for quick access */}
      <button className="skip-intro-btn" onClick={triggerExit} aria-label="Skip Introduction">
        Skip Intro ➔
      </button>

      <div className="portal-content">
        {/* Animated Speech Bubble */}
        <div className="portal-speech-bubble" key={phase}>
          <span className="speech-icon">💬</span>
          <span className="speech-text">{dialogMessages[phase]}</span>
        </div>

        {/* Character Illustration SVG */}
        <div className="portal-character-container">
          <svg
            className="dev-character-svg"
            viewBox="0 0 200 220"
            width="170"
            height="187"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="hoodieGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff6b1a" />
                <stop offset="100%" stopColor="#00b4d8" />
              </linearGradient>
              <linearGradient id="laptopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="screenGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d2ff" />
                <stop offset="100%" stopColor="#ff6b1a" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Ambient character glow */}
            <circle cx="100" cy="110" r="75" fill="rgba(0, 210, 255, 0.15)" filter="url(#glow)" />

            {/* Body / Hoodie */}
            <path
              d="M 60 160 C 60 130, 80 120, 100 120 C 120 120, 140 130, 140 160 L 155 200 L 45 200 Z"
              fill="url(#hoodieGrad)"
            />

            {/* Hoodie strings / zipper */}
            <line x1="100" y1="125" x2="100" y2="165" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5" />
            <circle cx="95" cy="165" r="2.5" fill="#ffffff" />
            <circle cx="105" cy="165" r="2.5" fill="#ffffff" />

            {/* Neck */}
            <rect x="92" y="105" width="16" height="18" rx="4" fill="#fcd34d" />

            {/* Head */}
            <ellipse cx="100" cy="85" rx="28" ry="30" fill="#fcd34d" />

            {/* Hair / Stylish Modern Cut */}
            <path
              d="M 72 82 C 72 58, 82 48, 100 48 C 118 48, 128 58, 128 82 C 124 74, 115 68, 100 68 C 85 68, 76 74, 72 82 Z"
              fill="#1e1b4b"
            />
            {/* Front hair tuft */}
            <path d="M 80 62 Q 95 48 115 54 Q 105 65 95 65 Z" fill="#312e81" />

            {/* Glasses */}
            <rect x="80" y="76" width="16" height="12" rx="3" fill="none" stroke="#0f172a" strokeWidth="2.5" />
            <rect x="104" y="76" width="16" height="12" rx="3" fill="none" stroke="#0f172a" strokeWidth="2.5" />
            <line x1="96" y1="82" x2="104" y2="82" stroke="#0f172a" strokeWidth="2.5" />

            {/* Eyes behind glasses */}
            <circle cx="88" cy="82" r="2.5" fill="#0f172a" className="char-eye" />
            <circle cx="112" cy="82" r="2.5" fill="#0f172a" className="char-eye" />

            {/* Friendly Smile */}
            <path d="M 93 96 Q 100 102 107 96" fill="none" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" />

            {/* Cheeks / Blush */}
            <ellipse cx="78" cy="91" rx="4" ry="2" fill="rgba(244, 63, 94, 0.3)" />
            <ellipse cx="122" cy="91" rx="4" ry="2" fill="rgba(244, 63, 94, 0.3)" />

            {/* Headset / Developer Headphone */}
            <path d="M 68 85 A 33 33 0 0 1 132 85" fill="none" stroke="#0284c7" strokeWidth="4.5" strokeLinecap="round" />
            <rect x="65" y="78" width="8" height="18" rx="4" fill="#0284c7" />
            <rect x="127" y="78" width="8" height="18" rx="4" fill="#0284c7" />

            {/* Left Hand Resting / Holding Laptop */}
            <ellipse cx="64" cy="172" rx="8" ry="7" fill="#fcd34d" />

            {/* Right Arm & Hand Waving 👋 */}
            <g className="waving-arm-group">
              {/* Upper arm */}
              <path
                d="M 135 140 Q 155 125 160 105"
                fill="none"
                stroke="url(#hoodieGrad)"
                strokeWidth="16"
                strokeLinecap="round"
              />
              {/* Hand with waving gesture */}
              <circle cx="162" cy="95" r="9" fill="#fcd34d" />
              {/* Fingers */}
              <rect x="157" y="81" width="3.5" height="10" rx="1.8" fill="#fcd34d" transform="rotate(-15 157 81)" />
              <rect x="162" y="80" width="3.5" height="11" rx="1.8" fill="#fcd34d" transform="rotate(5 162 80)" />
              <rect x="167" y="82" width="3.5" height="10" rx="1.8" fill="#fcd34d" transform="rotate(20 167 82)" />
              <rect x="152" y="90" width="3.5" height="8" rx="1.8" fill="#fcd34d" transform="rotate(-40 152 90)" />
            </g>

            {/* Glowing Laptop in front */}
            <g transform="translate(62, 168)">
              {/* Laptop Screen */}
              <rect x="8" y="0" width="60" height="38" rx="3" fill="url(#laptopGrad)" stroke="#334155" strokeWidth="1.5" />
              {/* Glowing Code on Screen */}
              <rect x="11" y="3" width="54" height="32" rx="2" fill="#0b1120" />
              <line x1="15" y1="10" x2="35" y2="10" stroke="#00d2ff" strokeWidth="2" strokeLinecap="round" />
              <line x1="15" y1="16" x2="55" y2="16" stroke="#ff6b1a" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="20" y1="22" x2="48" y2="22" stroke="#a78bfa" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="20" y1="28" x2="38" y2="28" stroke="#34d399" strokeWidth="1.8" strokeLinecap="round" />
              {/* Laptop Logo */}
              <circle cx="38" cy="19" r="3" fill="url(#screenGlow)" filter="url(#glow)" />
              {/* Laptop Keyboard Base */}
              <path d="M 0 38 L 76 38 L 70 45 L 6 45 Z" fill="#1e293b" />
              {/* Trackpad */}
              <rect x="30" y="40" width="16" height="3" rx="1" fill="#475569" />
            </g>
          </svg>
        </div>

        {/* Brand identity */}
        <div className="portal-brand-block">
          <h2 className="portal-dev-name">
            <span className="portal-highlight">baLki</span>JasH
          </h2>
          <p className="portal-dev-title">Crafting Scalable Full-Stack Systems</p>
        </div>

        {/* Futuristic Circuit Progress Bar */}
        <div className="portal-progress-wrapper">
          <div className="portal-progress-track">
            <div className="portal-progress-fill" style={{ width: `${progress}%` }}>
              <div className="portal-progress-glow" />
            </div>
          </div>
          <div className="portal-progress-meta">
            <span className="portal-loading-status">
              {progress < 40 ? 'Loading Modules...' : progress < 80 ? 'Compiling Architecture...' : 'Ready to Launch!'}
            </span>
            <span className="portal-percent">{progress}%</span>
          </div>
        </div>

        {/* Enter Portfolio Button */}
        <button
          className={`portal-enter-btn${progress >= 90 ? ' ready' : ''}`}
          onClick={triggerExit}
        >
          <span>Enter Portfolio</span>
          <span className="portal-enter-arrow">➔</span>
        </button>
      </div>
    </div>
  );
}
