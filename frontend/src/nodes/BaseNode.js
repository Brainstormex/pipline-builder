import { Handle, Position } from 'reactflow';

export const BaseNode = ({ title, accent = '#6366f1', inputs = [], outputs = [], children }) => {
  return (
    <div className="base-node" style={{ '--node-accent': accent }}>
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          className="node-handle"
          style={{ top: input.top ?? `${((index + 1) / (inputs.length + 1)) * 100}%` }}
        />
      ))}
      <div className="base-node-header">
        <span className="base-node-title">{title}</span>
      </div>
      <div className="base-node-body">{children}</div>
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          className="node-handle"
          style={{ top: output.top ?? `${((index + 1) / (outputs.length + 1)) * 100}%` }}
        />
      ))}
    </div>
  );
};
