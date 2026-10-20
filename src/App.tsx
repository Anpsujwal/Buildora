import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { TechStack } from './components/TechStack';
import { Process } from './components/Process';
import { WhyBuildora } from './components/WhyBuildora';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [selectedService, setSelectedService] = useState<string>('Project Development');

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(serviceName);
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDiscussProject = (_projectName: string, category: string) => {
    // Map category to a corresponding service option
    let targetService = 'Project Development';
    if (category === 'MERN Stack' || category === 'Web Development') {
      targetService = 'MERN / Full-Stack Development';
    } else if (category === 'AI/ML') {
      targetService = 'AI / Machine Learning';
    } else if (category === 'Decentralized Systems') {
      targetService = 'Decentralized Cloud Storage';
    }

    scrollToContact(targetService);
  };

  return (
    <div className="min-h-screen bg-[#09090F] text-[#F5F5FA] flex flex-col selection:bg-[#8B5CF6]/30 selection:text-white">
      {/* Navigation */}
      <Navbar onStartProjectClick={() => scrollToContact()} />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onStartProject={() => scrollToContact()}
          onExploreProjects={scrollToProjects}
        />
        <Services onSelectService={(service) => scrollToContact(service)} />
        <Projects onDiscussProject={handleDiscussProject} />
        <TechStack />
        <Process />
        <WhyBuildora />
        <Contact initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
