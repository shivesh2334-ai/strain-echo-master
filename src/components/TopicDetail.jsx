import { motion } from 'framer-motion';
import { Lightbulb, Play, BookOpen, CheckCircle } from 'lucide-react';
import VideoCard from './VideoCard';
import TipTracker from './TipTracker';

export default function TopicDetail({ activeCategory, activeTopic, topicData, completedTips, toggleTip, onBack }) {
  const completedCount = topicData.tips.filter((_, idx) =>
    completedTips[`${activeCategory}-${activeTopic}-${idx}`]
  ).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={onBack}
        className="mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
      >
        ← Back to {activeCategory}
      </button>

      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">{activeTopic}</h2>
        <p className="text-slate-400">Master the key concepts and clinical applications</p>
        {completedCount > 0 && (
          <div className="mt-3 flex items-center gap-2 text-sm text-emerald-400">
            <CheckCircle size={16} />
            <span>{completedCount} of {topicData.tips.length} tips completed</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Learning Tips */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Lightbulb size={20} className="text-yellow-400" />
            <h3 className="text-xl font-semibold text-white">Expert Learning Tips</h3>
          </div>
          <div className="space-y-4">
            {topicData.tips.map((tip, idx) => (
              <TipTracker
                key={idx}
                tip={tip}
                isCompleted={!!completedTips[`${activeCategory}-${activeTopic}-${idx}`]}
                onToggle={() => toggleTip(activeCategory, activeTopic, idx)}
              />
            ))}
          </div>
        </div>

        {/* Video Resources */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Play size={20} className="text-blue-400" />
            <h3 className="text-xl font-semibold text-white">Educational Videos</h3>
          </div>
          <div className="space-y-4">
            {topicData.videos.map((video, idx) => (
              <VideoCard key={idx} video={video} />
            ))}
          </div>

          {/* Additional Resources */}
          <div className="mt-6 p-5 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30">
            <div className="flex items-center gap-2 mb-3">
              <BookOpen size={18} className="text-blue-400" />
              <h4 className="font-semibold text-white">Additional Resources</h4>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">→</span>
                <a
                  href="https://www.asecho.org/practice-clinical-resources/resource-library/strain-imaging/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  ASE Strain Imaging Resource Library (Official)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">→</span>
                <a
                  href="https://www.youtube.com/c/ASE360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  ASE360 YouTube Channel (Free Videos)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">→</span>
                <span>ASE Comprehensive Strain Imaging Textbook (Purchase Required)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
