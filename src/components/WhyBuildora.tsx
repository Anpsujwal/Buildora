import React from 'react';
import { siteConfig } from '../config/site';
import { Target, FileCheck, Layers, Sparkles } from 'lucide-react';
import type { ValueProp } from '../types';

export const WhyBuildora: React.FC = () => {
  const getIcon = (iconName: ValueProp['iconName']) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 sm:w-6 h-5 sm:h-6 text-[#8B5CF6]" />;
      case 'FileCheck':
        return <FileCheck className="w-5 sm:w-6 h-5 sm:h-6 text-[#3B82F6]" />;
      case 'Layers':
        return <Layers className="w-5 sm:w-6 h-5 sm:h-6 text-[#10B981]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-[#A78BFA]" />;
      default:
        return <Target className="w-5 sm:w-6 h-5 sm:h-6 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="why-us" className="relative py-16 sm:py-24 bg-[#09090F] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12121B] border border-white/[0.08] mb-3.5 sm:mb-4">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#A78BFA]">
              WHY BUILDORA
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            More Than Just a Project.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#A1A1B5] leading-relaxed">
            We focus on understanding, structured deliverables, and presentation confidence.
          </p>
        </div>

        {/* 4 Value Proposition Cards (1 col mobile, 2 col tablet, 4 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {siteConfig.whyBuildora.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-7 rounded-2xl bg-[#12121B] border border-white/[0.06] hover:border-[#8B5CF6]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/5 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5 sm:mb-6">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A1A1B5] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-3 border-t border-white/[0.04] text-[10px] sm:text-[11px] font-mono text-[#A78BFA]">
                Student-First Focus
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
