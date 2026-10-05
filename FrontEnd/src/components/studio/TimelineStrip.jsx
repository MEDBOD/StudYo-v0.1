import { projectStages } from '../../data/stages';
import './TimelineStrip.css';

export default function TimelineStrip({ projectName = 'LAB REPORT' }) {
  return (
    <div className="timeline-strip">
      <span className="ts-label mono">{projectName} →</span>
      {projectStages.map((stage) => (
        <div className={`ts-stage ${stage.status}`} key={stage.name}>
          <div className="ts-dot" />
          <div className="ts-name">{stage.name}</div>
          <div className="ts-sub">{stage.sub}</div>
        </div>
      ))}
    </div>
  );
}
