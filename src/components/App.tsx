import React, { useState } from 'react';
import Navigation from './Navigation';
import CipherLab from './CipherLab';
import Timeline from './Timeline';
import Challenge from './Challenge';
import MuseumMap from './MuseumMap';
import RoomViewer from './RoomViewer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'simulator' | 'timeline' | 'challenge'>('simulator');
  const [activeRoom, setActiveRoom] = useState<string | null>(null);

  const handleOpenSection = (section: 'simulator' | 'timeline' | 'challenge') => {
    setActiveSection(section);
    setActiveRoom(null);
  };

  return (
    <div>
      <header>
        <h1>CIPHER TO SILICON</h1>
        <p>The History of Computing Through Cryptography</p>
      </header>

      <Navigation activeSection={activeSection} onChange={setActiveSection} />

      <main className="container">
        {activeRoom ? (
          <RoomViewer roomId={activeRoom} onReturnToMap={() => setActiveRoom(null)} onOpenSection={handleOpenSection} />
        ) : (
          <>
            {activeSection === 'simulator' && <><MuseumMap onRoomSelect={setActiveRoom} /><CipherLab /></>}
            {activeSection === 'timeline' && <Timeline />}
            {activeSection === 'challenge' && <Challenge />}
          </>
        )}
      </main>
    </div>
  );
};

export default App;