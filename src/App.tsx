import React from 'react';
import Header from './components/layout/Header';
import { Hero } from './components/hero';
import { CredibilitySection } from './components/credibility';
import { ResultsSection } from './components/results';
import RoadmapSection from './components/roadmap/RoadmapSection';
import { ClosingCTA } from './components/cta';
import { AboutSection } from './components/about';
import { Footer } from './components/footer';
import { CursorTrail } from './components/effects/CursorTrail';
import { CursorIllumination } from './components/effects/CursorIllumination';
import { WaveBackground } from './components/effects/WaveBackground';
import './styles/fonts.css';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <WaveBackground />
      <CursorTrail />
      <CursorIllumination />
      <Header />
      <Hero />
      <CredibilitySection />
      <ResultsSection />
      <RoadmapSection />
      <ClosingCTA />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;