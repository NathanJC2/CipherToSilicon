import React from 'react';

type Props = {
  activeSection: string;
  onChange: (section: 'simulator' | 'timeline' | 'challenge') => void;
};

const Navigation: React.FC<Props> = ({ activeSection, onChange }) => {
  return (
    <nav>
      <button
        className={`nav-btn ${activeSection === 'simulator' ? 'active' : ''}`}
        data-section="simulator"
        onClick={() => onChange('simulator')}
      >
        Cipher Lab
      </button>
      <button
        className={`nav-btn ${activeSection === 'timeline' ? 'active' : ''}`}
        data-section="timeline"
        onClick={() => onChange('timeline')}
      >
        Historical Timeline
      </button>
      <button
        className={`nav-btn ${activeSection === 'challenge' ? 'active' : ''}`}
        data-section="challenge"
        onClick={() => onChange('challenge')}
      >
        Practice Challenge
      </button>
    </nav>
  );
};

export default Navigation;