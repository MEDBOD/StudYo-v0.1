export const agents = [
  {
    id: 'summarizer',
    name: 'Reading Summarizer',
    desc: 'Turns any upload into a summary + key terms.',
    statusColor: '#5FE1C9',
    flow: null,
  },
  {
    id: 'group-nudge',
    name: 'Group Nudge',
    desc: "Pings a teammate if their part hasn't moved in 48h.",
    statusColor: '#5FE1C9',
    flow: ['no update', '48h', 'send nudge'],
  },
  {
    id: 'deadline-watcher',
    name: 'Deadline Watcher',
    desc: 'Moves urgent files to the top of your studio.',
    statusColor: '#FF9F5A',
    flow: null,
  },
];
