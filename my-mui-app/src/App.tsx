import './App.css';
import { AppThemeProvider } from './theme/AppThemeProvider';
import { Navbar } from './components/Navbar/Navbar';
import { ThemeDock } from './components/ThemeDock/ThemeDock';
import { Hero } from './components/Hero/Hero';
import { StatsSection } from './components/StatsSection/StatsSection';
import { ProjectsSection } from './components/ProjectsSection/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection/ExperienceSection';
import { EducationSection } from './components/EducationSection/EducationSection';
import { TestimonialsSection } from './components/TestimonialsSection/TestimonialsSection';
import { TechStackSection } from './components/TechStackSection/TechStackSection';
import { ContactSection } from './components/ContactSection/ContactSection';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <AppThemeProvider>
      <div className="app-shell">
        <Navbar />
        <ThemeDock />
        <Hero />
        <StatsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <TestimonialsSection />
        <TechStackSection />
        <ContactSection />
        <Footer />
      </div>
    </AppThemeProvider>
  );
}

export default App;
