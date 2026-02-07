import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import LiveMap from './components/LiveMap';
import AdminView from './components/AdminView';
import GiftCityPrime from './components/GiftCityPrime';
import DeveloperPortal from './components/DeveloperPortal';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import IntroSequence from './components/IntroSequence';
import { GANDHINAGAR_ZONES } from './constants';

function App() {
  const [loading, setLoading] = useState(true);
  const [selectedZone, setSelectedZone] = useState(GANDHINAGAR_ZONES[0].id);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage or system preference
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <>
      {loading && <IntroSequence onComplete={() => setLoading(false)} />}

      <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col transition-opacity duration-1000 ${loading ? 'h-screen overflow-hidden opacity-0' : 'opacity-100'}`}>
        <Header toggleTheme={toggleTheme} isDark={isDark} />
        <main className="flex-grow">
          <Hero />
          <LiveMap currentZone={selectedZone} onZoneSelect={setSelectedZone} />
          <Dashboard selectedZone={selectedZone} onZoneChange={setSelectedZone} />
          <AdminView selectedZone={selectedZone} isDark={isDark} />
          <GiftCityPrime />
          <DeveloperPortal />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;