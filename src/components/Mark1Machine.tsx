import React, { useState } from 'react';

const Mark1Machine: React.FC = () => {
  const [calculation, setCalculation] = useState('45 * 72');
  const [result, setResult] = useState('Enter a simple arithmetic expression to compute.');

  const compute = () => {
    try {
      const value = Function(`return ${calculation}`)();
      setResult(`Result: ${String(value)}`);
    } catch {
      setResult('Invalid expression. Use basic arithmetic like 12 + 34.');
    }
  };

  return (
    <div className="simulator-container">
      <div className="rotor-explainer">
        <h3 className="rotor-explainer-title">Harvard Mark I Calculator</h3>
        <p className="rotor-explainer-text">The Harvard Mark I was one of the first large-scale electromechanical computers, designed in the 1940s for scientific and engineering work.</p>
        <p className="rotor-explainer-text">This simulator lets you enter a basic arithmetic expression to mimic how the Mark I handled calculations through relays and punched tape.</p>
        <div className="rotor-explainer-text" style={{ fontSize: '0.92rem', color: '#4a4a4a' }}>
          <strong>Key features:</strong>
          <ul style={{ margin: '0.5rem 0 0 1rem', padding: 0, lineHeight: 1.6 }}>
            <li>Automatic sequence control using rotating shafts and relays.</li>
            <li>Ability to perform addition, subtraction, multiplication, and division.</li>
          </ul>
        </div>
      </div>

      <div className="input-group">
        <label className="input-label">Calculation</label>
        <input
          type="text"
          value={calculation}
          className="rotor-input"
          onChange={(e) => setCalculation(e.target.value)}
          placeholder="Example: 45 * 72"
        />
      </div>

      <div className="button-group">
        <button className="btn btn-primary" onClick={compute}>Compute</button>
      </div>

      <div className="output-display" style={{ marginTop: '1.25rem', minHeight: '100px', textAlign: 'left' }}>
        {result}
      </div>
    </div>
  );
};

export default Mark1Machine;
