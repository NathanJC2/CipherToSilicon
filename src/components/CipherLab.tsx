import React, { useState } from 'react';
import CaesarCipher from './CaesarCipher';
import VigenereCipher from './VigenereCipher';
import EnigmaMachine from './EnigmaMachine';

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
        <button className={`lab-tab ${activeTab === 'bombe' ? 'active' : ''}`} onClick={() => setActiveTab('bombe')}>Bombe <span className="coming-soon-label">(Coming Soon)</span></button>
        <button className={`lab-tab ${activeTab === 'colossus' ? 'active' : ''}`} onClick={() => setActiveTab('colossus')}>Colossus <span className="coming-soon-label">(Coming Soon)</span></button>
        <button className={`lab-tab ${activeTab === 'mark1' ? 'active' : ''}`} onClick={() => setActiveTab('mark1')}>Harvard Mark I <span className="coming-soon-label">(Coming Soon)</span></button>
        <button className={`lab-tab ${activeTab === 'eniac' ? 'active' : ''}`} onClick={() => setActiveTab('eniac')}>ENIAC <span className="coming-soon-label">(Coming Soon)</span></button>
        <button className={`lab-tab ${activeTab === 'univac' ? 'active' : ''}`} onClick={() => setActiveTab('univac')}>UNIVAC I <span className="coming-soon-label">(Coming Soon)</span></button>
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
          <div className="lab-tab-panel coming-soon-panel" id="tab-bombe">
            <h3>Bombe</h3>
            <div className="placeholder-image">Historical image placeholder</div>
            <p>The Bombe helped Allied codebreakers test Enigma settings automatically and accelerated the process of breaking secret messages.</p>
            <div className="coming-soon-note">Interactive exhibit coming in a future update.</div>
          </div>
        )}

        {activeTab === 'colossus' && (
          <div className="lab-tab-panel coming-soon-panel" id="tab-colossus">
            <h3>Colossus</h3>
            <div className="placeholder-image">Historical image placeholder</div>
            <p>Colossus was one of the first programmable electronic computers and helped crack Lorenz-encrypted German communications.</p>
            <div className="coming-soon-note">Interactive exhibit coming in a future update.</div>
          </div>
        )}

        {activeTab === 'mark1' && (
          <div className="lab-tab-panel coming-soon-panel" id="tab-mark1">
            <h3>Harvard Mark I</h3>
            <div className="placeholder-image">Historical image placeholder</div>
            <p>The Harvard Mark I was an early electromechanical computer used for scientific calculations during World War II.</p>
            <div className="coming-soon-note">Interactive exhibit coming in a future update.</div>
          </div>
        )}

        {activeTab === 'eniac' && (
          <div className="lab-tab-panel coming-soon-panel" id="tab-eniac">
            <h3>ENIAC</h3>
            <div className="placeholder-image">Historical image placeholder</div>
            <p>ENIAC was one of the first electronic digital computers, built to solve large-scale artillery trajectory and scientific problems.</p>
            <div className="coming-soon-note">Interactive exhibit coming in a future update.</div>
          </div>
        )}

        {activeTab === 'univac' && (
          <div className="lab-tab-panel coming-soon-panel" id="tab-univac">
            <h3>UNIVAC I</h3>
            <div className="placeholder-image">Historical image placeholder</div>
            <p>UNIVAC I was the first commercially produced computer in the United States, bringing computing into business and government use.</p>
            <div className="coming-soon-note">Interactive exhibit coming in a future update.</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CipherLab;