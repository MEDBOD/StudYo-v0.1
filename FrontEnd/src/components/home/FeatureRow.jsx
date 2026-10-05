import { todaysFiles } from '../../data/files';
import { previewStages } from '../../data/stages';
import './FeatureRow.css';

function StudioVisual() {
  return (
    <div className="studio-visual-card">
      {todaysFiles.map((f) => (
        <div className="sv-row" key={f.id}>
          <div className="sv-icon" />
          <div className="sv-text">
            <div className="t1">{f.title}</div>
            <div className="t2">{f.meta}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function AgentsVisual() {
  const nodes = [
    'New reading uploaded',
    'Summarize + extract key terms',
    'Add flashcards to today\u2019s studio',
  ];
  return (
    <div className="agent-visual-card">
      {nodes.map((n, i) => (
        <div key={n}>
          <div className="av-node">
            <span>{n}</span>
            <span className="status" />
          </div>
          {i < nodes.length - 1 && <div className="av-arrow mono">↓</div>}
        </div>
      ))}
    </div>
  );
}

function TimelineVisual() {
  return (
    <div className="timeline-mini">
      {previewStages.map((s) => (
        <div className={`tl-stage ${s.done ? 'done' : ''}`} key={s.day}>
          <span className="day mono">{s.day}</span>
          <div className="dot" />
          <span className="label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

const visuals = {
  studio: StudioVisual,
  agents: AgentsVisual,
  timeline: TimelineVisual,
};

export default function FeatureRow({ tag, title, body, reverse, visual }) {
  const Visual = visuals[visual];
  return (
    <div className={`feature-row ${reverse ? 'reverse' : ''}`}>
      <div className="f-copy">
        <span className="tag">{tag}</span>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <div className="f-visual">
        <Visual />
      </div>
    </div>
  );
}
