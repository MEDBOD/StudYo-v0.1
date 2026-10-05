export default function AgentCard({ name, desc, statusColor, flow }) {
  return (
    <div className="agent-card">
      <div className="a-name">
        <span className="status" style={{ background: statusColor }} />
        {name}
      </div>
      <div className="a-desc">{desc}</div>
      {flow && (
        <div className="flow-mini">
          {flow.map((step, i) => (
            <span key={step}>
              <span className="flow-node">{step}</span>
              {i < flow.length - 1 && <span className="flow-sep"> → </span>}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
