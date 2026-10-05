import { useState } from 'react';
import './WaitlistBand.css';

export default function WaitlistBand() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire this up to your real waitlist endpoint / ESP
    setSubmitted(true);
  };

  return (
    <section className="band">
      <div className="band-inner">
        <div>
          <h2>No feeds. No doomscrolling. Just short, useful videos when you want them.</h2>
          <p>
            The only "social" layer in StudYo is a feed of short, informative clips — study
            techniques, subject explainers, tool tips. Nothing designed to keep you scrolling
            past the work you opened it for.
          </p>
        </div>
        <div>
          {submitted ? (
            <p className="waitlist-confirm">You're on the list — we'll email {email} when it's ready.</p>
          ) : (
            <form className="waitlist-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="you@university.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn-primary">
                Join waitlist
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
