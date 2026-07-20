import React, { useState } from 'react';

const UnivacMachine: React.FC = () => {
  const [records, setRecords] = useState('10,20,30,40');
  const [average, setAverage] = useState<number | null>(null);
  const [result, setResult] = useState('Enter numeric records separated by commas.');

  const computeAverage = () => {
    const values = records.split(',').map((item) => Number(item.trim())).filter(Number.isFinite);
    if (values.length === 0) {
      setResult('Enter at least one numeric record.');
      setAverage(null);
      return;
    }
    const sum = values.reduce((acc, value) => acc + value, 0);
    setAverage(sum / values.length);
    setResult(`Parsed ${values.length} records.`);
  };

  return (
    <div className="simulator-container">
      <div className="rotor-explainer">
        <h3 className="rotor-explainer-title">UNIVAC I Data Processor</h3>
        <p className="rotor-explainer-text">UNIVAC I was the first commercially built computer, designed for business and government data processing.</p>
        <p className="rotor-explainer-text">This simulator uses a small dataset to show how UNIVAC would read records and compute aggregate values.</p>
        <div className="rotor-explainer-text" style={{ fontSize: '0.92rem', color: '#4a4a4a' }}>
          <strong>Simulation focus:</strong>
          <ul style={{ margin: '0.5rem 0 0 1rem', padding: 0, lineHeight: 1.6 }}>
            <li>data ingestion from punch-card style records</li>
            <li>summary calculations used in early business analytics</li>
          </ul>
        </div>
      </div>

      <div className="input-group">
        <label className="input-label">Data records</label>
        <textarea
          value={records}
          className="rotor-input"
          rows={4}
          onChange={(e) => setRecords(e.target.value)}
          placeholder="Example: 10, 20, 30, 40"
        />
      </div>

      <div className="button-group">
        <button className="btn btn-primary" onClick={computeAverage}>Compute Average</button>
      </div>

      <div className="output-display" style={{ marginTop: '1.25rem', minHeight: '100px', textAlign: 'left' }}>
        {result}
        {average !== null && <div style={{ marginTop: '0.75rem' }}>Average: {average.toFixed(2)}</div>}
      </div>
    </div>
  );
};

export default UnivacMachine;
