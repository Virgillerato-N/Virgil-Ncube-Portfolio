import React from 'react';
import { Quote, Phone, Users } from 'lucide-react';
import { REFERENCES_LIST } from '../data/portfolioData';

export const ReferencesSection: React.FC = () => {
  return (
    <section id="references" className="py-24 bg-[#0a0a0a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] uppercase tracking-widest font-bold">
            <Users className="w-3.5 h-3.5 text-emerald-400" />
            <span>Endorsements</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight font-serif-title">
            References & Professional Testimonials
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            Direct recommendations from production directors, brand leads, and partners who have worked alongside Virgil.
          </p>
        </div>

        {/* References Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {REFERENCES_LIST.map((ref) => (
            <div
              key={ref.id}
              className="relative bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl shadow-2xl space-y-6 hover:border-zinc-700 transition-colors group"
            >
              {/* Quote Mark Icon */}
              <div className="w-9 h-9 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-emerald-400">
                <Quote className="w-4 h-4" />
              </div>

              {/* Quote Text */}
              <p className="text-zinc-300 italic font-serif-title text-xl leading-relaxed">
                "{ref.quote}"
              </p>

              {/* Author & Contact Info */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-serif-title text-white group-hover:text-emerald-300 transition-colors">
                    {ref.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-500 font-mono">{ref.relation}</p>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-950 border border-zinc-800 text-xs text-zinc-400 font-mono">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{ref.phone}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
