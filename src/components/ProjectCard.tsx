import React from 'react';
import type { ProjectItem } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onViewDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl bg-[#12121B] border border-white/[0.06] hover:border-[#8B5CF6]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#8B5CF6]/10 hover:-translate-y-1 overflow-hidden">
      
      {/* Top Visual Mockup Container */}
      <div className="relative p-2.5 sm:p-3.5 bg-[#0D0D16] border-b border-white/[0.06] group-hover:bg-[#0F0F1A] transition-colors">
        <ProjectMockup type={project.mockupType} />
        
        {/* Floating Category & Status Badges */}
        <div className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-center gap-1.5 sm:gap-2">
          <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#09090F]/90 text-[#A78BFA] border border-white/[0.1] backdrop-blur-md">
            {project.category}
          </span>
          <span className="text-[9px] sm:text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#8B5CF6]/20 text-[#D8B4FE] border border-[#8B5CF6]/30 backdrop-blur-md">
            {project.status}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-white transition-colors">
            {project.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#A1A1B5] leading-relaxed mb-4 sm:mb-5">
            {project.description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-[#CBD5E1] border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="text-[10px] sm:text-[11px] font-mono px-1.5 py-0.5 text-[#A1A1B5]">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-3.5 sm:pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <button
            onClick={() => onViewDetails(project)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/[0.05] hover:bg-[#8B5CF6]/20 border border-white/[0.08] hover:border-[#8B5CF6]/40 px-3.5 py-2 rounded-xl transition-all duration-200 group-hover:text-white focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8B5CF6]"
          >
            <span>View Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#8B5CF6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <span className="text-[10px] sm:text-[11px] text-[#A1A1B5] font-mono">
            {project.status}
          </span>
        </div>
      </div>

    </div>
  );
};
