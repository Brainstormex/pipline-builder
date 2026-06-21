import { Handle, Position } from 'reactflow';

export const BaseNode = ({ title, inputs = [], outputs = [], children }) => {
  return (
    <div style={{ width: 200, minHeight: 80, border: '1px solid black' }}>
      {inputs.map((input, index) => (
        <Handle
          key={input.id}
          type="target"
          position={Position.Left}
          id={input.id}
          style={{ top: input.top ?? `${((index + 1) / (inputs.length + 1)) * 100}%` }}
        />
      ))}
      <div>
        <span>{title}</span>
      </div>
      <div>{children}</div>
      {outputs.map((output, index) => (
        <Handle
          key={output.id}
          type="source"
          position={Position.Right}
          id={output.id}
          style={{ top: output.top ?? `${((index + 1) / (outputs.length + 1)) * 100}%` }}
        />
      ))}
    </div>
  );
};
