import AgentCard from './AgentCard';
import { agents } from '../../data/agents';
import './AgentsPanel.css';

export default function AgentsPanel() {
  return (
    <div className="panel">
      <h4>Agents &amp; automations</h4>
      {agents.map((a) => (
        <AgentCard key={a.id} {...a} />
      ))}
      <button className="build-btn">+ Build a new automation</button>
    </div>
  );
}
