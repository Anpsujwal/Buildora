import React from 'react';
import { siteConfig } from '../config/site';
import { 
  Layout, 
  Server, 
  Database, 
  Brain, 
  Share2, 
  Wrench,
  CheckCircle2
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layout className="w-5 h-5 text-[#8B5CF6]" />;
      case 1:
        return <Server className="w-5 h-5 text-[#3B82F6]" />;
      case 2:
        return <Database className="w-5 h-5 text-[#10B981]" />;
      case 3:
        return <Brain className="w-5 h-5 text-[#EC4899]" />;
      case 4:
        return <Share2 className="w-5 h-5 text-[#A78BFA]" />;
      case 5:
        return <Wrench className="w-5 h-5 text-[#F59E0B]" />;
      default:
        return <Layout className="w-5 h-5 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="tech-stack" className="relative py-16 sm:py-24 bg-[#09090F] border-t border-white/[0.04]">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[200px] sm:h-[350px] bg-gradient-to-r from-[#8B5CF6]/5 to-[#3B82F6]/5 blur-[90px] sm:blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12121B] border border-white/[0.08] mb-3.5 sm:mb-4">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#A78BFA]">
              OUR TOOLKIT
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            The Technologies Behind the Ideas.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#A1A1B5] leading-relaxed">
            Explore the tools and frameworks suited to your project requirements.
          </p>
        </div>

        {/* Tech Categories Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {siteConfig.technologies.map((category, idx) => (
            <div
              key={category.title}
              className="p-5 sm:p-6 rounded-2xl bg-[#12121B] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 hover:shadow-xl hover:shadow-black/60 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0">
                    {getCategoryIcon(idx)}
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-[#A1A1B5] mb-4 sm:mb-5 leading-relaxed">
                  {category.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.technologies.map((tech) => (
                    <div
                      key={tech.name}
                      className="group/tech inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-[#0E0E17] hover:bg-[#1A1A28] border border-white/[0.06] hover:border-[#8B5CF6]/30 transition-colors"
                    >
                      <span className="text-[11px] sm:text-xs font-mono font-medium text-[#E2E8F0]">
                        {tech.name}
                      </span>
                      {tech.tag && (
                        <span className="text-[9px] font-mono text-[#A1A1B5] bg-white/[0.04] px-1.5 py-0.2 rounded">
                          {tech.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-5 sm:mt-6 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[10px] sm:text-[11px] text-[#A1A1B5] font-mono">
                <span>Flexible Stack Setup</span>
                <span className="text-[#34D399] flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Compatible
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
