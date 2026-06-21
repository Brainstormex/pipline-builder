import { BaseNode } from './BaseNode';

export const ApiNode = ({ id }) => {
  return (
    <BaseNode
      title="API"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <span>API node</span>
    </BaseNode>
  );
};
