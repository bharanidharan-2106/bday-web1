import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig } from '../data/birthdayConfig';

const NameReveal = ({ onNext }) => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1000); // Sparkle
    const timer2 = setTimeout(() => setStep(2), 2500); // NAME
    const timer3 = setTimeout(() => setStep(3), 5000); // "Today is a little different..."
    const timer4 = setTimeout(() => setStep(4), 7500); // "Because today"
    const timer5 = setTimeout(() => setStep(5), 10000); // "YOU ARE THE STAR" + heart
    const timer6 = setTimeout(() => setStep(6), 13500); // Transition to "Happy Birthday"
    const timer7 = setTimeout(() => setStep(7), 18000); // Move to next screen

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
      clearTimeout(timer7);
    };
  }, []);

  useEffect(() => {
    if (step === 7) {
      onNext();
    }
  }, [step, onNext]);

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-midnight-bg overflow-hidden px-4">
      {/* Background glow for the name */}
      {step >= 2 && step < 6 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="absolute w-[300px] h-[300px] bg-love-rose rounded-full blur-[150px] opacity-20"
        />
      )}

      {/* Part 1 */}
      {step < 6 && (
        <div className="z-10 flex flex-col items-center text-center space-y-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: step >= 1 ? 1 : 0 }}
            transition={{ duration: 2 }}
            className="text-accent-gold text-2xl"
          >
            ✨
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, filter: 'blur(20px)', scale: 0.9 }}
            animate={{ opacity: step >= 2 ? 1 : 0, filter: step >= 2 ? 'blur(0px)' : 'blur(20px)', scale: step >= 2 ? 1 : 0.9 }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="font-playfair text-3xl sm:text-5xl md:text-7xl font-thin tracking-widest md:tracking-[0.3em] uppercase text-text-main text-glow break-words w-full px-2"
          >
            {birthdayConfig.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: step >= 3 ? 1 : 0, y: step >= 3 ? 0 : 10 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="font-cormorant text-xl md:text-3xl text-text-muted italic pt-4"
          >
            Today is a little different...
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: step >= 4 ? 1 : 0, y: step >= 4 ? 0 : 10 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="font-cormorant text-xl md:text-3xl text-text-muted"
          >
            Because today
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: step >= 5 ? 1 : 0, scale: step >= 5 ? 1 : 0.9 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="flex flex-col items-center space-y-6 pt-6"
          >
            <h2 className="font-playfair text-3xl md:text-5xl font-light tracking-widest text-text-main">
              YOU ARE THE STAR
            </h2>
            <div className="text-love-rose text-2xl animate-pulse-slow">❤️</div>
          </motion.div>
        </div>
      )}

      {/* Part 2 */}
      {step >= 6 && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="z-10 flex flex-col items-center text-center space-y-8"
        >
          <h2 className="font-playfair text-4xl md:text-6xl font-light text-text-muted italic">
            Happy Birthday,
          </h2>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-7xl font-thin tracking-widest md:tracking-[0.2em] uppercase text-text-main text-glow flex items-center gap-2 md:gap-4 break-words w-full justify-center px-2">
            {birthdayConfig.nickname} <span className="text-love-rose text-2xl md:text-4xl shrink-0">❤️</span>
          </h1>
        </motion.div>
      )}
    </div>
  );
};

export default NameReveal;
