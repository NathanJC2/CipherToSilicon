import React, { useState } from 'react';
import Navigation from './Navigation';
import CipherLab from './CipherLab';
import Timeline from './Timeline';
import Challenge from './Challenge';
import MuseumMap from './MuseumMap';
import RoomViewerFullscreen from './RoomViewerFullscreen';
import LoadingScreen from './LoadingScreen';

const App: React.FC = () => {
  // section state used as "intent" to open panels (not to navigate away)
  const [activeSection, setActiveSection] = useState<'panorama' | 'map' | 'simulator' | 'timeline' | 'challenge'>('panorama');
  const [activeRoom, setActiveRoom] = useState<string | null>(null);
  const [isLoadingPanorama, setIsLoadingPanorama] = useState(false);

  // Controlled visibility state for panels so nav tabs can open them
  const [mapVisible, setMapVisible] = useState(false);
  const [cipherVisible, setCipherVisible] = useState(false);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const [challengeVisible, setChallengeVisible] = useState(false);

  const closeAllPanels = () => {
    setMapVisible(false);
    setCipherVisible(false);
    setTimelineVisible(false);
    setChallengeVisible(false);
  };

  const openPanel = (section: 'simulator' | 'timeline' | 'challenge' | 'map') => {
    setActiveSection(section);
    setMapVisible(section === 'map');
    setCipherVisible(section === 'simulator');
    setTimelineVisible(section === 'timeline');
    setChallengeVisible(section === 'challenge');
  };

  const handleOpenPanorama = (roomId?: string) => {
    closeAllPanels();
    setIsLoadingPanorama(true);
    setTimeout(() => {
      setActiveSection('panorama');
      if (roomId) setActiveRoom(roomId);
      setIsLoadingPanorama(false);
    }, 600);
  };

  const handleNavChange = (section: 'simulator' | 'timeline' | 'challenge') => {
    openPanel(section);
  };

  const handleRoomSelect = (roomId: string) => {
    setActiveRoom(roomId);
    closeAllPanels();
    setActiveSection('panorama');
  };

  const goBackToPanorama = () => {
    closeAllPanels();
    setActiveSection('panorama');
  };

  const showPanelShell = mapVisible || cipherVisible || timelineVisible || challengeVisible;

  return (
    <>
      <LoadingScreen isVisible={isLoadingPanorama} />

      {activeSection === 'panorama' && (
        <RoomViewerFullscreen
          roomId={activeRoom ?? 'lobby'}
          onReturnToMap={() => openPanel('map')}
          onOpenSection={(section) => openPanel(section)}
        />
      )}

      <Navigation
        activeSection={activeSection}
        onChange={(section) => {
          if (section === 'simulator' || section === 'timeline' || section === 'challenge') {
            handleNavChange(section);
          }
        }}
      />

      {showPanelShell && (
        <div className="panel-shell" role="dialog" aria-label="Museum content panel">
          <div className="panel-shell__topbar">
            <button type="button" className="panel-shell__back" onClick={goBackToPanorama}>
              ← Back to panorama
            </button>
          </div>

          <div className="panel-shell__content">
            {mapVisible && <MuseumMap onRoomSelect={handleRoomSelect} />}
            {cipherVisible && <CipherLab />}
            {timelineVisible && <Timeline />}
            {challengeVisible && <Challenge />}
          </div>
        </div>
      )}
    </>
  );
};

export default App;