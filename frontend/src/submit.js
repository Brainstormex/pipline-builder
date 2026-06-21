import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      alert(
        `Nodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nIs DAG: ${data.is_dag ? 'Yes' : 'No'}`
      );
    } catch (error) {
      alert(`Failed to submit pipeline: ${error.message}`);
    }
  };

  return (
    <footer className="submit-bar">
      <button className="submit-button" type="button" onClick={handleSubmit}>
        Submit
      </button>
    </footer>
  );
};
