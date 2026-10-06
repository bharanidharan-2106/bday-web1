import React from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig } from '../data/birthdayConfig';

const PhotoCollage = () => {
  const photos = birthdayConfig.photos;

  return (
    <div className="w-full bg-midnight-purple py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.1 }}
              className={`relative rounded-xl overflow-hidden shadow-xl break-inside-avoid
                hover:shadow-[0_0_30px_rgba(249,168,192,0.3)] transition-all duration-500
                group cursor-pointer border border-white/5`}
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
                src={photo}
                alt={`Collage ${idx}`}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-love-rose text-2xl">❤️</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoCollage;
