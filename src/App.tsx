import { useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Mission from './components/Mission';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import VolunteerModal from './components/VolunteerModal';

function App() {
  const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Hero onVolunteerClick={() => setIsVolunteerModalOpen(true)} />
      <About />
      <Mission />
      <Programs />
      <Impact />
      <Team />
      <Contact />
      <Footer />
      <VolunteerModal
        isOpen={isVolunteerModalOpen}
        onClose={() => setIsVolunteerModalOpen(false)}
      />
    </div>
  );
}

export default App;
