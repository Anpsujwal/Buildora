export type ProjectStatus = 'Demo Project' | 'Concept' | 'Prototype';

export type ProjectCategory = 
  | 'All' 
  | 'Web Development' 
  | 'MERN Stack' 
  | 'AI/ML' 
  | 'Decentralized Systems';

export interface ProjectItem {
  id: string;
  name: string;
  category: 'Web Development' | 'MERN Stack' | 'AI/ML' | 'Decentralized Systems';
  status: ProjectStatus;
  description: string;
  fullOverview: string;
  technologies: string[];
  keyFeatures: string[];
  architectureSummary: string;
  badgeColor?: string;
  mockupType: 'ecommerce' | 'analytics' | 'chat' | 'finance' | 'docflow' | 'sentiment' | 'web3storage';
  disclaimerNote?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Code2' | 'BrainCircuit' | 'Presentation' | 'FileText';
  capabilities: string[];
  ctaLabel?: string;
}

export interface TechCategory {
  title: string;
  description: string;
  technologies: {
    name: string;
    description?: string;
    tag?: string;
  }[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconName: 'Lightbulb' | 'Compass' | 'Rocket';
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  iconName: 'Target' | 'FileCheck' | 'Layers' | 'Sparkles';
}

export interface ContactFormData {
  fullName: string;
  email: string;
  projectDetails: string;
}
