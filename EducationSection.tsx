import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { EDUCATION_LIST } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-[#0a0a0a] border-y border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] uppercase tracking-widest font-bold">
            <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight font-serif-title">
            Education & Certifications
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            Formal qualifications across desktop publishing, digital media design, photography, and brand management.
          </p>
        </div>

        {/* Qualifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EDUCATION_LIST.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-xl shadow-2xl hover:border-zinc-700 transition-colors flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-emerald-400 text-[10px] uppercase font-mono">
                    {item.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-zinc-500 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    {item.year}
                  </span>
                </div>

                <h3 className="text-xl font-serif-title text-white group-hover:text-emerald-300 transition-colors leading-snug">
                  {item.qualification}
                </h3>
              </div>

              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
                <div className="text-zinc-200">{item.institution}</div>
                <div className="flex items-center gap-1 text-zinc-500">
                  <MapPin className="w-3 h-3 text-emerald-400" />
                  <span>{item.location}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
