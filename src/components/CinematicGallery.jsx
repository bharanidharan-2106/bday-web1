import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { birthdayConfig } from '../data/birthdayConfig';

const CinematicGallery = () => {
  return (
    <div className="relative w-full bg-midnight-bg pb-20">
      <div className="flex flex-col items-center pt-20 pb-10">
        <h2 className="font-playfair text-3xl md:text-5xl font-light text-text-main uppercase tracking-widest text-glow">
          {birthdayConfig.name}
        </h2>
        <p className="font-cormorant text-xl text-text-muted mt-4 italic">
          Simply beautiful.
        </p>
      </div>

      <div className="space-y-[30vh]">
        {birthdayConfig.photos.map((photo, idx) => (
          <GalleryItem key={idx} photo={photo} index={idx} total={birthdayConfig.photos.length} />
        ))}
      </div>
    </div>
  );
};

const GalleryItem = ({ photo, index, total }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const filter = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ['blur(10px)', 'blur(0px)', 'blur(0px)', 'blur(10px)']);

  return (
    <div ref={ref} className="h-screen w-full flex flex-col items-center justify-center px-4 sticky top-0">
      <motion.div 
        style={{ scale, opacity, y, filter }}
        className="relative w-full max-w-[400px] md:max-w-[500px] aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5"
      >
        <img 
          src={photo} 
          alt={`Gallery image ${index + 1}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-midnight-bg/80" />
      </motion.div>
      
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-12 flex flex-col items-center"
      >
        <div className="flex items-center space-x-4 text-text-muted font-sans text-sm tracking-widest">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <div className="w-12 h-[1px] bg-white/20" />
          <span>{String(total).padStart(2, '0')}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default CinematicGallery;
