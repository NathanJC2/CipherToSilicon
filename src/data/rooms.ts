export type HotspotType = 'navigation' | 'info' | 'quiz';

export interface RoomHotspot {
  id: string;
  type: HotspotType;
  x?: number;
  y?: number;
  target?: string;
  title?: string;
  description?: string;
  image?: string;
  buttonLabel?: string;
}

export interface RoomConfig {
  id: string;
  name: string;
  panorama: string;
  hotspots: RoomHotspot[];
}

export const rooms: RoomConfig[] = [
  {
    id: 'lobby',
    name: 'Entrance Lobby',
    panorama: '/rooms/panorama_placeholder.jpg',
    hotspots: [
      {
        id: 'to-classical',
        type: 'navigation',
        x: 28,
        y: 58,
        target: 'classical',
        title: 'Door to Classical Ciphers',
        buttonLabel: 'Enter Classical Ciphers'
      },
      {
        id: 'lobby-info',
        type: 'info',
        x: 70,
        y: 34,
        title: 'Welcome Exhibit',
        description: 'A short introduction to the museum’s journey through cryptography.',
        image: '/caesar-cipher.jpg',
        buttonLabel: 'Open Exhibit'
      }
    ]
  },
  {
    id: 'classical',
    name: 'Classical Ciphers',
    panorama: '/rooms/panorama_placeholder.jpg',
    hotspots: [
      {
        id: 'to-timeline',
        type: 'navigation',
        x: 62,
        y: 58,
        target: 'timeline',
        title: 'Door to Timeline of Cryptography',
        buttonLabel: 'Continue to Timeline'
      },
      {
        id: 'classical-info',
        type: 'info',
        x: 34,
        y: 28,
        title: 'Caesar Cipher Exhibit',
        description: 'Explore the early substitution ciphers that shaped the history of secret writing.',
        image: '/caesar-cipher.jpg',
        buttonLabel: 'Open Simulator'
      }
    ]
  },
  {
    id: 'timeline',
    name: 'Timeline of Cryptography',
    panorama: '/rooms/panorama_placeholder.jpg',
    hotspots: [
      {
        id: 'to-enigma',
        type: 'navigation',
        x: 66,
        y: 56,
        target: 'enigma',
        title: 'Door to Enigma Gallery',
        buttonLabel: 'Enter Enigma Gallery'
      },
      {
        id: 'timeline-info',
        type: 'info',
        x: 28,
        y: 30,
        title: 'Historical Timeline',
        description: 'Follow the development of cryptography from ancient methods to modern systems.',
        image: '/vigenere-table.jpg',
        buttonLabel: 'Open Timeline'
      }
    ]
  },
  {
    id: 'enigma',
    name: 'Enigma Machine Gallery',
    panorama: '/rooms/panorama_placeholder.jpg',
    hotspots: [
      {
        id: 'to-rotor',
        type: 'navigation',
        x: 64,
        y: 58,
        target: 'rotor',
        title: 'Door to Rotor Gallery',
        buttonLabel: 'Enter Rotor Gallery'
      },
      {
        id: 'enigma-info',
        type: 'info',
        x: 34,
        y: 24,
        title: 'Enigma Machine',
        description: 'See how the mechanical rotor system transformed the way messages were encoded during wartime.',
        image: '/rotor-machine.jpg',
        buttonLabel: 'Open Simulator'
      }
    ]
  },
  {
    id: 'rotor',
    name: 'Rotor Machines Gallery',
    panorama: '/rooms/panorama_placeholder.jpg',
    hotspots: [
      {
        id: 'to-modern',
        type: 'navigation',
        x: 68,
        y: 58,
        target: 'modern',
        title: 'Door to Modern Cryptography',
        buttonLabel: 'Enter Modern Cryptography'
      },
      {
        id: 'rotor-info',
        type: 'info',
        x: 32,
        y: 28,
        title: 'Rotor Showcase',
        description: 'Discover how mechanical advances set the foundation for modern computing and secure communication.',
        image: '/rotor-machine.jpg',
        buttonLabel: 'Open Exhibit'
      }
    ]
  },
  {
    id: 'modern',
    name: 'Modern Cryptography',
    panorama: '/rooms/panorama_placeholder.jpg',
    hotspots: [
      {
        id: 'to-lobby',
        type: 'navigation',
        x: 26,
        y: 58,
        target: 'lobby',
        title: 'Door to Entrance Lobby',
        buttonLabel: 'Return to Lobby'
      },
      {
        id: 'modern-info',
        type: 'info',
        x: 72,
        y: 30,
        title: 'Modern Cryptography',
        description: 'A final look at the algorithms and systems that secure the digital age.',
        image: '/bletchley-colossus.jpg',
        buttonLabel: 'Open Exhibit'
      }
    ]
  }
];

export const getRoomById = (id: string) => rooms.find((room) => room.id === id) ?? rooms[0];
