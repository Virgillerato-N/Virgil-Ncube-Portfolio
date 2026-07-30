import React from 'react';
import {
  User,
  CheckCircle2,
  Target,
  Sparkles,
  Users2,
  Camera,
  Code2,
  Gamepad2,
  Music,
  Dumbbell,
  Puzzle,
} from 'lucide-react';
import { PROFILE_INFO, HOBBIES } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const getHobbyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Camera':
        return <Camera className="w-4 h-4 text-emerald-400" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 text-emerald-400" />;
      case 'Gamepad2':
        return <Gamepad2 className="w-4 h-4 text-emerald-400" />;
      case 'Music':
        return <Music className="w-4 h-4 text-emerald-400" />;
      case 'Dumbbell':
        return <Dumbbell className="w-4 h-4 text-emerald-400" />;
      case 'Puzzle':
        return <Puzzle className="w-4 h-4 text-emerald-400" />;
      default:
        return <Sparkles className="w-4 h-4 text-emerald-400" />;
    }
  };

  const corePillars = [
    {
      title: 'Brand Consistency & Systems',
      desc: 'Developing and preserving bulletproof corporate brand guidelines across print, digital, and physical media.',
      icon: <Target className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Precision & Detail Orientation',
      desc: 'Obsessed with exact pixel alignment, typographic hierarchy, color space separation (CMYK/RGB), and pre-press quality.',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'End-to-End Campaign Delivery',
      desc: 'From initial client discovery and scoping to final print pre-press, web deployment, and photobooth execution.',
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Collaborative Team Leadership',
      desc: 'Guiding multi-disciplinary creative teams across design, sales, marketing, and physical production managers.',
      icon: <Users2 className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a] border-y border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] uppercase tracking-widest font-bold">
            <User className="w-3.5 h-3.5 text-emerald-400" />
            <span>Curator Profile</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight font-serif-title">
            Creative Vision & Strategic Leadership
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            A comprehensive look into background, core values, and design philosophy.
          </p>
        </div>

        {/* Top Split: Professional Summary & Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Professional Bio Card */}
          <div className="lg:col-span-6 space-y-6 bg-zinc-900/60 border border-zinc-800 p-8 rounded-xl shadow-2xl">
            <div className="flex items-center gap-3 border-b border-zinc-800/80 pb-4">
              <div className="w-9 h-9 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white text-xs font-bold tracking-widest">
                VN
              </div>
              <div>
                <h3 className="text-xl font-serif-title text-white">Professional Summary</h3>
                <p className="text-[10px] uppercase tracking-widest text-emerald-400 font-semibold">
                  Creative Director & Graphic Designer
                </p>
              </div>
            </div>

            <p className="text-zinc-300 leading-relaxed text-sm font-light">
              {PROFILE_INFO.aboutMe}
            </p>

            <p className="text-zinc-400 leading-relaxed text-sm font-light">
              {PROFILE_INFO.summaryText}
            </p>

            <div className="pt-4 border-t border-zinc-800/80 grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="block text-zinc-500 text-[10px] uppercase tracking-wider">Location</span>
                <span className="text-zinc-200">Gauteng, South Africa</span>
              </div>
              <div>
                <span className="block text-zinc-500 text-[10px] uppercase tracking-wider">Focus</span>
                <span className="text-zinc-200">Brand Identity & Direction</span>
              </div>
              <div>
                <span className="block text-zinc-500 text-[10px] uppercase tracking-wider">Sectors</span>
                <span className="text-zinc-200">Wellness, Corporate, Events</span>
              </div>
              <div>
                <span className="block text-zinc-500 text-[10px] uppercase tracking-wider">Languages</span>
                <span className="text-zinc-200">English (Fluent)</span>
              </div>
            </div>
          </div>

          {/* 4 Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-xl hover:border-zinc-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded bg-zinc-800 border border-zinc-700/80 flex items-center justify-center mb-4 group-hover:border-emerald-500/50 transition-colors">
                  {pillar.icon}
                </div>
                <h4 className="text-base font-serif-title text-white mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

        {/* Hobbies & Creative Interests Section */}
        <div className="mt-16 pt-12 border-t border-zinc-800/80">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif-title text-white">Personal Interests & Creative Inspiration</h3>
            <p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Activities fueling creative balance outside studio hours</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {HOBBIES.map((hobby, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/40 border border-zinc-800 p-4 rounded-lg text-center hover:bg-zinc-900/80 hover:border-zinc-700 transition-all"
              >
                <div className="w-9 h-9 rounded bg-zinc-800/80 border border-zinc-700/80 flex items-center justify-center mx-auto mb-2">
                  {getHobbyIcon(hobby.icon)}
                </div>
                <div className="text-xs font-semibold text-zinc-200 mb-0.5">{hobby.name}</div>
                <div className="text-[10px] text-zinc-500 leading-tight">{hobby.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
