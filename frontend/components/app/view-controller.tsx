'use client';

import { useRef } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useRoomContext } from '@livekit/components-react';
import { useSession } from '@/components/app/session-provider';
import { SessionView } from '@/components/app/session-view';
import { WelcomeView } from '@/components/app/welcome-view';

const MotionWelcomeView = motion.create(WelcomeView);
const MotionSessionView = motion.create(SessionView);

const VIEW_MOTION_PROPS = {
  variants: {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'hidden',
  transition: { duration: 0.5, ease: 'linear' },
};

export function ViewController() {
  const room = useRoomContext();
  const isSessionActiveRef = useRef(false);
  const { appConfig, isSessionActive, startSession } = useSession();

  isSessionActiveRef.current = isSessionActive;

  const handleAnimationComplete = () => {
    if (!isSessionActiveRef.current && room.state !== 'disconnected') {
      room.disconnect();
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans bg-black">
      
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950" />
        
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-purple-600 mix-blend-screen blur-[120px] opacity-70 animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-500 mix-blend-screen blur-[100px] opacity-60 animate-pulse" />
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-pink-600 mix-blend-screen blur-[110px] opacity-65 animate-pulse" />
        <div className="absolute bottom-[10%] right-[40%] w-[40vw] h-[40vw] rounded-full bg-yellow-500 mix-blend-screen blur-[90px] opacity-50 animate-pulse" />

        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 z-0 
        font-extrabold select-none leading-tight tracking-wider text-[4rem] md:text-[5.5rem] 
        drop-shadow-2xl"
      >
        <div className="whitespace-pre-line text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-white/10">
          Voice Improv{"\n"}Battle
          <div className="text-white/40 text-4xl md:text-5xl mt-4 font-bold tracking-normal">
            By <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Ricochet</span>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {!isSessionActive && (
          <MotionWelcomeView
            key="welcome"
            {...VIEW_MOTION_PROPS}
            startButtonText={appConfig.startButtonText}
            onStartCall={startSession}
            className="relative z-10"
          />
        )}

        {isSessionActive && (
          <MotionSessionView
            key="session-view"
            {...VIEW_MOTION_PROPS}
            appConfig={appConfig}
            onAnimationComplete={handleAnimationComplete}
            className="relative z-10"
          />
        )}
      </AnimatePresence>
    </div>
  );
}
