import React, { useState } from 'react';
import {
  Palette,
  Code,
  TrendingUp,
  CheckCircle2,
  Search,
  Sparkles,
  Layers,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.title)];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-4 h-4 text-emerald-400" />;
      case 'Code':
        return <Code className="w-4 h-4 text-emerald-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-4 h-4 text-emerald-400" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-4 h-4 text-emerald-400" />;
      default:
        return <Layers className="w-4 h-4 text-emerald-400" />;
    }
  };

  // Filter skills based on selected category & search query
  const filteredCategories = SKILL_CATEGORIES.map((cat) => {
    if (activeCategory !== 'All' && cat.title !== activeCategory) {
      return null;
    }

    const filteredSkills = cat.skills.filter(
      (skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (skill.description && skill.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (filteredSkills.length === 0) return null;

    return {
      ...cat,
      skills: filteredSkills,
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] uppercase tracking-widest font-bold">
            <Layers className="w-3.5 h-3.5 text-emerald-400" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight font-serif-title">
            Technical Proficiency & Software Mastery
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            Rated proficiencies across design suites, web standards, branding systems, and digital strategy.
          </p>
        </div>

        {/* Controls: Search & Category Filter Tabs */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeCategory === cat
                    ? 'bg-white text-black font-bold'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter skills or tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-md pl-10 pr-4 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-700"
            />
          </div>

        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCategories.map((category) => (
            <div
              key={category!.title}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 shadow-2xl space-y-6"
            >
              {/* Category Title */}
              <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4">
                <div className="w-9 h-9 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center">
                  {getCategoryIcon(category!.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-serif-title text-white">{category!.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">
                    {category!.skills.length} Core Skills
                  </p>
                </div>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category!.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-zinc-200">{skill.name}</span>
                      
                      {/* Rating Dots */}
                      <div className="flex items-center gap-1.5">
                        {[1, 2, 3, 4, 5].map((dot) => (
                          <div
                            key={dot}
                            className={`w-2.5 h-2.5 rounded-full transition-all ${
                              dot <= skill.level
                                ? 'bg-emerald-400'
                                : 'bg-zinc-800 border border-zinc-700'
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    {skill.description && (
                      <p className="text-xs text-zinc-400 font-light leading-normal">
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
