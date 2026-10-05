import Nav from '../components/layout/Nav';
import TimelineStrip from '../components/studio/TimelineStrip';
import ToolsPanel from '../components/studio/ToolsPanel';
import StudioCanvas from '../components/studio/StudioCanvas';
import AgentsPanel from '../components/studio/AgentsPanel';
import './StudioPage.css';

export default function StudioPage() {
  return (
    <div className="studio-page">
      <Nav />
      <div className="studio-shell">
        <TimelineStrip />
        <div className="studio-grid">
          <ToolsPanel />
          <StudioCanvas />
          <AgentsPanel />
        </div>
      </div>
    </div>
  );
}
