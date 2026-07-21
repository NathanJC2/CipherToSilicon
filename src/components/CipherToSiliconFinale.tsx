import React from 'react';

const CipherToSiliconFinale: React.FC = () => {
  return (
    <div className="simulator-container">
      <div className="rotor-explainer">
        <h3 className="rotor-explainer-title">From Cipher to Silicon</h3>
        <p className="rotor-explainer-text">The same pressures that made encryption harder also pushed engineers to build machines that could automate search, process data, and execute instructions.</p>
      </div>

      <div className="finale-stack">
        {[
          'Mechanical Gears',
          'Relays',
          'Vacuum Tubes',
          'Transistors',
          'Integrated Circuits',
          'Microprocessors',
          'Modern CPUs',
          'Cloud Computing',
          'Artificial Intelligence'
        ].map((step, index) => (
          <div key={step} className={`finale-step ${index === 0 ? 'active' : ''}`}>
            <span>{step}</span>
          </div>
        ))}
      </div>

      <div className="museum-innovation-card">
        <h4>The central claim</h4>
        <p>Modern computing did not evolve separately from cryptography. Many of its most important breakthroughs were driven by the need to encrypt, decrypt, and process information more efficiently.</p>
      </div>
    </div>
  );
};

export default CipherToSiliconFinale;
