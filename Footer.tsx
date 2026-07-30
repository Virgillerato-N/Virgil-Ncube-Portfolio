import React from 'react';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenResumeModal: () => void;
  onOpenWebflowModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal, onOpenWebflowModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-zinc-800/80 text-zinc-400 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-800/80">
          
          {/* Logo & Info */}
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 rounded bg-white text-black font-bold flex items-center justify-center text-xs font-serif-title">
                VN
              </div>
              <span className="text-xl font-serif-title text-white">
                {PROFILE_INFO.name}
              </span>
            </div>
            <p className="text-xs text-zinc-500 font-light max-w-md">
              {PROFILE_INFO.title} • Gauteng, South Africa
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[10px] uppercase tracking-widest font-mono text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            <button onClick={onOpenResumeModal} className="text-zinc-300 hover:text-white cursor-pointer">Interactive CV</button>
            {onOpenWebflowModal && (
              <button onClick={onOpenWebflowModal} className="text-emerald-400 hover:underline cursor-pointer">Webflow CMS Export</button>
            )}
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Copyright & Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <div>
            © {new Date().getFullYear()} Virgil Ncube. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Portfolio:</span>
            <a
              href={PROFILE_INFO.portfolioWebflowUrl}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:underline inline-flex items-center gap-1"
            >
              virgil-ncubes-portfolio.webflow.io
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
