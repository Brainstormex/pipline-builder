export const DraggableNode = ({ type, label, accent }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.currentTarget.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className="draggable-node"
      style={{ '--node-accent': accent }}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.currentTarget.style.cursor = 'grab')}
      draggable
    >
      <span className="draggable-node-dot" />
      <span>{label}</span>
    </div>
  );
};
