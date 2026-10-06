import React from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig } from '../data/birthdayConfig';

const CinematicQuotes = () => {
  const scenes = [
    {
      photo: birthdayConfig.photos[1] || birthdayConfig.photos[0],
      quote: ["Some people", "simply make", "the world", "brighter."],
      icon: "❤️"
    },
    {
      photo: birthdayConfig.photos[2] || birthdayConfig.photos[0],
      quote: ["And you are", "one of them."],
      icon: null
    },
    {
      photo: birthdayConfig.photos[3] || birthdayConfig.photos[0],
      quote: ["Never stop", "being you."],
      icon: null
    }
  ];

  return (
    <div className="w-full bg-midnight-bg">
      {scenes.map((scene, idx) => (
        <QuoteScene key={idx} scene={scene} />
      ))}
    </div>
  );
};

const QuoteScene = ({ scene }) => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.1 }}
        transition={{ duration: 10, ease: "linear" }}
        className="absolute inset-0"
      >
        <img src={scene.photo} alt="Cinematic background" className="w-full h-full object-cover" />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 md:bg-black/50" />

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, filter: 'blur(10px)' }}
        whileInView={{ opacity: 1, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 2 }}
        className="z-10 flex flex-col items-center text-center px-4"
      >
        {scene.quote.map((line, i) => (
          <h2 key={i} className="font-playfair text-4xl md:text-6xl font-light text-text-main leading-tight tracking-wide">
            {line}
          </h2>
        ))}
        {scene.icon && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 text-love-rose text-3xl"
          >
            {scene.icon}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CinematicQuotes;
