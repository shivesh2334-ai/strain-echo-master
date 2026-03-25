import { Search, GraduationCap, HeartPulse, Menu, X } from 'lucide-react';

export default function Header({ searchQuery, setSearchQuery, mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center pulse-ring">
              <HeartPulse className="text-white" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                StrainEcho Master
              </h1>
              <p className="text-xs text-slate-400">Clinical Strain Echocardiography 2026</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search topics, tips, videos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-200 placeholder-slate-500"
              />
              <div className="absolute left-3 top-2.5 text-slate-500">
                <Search size={16} />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <GraduationCap size={18} />
              <span>Free Medical Education</span>
            </div>
          </div>

          <button
            className="md:hidden p-2 text-slate-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-200 placeholder-slate-500"
            />
            <div className="absolute left-3 top-2.5 text-slate-500">
              <Search size={16} />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
