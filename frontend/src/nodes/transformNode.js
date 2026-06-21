import { BaseNode } from './BaseNode';

export const TransformNode = ({ id }) => {
  return (
    <BaseNode
      title="Transform"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <span>Transform node</span>
    </BaseNode>
  );
};
