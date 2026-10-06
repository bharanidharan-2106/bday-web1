import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SurpriseScreen = ({ onNext }) => {
  const [step, setStep] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1000); // "This little surprise..."
    const timer2 = setTimeout(() => setStep(2), 3500); // Heart
    const timer3 = setTimeout(() => setStep(3), 5000); // "Are you ready?"
    const timer4 = setTimeout(() => setStep(4), 7000); // Button

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onNext();
    }, 2000); // Dramatic transition time
  };

  return (
    <motion.div 
      className="relative h-screen w-full flex flex-col items-center justify-center bg-midnight-bg overflow-hidden px-4"
      animate={isTransitioning ? { opacity: 0, scale: 1.1 } : { opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    >
      {isTransitioning && (
        <motion.div 
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 50 }}
          transition={{ duration: 2, ease: "easeIn" }}
          className="absolute w-10 h-10 bg-love-pink rounded-full blur-[20px] z-50"
        />
      )}

      <div className="z-10 flex flex-col items-center text-center space-y-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: step >= 1 ? 1 : 0 }}
          transition={{ duration: 2 }}
          className="text-accent-gold text-2xl"
        >
          ✨
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: step >= 1 ? 1 : 0, y: step >= 1 ? 0 : 10 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="font-playfair text-2xl md:text-4xl font-light text-text-main leading-relaxed"
        >
          This little surprise<br/>was made just for you...
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: step >= 2 ? 1 : 0, scale: step >= 2 ? 1 : 0 }}
          transition={{ duration: 1.5, type: "spring" }}
          className="text-love-rose text-3xl animate-pulse-slow"
        >
          ❤️
        </motion.div>

        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: step >= 3 ? 1 : 0, y: step >= 3 ? 0 : 10 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="font-cormorant text-2xl md:text-3xl text-text-muted"
        >
          Are you ready?
        </motion.h3>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: step >= 4 && !isTransitioning ? 1 : 0, y: step >= 4 ? 0 : 20 }}
          transition={{ duration: 1.5 }}
          onClick={handleNext}
          disabled={step < 4 || isTransitioning}
          className={`px-8 py-3 mt-8 rounded-full border border-love-pink/40 bg-love-rose/10 backdrop-blur-md
                     text-text-main font-sans tracking-widest text-sm hover:scale-105 hover:bg-love-rose/20
                     hover:border-love-pink/80 transition-all duration-500 hover:shadow-[0_0_25px_rgba(249,168,192,0.4)]
                     ${step < 4 ? 'cursor-default pointer-events-none' : 'cursor-pointer'}`}
        >
          OPEN YOUR SURPRISE
        </motion.button>
      </div>
    </motion.div>
  );
};

export default SurpriseScreen;
