import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import type { ProjectCategory, ProjectItem } from '../types';

interface ProjectsProps {
  onDiscussProject: (projectName: string, category: string) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onDiscussProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories: ProjectCategory[] = [
    'All',
    'Web Development',
    'MERN Stack',
    'AI/ML',
    'Decentralized Systems',
  ];

  const filteredProjects = siteConfig.projects.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="relative py-16 sm:py-24 bg-[#09090F] border-t border-white/[0.04]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#3B82F6]/5 blur-[100px] sm:blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#8B5CF6]/5 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12121B] border border-white/[0.08] mb-3.5 sm:mb-4">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-[#A78BFA]">
              OUR PROJECT SHOWCASE
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-3 sm:mb-4">
            Ideas We've Explored. Solutions Worth Building.
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#A1A1B5] leading-relaxed">
            Explore project concepts spanning full-stack development, artificial intelligence, machine learning, and decentralized systems.
          </p>
        </div>

        {/* Category Filters (Mobile & Tablet responsive) */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10 sm:mb-12">
          {categories.map((category) => {
            const count =
              category === 'All'
                ? siteConfig.projects.length
                : siteConfig.projects.filter((p) => p.category === category).length;
            const isSelected = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] active:scale-95 ${
                  isSelected
                    ? 'bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/25 border border-[#8B5CF6]'
                    : 'bg-[#12121B] text-[#A1A1B5] hover:text-white hover:bg-white/[0.05] border border-white/[0.06]'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[9px] sm:text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-white/20 text-white' : 'bg-white/[0.08] text-[#A1A1B5]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={(p) => setActiveProject(p)}
            />
          ))}
        </div>

        {/* Bottom honest notification */}
        <div className="mt-10 sm:mt-12 text-center px-4">
          <p className="text-xs text-[#A1A1B5] max-w-xl mx-auto leading-relaxed">
            All showcase items are demonstration prototypes and concept implementations engineered to illustrate architecture, frontend interaction, and full-stack feasibility.
          </p>
        </div>

      </div>

      {/* Accessible Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onDiscussProject={onDiscussProject}
      />
    </section>
  );
};
