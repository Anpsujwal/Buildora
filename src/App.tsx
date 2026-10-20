import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const scrollToContact = () => {
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

  return (
    <div className="min-h-screen bg-[#09090F] text-[#F5F5FA] flex flex-col selection:bg-[#8B5CF6]/30 selection:text-white">
      {/* Navigation */}
      <Navbar onStartProjectClick={scrollToContact} />

      {/* Main Content */}
      <main className="flex-1">
        <Hero
          onStartProject={scrollToContact}
          onExploreProjects={scrollToProjects}
        />
        <Services onSelectService={scrollToContact} />
        <Projects onDiscussProject={scrollToContact} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

