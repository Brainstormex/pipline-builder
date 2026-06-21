import { DraggableNode } from './draggableNode';

const NODES = [
  { type: 'customInput', label: 'Input', accent: '#6366f1' },
  { type: 'llm', label: 'LLM', accent: '#a855f7' },
  { type: 'customOutput', label: 'Output', accent: '#06b6d4' },
  { type: 'text', label: 'Text', accent: '#8b5cf6' },
  { type: 'filter', label: 'Filter', accent: '#ec4899' },
  { type: 'transform', label: 'Transform', accent: '#f59e0b' },
  { type: 'api', label: 'API', accent: '#10b981' },
  { type: 'merge', label: 'Merge', accent: '#3b82f6' },
  { type: 'conditional', label: 'Conditional', accent: '#ef4444' },
];

export const PipelineToolbar = () => {
  return (
    <header className="toolbar">
      <div className="toolbar-brand">
        <div className="toolbar-logo">VS</div>
        <p className="toolbar-title">Pipeline Builder</p>
      </div>
      <div className="toolbar-nodes">
        {NODES.map((node) => (
          <DraggableNode key={node.type} {...node} />
        ))}
      </div>
    </header>
  );
};
