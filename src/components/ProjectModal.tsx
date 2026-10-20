import React, { useEffect, useRef } from 'react';
import type { ProjectItem } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { X, Check, ArrowRight, ShieldAlert } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onDiscussProject: (projectName: string, category: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onDiscussProject,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      modalRef.current?.focus();
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className="relative w-full max-w-2xl bg-[#12121B] border border-white/[0.1] rounded-2xl shadow-2xl overflow-hidden my-auto focus:outline-none"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 md:p-6 border-b border-white/[0.08] bg-[#0E0E17]">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap pr-2">
            <h3 id="modal-title" className="text-lg sm:text-2xl font-bold text-white">
              {project.name}
            </h3>
            <span className="text-[10px] sm:text-xs font-mono px-2 sm:px-2.5 py-0.5 rounded-full bg-[#8B5CF6]/15 text-[#A78BFA] border border-[#8B5CF6]/30">
              {project.status}
            </span>
          </div>

          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-xl text-[#A1A1B5] hover:text-white hover:bg-white/[0.08] active:bg-white/[0.12] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] shrink-0"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-4 sm:p-5 md:p-6 space-y-5 sm:space-y-6 max-h-[70vh] sm:max-h-[75vh] overflow-y-auto">
          {/* Interactive Mockup Display */}
          <div className="rounded-xl overflow-hidden border border-white/[0.06] bg-[#09090F]">
            <ProjectMockup type={project.mockupType} />
          </div>

          {/* Project Overview */}
          <div>
            <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#A1A1B5] mb-1.5 sm:mb-2">
              Project Overview
            </h4>
            <p className="text-xs sm:text-sm text-[#D4D4E8] leading-relaxed">
              {project.fullOverview}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#A1A1B5] mb-2 sm:mb-2.5">
              Key Capabilities & Features
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.keyFeatures.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2 text-xs text-[#D4D4E8] bg-white/[0.02] p-2 rounded-lg border border-white/[0.04]"
                >
                  <Check className="w-3.5 h-3.5 text-[#34D399] shrink-0 mt-0.5" />
                  <span className="leading-snug">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Badges */}
          <div>
            <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#A1A1B5] mb-2">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] sm:text-xs font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-white/[0.04] text-[#E2E8F0] border border-white/[0.08]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture Summary */}
          <div>
            <h4 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-[#A1A1B5] mb-1.5 sm:mb-2">
              Architecture Summary
            </h4>
            <div className="text-xs text-[#A1A1B5] bg-[#0D0D15] p-3 rounded-lg border border-white/[0.04] leading-relaxed font-mono">
              {project.architectureSummary}
            </div>
          </div>

          {/* Transparent Honest Disclaimer Note */}
          {project.disclaimerNote && (
            <div className="flex items-start gap-2.5 p-3 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 text-xs text-[#D4D4E8]">
              <ShieldAlert className="w-4 h-4 text-[#A78BFA] shrink-0 mt-0.5" />
              <span className="leading-relaxed">
                <strong>Note:</strong> {project.disclaimerNote}
              </span>
            </div>
          )}
        </div>

        {/* Modal Footer (Stacks on small mobile) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 sm:p-5 md:p-6 border-t border-white/[0.08] bg-[#0E0E17]">
          <span className="text-xs text-[#A1A1B5] font-mono text-center sm:text-left">
            Category: <strong className="text-white">{project.category}</strong>
          </span>

          <button
            onClick={() => {
              onClose();
              onDiscussProject(project.name, project.category);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] hover:from-[#7C3AED] hover:to-[#2563EB] shadow-md shadow-[#8B5CF6]/20 transition-all hover:scale-[1.02] active:scale-[0.98] min-h-[44px]"
          >
            <span>Discuss a Similar Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
