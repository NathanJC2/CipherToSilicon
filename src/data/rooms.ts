// Updated rooms.ts: added `exhibitKey` to hotspots and new rooms for Bombe, Colossus, Mark I, ENIAC, UNIVAC
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
  exhibitKey?: string; // NEW: explicit key for mapping to exhibit/simulator
}

export interface RoomConfig {
  id: string;
  name: string;
  panorama: string;
  hotspots: RoomHotspot[];
}

// Helper function to get the base URL from import.meta.env
const getBaseUrl = () => import.meta.env.BASE_URL || '/';

// Helper function to prepend base URL to asset paths
const assetPath = (path: string): string => {
  const base = getBaseUrl();
  if (path.startsWith('/')) {
    return base.endsWith('/') ? base.slice(0, -1) + path : base + path;
  }
  return path;
};

export const rooms: RoomConfig[] = [
  {
    id: 'lobby',
    name: 'Entrance Lobby',
    panorama: assetPath('/rooms/panorama_placeholder.jpg'),
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
        title: 'Welcome to the Exhibit',
        description: 'Step into the story of cryptography and the machines that changed history.',
        image: assetPath('/caesar-cipher.jpg'),
        buttonLabel: 'Open Exhibit'
      }
    ]
  },
  {
    id: 'classical',
    name: 'Classical Ciphers',
    panorama: assetPath('/rooms/panorama_placeholder.jpg'),
    hotspots: [
      {
        id: 'caesar-hotspot',
        type: 'info',
        x: 34,
        y: 28,
        title: 'Caesar Cipher',
        description: 'Try the Caesar cipher simulator.',
        image: assetPath('/caesar-cipher.jpg'),
        buttonLabel: 'Open Simulator',
        exhibitKey: 'caesar'
      },
      {
        id: 'vigenere-hotspot',
        type: 'info',
        x: 60,
        y: 34,
        title: 'Vigenère Cipher',
        description: 'Try the Vigenère cipher simulator.',
        image: assetPath('/vigenere-table.jpg'),
        buttonLabel: 'Open Simulator',
        exhibitKey: 'vigenere'
      },
      {
        id: 'to-timeline',
        type: 'navigation',
        x: 62,
        y: 58,
        target: 'timeline',
        title: 'Door to Timeline of Cryptography',
        buttonLabel: 'Continue to Timeline'
      }
    ]
  },
  {
    id: 'timeline',
    name: 'Timeline of Cryptography',
    panorama: assetPath('/rooms/panorama_placeholder.jpg'),
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
        image: assetPath('/vigenere-table.jpg'),
        buttonLabel: 'Open Timeline',
        exhibitKey: 'timeline'
      }
    ]
  },
  {
    id: 'enigma',
    name: 'Enigma Machine Gallery',
    panorama: assetPath('/rooms/panorama_placeholder.jpg'),
    hotspots: [
      {
        id: 'enigma-hotspot',
        type: 'info',
        x: 34,
        y: 24,
        title: 'Enigma Machine',
        description: 'Interact with an Enigma simulator.',
        image: assetPath('/rotor-machine.jpg'),
        buttonLabel: 'Open Simulator',
        exhibitKey: 'enigma'
      },
      {
        id: 'to-rotor',
        type: 'navigation',
        x: 64,
        y: 58,
        target: 'rotor',
        title: 'Door to Rotor Gallery',
        buttonLabel: 'Enter Rotor Gallery'
      }
    ]
  },
  {
    id: 'rotor',
    name: 'Rotor Machines Gallery',
    panorama: assetPath('/rooms/panorama_placeholder.jpg'),
    hotspots: [
      {
        id: 'rotor-info',
        type: 'info',
        x: 32,
        y: 28,
        title: 'Rotor Showcase',
        description: 'Discover how mechanical advances set the foundation for modern computing and secure communication.',
        image: assetPath('/rotor-machine.jpg'),
        buttonLabel: 'Open Exhibit',
        exhibitKey: 'rotor' // could map to a rotor demo component
      },
      {
        id: 'to-modern',
        type: 'navigation',
        x: 68,
        y: 58,
        target: 'modern',
        title: 'Door to Modern Cryptography',
        buttonLabel: 'Enter Modern Cryptography'
      }
    ]
  },
  {
    id: 'modern',
    name: 'Modern Cryptography',
    panorama: assetPath('/rooms/panorama_placeholder.jpg'),
    hotspots: [
      {
        id: 'modern-info',
        type: 'info',
        x: 72,
        y: 30,
        title: 'Modern Cryptography',
        description: 'A final look at the algorithms and systems that secure the digital age.',
        image: assetPath('/bletchley-colossus.jpg'),
        buttonLabel: 'Open Exhibit',
        exhibitKey: 'modern'
      },
      {
        id: 'to-bombe',
        type: 'navigation',
        x: 60,
        y: 58,
        target: 'bombe',
        title: 'Door to Bombe Gallery',
        buttonLabel: 'Enter Bombe Gallery'
      }
    ]
  },

  // NEW historical machine galleries
  {
    id: 'bombe',
    name: 'Bombe Gallery',
    panorama: assetPath('/rooms/panorama_placeholder.jpg'),
    hotspots: [
      {
        id: 'bombe-info',
        type: 'info',
        x: 48,
        y: 36,
        title: 'Bombe',
        description: 'The Bombe helped Allied codebreakers test Enigma settings rapidly.',
        image: assetPath('/bletchley-colossus.jpg'),
        buttonLabel: 'Open Exhibit',
        exhibitKey: 'bombe'
      },
      {
        id: 'to-colossus',
        type: 'navigation',
        x: 72,
        y: 58,
        target: 'colossus',
        title: 'Door to Colossus',
        buttonLabel: 'Enter Colossus'
      },
      {
        id: 'to-modern-return',
        type: 'navigation',
        x: 26,
        y: 58,
        target: 'modern',
        title: 'Return to Modern Cryptography',
        buttonLabel: 'Back'
      }
    ]
  },
  {
    id: 'colossus',
    name: 'Colossus Gallery',
    panorama: assetPath('/rooms/panorama_placeholder.jpg'),
    hotspots: [
      {
        id: 'colossus-info',
        type: 'info',
        x: 44,
        y: 30,
        title: 'Colossus',
        description: 'Colossus automated parts of Lorenz cryptanalysis with electronic logic.',
        image: assetPath('/bletchley-colossus.jpg'),
        buttonLabel: 'Open Exhibit',
        exhibitKey: 'colossus'
      },
      {
        id: 'to-mark1',
        type: 'navigation',
        x: 72,
        y: 58,
        target: 'mark1',
        title: 'Door to Harvard Mark I',
        buttonLabel: 'Enter Mark I'
      },
      {
        id: 'to-bombe-return',
        type: 'navigation',
        x: 26,
        y: 58,
        target: 'bombe',
        title: 'Back to Bombe',
        buttonLabel: 'Back'
      }
    ]
  },
  {
    id: 'mark1',
    name: 'Harvard Mark I Gallery',
    panorama: assetPath('/rooms/panorama_placeholder.jpg'),
    hotspots: [
      {
        id: 'mark1-info',
        type: 'info',
        x: 44,
        y: 36,
        title: 'Harvard Mark I',
        description: 'The Harvard Mark I was an early electromechanical computer used for scientific calculations.',
        image: assetPath('/rotor-machine.jpg'),
        buttonLabel: 'Open Exhibit',
        exhibitKey: 'mark1'
      },
      {
        id: 'to-eniac',
        type: 'navigation',
        x: 72,
        y: 58,
        target: 'eniac',
        title: 'Door to ENIAC',
        buttonLabel: 'Enter ENIAC'
      },
      {
        id: 'to-colossus-return',
        type: 'navigation',
        x: 26,
        y: 58,
        target: 'colossus',
        title: 'Back to Colossus',
        buttonLabel: 'Back'
      }
    ]
  },
  {
    id: 'eniac',
    name: 'ENIAC Gallery',
    panorama: assetPath('/rooms/panorama_placeholder.jpg'),
    hotspots: [
      {
        id: 'eniac-info',
        type: 'info',
        x: 50,
        y: 34,
        title: 'ENIAC',
        description: 'ENIAC was one of the first electronic digital computers, built for ballistic and scientific calculations.',
        image: assetPath('/bletchley-colossus.jpg'),
        buttonLabel: 'Open Exhibit',
        exhibitKey: 'eniac'
      },
      {
        id: 'to-univac',
        type: 'navigation',
        x: 72,
        y: 58,
        target: 'univac',
        title: 'Door to UNIVAC I',
        buttonLabel: 'Enter UNIVAC I'
      },
      {
        id: 'to-mark1-return',
        type: 'navigation',
        x: 26,
        y: 58,
        target: 'mark1',
        title: 'Back to Mark I',
        buttonLabel: 'Back'
      }
    ]
  },
  {
    id: 'univac',
    name: 'UNIVAC I Gallery',
    panorama: assetPath('/rooms/panorama_placeholder.jpg'),
    hotspots: [
      {
        id: 'univac-info',
        type: 'info',
        x: 50,
        y: 36,
        title: 'UNIVAC I',
        description: 'UNIVAC I was the first commercially produced computer in the US and brought computing to business and government.',
        image: assetPath('/bletchley-colossus.jpg'),
        buttonLabel: 'Open Exhibit',
        exhibitKey: 'univac'
      },
      {
        id: 'to-eniac-return',
        type: 'navigation',
        x: 26,
        y: 58,
        target: 'eniac',
        title: 'Back to ENIAC',
        buttonLabel: 'Back'
      },
      {
        id: 'to-lobby',
        type: 'navigation',
        x: 92,
        y: 58,
        target: 'lobby',
        title: 'Exit to Lobby',
        buttonLabel: 'Exit to Lobby'
      }
    ]
  }
];

export const getRoomById = (id: string) => rooms.find((room) => room.id === id) ?? rooms[0];
