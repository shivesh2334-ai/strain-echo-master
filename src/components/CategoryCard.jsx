import { motion } from 'framer-motion';
import { Cpu, Activity, HeartPulse, TrendingUp } from 'lucide-react';

const iconMap = { Cpu, Activity, HeartPulse, TrendingUp };

export default function CategoryCard({ category, catData, progress, onClick }) {
  const Icon = iconMap[catData.icon] || Cpu;
  const topicCount = Object.keys(catData.topics).length;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
      className="card-hover cursor-pointer group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 p-6"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${catData.color} opacity-0 group-hover:opacity-10 transition-opacity`} />

      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-xl bg-gradient-to-br ${catData.color} text-white`}>
          <Icon size={24} />
        </div>
        {progress > 0 && (
          <span className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
            {progress}% Complete
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">{category}</h3>
      <p className="text-sm text-slate-400 mb-4 line-clamp-2">{catData.description}</p>

      <div className="flex items-center justify-between text-xs text-slate-500">
        <span>{topicCount} Topics</span>
        <span className="group-hover:text-blue-400 transition-colors">Explore →</span>
      </div>

      {progress > 0 && (
        <div className="mt-4 h-1 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full progress-bar transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </motion.div>
  );
}
