import './HeroStudioPreview.css';

export default function HeroStudioPreview() {
  return (
    <div className="hero-visual">
      <div className="hv-bar">
        <div className="hv-dot" />
        <div className="hv-dot" />
        <div className="hv-dot" />
      </div>
      <div className="hv-grid">
        <div className="hv-col">
          <h4>Tools</h4>
          <div className="hv-tool">Drive</div>
          <div className="hv-tool">Docs</div>
          <div className="hv-tool">Calendar</div>
          <div className="hv-tool">Zoom</div>
          <div className="hv-tool">Notion</div>
        </div>
        <div className="hv-col">
          <h4>Today's studio</h4>
          <div className="hv-canvas">
            <div className="hv-file active">Physics — Lab report draft</div>
            <div className="hv-file">Group project — slides</div>
            <div className="hv-file">Reading: Ch. 6 notes</div>
          </div>
        </div>
        <div className="hv-col">
          <h4>Agents</h4>
          <div className="hv-agent">Summarize Ch.6 →</div>
          <div className="hv-agent">Build flashcards</div>
          <div className="hv-agent">Chase group reply</div>
        </div>
      </div>
    </div>
  );
}
