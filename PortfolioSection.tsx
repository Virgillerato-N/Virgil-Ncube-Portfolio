import React, { useState } from 'react';
import { Palette, Search, Eye } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioProject } from '../types';
import { ProjectModal } from './ProjectModal';

interface PortfolioSectionProps {
  onInquireProject: (title: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onInquireProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const categories = [
    'All',
    'Brand Identity',
    'UI/UX & Web',
    'Events & Photobooth',
    'Graphic Design',
    'Marketing & SEO',
    'Photography',
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] uppercase tracking-widest font-bold">
            <Palette className="w-3.5 h-3.5 text-emerald-400" />
            <span>Selected Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight font-serif-title">
            Featured Works & Design Systems
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            A curated collection of corporate identities, digital direction, packaging, and marketing systems.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeCategory === cat
                    ? 'bg-white text-black font-bold'
                    : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search works..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-md pl-10 pr-4 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-zinc-700"
            />
          </div>

        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl hover:border-zinc-700 transition-colors cursor-pointer flex flex-col"
            >
              {/* Image Box */}
              <div className="relative h-60 bg-zinc-950 overflow-hidden border-b border-zinc-800/80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Category & Featured Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-zinc-950/90 backdrop-blur-md border border-zinc-800 text-zinc-300 text-[10px] font-mono">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-1 rounded bg-emerald-950 border border-emerald-800/80 text-emerald-400 text-[10px] font-bold uppercase tracking-widest">
                      Featured
                    </span>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-zinc-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <div className="px-4 py-2 rounded-md bg-white text-black font-bold text-xs uppercase tracking-widest flex items-center gap-2 shadow-2xl">
                    <Eye className="w-4 h-4" />
                    <span>View Showcase</span>
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1">
                  <div className="text-[10px] uppercase tracking-widest text-emerald-400 font-mono">
                    {project.client} • {project.year}
                  </div>
                  <h3 className="text-xl font-serif-title text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-2">
                    {project.summary}
                  </p>
                </div>

                {/* Tool Badges */}
                <div className="pt-3 border-t border-zinc-800/80 flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 rounded bg-zinc-950 text-[10px] text-zinc-400 border border-zinc-800"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded bg-zinc-950 text-[10px] text-zinc-500 border border-zinc-800">
                      +{project.tools.length - 3}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-zinc-900/40 border border-zinc-800 rounded-xl">
            <p className="text-zinc-400 text-xs">No projects matched your search criteria.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 rounded bg-white text-black font-bold text-xs uppercase tracking-widest"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(title) => {
          onInquireProject(title);
        }}
      />
    </section>
  );
};
