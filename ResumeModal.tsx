import React, { useRef } from 'react';
import { X, Printer, Mail, Phone, MapPin, Globe, FileText } from 'lucide-react';
import { PROFILE_INFO, WORK_EXPERIENCE, SKILL_CATEGORIES, EDUCATION_LIST, REFERENCES_LIST } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const printRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[95vh] bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl overflow-y-auto flex flex-col">
        
        {/* Modal Top Control Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-bold font-serif-title text-white">Virgil Ncube — Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-white text-black hover:bg-emerald-400 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Container */}
        <div ref={printRef} className="p-6 sm:p-10 bg-[#0a0a0a] text-zinc-200 space-y-8 font-sans">
          
          {/* Header Banner */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-b border-zinc-800/80 pb-8">
            <div className="md:col-span-3 flex justify-center md:justify-start">
              <div className="w-32 h-32 rounded-xl overflow-hidden border-2 border-emerald-400/80 shadow-2xl">
                <img
                  src={PROFILE_INFO.portraitImage}
                  alt={PROFILE_INFO.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="md:col-span-9 space-y-2 text-center md:text-left">
              <h1 className="text-3xl sm:text-4xl font-serif-title text-white">
                {PROFILE_INFO.name.toUpperCase()}
              </h1>
              <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest">
                {PROFILE_INFO.title}
              </p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2 text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-emerald-400" />
                  {PROFILE_INFO.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  {PROFILE_INFO.phone}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  {PROFILE_INFO.location}
                </span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  {PROFILE_INFO.portfolioWebflowUrl}
                </span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest border-b border-zinc-800 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs text-zinc-300 font-light leading-relaxed">
              {PROFILE_INFO.summaryText}
            </p>
          </div>

          {/* Experience Section */}
          <div className="space-y-4">
            <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest border-b border-zinc-800 pb-1">
              Work Experience
            </h2>

            <div className="space-y-4">
              {WORK_EXPERIENCE.map((exp) => (
                <div key={exp.id} className="bg-zinc-900/40 p-4 rounded-lg border border-zinc-800/80 space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div className="text-sm font-serif-title text-white">{exp.role}</div>
                    <div className="text-xs text-emerald-400 font-mono">{exp.period}</div>
                  </div>
                  <div className="text-xs font-mono text-zinc-400">{exp.company} — {exp.location}</div>
                  <ul className="list-disc list-inside text-xs text-zinc-300 font-light space-y-1 pt-1">
                    {exp.highlights.map((h, idx) => (
                      <li key={idx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest border-b border-zinc-800 pb-1">
              Core Skills & Proficiency
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              {SKILL_CATEGORIES.flatMap((c) => c.skills).map((skill) => (
                <div key={skill.name} className="flex items-center justify-between p-2.5 rounded bg-zinc-900/50 border border-zinc-800">
                  <span className="font-medium text-zinc-200">{skill.name}</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((dot) => (
                      <div
                        key={dot}
                        className={`w-1.5 h-1.5 rounded-full ${
                          dot <= skill.level ? 'bg-emerald-400' : 'bg-zinc-800'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest border-b border-zinc-800 pb-1">
              Education & Qualifications
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {EDUCATION_LIST.map((edu) => (
                <div key={edu.id} className="p-3 rounded bg-zinc-900/50 border border-zinc-800">
                  <div className="font-serif-title text-sm text-white">{edu.qualification}</div>
                  <div className="text-zinc-400 font-mono text-[11px]">{edu.institution} ({edu.year})</div>
                </div>
              ))}
            </div>
          </div>

          {/* References */}
          <div className="space-y-3">
            <h2 className="text-xs font-bold text-emerald-400 uppercase tracking-widest border-b border-zinc-800 pb-1">
              References
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {REFERENCES_LIST.map((ref) => (
                <div key={ref.id} className="p-3 rounded bg-zinc-900/50 border border-zinc-800">
                  <div className="font-serif-title text-sm text-white">{ref.name}</div>
                  <div className="text-zinc-400 font-mono text-[11px]">{ref.relation}</div>
                  <div className="text-emerald-400 font-mono text-xs mt-1">Tel: {ref.phone}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
