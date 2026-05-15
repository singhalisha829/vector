// draggableNode.js

export const DraggableNode = ({ type, label, icon, color = "#6366F1" }) => {
  const onDragStart = (event) => {
    const appData = { nodeType: type };
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      className="node-tile"
      onDragStart={onDragStart}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <div className="node-tile-icon" style={{ background: color }}>
        {icon}
      </div>
      <span className="node-tile-label">{label}</span>
    </div>
  );
};
