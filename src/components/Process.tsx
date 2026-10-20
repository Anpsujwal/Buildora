import React from 'react';
import { siteConfig } from '../config/site';
import { Lightbulb, Compass, Rocket, ArrowRight } from 'lucide-react';
import type { ProcessStep } from '../types';

export const Process: React.FC = () => {
  const getStepIcon = (iconName: ProcessStep['iconName']) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb className="w-5 sm:w-6 h-5 sm:h-6 text-[#8B5CF6]" />;
      case 'Compass':
        return <Compass className="w-5 sm:w-6 h-5 sm:h-6 text-[#3B82F6]" />;
      case 'Rocket':
        return <Rocket className="w-5 sm:w-6 h-5 sm:h-6 text-[#34D399]" />;
      default:
        return <Lightbulb className="w-5 sm:w-6 h-5 sm:h-6 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="how-it-works" className="relative py-16 sm:py-24 bg-[#09090F] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12121B] border border-white/[0.08] mb-3.5 sm:mb-4">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#A78BFA]">
              THE PROCESS
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            Your Idea to Your Final Deliverable.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#A1A1B5] leading-relaxed">
            A transparent, collaborative workflow designed to move from concept to working submission.
          </p>
        </div>

        {/* Steps: Connected Cards / Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8 relative">
          
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] -translate-y-6 h-[2px] bg-gradient-to-r from-[#8B5CF6]/30 via-[#3B82F6]/30 to-[#34D399]/30 pointer-events-none -z-0" />

          {siteConfig.processSteps.map((step, idx) => (
            <div
              key={step.number}
              className="relative z-10 flex flex-col p-6 sm:p-8 rounded-2xl bg-[#12121B] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-300 hover:shadow-xl hover:shadow-black/50 group"
            >
              {/* Step Number & Icon Header */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white/[0.2] group-hover:text-[#8B5CF6]/40 transition-colors">
                  {step.number}
                </span>
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:scale-110 group-hover:border-[#8B5CF6]/40 transition-all duration-300">
                  {getStepIcon(step.iconName)}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#A1A1B5] leading-relaxed">
                {step.description}
              </p>

              {/* Flow indicator */}
              <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-white/[0.04] flex items-center gap-2 text-xs font-mono text-[#A1A1B5]">
                <span>Phase {idx + 1} of 3</span>
                {idx < 2 && (
                  <ArrowRight className="w-3.5 h-3.5 text-[#8B5CF6] ml-auto hidden md:block" />
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
