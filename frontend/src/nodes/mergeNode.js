import { BaseNode } from './BaseNode';

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      title="Merge"
      inputs={[
        { id: `${id}-input-a`, top: '33%' },
        { id: `${id}-input-b`, top: '66%' },
      ]}
      outputs={[{ id: `${id}-output` }]}
    >
      <span>Merge node</span>
    </BaseNode>
  );
};
