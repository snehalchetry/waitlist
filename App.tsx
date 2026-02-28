
import React, { useState, useEffect } from 'react';
import CountdownBox from './components/CountdownBox';
import WaitlistForm from './components/WaitlistForm';
import { TimeLeft, FeatureProps } from './types';

const FeatureBadge: React.FC<FeatureProps> = ({ icon, label, color = 'text-brand-accent' }) => (
  <div className="flex items-center gap-2 group cursor-default">
    <span className={`material-symbols-outlined text-sm ${color} transition-transform group-hover:scale-110`}>
      {icon}
    </span>
    <span className="text-xs font-semibold text-slate-300 tracking-wide uppercase">
      {label}
    </span>
  </div>
);

const App: React.FC = () => {
  const TARGET_DATE = new Date('2026-03-10T00:00:00+05:30').getTime();

  const calcTimeLeft = (): TimeLeft => {
    const diff = TARGET_DATE - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calcTimeLeft());

  // Countdown to March 10, 2026 at 12:00 AM
  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start overflow-x-hidden">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 z-0 glow-overlay" />
      <div className="fixed top-[-15%] right-[-10%] w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[140px] opacity-60" />
      <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[120px] opacity-30" />

      <main className="relative z-10 w-full max-w-2xl px-6 pt-16 pb-12 md:pt-24 md:pb-24 flex flex-col items-center text-center">

        {/* Logo Section */}
        <header className="mb-6 float-animation">
          <h2 className="text-4xl font-black tracking-tight"><span className="text-white">GharKa</span><span className="text-brand-accent">Adda</span></h2>
          <p className="text-sm text-slate-400 mt-2 italic tracking-wide">Jahan Talash Khatam, Wahan GharKaAdda Shuru.</p>
        </header>

        {/* Hero Section */}
        <section className="space-y-8 mb-16">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-500/50 py-2">
            Coming Soon
          </h1>

          <h2 className="text-xl md:text-2xl font-extrabold text-yellow-400 px-4 leading-tight">
            Building India's No. 1 housing site for Students.
          </h2>

          <p className="text-red-200/70 text-lg md:text-xl max-w-md mx-auto leading-relaxed">
            We’re redefining how students find their perfect home. Affordable, verified, and{' '}
            <span className="text-white font-bold underline decoration-yellow-400/60 underline-offset-4">no brokers</span>.
          </p>
        </section>

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 gap-3 sm:gap-4 w-full mb-16">
          <CountdownBox value={timeLeft.days} label="Days" />
          <CountdownBox value={timeLeft.hours} label="Hours" />
          <CountdownBox value={timeLeft.minutes} label="Mins" />
          <CountdownBox value={timeLeft.seconds} label="Secs" />
        </div>

        {/* Feature Highlights */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 mb-16 opacity-90">
          <FeatureBadge icon="verified" label="Verified Listings" color="text-brand-accent" />
          <FeatureBadge icon="block" label="Zero Brokerage" color="text-yellow-500" />
          <FeatureBadge icon="school" label="Student First" color="text-brand-accent" />
        </div>

        {/* Waitlist Integration */}
        <WaitlistForm />

        {/* Footer / Socials */}
        <footer className="mt-24 space-y-8 flex flex-col items-center">
          <div className="flex justify-center gap-10">
            <a href="https://www.instagram.com/gharkaadda.official" target="_blank" rel="noopener noreferrer" className="text-red-300/50 hover:text-brand-accent transition-all duration-300 transform hover:scale-110" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
          </div>
          <div className="h-0.5 w-16 bg-brand-accent/30 rounded-full" />
        </footer>
      </main>
    </div>
  );
};

export default App;
