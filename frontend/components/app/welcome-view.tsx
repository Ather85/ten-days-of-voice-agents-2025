import React, { useState } from 'react';
import { Button } from '@/components/livekit/button';

function AnimatedRobot() {
  return (
    <div className="relative mb-6">
      <svg
        width="80"
        height="80"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_20px_rgba(168,85,247,0.6)]"
      >
        {/* Antenna */}
        <line x1="50" y1="10" x2="50" y2="20" stroke="url(#gradient1)" strokeWidth="3" strokeLinecap="round">
          <animate attributeName="y2" values="20;25;20" dur="1.5s" repeatCount="indefinite" />
        </line>
        <circle cx="50" cy="10" r="4" fill="url(#gradient1)">
          <animate attributeName="r" values="4;5;4" dur="1.5s" repeatCount="indefinite" />
        </circle>
        
        {/* Head */}
        <rect x="30" y="20" width="40" height="35" rx="8" fill="url(#gradient2)" stroke="url(#gradient1)" strokeWidth="2" />
        
        {/* Eyes */}
        <circle cx="40" cy="35" r="5" fill="#00ffff">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="60" cy="35" r="5" fill="#00ffff">
          <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
        </circle>
        
        {/* Mouth */}
        <path d="M 40 45 Q 50 50 60 45" stroke="#ff00ff" strokeWidth="2" fill="none" strokeLinecap="round">
          <animate attributeName="d" values="M 40 45 Q 50 50 60 45;M 40 45 Q 50 48 60 45;M 40 45 Q 50 50 60 45" dur="3s" repeatCount="indefinite" />
        </path>
        
        {/* Body */}
        <rect x="25" y="55" width="50" height="30" rx="5" fill="url(#gradient3)" stroke="url(#gradient1)" strokeWidth="2" />
        
        {/* Body details */}
        <circle cx="50" cy="70" r="6" fill="#ff00ff" opacity="0.6">
          <animate attributeName="r" values="6;7;6" dur="2s" repeatCount="indefinite" />
        </circle>
        
        {/* Arms */}
        <rect x="15" y="60" width="8" height="20" rx="4" fill="url(#gradient2)">
          <animateTransform attributeName="transform" type="rotate" values="0 19 60;-15 19 60;0 19 60" dur="2s" repeatCount="indefinite" />
        </rect>
        <rect x="77" y="60" width="8" height="20" rx="4" fill="url(#gradient2)">
          <animateTransform attributeName="transform" type="rotate" values="0 81 60;15 81 60;0 81 60" dur="2s" repeatCount="indefinite" />
        </rect>
        
        {/* Legs */}
        <rect x="35" y="85" width="10" height="12" rx="2" fill="url(#gradient2)" />
        <rect x="55" y="85" width="10" height="12" rx="2" fill="url(#gradient2)" />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function RetroTvIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
      <polyline points="17 2 12 7 7 2" />
    </svg>
  );
}

export const WelcomeView = React.forwardRef<HTMLDivElement, any>(
  ({ startButtonText, onStartCall }, ref) => {
    const [name, setName] = useState('');
    const [started, setStarted] = useState(false);

    async function handleStart() {
      setStarted(true);
      onStartCall?.(name.trim());
    }

    return (
      <div
        ref={ref}
        className="min-h-screen w-full flex flex-col justify-center 
        items-center md:items-end md:pr-24 lg:pr-32
        bg-transparent text-white"
      >
        {!started && (
          <section className="relative flex flex-col items-center text-center p-8 
          bg-gradient-to-br from-purple-900/40 via-slate-900/60 to-pink-900/40 
          backdrop-blur-xl rounded-3xl overflow-hidden
          shadow-[0_0_60px_rgba(168,85,247,0.5),0_0_120px_rgba(236,72,153,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]
          border border-white/20
          w-full max-w-md mx-4 md:mx-0">
            
            {/* === DECORATIVE ICONS & EMOJIS === */}
            <RetroTvIcon className="absolute top-4 right-4 w-10 h-10 text-cyan-400 -rotate-12 pointer-events-none drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] opacity-90" />
            <RetroTvIcon className="absolute bottom-16 left-2 w-8 h-8 text-pink-500 rotate-6 pointer-events-none drop-shadow-[0_0_8px_rgba(236,72,153,0.6)] opacity-90" />
            
            <div className="absolute top-10 left-6 text-3xl opacity-90 rotate-[-15deg] pointer-events-none select-none drop-shadow-[0_0_12px_rgba(253,224,71,0.5)]">
              🎭
            </div>
            <div className="absolute bottom-4 right-6 text-2xl opacity-90 rotate-[10deg] pointer-events-none select-none drop-shadow-[0_0_12px_rgba(239,68,68,0.5)]">
              🤣
            </div>
             <div className="absolute top-1/2 left-2 text-xl opacity-90 -rotate-[20deg] pointer-events-none select-none drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]">
              🎤
            </div>

            <AnimatedRobot />

            <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-3 drop-shadow-lg tracking-tight z-10 relative">
              Ready to Battle?
            </h2>
            <p className="max-w-prose leading-6 font-semibold text-white/90 z-10 relative mb-1">
              Enter your name to join the improv showdown
            </p>
            <p className="text-xs text-cyan-300/80 font-medium z-10 relative">
              🎭 Get ready for comedy chaos!
            </p>

            <div className="mt-8 w-full z-10 relative">
              <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-left text-white/60 ml-1">
                Your Stage Name
              </label>
              
              {/* INPUT AND BUTTON ROW */}
              <div className="flex w-full items-stretch gap-2">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleStart();
                  }}
                  placeholder="Your epic name..."
                  className="flex-1 rounded-xl border-2 border-purple-500/30 px-4 py-3 
                  bg-slate-900/50 text-white placeholder:text-purple-300/40 font-semibold
                  backdrop-blur-sm
                  focus:outline-none focus:ring-2 focus:ring-cyan-400/60 focus:border-cyan-400/60
                  transition-all duration-200"
                />

                <Button
                  variant="primary"
                  size="default"
                  onClick={handleStart}
                  className="px-6 rounded-xl font-black uppercase
                  bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 
                  text-white border-none
                  hover:from-cyan-300 hover:via-purple-400 hover:to-pink-400
                  shadow-[0_0_20px_rgba(168,85,247,0.6)] 
                  hover:shadow-[0_0_30px_rgba(168,85,247,0.8)]
                  transform hover:scale-105 transition-all flex items-center justify-center"
                >
                  {/* Arrow Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                  </svg>
                </Button>
              </div>
            </div>

            <div className="mt-4 text-[11px] text-cyan-300/60 font-bold uppercase tracking-widest z-10 relative">
              ⚡ Press Enter to Start ⚡
            </div>
          </section>
        )}

        {started && (
          <div className="text-center text-white text-2xl font-bold animate-pulse md:pr-12 drop-shadow-lg">
            🔥 Getting things ready…
          </div>
        )}
      </div>
    );
  }
);

WelcomeView.displayName = 'WelcomeView';
