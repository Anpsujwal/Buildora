import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { siteConfig } from '../config/site';
import { Menu, X, ArrowRight, Mail } from 'lucide-react';

interface NavbarProps {
  onStartProjectClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onStartProjectClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = siteConfig.navigation.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const targetId = href.substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = () => {
    setIsOpen(false);
    if (onStartProjectClick) {
      onStartProjectClick();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#09090F]/95 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-2xl shadow-black/60'
            : 'bg-[#09090F]/70 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none py-3.5 sm:py-5 border-b border-white/[0.04] md:border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo & Wordmark */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="group flex items-center gap-2.5 sm:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] rounded-lg p-1"
              aria-label="Buildora Home"
            >
              <Logo size={34} />
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl font-bold tracking-tight text-white transition-colors">
                  Build<span className="text-[#8B5CF6]">ora</span>
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-[#A1A1B5] -mt-1">
                  Tech Studio
                </span>
              </div>
            </a>

            {/* Desktop & Tablet Navigation Links */}
            <nav className="hidden md:flex items-center gap-0.5 lg:gap-1.5 bg-[#12121B]/80 border border-white/[0.06] px-3 lg:px-4 py-1.5 rounded-full backdrop-blur-md shadow-inner">
              {siteConfig.navigation.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`px-2.5 lg:px-3 py-1.5 text-xs lg:text-sm font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] ${
                      isActive
                        ? 'text-white bg-white/[0.1] shadow-sm font-semibold'
                        : 'text-[#A1A1B5] hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Right CTA Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={handleStartProject}
                className="relative group inline-flex items-center gap-2 px-3.5 lg:px-5 py-2 lg:py-2.5 rounded-xl text-xs lg:text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] hover:from-[#7C3AED] hover:to-[#2563EB] shadow-lg shadow-[#8B5CF6]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/40 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090F] focus-visible:ring-[#8B5CF6]"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile Hamburger Menu Button (Touch friendly min 44x44px) */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-11 h-11 flex items-center justify-center rounded-xl text-[#A1A1B5] hover:text-white hover:bg-white/[0.06] border border-white/[0.08] active:bg-white/[0.1] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-md md:hidden animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed top-16 left-4 right-4 max-h-[calc(100vh-5rem)] overflow-y-auto bg-[#12121B] border border-white/[0.1] rounded-2xl shadow-2xl p-5 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col gap-1">
              {siteConfig.navigation.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-between ${
                      isActive
                        ? 'text-white bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 font-semibold'
                        : 'text-[#A1A1B5] hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />}
                  </a>
                );
              })}

              <div className="pt-3 mt-2 border-t border-white/[0.08] space-y-3">
                <button
                  onClick={handleStartProject}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] shadow-lg shadow-[#8B5CF6]/25"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`mailto:${siteConfig.brand.contactEmail}`}
                  className="flex items-center justify-center gap-2 text-xs font-mono text-[#A1A1B5] hover:text-white py-2"
                >
                  <Mail className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>{siteConfig.brand.contactEmail}</span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};
