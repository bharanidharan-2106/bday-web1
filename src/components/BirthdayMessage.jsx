import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { birthdayConfig } from '../data/birthdayConfig';

const FloatingHearts = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-love-pink/50 text-2xl md:text-4xl"
          initial={{
            y: "110vh",
            x: `${Math.random() * 100}vw`,
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0,
          }}
          animate={{
            y: "-10vh",
            x: `${Math.random() * 100}vw`,
            opacity: [0, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
};

const BirthdayMessage = () => {
  const messages = [
    "For the girl who deserves",
    "all the happiness...",
    "",
    "May your smile always be",
    "this beautiful.",
    "",
    "May this year bring you",
    "everything you've wished for.",
    "",
    "And may you always remember",
    "how special you are."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 2,
        delayChildren: 1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } }
  };

  useEffect(() => {
    // The staggered animation takes exactly 21 seconds to complete. 
    // We wait 25 seconds to give 4 seconds of reading time for the last line.
    const timer = setTimeout(() => {
      const scrollInterval = setInterval(() => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        // Stop if we hit the bottom
        if (window.scrollY >= maxScroll - 5) {
          clearInterval(scrollInterval);
        } else {
          window.scrollBy(0, 3); // Slow cinematic scroll
        }
      }, 20);

      const stopScroll = () => {
        clearInterval(scrollInterval);
        window.removeEventListener('wheel', stopScroll);
        window.removeEventListener('touchstart', stopScroll);
      };
      
      // Stop auto-scroll if user interacts
      window.addEventListener('wheel', stopScroll, { passive: true });
      window.addEventListener('touchstart', stopScroll, { passive: true });
    }, 22000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-midnight-bg py-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-love-rose/10 via-midnight-bg to-midnight-bg pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-love-pink/10 via-transparent to-transparent pointer-events-none" />
      <FloatingHearts />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="z-10 flex flex-col items-center text-center space-y-6 md:space-y-8"
      >
        {messages.map((msg, idx) => (
          msg === "" ? (
            <div key={idx} className="h-4 md:h-8" />
          ) : (
            <motion.p
              key={idx}
              variants={itemVariants}
              className="font-cormorant text-2xl md:text-4xl text-text-muted italic leading-relaxed"
            >
              {msg}
            </motion.p>
          )
        ))}

        <motion.div variants={itemVariants} className="pt-8">
          <span className="text-love-rose text-3xl drop-shadow-[0_0_10px_rgba(249,168,192,0.8)]">❤️</span>
        </motion.div>

        <motion.div variants={itemVariants} className="pt-16 px-4 w-full">
          <h2 className="font-playfair text-2xl sm:text-3xl md:text-5xl font-light text-text-main drop-shadow-md break-words">
            Happy Birthday, {birthdayConfig.nickname}.
          </h2>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BirthdayMessage;
