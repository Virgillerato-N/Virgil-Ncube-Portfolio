import React, { useState } from 'react';
import {
  Send,
  FileText,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Check,
  Copy,
  Sparkles,
  ArrowDownRight,
  Palette,
} from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background grid texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      {/* Decorative emerald gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Title, Intro & Call to Actions */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 text-xs tracking-wider uppercase">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {PROFILE_INFO.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Open for Creative Leadership
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-[0.92] font-serif-title">
                Visualizing <br />
                <span className="italic text-zinc-400">Extraordinary</span> Brands.
              </h1>
              <p className="text-zinc-400 text-lg sm:text-xl font-light max-w-2xl leading-relaxed">
                Results-oriented Creative Director & Graphic Specialist with 10+ years crafting premium brand identities, digital design systems, UI/UX, and marketing direction across South Africa.
              </p>
            </div>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-zinc-400">
              <button
                onClick={() => copyToClipboard(PROFILE_INFO.email, 'email')}
                className="group flex items-center gap-2 px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
                title="Click to copy email"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-500" />
                <span>{PROFILE_INFO.email}</span>
                {copiedField === 'email' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400" />
                )}
              </button>

              <button
                onClick={() => copyToClipboard(PROFILE_INFO.phone, 'phone')}
                className="group flex items-center gap-2 px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-all"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-500" />
                <span>{PROFILE_INFO.phone}</span>
                {copiedField === 'phone' ? (
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <Copy className="w-3.5 h-3.5 text-zinc-600 group-hover:text-zinc-400" />
                )}
              </button>
            </div>

            {/* Action Callouts */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-emerald-400 transition-colors shadow-lg"
              >
                <span>Selected Works</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResumeModal}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md text-xs font-bold uppercase tracking-widest text-zinc-200 bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-colors"
              >
                <FileText className="w-4 h-4 text-zinc-400" />
                <span>Full Resume / CV</span>
              </button>

              <a
                href={PROFILE_INFO.portfolioWebflowUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-md text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                title="Open Webflow Portfolio"
              >
                <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                <span>Webflow Showcase</span>
              </a>
            </div>

            {/* Quick Stat Pill Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80">
              <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
                <div className="text-3xl font-serif-title font-light text-white">10+</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1 font-semibold">Years Experience</div>
              </div>
              <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
                <div className="text-3xl font-serif-title font-light text-white">150+</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1 font-semibold">Design Projects</div>
              </div>
              <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800/80">
                <div className="text-3xl font-serif-title font-light text-white">100%</div>
                <div className="text-[10px] uppercase tracking-widest text-zinc-500 mt-1 font-semibold">Client Satisfaction</div>
              </div>
            </div>

          </div>

          {/* Right Column: Sophisticated Portrait Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-md">
              <div className="relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 p-3 shadow-2xl space-y-4">
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950">
                  <img
                    src={PROFILE_INFO.portraitImage}
                    alt={PROFILE_INFO.name}
                    className="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-90" />
                  
                  {/* Floating Overlay Badge */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-zinc-900/90 backdrop-blur-md border border-zinc-800 text-zinc-200 shadow-2xl flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                        Virgil Ncube
                      </div>
                      <div className="text-xs text-zinc-400 font-light mt-0.5">
                        Creative Director & Graphic Designer
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300">
                      <Sparkles className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
