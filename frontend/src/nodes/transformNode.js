import { BaseNode } from './BaseNode';

export const TransformNode = ({ id }) => {
  return (
    <BaseNode title="Transform" accent="#f59e0b" inputs={[{ id: `${id}-input` }]} outputs={[{ id: `${id}-output` }]}>
      <p className="node-description">Transform node</p>
    </BaseNode>
  );
};
