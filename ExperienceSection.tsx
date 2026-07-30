import React, { useState } from 'react';
import { Briefcase, MapPin, Calendar, CheckCircle, ChevronRight } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>(WORK_EXPERIENCE[0].id);

  return (
    <section id="experience" className="py-24 bg-[#0a0a0a] border-y border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] uppercase tracking-widest font-bold">
            <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
            <span>Career History</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight font-serif-title">
            Work Experience & Direction
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            10+ years of professional history across creative direction, brand systems, publishing, and digital media.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto space-y-8 before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-translate-x-1/2 before:w-px before:bg-zinc-800">
          {WORK_EXPERIENCE.map((exp, idx) => {
            const isExpanded = expandedId === exp.id;
            const isEven = idx % 2 === 0;

            return (
              <div
                key={exp.id}
                className="relative flex flex-col sm:flex-row items-start sm:items-center group"
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-zinc-950 border-2 border-emerald-400 flex items-center justify-center z-10 shadow-lg">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                </div>

                {/* Content Card */}
                <div className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${isEven ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                  <div
                    onClick={() => setExpandedId(isExpanded ? '' : exp.id)}
                    className={`bg-zinc-900/50 border rounded-xl p-6 transition-all cursor-pointer shadow-2xl ${
                      isExpanded
                        ? 'border-zinc-700 bg-zinc-900/80'
                        : 'border-zinc-800/80 hover:border-zinc-700'
                    }`}
                  >
                    {/* Header */}
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap text-xs text-emerald-400 font-mono">
                        {exp.isCurrent && (
                          <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800/80 text-emerald-400 text-[10px] uppercase font-bold tracking-wider">
                            Current Role
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-zinc-400">
                          <Calendar className="w-3 h-3 text-emerald-400" />
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-serif-title text-white group-hover:text-emerald-300 transition-colors">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-2 text-xs font-medium text-zinc-300">
                        <span>{exp.company}</span>
                        <span className="text-zinc-700">•</span>
                        <span className="text-zinc-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-emerald-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Overview Paragraph */}
                    <p className="text-xs text-zinc-400 font-light mt-3 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights List */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-zinc-800/80 space-y-2 text-left animate-in fade-in duration-200">
                        <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">
                          Key Achievements & Responsibilities:
                        </div>
                        {exp.highlights.map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs text-zinc-300 font-light">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}

                        {/* Skills Used Badges */}
                        <div className="pt-3 flex flex-wrap gap-1.5">
                          {exp.skillsUsed.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded bg-zinc-950 text-[10px] text-zinc-400 border border-zinc-800"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mt-3 flex items-center justify-between text-xs text-zinc-400 font-mono pt-1">
                      <span className="text-[10px] uppercase tracking-wider">{isExpanded ? 'Collapse' : 'Expand Details'}</span>
                      <ChevronRight className={`w-3.5 h-3.5 text-zinc-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </div>

                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
