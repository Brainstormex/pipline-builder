import { BaseNode } from './BaseNode';

export const FilterNode = ({ id }) => {
  return (
    <BaseNode title="Filter" accent="#ec4899" inputs={[{ id: `${id}-input` }]} outputs={[{ id: `${id}-output` }]}>
      <p className="node-description">Filter node</p>
    </BaseNode>
  );
};
