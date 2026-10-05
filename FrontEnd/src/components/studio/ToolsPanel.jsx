import ToolGroup from './ToolGroup';
import { toolGroups } from '../../data/tools';
import './ToolsPanel.css';

export default function ToolsPanel() {
  return (
    <div className="panel">
      <h4>Tools</h4>
      {toolGroups.map((group) => (
        <ToolGroup key={group.label} {...group} />
      ))}
    </div>
  );
}
