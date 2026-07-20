import React, { useState } from 'react';

const EniacMachine: React.FC = () => {
  const [program, setProgram] = useState('ADD 13, 27');
  const [registerA, setRegisterA] = useState(0);
  const [registerB, setRegisterB] = useState(0);
  const [output, setOutput] = useState('Simulate a program by entering an operation and running it.');

  const runProgram = () => {
    const normalized = program.trim().toUpperCase();
    if (normalized.startsWith('ADD ')) {
      const args = normalized.replace('ADD ', '').split(',').map((s) => Number(s.trim()));
      if (args.length === 2 && args.every(Number.isFinite)) {
        const result = args[0] + args[1];
        setRegisterA(args[0]);
        setRegisterB(args[1]);
        setOutput(`ADD result: ${result}`);
        return;
      }
    }
    if (normalized.startsWith('MULT ')) {
      const args = normalized.replace('MULT ', '').split(',').map((s) => Number(s.trim()));
      if (args.length === 2 && args.every(Number.isFinite)) {
        const result = args[0] * args[1];
        setRegisterA(args[0]);
        setRegisterB(args[1]);
        setOutput(`MULT result: ${result}`);
        return;
      }
    }
    setOutput('Unsupported program. Try ADD or MULT with two integers.');
  };

  return (
    <div className="simulator-container">
      <div className="rotor-explainer">
        <h3 className="rotor-explainer-title">ENIAC Programming Simulator</h3>
        <p className="rotor-explainer-text">ENIAC was one of the first electronic digital computers, built to solve complex ballistic and scientific problems.</p>
        <p className="rotor-explainer-text">This simulator models ENIAC’s use of instruction setup and register flow for basic arithmetic operations.</p>
        <div className="rotor-explainer-text" style={{ fontSize: '0.92rem', color: '#4a4a4a' }}>
          <strong>What this shows:</strong>
          <ul style={{ margin: '0.5rem 0 0 1rem', padding: 0, lineHeight: 1.6 }}>
            <li>how ENIAC processed instructions using manual program entry.</li>
            <li>the difference between input registers and output result.</li>
          </ul>
        </div>
      </div>

      <div className="input-group">
        <label className="input-label">Program instruction</label>
        <input
          type="text"
          value={program}
          className="rotor-input"
          onChange={(e) => setProgram(e.target.value)}
          placeholder="Example: ADD 13, 27"
        />
      </div>

      <div className="input-area">
        <div className="input-group">
          <label className="input-label">Register A</label>
          <div className="output-display">{registerA}</div>
        </div>
        <div className="input-group">
          <label className="input-label">Register B</label>
          <div className="output-display">{registerB}</div>
        </div>
      </div>

      <div className="button-group">
        <button className="btn btn-primary" onClick={runProgram}>Run Program</button>
      </div>

      <div className="output-display" style={{ marginTop: '1.25rem', minHeight: '100px', textAlign: 'left' }}>
        {output}
      </div>
    </div>
  );
};

export default EniacMachine;
