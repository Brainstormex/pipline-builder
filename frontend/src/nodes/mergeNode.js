import { BaseNode } from './BaseNode';

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      title="Merge"
      accent="#3b82f6"
      inputs={[
        { id: `${id}-input-a`, top: '33%' },
        { id: `${id}-input-b`, top: '66%' },
      ]}
      outputs={[{ id: `${id}-output` }]}
    >
      <p className="node-description">Merge node</p>
    </BaseNode>
  );
};
