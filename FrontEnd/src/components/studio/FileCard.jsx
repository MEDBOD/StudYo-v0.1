export default function FileCard({ title, meta, badge, focused }) {
  return (
    <div className={`file-card ${focused ? 'focused' : ''}`}>
      <div className="file-meta">
        <div className="ft1">{title}</div>
        <div className="ft2">{meta}</div>
      </div>
      {badge && (
        <span className={`file-badge ${badge.urgent ? 'due' : ''}`}>{badge.text}</span>
      )}
    </div>
  );
}
