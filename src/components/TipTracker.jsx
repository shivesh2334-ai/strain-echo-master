import { Check } from 'lucide-react';

export default function TipTracker({ tip, isCompleted, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={`tip-card p-4 rounded-lg cursor-pointer transition-all ${isCompleted ? 'opacity-60 border-emerald-500' : ''}`}
    >
      <div className="flex items-start gap-3">
        <div
          className={`mt-0.5 w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
            isCompleted ? 'bg-emerald-500 border-emerald-500' : 'border-slate-500'
          }`}
        >
          {isCompleted && <Check size={12} className="text-white" strokeWidth={3} />}
        </div>
        <p className={`text-sm ${isCompleted ? 'text-slate-400 line-through' : 'text-slate-200'}`}>
          {tip}
        </p>
      </div>
    </div>
  );
}
