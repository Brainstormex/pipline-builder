import { BaseNode } from './BaseNode';

export const ConditionalNode = ({ id }) => {
  return (
    <BaseNode
      title="Conditional"
      inputs={[{ id: `${id}-input` }]}
      outputs={[
        { id: `${id}-true`, top: '35%' },
        { id: `${id}-false`, top: '65%' },
      ]}
    >
      <span>Conditional node</span>
    </BaseNode>
  );
};
