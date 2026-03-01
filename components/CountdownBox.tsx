
import React from 'react';

interface CountdownBoxProps {
  value: number;
  label: string;
}

const CountdownBox: React.FC<CountdownBoxProps> = ({ value, label }) => {
  return (
    <div className="glass-card flex flex-col items-center justify-center p-4 rounded-2xl border-b-2 border-brand-accent/50 min-w-[70px] sm:min-w-[90px] border-glow">
      <span className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-none drop-shadow-[0_0_8px_rgba(234,179,8,0.12)]">
        {value < 10 ? `0${value}` : value}
      </span>
      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 mt-2">
        {label}
      </span>
    </div>
  );
};

export default CountdownBox;
