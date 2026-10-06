import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WelcomeScreen = ({ onNext }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1000); // Particles appear early
    const timer2 = setTimeout(() => setStep(2), 2500); // "Hey, beautiful..."
    const timer3 = setTimeout(() => setStep(3), 5000); // "Someone made..."
    const timer4 = setTimeout(() => setStep(4), 7500); // Button

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-midnight-bg overflow-hidden px-4">
      {/* Background Particles / Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-1/4 left-1/4 w-32 h-32 bg-love-pink rounded-full blur-[100px] opacity-20"
          />
        )}
        {step >= 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-love-rose rounded-full blur-[120px] opacity-10"
          />
        )}
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center text-center space-y-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 1 ? 1 : 0 }}
          transition={{ duration: 2 }}
          className="text-accent-gold text-2xl"
        >
          ✦
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: step >= 2 ? 1 : 0, y: step >= 2 ? 0 : 10 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="font-playfair text-3xl md:text-5xl font-light tracking-wide text-text-main"
        >
          Hey, beautiful...
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 3 ? 1 : 0 }}
          transition={{ duration: 2 }}
          className="text-accent-gold text-2xl"
        >
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: step >= 3 ? 1 : 0, y: step >= 3 ? 0 : 10 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="font-cormorant text-2xl md:text-4xl text-text-muted leading-relaxed"
        >
          <p>Someone made</p>
          <p>something special</p>
          <p>for you.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 4 ? 1 : 0 }}
          transition={{ duration: 1.5 }}
          className="text-text-muted text-xl pt-4"
        >
          ↓
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: step >= 4 ? 1 : 0, scale: step >= 4 ? 1 : 0.9 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          onClick={onNext}
          disabled={step < 4}
          className={`px-8 py-3 rounded-full border border-love-rose/30 bg-white/5 backdrop-blur-sm
                     text-text-main font-sans tracking-widest text-sm hover:scale-105 hover:bg-white/10
                     hover:border-love-rose/60 transition-all duration-500 hover:shadow-[0_0_20px_rgba(217,70,114,0.3)]
                     ${step < 4 ? 'cursor-default pointer-events-none' : 'cursor-pointer'}`}
        >
          🎁 OPEN IT
        </motion.button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
