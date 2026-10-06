import React from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig } from '../data/birthdayConfig';

const WordsForYou = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 1.5, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 2 } }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-midnight-bg py-32 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="z-10 flex flex-col items-center text-center space-y-16"
      >
        <motion.div variants={itemVariants} className="text-love-rose text-3xl">
          ❤️
        </motion.div>

        <motion.h2 variants={itemVariants} className="font-playfair text-4xl md:text-6xl font-light tracking-widest text-text-main uppercase">
          {birthdayConfig.name}
        </motion.h2>

        <motion.div variants={itemVariants} className="space-y-4 font-cormorant text-2xl md:text-4xl text-text-muted italic">
          <p>You deserve beautiful things.</p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-2 font-cormorant text-xl md:text-3xl text-text-muted">
          <p>Beautiful moments.</p>
          <p>Beautiful memories.</p>
          <p>Beautiful days.</p>
          <p>Beautiful people.</p>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-8">
          <p className="font-cormorant text-2xl md:text-4xl text-text-muted italic">
            And most importantly...
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-4 pb-16">
          <p className="font-playfair text-3xl md:text-5xl font-light text-text-main text-glow">
            You deserve happiness.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="text-accent-gold text-2xl">
          ✨
        </motion.div>

        <motion.div variants={itemVariants} className="pt-16 space-y-4 font-sans text-lg md:text-xl font-light tracking-[0.2em] text-text-muted uppercase">
          <p>Keep smiling.</p>
          <p>Keep shining.</p>
          <p>Keep being you.</p>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-8 text-love-rose text-2xl">
          ❤️
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WordsForYou;
