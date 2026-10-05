export default function ToolGroup({ label, color, tools }) {
  return (
    <div className="tool-group">
      <span className="tool-group-label">{label}</span>
      {tools.map((tool) => (
        <div className="tool-item" key={tool}>
          <div className="tool-dot" style={{ background: color }} />
          {tool}
        </div>
      ))}
    </div>
  );
}
