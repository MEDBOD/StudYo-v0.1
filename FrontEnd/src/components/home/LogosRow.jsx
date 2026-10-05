import './LogosRow.css';

const integrations = ['Google Drive', 'Google Calendar', 'Notion', 'Canvas', 'Zoom', 'n8n'];

export default function LogosRow() {
  return (
    <div className="logos-row">
      <span className="mono">WORKS WITH</span>
      {integrations.map((name) => (
        <span key={name}>{name}</span>
      ))}
    </div>
  );
}
