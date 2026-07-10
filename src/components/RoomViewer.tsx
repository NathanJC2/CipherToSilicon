import React, { useEffect, useMemo, useState } from 'react';
import PanoramaViewer from '../components/PanoramaViewer';
import InfoPanel from '../components/InfoPanel';
import NavigationArrow from '../components/NavigationArrow';
import { getRoomById, rooms, type RoomHotspot } from '../data/rooms';
import '../styles/panorama.css';

interface RoomViewerProps {
  roomId?: string;
  onReturnToMap?: () => void;
  onOpenSection?: (section: 'simulator' | 'timeline' | 'challenge') => void;
}

const RoomViewer: React.FC<RoomViewerProps> = ({ roomId = 'lobby', onReturnToMap, onOpenSection }) => {
  const [currentRoomId, setCurrentRoomId] = useState(roomId);
  const [activeHotspot, setActiveHotspot] = useState<RoomHotspot | null>(null);
  const [transitioning, setTransitioning] = useState(false);

  const currentRoom = useMemo(() => getRoomById(currentRoomId), [currentRoomId]);

  useEffect(() => {
    setCurrentRoomId(roomId);
    setActiveHotspot(null);
  }, [roomId]);

  const transitionToRoom = (roomId: string) => {
    setTransitioning(true);
    window.setTimeout(() => {
      setCurrentRoomId(roomId);
      setActiveHotspot(null);
      setTransitioning(false);
    }, 220);
  };

  const handleHotspotSelect = (hotspot: RoomHotspot) => {
    if (hotspot.type === 'navigation' && hotspot.target) {
      transitionToRoom(hotspot.target);
      return;
    }

    setActiveHotspot(hotspot);
  };

  const handleClosePanel = () => setActiveHotspot(null);

  const handlePanelAction = () => {
    if (activeHotspot?.buttonLabel === 'Open Simulator') {
      onOpenSection?.('simulator');
      return;
    }

    if (activeHotspot?.buttonLabel === 'Open Timeline') {
      onOpenSection?.('timeline');
      return;
    }

    if (activeHotspot?.target) {
      transitionToRoom(activeHotspot.target);
      return;
    }

    handleClosePanel();
  };

  const goToPreviousRoom = () => {
    const currentIndex = rooms.findIndex((room) => room.id === currentRoomId);
    const previousRoom = rooms[(currentIndex - 1 + rooms.length) % rooms.length];
    transitionToRoom(previousRoom.id);
  };

  const goToNextRoom = () => {
    const currentIndex = rooms.findIndex((room) => room.id === currentRoomId);
    const nextRoom = rooms[(currentIndex + 1) % rooms.length];
    transitionToRoom(nextRoom.id);
  };

  return (
    <div className={`room-viewer ${transitioning ? 'room-viewer--transitioning' : ''}`}>
      <PanoramaViewer
        panorama={currentRoom.panorama}
        hotspots={currentRoom.hotspots}
        onHotspotSelect={handleHotspotSelect}
        onBackToMap={() => onReturnToMap?.()}
        roomName={currentRoom.name}
      />

      <div className="tour-nav-controls">
        <NavigationArrow direction="left" onClick={goToPreviousRoom} />
        <NavigationArrow direction="right" onClick={goToNextRoom} />
      </div>

      {activeHotspot && activeHotspot.type === 'info' && (
        <InfoPanel
          title={activeHotspot.title ?? currentRoom.name}
          description={activeHotspot.description ?? 'Explore this exhibit.'}
          image={activeHotspot.image}
          buttonLabel={activeHotspot.buttonLabel}
          onClose={handleClosePanel}
          onAction={handlePanelAction}
        />
      )}
    </div>
  );
};

export default RoomViewer;
