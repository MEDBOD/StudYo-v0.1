import TodayBrief from './TodayBrief';
import FileCard from './FileCard';
import { todaysFiles } from '../../data/files';
import './StudioCanvas.css';

export default function StudioCanvas() {
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="panel">
      <div className="canvas-header">
        <h3>Today's studio</h3>
        <span className="date mono">{today.toUpperCase()}</span>
      </div>

      <TodayBrief>
        You're mid-draft on the physics lab report, due Friday. Two flashcard sets are ready from
        yesterday's reading — want to review them before class?
      </TodayBrief>

      {todaysFiles.map((f) => (
        <FileCard key={f.id} {...f} />
      ))}
    </div>
  );
}
