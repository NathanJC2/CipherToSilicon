import React from 'react';
import Room from '../components/Room';
import Hallway from '../components/Hallway';
import '../styles/museum.css';

interface MuseumMapProps {
  onRoomSelect?: (roomId: string) => void;
}

type MuseumRoomConfig = {
  title: string;
  roomId: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

type MuseumHallwayConfig = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
};

const museumRooms: MuseumRoomConfig[] = [
  { title: 'Entrance Lobby', roomId: 'lobby', x: 370, y: 70, width: 240, height: 120 },
  { title: 'Classical Ciphers', roomId: 'classical', x: 90, y: 260, width: 250, height: 140 },
  { title: 'Timeline of Cryptography', roomId: 'timeline', x: 380, y: 260, width: 250, height: 140 },
  { title: 'Enigma Machine Gallery', roomId: 'enigma', x: 650, y: 260, width: 250, height: 140 },
  { title: 'Rotor Machines Gallery', roomId: 'rotor', x: 920, y: 260, width: 240, height: 140 },
  { title: 'Modern Cryptography', roomId: 'modern', x: 650, y: 470, width: 250, height: 140 },
];

const museumHallways: MuseumHallwayConfig[] = [
  { id: 'main-corridor', x: 430, y: 190, width: 120, height: 30 },
  { id: 'left-branch', x: 270, y: 220, width: 30, height: 80 },
  { id: 'center-branch', x: 500, y: 220, width: 30, height: 80 },
  { id: 'right-branch', x: 770, y: 220, width: 30, height: 80 },
  { id: 'modern-link', x: 770, y: 400, width: 30, height: 70 },
];

const MuseumMap: React.FC<MuseumMapProps> = ({ onRoomSelect }) => {
  const handleRoomClick = (roomId: string) => {
    const matchingRoom = museumRooms.find((room) => room.roomId === roomId);
    const title = matchingRoom?.title ?? roomId;
    console.log(`Entering ${title}`);
    onRoomSelect?.(roomId);
  };

  return (
    <section className="museum-map-page active">
      <div className="museum-map-page__intro">
        <p className="museum-map-page__eyebrow">Interactive museum navigation</p>
        <h2 className="section-title">Museum Floor Plan</h2>
        <p className="section-description">
          Explore the museum from a top-down orientation before stepping into the 360° experience.
        </p>
      </div>

      <div className="museum-map-shell">
        <div className="museum-floorplan" role="img" aria-label="Museum floor plan with connected exhibit rooms">
          {museumHallways.map((hallway) => (
            <Hallway key={hallway.id} x={hallway.x} y={hallway.y} width={hallway.width} height={hallway.height} />
          ))}

          {museumRooms.map((room) => (
            <Room
              key={room.roomId}
              title={room.title}
              roomId={room.roomId}
              x={room.x}
              y={room.y}
              width={room.width}
              height={room.height}
              onRoomClick={handleRoomClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MuseumMap;
