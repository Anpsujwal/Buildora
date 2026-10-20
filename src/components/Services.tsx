import React from 'react';
import { siteConfig } from '../config/site';
import { Code2, BrainCircuit, Presentation, FileText, ArrowUpRight, Check } from 'lucide-react';
import type { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 sm:w-6 h-5 sm:h-6 text-[#8B5CF6]" />;
      case 'BrainCircuit':
        return <BrainCircuit className="w-5 sm:w-6 h-5 sm:h-6 text-[#60A5FA]" />;
      case 'Presentation':
        return <Presentation className="w-5 sm:w-6 h-5 sm:h-6 text-[#A78BFA]" />;
      case 'FileText':
        return <FileText className="w-5 sm:w-6 h-5 sm:h-6 text-[#38BDF8]" />;
      default:
        return <Code2 className="w-5 sm:w-6 h-5 sm:h-6 text-[#8B5CF6]" />;
    }
  };

  return (
    <section id="services" className="relative py-16 sm:py-24 bg-[#09090F] border-t border-white/[0.04]">
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-[#8B5CF6]/5 blur-[100px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12121B] border border-white/[0.08] mb-3.5 sm:mb-4">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#A78BFA]">
              WHAT WE DO
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            Everything You Need to Build Your Project.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#A1A1B5] leading-relaxed">
            From the first idea to the final presentation, get the technical support and deliverables you need in one place.
          </p>
        </div>

        {/* 4 Cards Grid (1 col on mobile, 2 col on tablet, 4 col on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {siteConfig.services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between p-5 sm:p-7 rounded-2xl bg-[#12121B] border border-white/[0.06] hover:border-[#8B5CF6]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/10 hover:-translate-y-1"
            >
              <div>
                {/* Icon Container */}
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-105 group-hover:border-[#8B5CF6]/30 transition-all duration-300">
                  {getIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#A1A1B5] leading-relaxed mb-5 sm:mb-6">
                  {service.description}
                </p>

                {/* Capability tags */}
                <div className="space-y-2 mb-5 sm:mb-6">
                  {service.capabilities.slice(0, 4).map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#D4D4E8]">
                      <Check className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
                      <span className="leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-3.5 sm:pt-4 border-t border-white/[0.06]">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-[#A78BFA] group-hover:text-white hover:underline transition-colors py-1.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8B5CF6]"
                >
                  <span>Inquire About Service</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
