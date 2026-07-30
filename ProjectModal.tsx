import React from 'react';
import { X, ExternalLink, Calendar, User, CheckCircle, Send } from 'lucide-react';
import { PortfolioProject } from '../types';

interface ProjectModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl overflow-y-auto flex flex-col my-auto">
        
        {/* Sticky Close Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-emerald-400 text-[10px] uppercase font-bold tracking-widest">
              {project.category}
            </span>
            <span className="text-xs text-zinc-500 font-mono">• {project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Main Hero Image */}
          <div className="relative rounded-lg overflow-hidden bg-black border border-zinc-800 max-h-[400px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover max-h-[400px] grayscale contrast-125"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Title & Metadata */}
          <div className="space-y-2">
            <h2 className="text-3xl font-serif-title text-white">
              {project.title}
            </h2>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-400 pt-1">
              <div className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-zinc-200">Client:</span> {project.client}
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-zinc-200">Year:</span> {project.year}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
              Project Overview & Creative Direction
            </h3>
            <p className="text-xs text-zinc-300 font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Deliverables & Tools Split */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            
            {/* Key Deliverables */}
            <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-lg space-y-3">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5" />
                Deliverables
              </h4>
              <ul className="space-y-1.5 text-xs text-zinc-300 font-light">
                {project.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools Used */}
            <div className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-lg space-y-3">
              <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                Tools & Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-zinc-900 text-xs text-zinc-300 border border-zinc-800"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Action Footer */}
          <div className="pt-6 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            {project.externalUrl ? (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-emerald-400 transition-colors shadow-lg"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Webflow Showcase</span>
              </a>
            ) : (
              <div className="text-xs text-zinc-500 font-mono">
                Crafted for {project.client} by Virgil Ncube
              </div>
            )}

            <button
              onClick={() => {
                onClose();
                onInquire(project.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded text-xs font-bold uppercase tracking-widest text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors"
            >
              <Send className="w-3.5 h-3.5 text-emerald-400" />
              <span>Inquire About Project</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
