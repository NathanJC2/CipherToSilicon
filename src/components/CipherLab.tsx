import React, { useState } from 'react';
import CaesarCipher from './CaesarCipher';
import VigenereCipher from './VigenereCipher';
import EnigmaMachine from './EnigmaMachine';
import BombeMachine from './BombeMachine';
import ColossusMachine from './ColossusMachine';
import Mark1Machine from './Mark1Machine';
import EniacMachine from './EniacMachine';
import UnivacMachine from './UnivacMachine';

const CipherLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'classical' | 'enigma' | 'bombe' | 'colossus' | 'mark1' | 'eniac' | 'univac'>('classical');
  const [activeSubtab, setActiveSubtab] = useState<'caesar' | 'vigenere'>('caesar');

  return (
    <section id="simulator" className="active">
      <h2 className="section-title">Cipher Lab: Interactive Museum Exhibit</h2>
      <p className="section-description">
        Step through the evolution of encryption from classical hand ciphers to the WWII Enigma machine, with future computing exhibits previewed below.
      </p>

      <div className="lab-tabs" role="tablist">
        <button className={`lab-tab ${activeTab === 'classical' ? 'active' : ''}`} onClick={() => setActiveTab('classical')}>Classical Ciphers</button>
        <button className={`lab-tab ${activeTab === 'enigma' ? 'active' : ''}`} onClick={() => setActiveTab('enigma')}>Enigma Machine</button>
        <button className={`lab-tab ${activeTab === 'bombe' ? 'active' : ''}`} onClick={() => setActiveTab('bombe')}>Bombe</button>
        <button className={`lab-tab ${activeTab === 'colossus' ? 'active' : ''}`} onClick={() => setActiveTab('colossus')}>Colossus</button>
        <button className={`lab-tab ${activeTab === 'mark1' ? 'active' : ''}`} onClick={() => setActiveTab('mark1')}>Harvard Mark I</button>
        <button className={`lab-tab ${activeTab === 'eniac' ? 'active' : ''}`} onClick={() => setActiveTab('eniac')}>ENIAC</button>
        <button className={`lab-tab ${activeTab === 'univac' ? 'active' : ''}`} onClick={() => setActiveTab('univac')}>UNIVAC I</button>
      </div>

      <div className="lab-tab-panels">
        {activeTab === 'classical' && (
          <div className="lab-tab-panel active" id="tab-classical">
            <div className="classical-subtabs" role="tablist">
              <button className={`lab-subtab ${activeSubtab === 'caesar' ? 'active' : ''}`} onClick={() => setActiveSubtab('caesar')}>Caesar Cipher</button>
              <button className={`lab-subtab ${activeSubtab === 'vigenere' ? 'active' : ''}`} onClick={() => setActiveSubtab('vigenere')}>Vigenère Cipher</button>
            </div>

            <div className="lab-subtab-panels">
              {activeSubtab === 'caesar' && <CaesarCipher />}
              {activeSubtab === 'vigenere' && <VigenereCipher />}
            </div>
          </div>
        )}

        {activeTab === 'enigma' && (
          <div className="lab-tab-panel active" id="tab-enigma">
            <EnigmaMachine />
          </div>
        )}

        {activeTab === 'bombe' && (
          <div className="lab-tab-panel active" id="tab-bombe">
            <BombeMachine />
          </div>
        )}

        {activeTab === 'colossus' && (
          <div className="lab-tab-panel active" id="tab-colossus">
            <ColossusMachine />
          </div>
        )}

        {activeTab === 'mark1' && (
          <div className="lab-tab-panel active" id="tab-mark1">
            <Mark1Machine />
          </div>
        )}

        {activeTab === 'eniac' && (
          <div className="lab-tab-panel active" id="tab-eniac">
            <EniacMachine />
          </div>
        )}

        {activeTab === 'univac' && (
          <div className="lab-tab-panel active" id="tab-univac">
            <UnivacMachine />
          </div>
        )}
      </div>
    </section>
  );
};

export default CipherLab;