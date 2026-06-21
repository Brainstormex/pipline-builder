import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  return (
    <div className="base-node text-node" style={{ '--node-accent': '#8b5cf6' }}>
      <div className="base-node-header">
        <span className="base-node-title">Text</span>
      </div>
      <div className="base-node-body">
        <label className="node-field">
          <span>Text</span>
          <input type="text" value={currText} onChange={(e) => setCurrText(e.target.value)} />
        </label>
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-output`} className="node-handle" />
    </div>
  );
};
