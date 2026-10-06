import React, { useEffect, useRef } from 'react';

const MusicPlayer = () => {
  const audioRef = useRef(null);

  useEffect(() => {
    // Play remo.mp3 fully and continuously (renamed from .mpeg to fix Vercel MIME type issues)
    audioRef.current = new Audio('/music/remo.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    const tryPlay = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(e => console.log("Audio play failed, waiting for user interaction.", e));
      }
    };

    // Try to play automatically
    tryPlay();

    // Fallback: play on first user interaction (browser autoplay policies)
    const handleInteraction = () => {
      tryPlay();
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    document.addEventListener('click', handleInteraction);
    document.addEventListener('touchstart', handleInteraction);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  // Return nothing, so the button is completely removed
  return null;
};

export default MusicPlayer;
