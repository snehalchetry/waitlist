
import React, { useState } from 'react';

const WaitlistForm: React.FC = () => {
  const SHEET_URL = 'https://script.google.com/macros/s/AKfycbwlVFqo8zrEdYi0xukkTQGDGkNMVOaRil5kGuMPwjjcj6rzeVDpB4Rd1gk9C19Pz8CugA/exec';

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="glass-card p-2 rounded-2xl flex flex-col sm:flex-row gap-2 transition-all duration-300 focus-within:border-brand-accent/40"
      >
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          disabled={status === 'loading' || status === 'success'}
          className="flex-1 bg-transparent border-none focus:ring-0 px-4 py-3 text-white placeholder-slate-500 text-base outline-none"
        />
        <button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className={`
            font-bold py-3 px-8 rounded-xl transition-all duration-200 
            transform active:scale-95 text-base whitespace-nowrap hover:scale-105
            ${status === 'success'
              ? 'bg-green-700 text-white'
              : 'bg-gradient-to-r from-brand-primary to-red-700 hover:from-red-700 hover:to-brand-primary text-brand-accent shadow-[0_0_15px_rgba(127,29,29,0.2)]'}
            ${status === 'loading' ? 'opacity-70 cursor-wait' : ''}
          `}
        >
          {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Notify Me'}
        </button>
      </form>

      {status === 'success' && (
        <p className="mt-3 text-green-400 text-sm font-medium animate-pulse">
          You're on the list! We'll reach out soon.
        </p>
      )}

      <p className="mt-6 text-[11px] text-red-300/40 uppercase tracking-widest font-semibold text-center">
        JOIN THE WAITLIST NOW!
      </p>
    </div>
  );
};

export default WaitlistForm;
