import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Achievement {
  year: string;
  text: string;
}

interface JukeboxAchievementsProps {
  achievements: Achievement[];
}

export default function JukeboxAchievements({ achievements }: JukeboxAchievementsProps) {
  const [selectedItem, setSelectedItem] = useState<Achievement | null>(null);
  const [isMobile, setIsMobile] = useState(true);

  // Monitor screen size to switch between mobile grid and desktop fanned Jukebox
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    setIsMobile(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Handle Escape key to close the modal
  useEffect(() => {
    if (!selectedItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  const centerIndex = (achievements.length - 1) / 2;

  // Mobile layout: Return the clean 3D layered glassmorphism grid list
  if (isMobile) {
    return (
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {achievements.map((item) => (
          <div key={item.year} className="relative group z-0 isolate flex flex-col h-full">
            {/* Layered background glass panels */}
            <div className="absolute inset-0 rounded-2xl bg-white/[0.01] border border-white/5 translate-x-3 translate-y-3 rotate-1 -z-20 transition duration-500 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:rotate-2"></div>
            <div className="absolute inset-0 rounded-2xl bg-white/[0.02] border border-white/5 translate-x-1.5 translate-y-1.5 -rotate-1 -z-10 transition duration-500 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:-rotate-2"></div>
            
            <article className="flex flex-col flex-1 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/10 hover:border-eagles-red/40 hover:shadow-[0_0_20px_rgba(225,29,72,0.35),0_4px_30px_rgba(0,0,0,0.1)] p-6 transition duration-300">
              <h3 className="mb-3 text-3xl font-black text-eagles-red">{item.year}</h3>
              <p className="text-sm leading-relaxed text-white/80 sm:text-base flex-1">
                {item.text}
              </p>
            </article>
          </div>
        ))}
      </div>
    );
  }

  // Desktop layout: Jukebox reel fanned layout
  return (
    <div className="relative mt-6 select-none">
      {/* Crate Deck Area containing fanned out cards */}
      <div className="relative w-full h-[260px] mx-auto overflow-visible flex items-center justify-center">
        {achievements.map((item, idx) => {
          const isSelected = selectedItem?.year === item.year;
          
          // Math-based arc fanning translation/rotation
          const xOffset = (idx - centerIndex) * 230;
          const rotateAngle = (idx - centerIndex) * 12;
          const yOffset = Math.abs(idx - centerIndex) * 15;

          return (
            <motion.div
              key={item.year}
              layoutId={isSelected ? undefined : `card-${item.year}`}
              onClick={() => setSelectedItem(item)}
              style={{ originY: 1 }}
              initial={{
                x: xOffset,
                rotate: rotateAngle,
                y: yOffset,
                scale: 1,
                zIndex: idx
              }}
              animate={{
                x: xOffset,
                rotate: rotateAngle,
                y: yOffset,
                scale: 1,
                zIndex: idx,
                opacity: isSelected ? 0.35 : 1 // Keep background card fully visible but slightly faded when selected in modal
              }}
              whileHover={{
                rotate: isSelected ? rotateAngle : 0,
                scale: isSelected ? 1 : 1.05,
                y: isSelected ? yOffset : -10,
                zIndex: 20,
                transition: { duration: 0.2, ease: "easeOut" }
              }}
              className="absolute bottom-2 left-1/2 -ml-[130px] w-[260px] h-[190px] flex flex-col justify-between rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-white/10 hover:border-eagles-red/40 hover:shadow-[0_0_20px_rgba(225,29,72,0.35),0_4px_30px_rgba(0,0,0,0.1)] p-6 transition-colors duration-300 cursor-zoom-in group"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-3xl font-black text-eagles-red tracking-tight">{item.year}</h3>
              </div>
              
              <p className="text-xs text-white/80 line-clamp-3 leading-relaxed flex-1 mt-3">
                {item.text}
              </p>

              <span className="text-[9px] font-bold uppercase tracking-widest text-white/30 self-end mt-2 group-hover:text-eagles-red/60 transition">
                View Details
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Jukebox Platter Player Overlay (Zoomed-in View) */}
      <AnimatePresence>
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 cursor-zoom-out"
            onClick={() => setSelectedItem(null)}
          >
            {/* Centered magnified card container */}
            <motion.div
              layoutId={`card-${selectedItem.year}`}
              initial={{ rotate: -180, scale: 0.8 }}
              animate={{ rotate: 0, scale: 1.1 }}
              exit={{ rotate: 180, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 180, damping: 20 }}
              className="relative w-full max-w-lg p-8 rounded-3xl backdrop-blur-2xl bg-neutral-950/90 border border-white/15 shadow-[0_0_40px_rgba(225,29,72,0.3)] cursor-default text-left m-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Platter Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-eagles-red hover:bg-eagles-red/20 text-white/60 hover:text-white flex items-center justify-center transition"
                aria-label="Close details"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-4 mb-4 border-b border-white/5 pb-4">
                <h3 className="text-5xl font-black text-white leading-none tracking-tighter">
                  {selectedItem.year}
                </h3>
              </div>

              <p className="text-lg leading-relaxed text-white/90 font-medium">
                {selectedItem.text}
              </p>

              <div className="mt-8 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-white/30 border-t border-white/5 pt-4">
                <span>Eagles United WFC</span>
                <span>Achievement</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
