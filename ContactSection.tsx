import React, { useState, useEffect } from 'react';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Copy,
  Sparkles,
  MessageSquare
} from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  prefilledProjectTitle?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledProjectTitle }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    projectType: 'Brand Identity',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledProjectTitle) {
      setFormData((prev) => ({
        ...prev,
        subject: `Inquiry regarding: ${prefilledProjectTitle}`,
        message: `Hi Virgil,\n\nI am interested in discussing a design project similar to "${prefilledProjectTitle}". Please let me know your availability for a brief consultation.\n\nBest regards,`,
      }));
    }
  }, [prefilledProjectTitle]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const copyToClipboard = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 text-[10px] uppercase tracking-widest font-bold">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>Direct Inquiries</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-light text-white tracking-tight font-serif-title">
            Let's Collaborate on Your Vision
          </h2>
          <p className="text-zinc-400 text-sm font-light leading-relaxed">
            Have a brand project, creative direction campaign, or leadership role opportunity? Connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl shadow-2xl space-y-6">
              <h3 className="text-xl font-serif-title text-white border-b border-zinc-800 pb-4">
                Contact & Communication
              </h3>

              <div className="space-y-4">
                {/* Email Box */}
                <div className="flex items-start justify-between p-4 rounded-lg bg-zinc-950 border border-zinc-800 group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-zinc-500 font-mono">Email Address</span>
                      <a
                        href={`mailto:${PROFILE_INFO.email}`}
                        className="text-xs font-mono text-zinc-200 hover:text-emerald-300 transition-colors"
                      >
                        {PROFILE_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(PROFILE_INFO.email, 'email')}
                    className="p-2 text-zinc-500 hover:text-white rounded hover:bg-zinc-900 transition-colors"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="flex items-start justify-between p-4 rounded-lg bg-zinc-950 border border-zinc-800 group">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block text-[10px] uppercase tracking-wider text-zinc-500 font-mono">Direct Phone</span>
                      <a
                        href={`tel:${PROFILE_INFO.phone}`}
                        className="text-xs font-mono text-zinc-200 hover:text-emerald-300 transition-colors"
                      >
                        {PROFILE_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(PROFILE_INFO.phone, 'phone')}
                    className="p-2 text-zinc-500 hover:text-white rounded hover:bg-zinc-900 transition-colors"
                    title="Copy Phone"
                  >
                    {copiedField === 'phone' ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3 p-4 rounded-lg bg-zinc-950 border border-zinc-800">
                  <div className="w-9 h-9 rounded bg-zinc-900 border border-zinc-800 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-zinc-500 font-mono">Location Base</span>
                    <span className="text-xs font-mono text-zinc-200">{PROFILE_INFO.location}</span>
                  </div>
                </div>

                {/* Live Webflow Link */}
                <a
                  href={PROFILE_INFO.portfolioWebflowUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-white hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-widest font-mono">Webflow Portfolio</div>
                      <div className="text-xs text-zinc-400 font-mono">virgil-ncubes-portfolio.webflow.io</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-zinc-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-zinc-900/50 border border-zinc-800 p-8 rounded-xl shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded bg-emerald-950 border border-emerald-800/80 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-serif-title text-white">Message Transmitted</h3>
                <p className="text-zinc-300 text-xs font-light max-w-md mx-auto leading-relaxed">
                  Thank you for your message, <span className="text-white font-medium">{formData.name}</span>. Virgil will review your brief and get back to you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      projectType: 'Brand Identity',
                      subject: '',
                      message: '',
                    });
                  }}
                  className="mt-4 px-6 py-2.5 rounded bg-zinc-900 text-zinc-200 border border-zinc-800 text-xs font-bold uppercase tracking-widest"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-serif-title text-white border-b border-zinc-800 pb-4">
                  Send a Direct Message
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-wider font-mono text-zinc-400">
                      Full Name <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-wider font-mono text-zinc-400">
                      Email Address <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sarah@company.com"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-wider font-mono text-zinc-400">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+27 82 123 4567"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] uppercase tracking-wider font-mono text-zinc-400">
                      Service Requirement
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-2.5 text-xs text-zinc-200 focus:outline-none focus:border-zinc-700"
                    >
                      <option value="Brand Identity">Corporate Brand & Identity</option>
                      <option value="UI/UX & Web Design">UI/UX & Webflow Development</option>
                      <option value="Graphic Design & Print">Graphic Design & Print Pre-Press</option>
                      <option value="Photobooth & Event Branding">Photobooth & Event Graphics</option>
                      <option value="Digital Marketing & SEO">Digital Marketing & SEO Strategy</option>
                      <option value="General Inquiry">General Leadership Inquiry</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] uppercase tracking-wider font-mono text-zinc-400">
                    Subject <span className="text-emerald-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project headline or opportunity title"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="block text-[10px] uppercase tracking-wider font-mono text-zinc-400">
                    Message / Project Brief <span className="text-emerald-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell Virgil about your creative requirements, timeline, or scope..."
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-2.5 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-700 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded text-xs font-bold uppercase tracking-widest text-black bg-white hover:bg-emerald-400 shadow-2xl transition-all disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>Transmitting Message...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Dispatch Message to Virgil</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
