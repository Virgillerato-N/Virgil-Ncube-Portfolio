import React, { useState } from 'react';
import {
  X,
  Download,
  Copy,
  CheckCircle2,
  Globe,
  Database,
  ExternalLink,
  Layers,
  FileSpreadsheet,
  HelpCircle,
  Sparkles,
} from 'lucide-react';
import {
  getProjectsCsv,
  getExperienceCsv,
  getSkillsCsv,
  getEducationCsv,
  getReferencesCsv,
  downloadCsvFile,
} from '../utils/webflowCsv';

interface WebflowModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WebflowModal: React.FC<WebflowModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'projects' | 'experience' | 'skills' | 'education' | 'references'>('projects');
  const [copiedTab, setCopiedTab] = useState<string | null>(null);

  if (!isOpen) return null;

  const collections = [
    {
      id: 'projects',
      label: 'Projects Collection',
      filename: 'webflow_projects_collection.csv',
      getCsv: getProjectsCsv,
      count: '6 Items',
      fields: ['Name', 'Slug', 'Category', 'Client', 'Year', 'Summary', 'Description', 'Deliverables', 'Tools', 'Featured', 'ImageURL'],
    },
    {
      id: 'experience',
      label: 'Work Experience Collection',
      filename: 'webflow_experience_collection.csv',
      getCsv: getExperienceCsv,
      count: '5 Roles',
      fields: ['Name', 'Slug', 'Role', 'Company', 'Location', 'Period', 'IsCurrent', 'Description', 'Highlights', 'SkillsUsed'],
    },
    {
      id: 'skills',
      label: 'Skills Collection',
      filename: 'webflow_skills_collection.csv',
      getCsv: getSkillsCsv,
      count: '19 Skills',
      fields: ['Name', 'Slug', 'Category', 'Level', 'Description'],
    },
    {
      id: 'education',
      label: 'Education Collection',
      filename: 'webflow_education_collection.csv',
      getCsv: getEducationCsv,
      count: '6 Qualifications',
      fields: ['Name', 'Slug', 'Qualification', 'Institution', 'Location', 'Year', 'Category'],
    },
    {
      id: 'references',
      label: 'References Collection',
      filename: 'webflow_references_collection.csv',
      getCsv: getReferencesCsv,
      count: '2 Endorsements',
      fields: ['Name', 'Slug', 'Relation', 'Phone', 'Quote'],
    },
  ] as const;

  const currentCollection = collections.find((c) => c.id === activeTab) || collections[0];
  const activeCsvContent = currentCollection.getCsv();

  const handleCopy = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedTab(id);
    setTimeout(() => setCopiedTab(null), 2000);
  };

  const handleDownloadAll = () => {
    collections.forEach((col, idx) => {
      setTimeout(() => {
        downloadCsvFile(col.getCsv(), col.filename);
      }, idx * 300);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[92vh] bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl overflow-y-auto flex flex-col my-auto text-zinc-200">
        
        {/* Sticky Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-4 sm:p-6 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-emerald-950 border border-emerald-800/80 flex items-center justify-center text-emerald-400">
              <Globe className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-serif-title text-white">
                  Webflow CMS Export Hub
                </h2>
                <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-emerald-400 uppercase tracking-widest">
                  Ready for webflow.io
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-light mt-0.5">
                Production-ready CSV exports optimized for <a href="https://virgil-ncubes-portfolio.webflow.io/" target="_blank" rel="noreferrer" className="text-emerald-400 underline hover:text-emerald-300">virgil-ncubes-portfolio.webflow.io</a> CMS Collections.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadAll}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded bg-white text-black hover:bg-emerald-400 transition-colors text-xs font-bold uppercase tracking-widest shadow-lg cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download All CSVs</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Content Body */}
        <div className="p-4 sm:p-8 space-y-8">

          {/* Quick Action Cards Banner */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 space-y-1">
              <div className="text-[10px] uppercase tracking-widest font-mono text-zinc-500 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-emerald-400" />
                <span>Target CMS Site</span>
              </div>
              <div className="text-sm font-serif-title text-white">
                virgil-ncubes-portfolio.webflow.io
              </div>
            </div>

            <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 space-y-1">
              <div className="text-[10px] uppercase tracking-widest font-mono text-zinc-500 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-emerald-400" />
                <span>Total CMS Collections</span>
              </div>
              <div className="text-sm font-serif-title text-white">
                5 Structured Collections
              </div>
            </div>

            <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800 space-y-1">
              <div className="text-[10px] uppercase tracking-widest font-mono text-zinc-500 flex items-center gap-1.5">
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                <span>CSV Compliance</span>
              </div>
              <div className="text-sm font-serif-title text-white">
                UTF-8 Encoded & Sluggified
              </div>
            </div>
          </div>

          {/* Download & Collection Tabs */}
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">
                Select CMS Collection to Preview & Download
              </h3>
              <button
                onClick={handleDownloadAll}
                className="sm:hidden text-xs text-emerald-400 font-mono underline"
              >
                Download All CSVs
              </button>
            </div>

            {/* Collection Tabs */}
            <div className="flex flex-wrap gap-2">
              {collections.map((col) => {
                const isActive = activeTab === col.id;
                return (
                  <button
                    key={col.id}
                    onClick={() => setActiveTab(col.id as any)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded text-xs font-mono transition-colors cursor-pointer ${
                      isActive
                        ? 'bg-zinc-800 text-white border border-zinc-700'
                        : 'bg-zinc-900/60 text-zinc-400 border border-zinc-800/80 hover:text-white hover:bg-zinc-900'
                    }`}
                  >
                    <span>{col.label}</span>
                    <span className="px-1.5 py-0.2 text-[10px] rounded bg-zinc-950 text-emerald-400 border border-zinc-800">
                      {col.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Collection Info & Code Preview */}
          <div className="bg-zinc-900/40 border border-zinc-800 rounded-lg p-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-800/80 pb-4">
              <div>
                <h4 className="text-lg font-serif-title text-white flex items-center gap-2">
                  <span>{currentCollection.label}</span>
                  <span className="text-xs font-mono text-zinc-400 font-normal">
                    ({currentCollection.filename})
                  </span>
                </h4>
                <p className="text-xs text-zinc-400 font-light mt-1">
                  Mapped Webflow Fields: <code className="text-emerald-400 font-mono text-[11px]">{currentCollection.fields.join(', ')}</code>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(currentCollection.id, activeCsvContent)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-200 hover:text-white hover:border-zinc-700 text-xs font-mono transition-colors cursor-pointer"
                >
                  {copiedTab === currentCollection.id ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Copy CSV</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => downloadCsvFile(activeCsvContent, currentCollection.filename)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-300 hover:bg-emerald-900 text-xs font-mono font-bold transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download {currentCollection.filename}</span>
                </button>
              </div>
            </div>

            {/* CSV Code Display */}
            <div className="relative">
              <pre className="p-4 rounded bg-black border border-zinc-800/90 text-[11px] font-mono text-zinc-300 overflow-x-auto max-h-64 leading-relaxed scrollbar-thin">
                {activeCsvContent}
              </pre>
            </div>
          </div>

          {/* Webflow CMS Import Step-by-Step Instructions */}
          <div className="space-y-4 pt-4 border-t border-zinc-800/80">
            <h3 className="text-xs font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              How to Upload these CSVs to webflow.io CMS Editor
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-light text-zinc-300">
              <div className="p-4 rounded bg-zinc-900/30 border border-zinc-800/80 space-y-2">
                <div className="flex items-center gap-2 font-bold font-mono text-white text-xs">
                  <span className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center text-emerald-400 text-[10px]">1</span>
                  <span>Open Your Webflow Designer</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Log in to Webflow and open the project for <strong className="text-white">virgil-ncubes-portfolio.webflow.io</strong>.
                </p>
              </div>

              <div className="p-4 rounded bg-zinc-900/30 border border-zinc-800/80 space-y-2">
                <div className="flex items-center gap-2 font-bold font-mono text-white text-xs">
                  <span className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center text-emerald-400 text-[10px]">2</span>
                  <span>Navigate to CMS Collections</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Click the <strong className="text-white">CMS Collections</strong> icon (database stack) on the left panel sidebar.
                </p>
              </div>

              <div className="p-4 rounded bg-zinc-900/30 border border-zinc-800/80 space-y-2">
                <div className="flex items-center gap-2 font-bold font-mono text-white text-xs">
                  <span className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center text-emerald-400 text-[10px]">3</span>
                  <span>Create Collection & Click "Import"</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Create a Collection (e.g. "Projects") or select an existing one. Click the <strong className="text-white">Import</strong> button at the top right corner.
                </p>
              </div>

              <div className="p-4 rounded bg-zinc-900/30 border border-zinc-800/80 space-y-2">
                <div className="flex items-center gap-2 font-bold font-mono text-white text-xs">
                  <span className="w-5 h-5 rounded bg-zinc-800 flex items-center justify-center text-emerald-400 text-[10px]">4</span>
                  <span>Map Fields & Import Items</span>
                </div>
                <p className="text-zinc-400 leading-relaxed">
                  Upload the downloaded <code className="text-emerald-400 font-mono">.csv</code> file, verify the auto-detected field mappings (e.g. <strong className="text-white">Name</strong>, <strong className="text-white">Slug</strong>, <strong className="text-white">ImageURL</strong>), and hit <strong className="text-white">Import Collection Items</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="pt-4 border-t border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <a
              href="https://virgil-ncubes-portfolio.webflow.io/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-emerald-300 transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-400" />
              <span>Visit virgil-ncubes-portfolio.webflow.io</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={handleDownloadAll}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded bg-white text-black hover:bg-emerald-400 transition-colors text-xs font-bold uppercase tracking-widest cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download All 5 Webflow CSV Files</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
