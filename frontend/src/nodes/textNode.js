import { useState, useRef, useEffect, useMemo } from 'react';
import { Handle, Position } from 'reactflow';

const VARIABLE_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

const extractVariables = (text) => {
  const variables = [];
  const seen = new Set();
  let match;
  const regex = new RegExp(VARIABLE_REGEX.source, 'g');
  while ((match = regex.exec(text)) !== null) {
    const name = match[1];
    if (!seen.has(name)) {
      seen.add(name);
      variables.push(name);
    }
  }
  return variables;
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);
  const nodeRef = useRef(null);

  const variables = useMemo(() => extractVariables(currText), [currText]);

  useEffect(() => {
    const textarea = textareaRef.current;
    const node = nodeRef.current;
    if (textarea && node) {
      textarea.style.height = 'auto';
      textarea.style.width = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
      textarea.style.width = `${Math.max(textarea.scrollWidth, 160)}px`;
      node.style.width = `${textarea.offsetWidth + 24}px`;
    }
  }, [currText]);

  return (
    <div ref={nodeRef} className="base-node text-node" style={{ '--node-accent': '#8b5cf6' }}>
      {variables.map((variable, index) => (
        <Handle
          key={variable}
          type="target"
          position={Position.Left}
          id={`${id}-${variable}`}
          className="node-handle"
          style={{ top: `${((index + 1) / (variables.length + 1)) * 100}%` }}
        />
      ))}
      <div className="base-node-header">
        <span className="base-node-title">Text</span>
      </div>
      <div className="base-node-body">
        <textarea
          ref={textareaRef}
          className="text-node-input"
          value={currText}
          onChange={(e) => setCurrText(e.target.value)}
          rows={1}
        />
      </div>
      <Handle type="source" position={Position.Right} id={`${id}-output`} className="node-handle" />
    </div>
  );
};
