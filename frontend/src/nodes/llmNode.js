import { BaseNode } from './BaseNode';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      accent="#a855f7"
      inputs={[
        { id: `${id}-system`, top: `${100 / 3}%` },
        { id: `${id}-prompt`, top: `${200 / 3}%` },
      ]}
      outputs={[{ id: `${id}-response` }]}
    >
      <p className="node-description">This is a LLM.</p>
    </BaseNode>
  );
};
