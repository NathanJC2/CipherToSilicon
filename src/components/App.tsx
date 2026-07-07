import React, { useState } from 'react';
import Navigation from './Navigation';
import CipherLab from './CipherLab';
import Timeline from './Timeline';
import Challenge from './Challenge';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'simulator' | 'timeline' | 'challenge'>('simulator');

  return (
    <div>
      <header>
        <h1>CIPHER TO SILICON</h1>
        <p>The History of Computing Through Cryptography</p>
      </header>

      <Navigation activeSection={activeSection} onChange={setActiveSection} />

      <main className="container">
        {activeSection === 'simulator' && <CipherLab />}
        {activeSection === 'timeline' && <Timeline />}
        {activeSection === 'challenge' && <Challenge />}
      </main>
    </div>
  );
};

export default App;