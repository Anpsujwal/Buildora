import React from 'react';
import { Logo } from './Logo';
import { siteConfig } from '../config/site';
import { Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#07070C] border-t border-white/[0.06] text-[#A1A1B5] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 pb-8 sm:pb-12 border-b border-white/[0.06]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <Logo size={32} />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-white">
                  Build<span className="text-[#8B5CF6]">ora</span>
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-[#A1A1B5] -mt-1">
                  Technology Studio
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A1A1B5] max-w-sm leading-relaxed">
              Buildora empowers students to turn project ideas into working full-stack applications, AI/ML solutions, presentations, and technical documentation.
            </p>

            <div className="pt-1 sm:pt-2">
              <span className="text-[11px] sm:text-xs font-mono text-[#D4D4E8] bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/[0.06] inline-block">
                "{siteConfig.brand.footerTagline}"
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-4 space-y-2.5 sm:space-y-3">
            <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="hover:text-white transition-colors py-1 inline-block"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="text-xs space-y-2">
              <a
                href={`mailto:${siteConfig.brand.contactEmail}`}
                className="flex items-center gap-2 text-white hover:text-[#A78BFA] transition-colors font-mono py-0.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0" />
                <span className="truncate">{siteConfig.brand.contactEmail}</span>
              </a>
              <p className="text-[11px] text-[#A1A1B5] leading-relaxed">
                Open for project inquiries, prototype development, report reviews, and technical advisory.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A1A1B5]">
          <p className="text-center sm:text-left">© {currentYear} Buildora Studio. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors group p-1"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
