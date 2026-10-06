import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import SurpriseScreen from './components/SurpriseScreen';
import NameReveal from './components/NameReveal';
import BirthdayMessage from './components/BirthdayMessage';
import CinematicGallery from './components/CinematicGallery';
import PhotoCollage from './components/PhotoCollage';

import FinalSurprise from './components/FinalSurprise';
import MusicPlayer from './components/MusicPlayer';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [currentScreen, setCurrentScreen] = useState('welcome');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onNext={() => setCurrentScreen('surprise')} />;
      case 'surprise':
        return <SurpriseScreen onNext={() => setCurrentScreen('nameReveal')} />;
      case 'nameReveal':
        return <NameReveal onNext={() => setCurrentScreen('mainStory')} />;
      case 'mainStory':
        return (
          <div className="w-full bg-midnight-bg text-text-main">
            <BirthdayMessage />
            <PhotoCollage />

            <div className="h-[20vh] w-full bg-midnight-bg flex items-center justify-center">
              <button 
                onClick={() => setCurrentScreen('final')}
                className="px-8 py-3 rounded-full border border-love-rose/30 bg-white/5 backdrop-blur-sm
                     text-text-main font-sans tracking-widest text-sm hover:scale-105 hover:bg-white/10
                     hover:border-love-rose/60 transition-all duration-500 hover:shadow-[0_0_20px_rgba(217,70,114,0.3)]"
              >
                ONE LAST SURPRISE ✨
              </button>
            </div>
          </div>
        );
      case 'final':
        return <FinalSurprise />;
      default:
        return <WelcomeScreen onNext={() => setCurrentScreen('surprise')} />;
    }
  };

  return (
    <div className="w-full min-h-screen bg-midnight-bg font-sans selection:bg-love-rose/30 selection:text-text-main overflow-x-hidden">
      <MusicPlayer />
      <AnimatePresence mode="wait">
        {renderScreen()}
      </AnimatePresence>
    </div>
  );
}

export default App;
