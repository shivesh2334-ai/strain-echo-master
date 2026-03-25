import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Lightbulb, CheckCircle, Search } from 'lucide-react';
import Header from './components/Header';
import CategoryCard from './components/CategoryCard';
import TopicDetail from './components/TopicDetail';
import { strainData } from './data/strainData';

function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeTopic, setActiveTopic] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [completedTips, setCompletedTips] = useState({});

  // Load progress from localStorage
  useEffect(() => {
    const savedTips = localStorage.getItem('strainMasterTips');
    if (savedTips) {
      try {
        setCompletedTips(JSON.parse(savedTips));
      } catch {
        // ignore malformed data
      }
    }
  }, []);

  // Persist progress
  useEffect(() => {
    localStorage.setItem('strainMasterTips', JSON.stringify(completedTips));
  }, [completedTips]);

  const toggleTip = (category, topic, tipIndex) => {
    const key = `${category}-${topic}-${tipIndex}`;
    setCompletedTips((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const calculateProgress = (category) => {
    if (!strainData[category]) return 0;
    const topics = Object.keys(strainData[category].topics);
    let totalTips = 0;
    let completed = 0;
    topics.forEach((topic) => {
      const tips = strainData[category].topics[topic].tips;
      totalTips += tips.length;
      tips.forEach((_, idx) => {
        if (completedTips[`${category}-${topic}-${idx}`]) completed++;
      });
    });
    return totalTips > 0 ? Math.round((completed / totalTips) * 100) : 0;
  };

  const filteredData = () => {
    if (!searchQuery) return strainData;
    const q = searchQuery.toLowerCase();
    const filtered = {};
    Object.keys(strainData).forEach((category) => {
      const cat = strainData[category];
      const matchingTopics = {};
      Object.keys(cat.topics).forEach((topic) => {
        const t = cat.topics[topic];
        const matches =
          topic.toLowerCase().includes(q) ||
          t.tips.some((tip) => tip.toLowerCase().includes(q)) ||
          t.videos.some((v) => v.title.toLowerCase().includes(q));
        if (matches) matchingTopics[topic] = t;
      });
      if (Object.keys(matchingTopics).length > 0) {
        filtered[category] = { ...cat, topics: matchingTopics };
      }
    });
    return filtered;
  };

  const currentFilteredData = filteredData();

  return (
    <div className="min-h-screen bg-slate-900">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          {/* Topic Detail */}
          {activeTopic && activeCategory && (
            <TopicDetail
              key="topic"
              activeCategory={activeCategory}
              activeTopic={activeTopic}
              topicData={strainData[activeCategory].topics[activeTopic]}
              completedTips={completedTips}
              toggleTip={toggleTip}
              onBack={() => setActiveTopic(null)}
            />
          )}

          {/* Category Detail */}
          {activeCategory && !activeTopic && (
            <motion.div
              key="category"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setActiveCategory(null)}
                className="mb-6 flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                ← Back to Categories
              </button>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">{activeCategory}</h2>
                <p className="text-slate-400">{strainData[activeCategory].description}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {Object.keys(strainData[activeCategory].topics).map((topic) => {
                  const topicData = strainData[activeCategory].topics[topic];
                  const completedCount = topicData.tips.filter(
                    (_, idx) => completedTips[`${activeCategory}-${topic}-${idx}`]
                  ).length;

                  return (
                    <motion.div
                      key={topic}
                      whileHover={{ y: -2 }}
                      onClick={() => setActiveTopic(topic)}
                      className="card-hover cursor-pointer rounded-xl bg-slate-800 border border-slate-700 p-6 hover:border-blue-500/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-semibold text-white">{topic}</h3>
                        {completedCount > 0 && (
                          <span className="flex items-center gap-1 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded-full">
                            <CheckCircle size={12} />
                            {completedCount}/{topicData.tips.length}
                          </span>
                        )}
                      </div>

                      <div className="space-y-3 mb-4">
                        {topicData.tips.slice(0, 2).map((tip, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm text-slate-400">
                            <span className="text-blue-400 mt-1">•</span>
                            <span className="line-clamp-1">{tip}</span>
                          </div>
                        ))}
                        {topicData.tips.length > 2 && (
                          <p className="text-xs text-slate-500 pl-4">
                            +{topicData.tips.length - 2} more tips
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-4 text-xs text-slate-500">
                        <span className="flex items-center gap-1">
                          <Play size={14} />
                          {topicData.videos.length} Videos
                        </span>
                        <span className="flex items-center gap-1">
                          <Lightbulb size={14} />
                          {topicData.tips.length} Tips
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Home / Search View */}
          {!activeCategory && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {/* Hero Section */}
              {!searchQuery && (
                <div className="mb-12 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                    Master <span className="gradient-text">Strain Echocardiography</span>
                  </h2>
                  <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                    Comprehensive learning platform featuring curated educational resources from
                    Stanford, Mayo Clinic, Johns Hopkins, MIT, and ASE. Master the clinical
                    applications of strain imaging with expert tips and high-quality video tutorials.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 text-sm">
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                      100% Free Resources
                    </span>
                    <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                      Expert Curated
                    </span>
                    <span className="px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">
                      CME Eligible
                    </span>
                  </div>
                </div>
              )}

              {/* Category Grid */}
              {!searchQuery && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {Object.keys(currentFilteredData).map((category) => (
                    <CategoryCard
                      key={category}
                      category={category}
                      catData={strainData[category]}
                      progress={calculateProgress(category)}
                      onClick={() => setActiveCategory(category)}
                    />
                  ))}
                </div>
              )}

              {/* Search Results */}
              {searchQuery && (
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-white">
                      Search Results for &ldquo;{searchQuery}&rdquo;
                    </h2>
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      Clear Search
                    </button>
                  </div>

                  {Object.keys(currentFilteredData).length === 0 ? (
                    <div className="text-center py-12 text-slate-500">
                      <Search size={40} className="mx-auto mb-4 opacity-50" />
                      <p>No results found. Try different keywords.</p>
                    </div>
                  ) : (
                    <div className="space-y-8">
                      {Object.keys(currentFilteredData).map((category) => (
                        <div key={category}>
                          <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <span
                              className={`w-3 h-3 rounded-full bg-gradient-to-r ${strainData[category].color}`}
                            />
                            {category}
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {Object.keys(currentFilteredData[category].topics).map((topic) => (
                              <div
                                key={topic}
                                onClick={() => {
                                  setActiveCategory(category);
                                  setActiveTopic(topic);
                                  setSearchQuery('');
                                }}
                                className="p-4 rounded-lg bg-slate-800 border border-slate-700 hover:border-blue-500/50 cursor-pointer transition-all"
                              >
                                <h4 className="font-medium text-white mb-2">{topic}</h4>
                                <p className="text-sm text-slate-400 line-clamp-2">
                                  {currentFilteredData[category].topics[topic].tips[0]}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-16 py-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-500">
              <p>Educational resources curated from leading institutions:</p>
              <p className="mt-1">Stanford Medicine • Mayo Clinic • Cleveland Clinic • MIT • ASE</p>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <span>© 2026 StrainEcho Master</span>
              <span>•</span>
              <span>Open Source Education</span>
            </div>
          </div>
          <div className="mt-4 text-xs text-slate-600 text-center md:text-left">
            <p>
              Disclaimer: This educational platform is for training purposes only. Clinical decisions
              should always be based on formal training and institutional protocols.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
