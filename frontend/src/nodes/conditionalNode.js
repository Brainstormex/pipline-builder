import { BaseNode } from './BaseNode';

export const ConditionalNode = ({ id }) => {
  return (
    <BaseNode
      title="Conditional"
      accent="#ef4444"
      inputs={[{ id: `${id}-input` }]}
      outputs={[
        { id: `${id}-true`, top: '35%' },
        { id: `${id}-false`, top: '65%' },
      ]}
    >
      <p className="node-description">Conditional node</p>
    </BaseNode>
  );
};
