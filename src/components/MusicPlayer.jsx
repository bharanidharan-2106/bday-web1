import React, { useEffect, useRef } from 'react';

const MusicPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
    }

    const tryPlay = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(e => {
          console.log("Waiting for user interaction to play audio...");
        });
      }
      
      // If it successfully started playing, we can remove the listeners
      if (audioRef.current && !audioRef.current.paused) {
        document.removeEventListener('click', tryPlay);
        document.removeEventListener('touchstart', tryPlay);
        document.removeEventListener('scroll', tryPlay);
      }
    };

    // Try automatically first
    tryPlay();

    // For mobile: keep listening to ANY interaction until the audio successfully plays
    document.addEventListener('click', tryPlay);
    document.addEventListener('touchstart', tryPlay);
    document.addEventListener('scroll', tryPlay);

    return () => {
      document.removeEventListener('click', tryPlay);
      document.removeEventListener('touchstart', tryPlay);
      document.removeEventListener('scroll', tryPlay);
    };
  }, []);

  return (
    <audio
      ref={audioRef}
      src="/music/remo.mp3"
      loop
      playsInline
      preload="auto"
      style={{ display: 'none' }}
    />
  );
};

export default MusicPlayer;
