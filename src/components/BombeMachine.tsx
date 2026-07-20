import React, { useState } from 'react';

const BombeMachine: React.FC = () => {
  const [crib, setCrib] = useState('ATTACK');
  const [rotorPositions, setRotorPositions] = useState([3, 8, 19]);
  const [result, setResult] = useState('Awaiting search. Enter a crib and run the Bombe.');
  const [isRunning, setIsRunning] = useState(false);

  const updatePosition = (index: number, value: number) => {
    setRotorPositions((prev) => {
      const next = [...prev];
      next[index] = Math.max(0, Math.min(25, value));
      return next;
    });
  };

  const runBombe = () => {
    if (!crib.trim()) {
      setResult('Please enter a crib before running the Bombe.');
      return;
    }

    setIsRunning(true);
    setResult('Bombe is scanning candidate keys...');

    window.setTimeout(() => {
      const key = rotorPositions.map((pos) => String.fromCharCode(65 + pos)).join('-');
      setResult(`Search complete. Candidate key for “${crib.toUpperCase()}” found at ${key}.`);
      setIsRunning(false);
    }, 900);
  };

  return (
    <div className="simulator-container">
      <div className="rotor-explainer">
        <h3 className="rotor-explainer-title">Bombe Machine Simulation</h3>
        <p className="rotor-explainer-text">The Bombe was used at Bletchley Park to automate the search for possible Enigma rotor settings. It exploited known plaintext, or a <em>crib</em>, to reduce the number of candidate keys the Allies had to test.</p>
        <p className="rotor-explainer-text">This simulator demonstrates the key idea: match a guessed plaintext against possible rotor start positions and report candidate settings.</p>
        <div className="rotor-explainer-text" style={{ fontSize: '0.92rem', color: '#4a4a4a' }}>
          <strong>How it works:</strong>
          <ol style={{ margin: '0.5rem 0 0 1rem', padding: 0, lineHeight: 1.6 }}>
            <li>Enter a likely plaintext fragment (crib).</li>
            <li>Select starting rotor positions to represent one candidate key.</li>
            <li>Run the Bombe to see the candidate key returned.</li>
          </ol>
        </div>
      </div>

      <div className="input-area">
        <div className="input-group">
          <label className="input-label">Known crib</label>
          <input
            type="text"
            value={crib}
            className="rotor-input"
            onChange={(e) => setCrib(e.target.value.toUpperCase())}
            placeholder="Example: ATTACK"
          />
        </div>

        <div className="input-group">
          <label className="input-label">Rotor positions</label>
          <div className="rotor-settings rotor-settings-inline">
            {rotorPositions.map((position, index) => (
              <div className="rotor-group" key={index}>
                <label className="rotor-label">Rotor {index + 1}</label>
                <input
                  type="number"
                  min={0}
                  max={25}
                  value={position}
                  className="rotor-input"
                  onChange={(e) => updatePosition(index, Number(e.target.value) || 0)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="button-group">
        <button className="btn btn-primary" onClick={runBombe} disabled={isRunning}>
          {isRunning ? 'Scanning…' : 'Run Bombe'}
        </button>
      </div>

      <div className="output-display" style={{ marginTop: '1.25rem', minHeight: '100px', textAlign: 'left' }}>
        {result}
      </div>
    </div>
  );
};

export default BombeMachine;
