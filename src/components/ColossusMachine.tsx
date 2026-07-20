import React, { useState } from 'react';

const ColossusMachine: React.FC = () => {
  const [input, setInput] = useState('1010101010101010');
  const [threshold, setThreshold] = useState(5);
  const [result, setResult] = useState('Ready to analyze a teleprinter stream.');

  const analyzeStream = () => {
    const ones = (input.match(/1/g) || []).length;
    const score = ones >= threshold ? 'High probability of a valid signal.' : 'Signal does not meet the threshold.';
    setResult(`Stream length: ${input.length} bits. Ones count: ${ones}. ${score}`);
  };

  return (
    <div className="simulator-container">
      <div className="rotor-explainer">
        <h3 className="rotor-explainer-title">Colossus Analysis Simulator</h3>
        <p className="rotor-explainer-text">Colossus helped break the German Lorenz cipher by scanning teleprinter signal data for statistical patterns.</p>
        <p className="rotor-explainer-text">In this simplified simulation, you provide a binary stream and choose a detection threshold to identify likely encrypted traffic.</p>
        <div className="rotor-explainer-text" style={{ fontSize: '0.92rem', color: '#4a4a4a' }}>
          <strong>Why it matters:</strong>
          <ul style={{ margin: '0.5rem 0 0 1rem', padding: 0, lineHeight: 1.6 }}>
            <li>Colossus used electronic circuits to test signal hypotheses far faster than a human.</li>
            <li>It detected teleprinter patterns called <em>chi</em> values, allowing cryptanalysts to recover key settings.</li>
          </ul>
        </div>
      </div>

      <div className="input-group">
        <label className="input-label">Teleprinter bit stream</label>
        <textarea
          value={input}
          className="rotor-input"
          rows={5}
          onChange={(e) => setInput(e.target.value.replace(/[^01]/g, ''))}
          placeholder="Enter 0/1 signal data"
        />
      </div>

      <div className="input-group">
        <label className="input-label">Detection threshold</label>
        <input
          type="number"
          min={1}
          max={20}
          value={threshold}
          className="rotor-input"
          onChange={(e) => setThreshold(Math.max(1, Math.min(20, Number(e.target.value) || 1)))}
        />
      </div>

      <div className="button-group">
        <button className="btn btn-primary" onClick={analyzeStream}>Analyze Stream</button>
      </div>

      <div className="output-display" style={{ marginTop: '1.25rem', minHeight: '100px', textAlign: 'left' }}>
        {result}
      </div>
    </div>
  );
};

export default ColossusMachine;
