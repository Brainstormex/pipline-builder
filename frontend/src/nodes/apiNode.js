import { BaseNode } from './BaseNode';

export const ApiNode = ({ id }) => {
  return (
    <BaseNode title="API" accent="#10b981" inputs={[{ id: `${id}-input` }]} outputs={[{ id: `${id}-output` }]}>
      <p className="node-description">API node</p>
    </BaseNode>
  );
};
