import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { birthdayConfig } from '../data/birthdayConfig';

const FinalSurprise = () => {
  const [phase, setPhase] = useState('wait'); // wait -> 3 -> 2 -> 1 -> reveal -> final-photo

  useEffect(() => {
    const sequence = async () => {
      await new Promise(r => setTimeout(r, 4000));
      setPhase('3');
      await new Promise(r => setTimeout(r, 1500));
      setPhase('2');
      await new Promise(r => setTimeout(r, 1500));
      setPhase('1');
      await new Promise(r => setTimeout(r, 1500));
      setPhase('reveal');
      await new Promise(r => setTimeout(r, 12000));
      setPhase('final-photo');
    };
    sequence();
  }, []);

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden flex items-center justify-center">
      <AnimatePresence mode="wait">
        
        {phase === 'wait' && (
          <motion.div
            key="wait"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center space-y-6 text-center"
          >
            <p className="font-sans text-xl text-text-muted tracking-[0.2em] uppercase">Wait...</p>
            <p className="font-playfair text-3xl md:text-5xl font-light text-text-main">
              There's one more thing.
            </p>
          </motion.div>
        )}

        {(phase === '3' || phase === '2' || phase === '1') && (
          <motion.div
            key={phase}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.8 }}
            className="absolute font-playfair text-[150px] md:text-[250px] font-thin text-text-main text-glow"
          >
            {phase}
          </motion.div>
        )}

        {phase === 'reveal' && (
          <motion.div
            key="reveal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full"
          >
            <div className="absolute inset-0 -z-10 bg-love-pink rounded-full blur-[150px] opacity-20" />
            
            {/* 1. First display (shows and fades out) */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
              transition={{ duration: 3, times: [0, 0.2, 0.8, 1] }}
              className="absolute font-cormorant text-2xl md:text-4xl text-text-muted italic px-4"
            >
              There’s something I’ve been wanting to say...
            </motion.p>

            {/* The rest of the messages appear and stay on a single screen */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 3.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center space-y-12 px-4"
            >
              {/* 2. Top */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 3.5 }}
                className="font-playfair text-xl md:text-3xl font-light text-text-muted tracking-wide text-center"
              >
                You mean more to me than words can ever explain.
              </motion.p>

              {/* 3. Main emotional reveal */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 5 }}
                className="flex flex-col items-center"
              >
                <h1 className="font-playfair text-5xl md:text-7xl lg:text-[6rem] font-thin tracking-widest text-text-main text-glow mb-6">
                  I Love You.
                </h1>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }} 
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="text-love-rose text-4xl md:text-6xl drop-shadow-[0_0_20px_rgba(249,168,192,0.8)]"
                >
                  ❤️
                </motion.div>
              </motion.div>

              {/* 4. Bottom */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, delay: 6.5 }}
                className="flex flex-col items-center space-y-2 font-cormorant text-xl md:text-3xl text-text-muted italic text-center"
              >
                <p>And I hope you know...</p>
                <p>you’ll always have a special place in my heart.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {phase === 'final-photo' && (
          <motion.div
            key="final-photo"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 flex flex-col md:flex-row bg-gradient-to-br from-[#080305] via-[#170a10] to-[#080305] overflow-y-auto overflow-x-hidden md:overflow-hidden pb-12 md:pb-0"
          >
            {/* Ambient Romantic Background Elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
              <div className="absolute top-[10%] left-[20%] w-[40vw] h-[40vw] bg-rose-900/10 rounded-full blur-[120px] mix-blend-screen" />
              <div className="absolute bottom-[20%] right-[10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[150px] mix-blend-screen" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-wine-900/5 rounded-full blur-[100px]" />
              
              {/* Floating particles */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-rose-200/20 rounded-full shadow-[0_0_8px_rgba(255,200,200,0.4)]"
                  initial={{
                    y: "110vh",
                    x: `${Math.random() * 100}vw`,
                    scale: Math.random() * 1.5 + 0.5,
                    opacity: 0,
                  }}
                  animate={{
                    y: "-10vh",
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 20 + 20,
                    repeat: Infinity,
                    delay: Math.random() * 10,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            {/* Left Column: Text (Desktop 60%, Mobile auto) */}
            <div className="relative z-10 flex flex-col justify-center items-center md:items-start text-center md:text-left w-full md:w-[60%] h-[55vh] md:h-full px-8 md:pl-24 pt-10 md:pt-0">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, delay: 0.5 }}
                className="font-playfair text-lg md:text-2xl font-light tracking-[0.4em] text-text-muted/80 uppercase mb-4"
              >
                Happy Birthday
              </motion.h2>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2.5, delay: 1, ease: "easeOut" }}
                className="font-playfair text-[9vw] sm:text-5xl md:text-7xl lg:text-[7rem] font-thin tracking-widest text-text-main text-glow uppercase mb-8 md:mb-12 whitespace-nowrap w-full px-2"
              >
                {birthdayConfig.name}
              </motion.h1>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, delay: 2 }}
                className="text-love-rose text-2xl md:text-3xl mb-8 md:mb-12 animate-pulse-slow drop-shadow-[0_0_15px_rgba(255,100,150,0.3)]"
              >
                ❤️
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, delay: 2.5 }}
                className="font-sans text-xs md:text-sm font-light tracking-[0.4em] text-text-muted/90 uppercase space-y-3"
              >
                <p>Keep smiling.</p>
                <p>Keep shining.</p>
                <p className="pt-2">Always.</p>
              </motion.div>
            </div>

            {/* Right Column: Photo (Desktop 40%, Mobile auto) */}
            <div className="relative z-10 flex flex-col justify-start md:justify-center items-center w-full md:w-[40%] h-[45vh] md:h-full px-8 pb-16 md:pb-0">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 2.5, delay: 1.5, ease: "easeOut" }}
                className="relative w-full max-w-[260px] md:max-w-[380px] aspect-[3/4] rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/5"
                style={{ 
                  boxShadow: '0 0 60px rgba(120, 30, 60, 0.2), inset 0 0 20px rgba(255,255,255,0.05)',
                  maskImage: 'radial-gradient(ellipse at center, black 65%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse at center, black 65%, transparent 100%)'
                }}
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#0a0508]/40 via-transparent to-transparent pointer-events-none" />
                <img 
                  src="/photos/photo4.jpg" 
                  alt="Mirudhula" 
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            </div>

            {/* Footer Caption */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2.5, delay: 3 }}
              className="relative md:absolute mt-4 pb-8 md:pb-0 md:bottom-6 left-0 right-0 md:left-24 md:right-auto text-center md:text-left z-20 w-full md:w-auto"
            >
              <div className="font-playfair text-white/90 text-lg md:text-xl italic tracking-[0.1em] font-medium drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
                Crafted with endless love by Guna
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FinalSurprise;
