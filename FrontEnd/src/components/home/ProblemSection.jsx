import './ProblemSection.css';

const problems = [
  {
    n: '01',
    title: 'Tool-hopping',
    body: 'Drive for the file, Docs to write, Notion for notes, WhatsApp for the group — and the thread of what you were doing disappears each time you switch.',
  },
  {
    n: '02',
    title: 'No real daily plan',
    body: "A calendar tells you when class is. It doesn't tell you what to actually open and work on the moment you sit down.",
  },
  {
    n: '03',
    title: 'Manual busywork',
    body: 'Summarizing a reading, formatting citations, reminding a teammate — small tasks that eat the hours you meant to spend actually studying.',
  },
];

export default function ProblemSection() {
  return (
    <section className="section">
      <div className="section-head">
        <span className="k">THE PROBLEM</span>
        <h2>
          You don't lose time studying.
          <br />
          You lose it switching windows.
        </h2>
        <p>
          The average student's day is scattered across a dozen logins — and the actual work, and
          the momentum, gets lost in between.
        </p>
      </div>
      <div className="problem-grid">
        {problems.map((p) => (
          <div className="problem-card" key={p.n}>
            <span className="n mono">{p.n}</span>
            <h3>{p.title}</h3>
            <p>{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
