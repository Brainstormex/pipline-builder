import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  return (
    <BaseNode title="Output" accent="#06b6d4" inputs={[{ id: `${id}-value` }]}>
      <label className="node-field">
        <span>Name</span>
        <input type="text" value={currName} onChange={(e) => setCurrName(e.target.value)} />
      </label>
      <label className="node-field">
        <span>Type</span>
        <select value={outputType} onChange={(e) => setOutputType(e.target.value)}>
          <option value="Text">Text</option>
          <option value="Image">Image</option>
        </select>
      </label>
    </BaseNode>
  );
};
