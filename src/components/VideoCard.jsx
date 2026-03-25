import { ExternalLink, Clock } from 'lucide-react';

export default function VideoCard({ video }) {
  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="video-card block p-5 rounded-xl hover:border-blue-500/50 transition-all group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="institution-badge px-3 py-1 rounded-full text-xs font-medium text-white">
            {video.source}
          </span>
          {video.free && (
            <span className="px-2 py-0.5 rounded-full text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              FREE
            </span>
          )}
        </div>
        <ExternalLink size={16} className="text-slate-400 flex-shrink-0 mt-0.5" />
      </div>

      <h4 className="text-lg font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
        {video.title}
      </h4>

      <div className="flex items-center gap-4 text-xs text-slate-400">
        <span className="flex items-center gap-1">
          <Clock size={14} />
          {video.duration}
        </span>
        <span className="px-2 py-1 bg-slate-800 rounded text-slate-300">
          {video.type}
        </span>
      </div>
    </a>
  );
}
