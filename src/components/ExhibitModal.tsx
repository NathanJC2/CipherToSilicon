import React, { useEffect, useRef, useCallback } from 'react';
import CaesarCipher from './CaesarCipher';
import VigenereCipher from './VigenereCipher';
import EnigmaMachine from './EnigmaMachine';
import BombeMachine from './BombeMachine';
import ColossusMachine from './ColossusMachine';
import Mark1Machine from './Mark1Machine';
import EniacMachine from './EniacMachine';
import UnivacMachine from './UnivacMachine';
import Timeline from './Timeline';

import '../styles/exhibit-modal.css';
import type { RoomHotspot } from '../data/rooms';

interface ExhibitModalProps {
  hotspot: RoomHotspot;
  onClose: () => void;
}

function exhibitForKey(key?: string, hotspot?: RoomHotspot) {
  if (!key) return null;
  const k = key.toLowerCase();
  switch (k) {
    case 'caesar':
      return <CaesarCipher />;
    case 'vigenere':
    case 'vigenère':
      return <VigenereCipher />;
    case 'enigma':
    case 'rotor':
      return <EnigmaMachine />;
    case 'bombe':
      return <BombeMachine />;
    case 'colossus':
      return <ColossusMachine />;
    case 'mark1':
      return <Mark1Machine />;
    case 'eniac':
      return <EniacMachine />;
    case 'univac':
      return <UnivacMachine />;
    case 'timeline':
      return <Timeline />;
    default:
      return null;
  }
}

const ExhibitModal: React.FC<ExhibitModalProps> = ({ hotspot, onClose }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    const timer = window.setTimeout(() => {
      // focus modal for screen readers
      ref.current?.focus();
    }, 40);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prev;
      window.clearTimeout(timer);
    };
  }, [handleKeyDown]);

  const content = exhibitForKey(hotspot.exhibitKey, hotspot);
  const simulatorFullscreenKeys = new Set([
    'caesar',
    'vigenere',
    'enigma',
    'rotor',
    'bombe',
    'colossus',
    'mark1',
    'eniac',
    'univac',
  ]);
  const isSimulatorFullscreen = simulatorFullscreenKeys.has(hotspot.exhibitKey?.toLowerCase() ?? '');

  return (
    <div className="exhibit-modal-backdrop" role="presentation" aria-hidden={false}>
      <div
        className={`exhibit-modal${isSimulatorFullscreen ? ' exhibit-modal--fullscreen' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={hotspot.title ?? 'Exhibit dialog'}
        ref={ref}
        tabIndex={-1}
      >
        <header className="exhibit-modal__header">
          <div>
            <h2 className="exhibit-modal__title">{hotspot.title ?? 'Exhibit'}</h2>
            {hotspot.description && <p className="exhibit-modal__subtitle">{hotspot.description}</p>}
          </div>
          <div className="exhibit-modal__actions">
            <button
              className="exhibit-modal__close"
              aria-label="Close exhibit"
              onClick={onClose}
            >
              ×
            </button>
          </div>
        </header>

        <div className="exhibit-modal__body">
          <aside className="exhibit-modal__left">
            {hotspot.image ? (
              <img src={hotspot.image} alt={hotspot.title ?? 'Exhibit image'} className="exhibit-modal__image" />
            ) : (
              <div className="exhibit-modal__image--placeholder">Image placeholder</div>
            )}
            {hotspot.description && <div className="exhibit-modal__desc">{hotspot.description}</div>}
          </aside>

          <main className="exhibit-modal__main" id="exhibit-main">
            {content ? (
              <div className="exhibit-modal__simulator" aria-live="polite">
                {content}
              </div>
            ) : (
              <div className="exhibit-modal__info">
                <p className="exhibit-modal__info-lead">
                  Welcome to the exhibit. This space introduces the story of cryptography, the people who shaped it, and the machines that turned secrecy into science.
                </p>
                <ul className="exhibit-modal__info-list">
                  <li>Use the left panel to explore historic summaries, key dates, and machine background.</li>
                  <li>Hotspot images and descriptions show the design and purpose of each featured device.</li>
                  <li>Interactive simulations will arrive soon — for now, start by reading the inventors and breakthroughs behind the exhibit.</li>
                </ul>
              </div>
            )}
          </main>
        </div>

        <footer className="exhibit-modal__footer">
          <button className="glass-btn" onClick={onClose} aria-label="Close exhibit (button)">Close</button>
        </footer>
      </div>
    </div>
  );
};

export default ExhibitModal;