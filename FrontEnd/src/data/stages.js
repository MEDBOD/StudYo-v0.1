// Used on the homepage as a static preview
export const previewStages = [
  { day: 'MON', label: 'Outline done', done: true },
  { day: 'TUE', label: 'Sources gathered', done: true },
  { day: 'WED', label: 'Draft in progress', done: false },
  { day: 'THU', label: 'Peer review', done: false },
  { day: 'FRI', label: 'Submit', done: false },
];

// Used in the studio, with a "current" stage
export const projectStages = [
  { name: 'Outline', sub: 'Mon', status: 'done' },
  { name: 'Research', sub: 'Tue', status: 'done' },
  { name: 'Drafting', sub: 'Today', status: 'current' },
  { name: 'Peer review', sub: 'Thu', status: 'upcoming' },
  { name: 'Submit', sub: 'Fri', status: 'upcoming' },
];
