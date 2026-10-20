import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { 
  ArrowRight, 
  Sparkles, 
  Terminal, 
  Cpu, 
  CheckCircle2
} from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreProjects }) => {
  const [activeTab, setActiveTab] = useState<'model.py' | 'App.tsx' | 'report.md'>('model.py');

  return (
    <section id="home" className="relative min-h-[85vh] pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-42 lg:pb-28 overflow-hidden">
      {/* Background Ambient Glows & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[250px] sm:h-[350px] bg-gradient-to-tr from-[#8B5CF6]/20 via-[#3B82F6]/15 to-transparent blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] bg-[#8B5CF6]/10 blur-[70px] sm:blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#12121B] border border-[#8B5CF6]/30 shadow-lg shadow-[#8B5CF6]/10 mb-5 sm:mb-6 group cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B5CF6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8B5CF6]"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-[#A78BFA]">
                {siteConfig.brand.heroEyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-5 sm:mb-6">
              From Project Ideas to{' '}
              <span className="bg-gradient-to-r from-[#A78BFA] via-[#8B5CF6] to-[#60A5FA] bg-clip-text text-transparent">
                Real-World Solutions.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#A1A1B5] leading-relaxed max-w-2xl mb-7 sm:mb-8">
              {siteConfig.brand.heroDescription}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <button
                onClick={onStartProject}
                className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] hover:from-[#7C3AED] hover:to-[#2563EB] shadow-lg shadow-[#8B5CF6]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/40 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] min-h-[48px]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreProjects}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3.5 rounded-xl font-medium text-sm text-[#F5F5FA] bg-[#12121B] hover:bg-white/[0.06] border border-white/[0.1] hover:border-white/[0.2] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] min-h-[48px]"
              >
                <span>Explore Projects</span>
              </button>
            </div>

            {/* Compact Service Line */}
            <div className="w-full sm:w-auto flex items-center gap-2 text-xs sm:text-sm text-[#A1A1B5] bg-white/[0.03] border border-white/[0.06] px-3.5 sm:px-4 py-2.5 rounded-xl backdrop-blur-sm flex-wrap">
              <Sparkles className="w-4 h-4 text-[#8B5CF6] shrink-0" />
              <span className="font-mono tracking-tight text-[#D4D4E8] text-[11px] sm:text-xs">
                {siteConfig.brand.serviceLine}
              </span>
            </div>
          </div>

          {/* Right Column: Custom Visual Composition */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative glow frame */}
              <div className="relative rounded-2xl bg-gradient-to-b from-white/[0.12] to-white/[0.03] p-[1px] shadow-2xl shadow-black/80">
                <div className="rounded-[15px] bg-[#12121B] border border-white/[0.06] overflow-hidden">
                  
                  {/* Window Titlebar */}
                  <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-[#0D0D15] border-b border-white/[0.06]">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#EF4444]/80 inline-block" />
                      <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
                      <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#10B981]/80 inline-block" />
                      <span className="ml-1 sm:ml-2 text-[10px] sm:text-xs font-mono text-[#A1A1B5]">buildora-core</span>
                    </div>

                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => setActiveTab('model.py')}
                        className={`px-2 py-1 text-[10px] sm:text-[11px] font-mono rounded transition-colors ${
                          activeTab === 'model.py'
                            ? 'bg-[#8B5CF6]/20 text-[#A78BFA] border border-[#8B5CF6]/30'
                            : 'text-[#A1A1B5] hover:text-white'
                        }`}
                      >
                        model.py
                      </button>
                      <button
                        onClick={() => setActiveTab('App.tsx')}
                        className={`px-2 py-1 text-[10px] sm:text-[11px] font-mono rounded transition-colors ${
                          activeTab === 'App.tsx'
                            ? 'bg-[#8B5CF6]/20 text-[#A78BFA] border border-[#8B5CF6]/30'
                            : 'text-[#A1A1B5] hover:text-white'
                        }`}
                      >
                        App.tsx
                      </button>
                      <button
                        onClick={() => setActiveTab('report.md')}
                        className={`px-2 py-1 text-[10px] sm:text-[11px] font-mono rounded transition-colors ${
                          activeTab === 'report.md'
                            ? 'bg-[#8B5CF6]/20 text-[#A78BFA] border border-[#8B5CF6]/30'
                            : 'text-[#A1A1B5] hover:text-white'
                        }`}
                      >
                        report.md
                      </button>
                    </div>
                  </div>

                  {/* Code Editor Body */}
                  <div className="p-3.5 sm:p-4 font-mono text-[11px] sm:text-xs leading-relaxed bg-[#0B0B12] overflow-x-auto min-h-[190px] sm:min-h-[210px]">
                    {activeTab === 'model.py' && (
                      <div className="space-y-1">
                        <p className="text-[#A1A1B5]/60"># 1. Feature Engineering & Prediction</p>
                        <p>
                          <span className="text-[#F472B6]">import</span>{' '}
                          <span className="text-[#93C5FD]">torch</span>,{' '}
                          <span className="text-[#93C5FD]">sklearn</span>
                        </p>
                        <p>
                          <span className="text-[#F472B6]">from</span>{' '}
                          <span className="text-[#93C5FD]">buildora.ml</span>{' '}
                          <span className="text-[#F472B6]">import</span>{' '}
                          <span className="text-[#FDE047]">Evaluator</span>
                        </p>
                        <div className="py-0.5 sm:py-1"></div>
                        <p>
                          <span className="text-[#60A5FA]">model</span> = Evaluator(weights=
                          <span className="text-[#34D399]">'verified'</span>)
                        </p>
                        <p>
                          <span className="text-[#60A5FA]">report</span> = model.generate_deliverable(
                        </p>
                        <p className="pl-3 sm:pl-4 text-[#A1A1B5]">
                          accuracy=<span className="text-[#34D399]">0.962</span>,
                          latency_ms=<span className="text-[#34D399]">14</span>
                        </p>
                        <p>)</p>
                        <p className="text-[#34D399] pt-1">
                          ✓ Pipeline verified & ready for presentation
                        </p>
                      </div>
                    )}

                    {activeTab === 'App.tsx' && (
                      <div className="space-y-1">
                        <p className="text-[#A1A1B5]/60">// Full-Stack Responsive Interface</p>
                        <p>
                          <span className="text-[#F472B6]">export default function</span>{' '}
                          <span className="text-[#60A5FA]">ProjectDashboard</span>() &#123;
                        </p>
                        <p className="pl-3 sm:pl-4">
                          <span className="text-[#F472B6]">const</span> &#123; data, status &#125; ={' '}
                          <span className="text-[#FDE047]">useProjectAPI</span>();
                        </p>
                        <p className="pl-3 sm:pl-4">
                          <span className="text-[#F472B6]">return</span> (
                        </p>
                        <p className="pl-6 sm:pl-8 text-[#93C5FD]">
                          &lt;<span className="text-[#F472B6]">BuildoraStudio</span> view=
                          <span className="text-[#34D399]">"deliverable"</span> /&gt;
                        </p>
                        <p className="pl-3 sm:pl-4">);</p>
                        <p>&#125;</p>
                        <p className="text-[#34D399] pt-1">✓ Build passed · Zero bundle warnings</p>
                      </div>
                    )}

                    {activeTab === 'report.md' && (
                      <div className="space-y-1">
                        <p className="text-[#A78BFA] font-bold"># Technical Report & Synopsis</p>
                        <p className="text-[#A1A1B5]">## 1. Abstract & System Architecture</p>
                        <p className="text-[#E2E8F0]">
                          - Architecture diagram: Included (UML / Flowchart)
                        </p>
                        <p className="text-[#E2E8F0]">- Results & Evaluation: Tables & Charts</p>
                        <p className="text-[#E2E8F0]">- Setup Instructions: Complete in README.md</p>
                        <p className="text-[#34D399] pt-1">✓ Formatted for viva & final submission</p>
                      </div>
                    )}
                  </div>

                  {/* Terminal / Live Status Strip */}
                  <div className="px-3 sm:px-4 py-2 sm:py-2.5 bg-[#09090F] border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <Terminal className="w-3.5 h-3.5 text-[#34D399]" />
                      <span className="text-[10px] sm:text-[11px] font-mono text-[#D4D4E8]">
                        npm test: <span className="text-[#34D399]">14 passed</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
                      <span className="text-[9px] sm:text-[10px] uppercase font-mono text-[#A1A1B5]">
                        System Healthy
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Element 1: Prototype Ready Card (Responsive) */}
              <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-5 sm:-left-6 bg-[#12121B]/95 border border-white/[0.1] rounded-xl p-2.5 sm:p-3 shadow-2xl backdrop-blur-md flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-lg bg-[#8B5CF6]/15 border border-[#8B5CF6]/30 flex items-center justify-center text-[#A78BFA] shrink-0">
                  <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5 text-[#8B5CF6]" />
                </div>
                <div>
                  <div className="text-[11px] sm:text-xs font-semibold text-white">Full Deliverable Kit</div>
                  <div className="text-[9px] sm:text-[10px] text-[#A1A1B5]">Code · Report · PPT · Demo</div>
                </div>
              </div>

              {/* Floating Element 2: Tech Badges Pill (Responsive) */}
              <div className="hidden sm:flex absolute -top-5 -right-3 bg-[#12121B]/95 border border-[#8B5CF6]/30 rounded-xl px-3 py-1.5 shadow-2xl backdrop-blur-md items-center gap-2">
                <Cpu className="w-3.5 h-3.5 text-[#60A5FA]" />
                <span className="text-[11px] font-mono font-medium text-white">AI / MERN / Web3</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
