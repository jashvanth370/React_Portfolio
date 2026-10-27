import { useState } from 'react';
import Background from './components/Background';
import SplashCursor from './components/SplashCursor';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuickNav from './components/QuickNav';
import useTheme from './hooks/useTheme';
import useScrollSpy from './hooks/useScrollSpy';
import { SECTION_IDS } from './config';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { active, scrolled } = useScrollSpy(SECTION_IDS);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      <div className={`app-root${!isLoading ? ' app-revealed' : ''}`}>
        <SplashCursor />
        <Background />
        <Navbar activeSection={active} scrolled={scrolled} theme={theme} onToggleTheme={toggleTheme} />

        <main>
          <Hero />
          <About />
          <Experience />
          <Education />
          <Skills />
          <Projects />
          <Articles />
          <Contact />
        </main>

        <Footer />
        <QuickNav activeSection={active} />
      </div>
    </>
  );
}
