import { NavLink } from 'react-router-dom';
import HeroStudioPreview from './HeroStudioPreview';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div>
        <span className="hero-eyebrow mono">FOR STUDENTS WHO ARE TIRED OF TWENTY TABS</span>
        <h1>
          Your whole school day,
          <br />
          in <em>one studio.</em>
        </h1>
        <p className="lede">
          StudYo pulls your tools, files, and schedule into a single workspace — then hands you
          the exact "studio" you need each day, with AI agents doing the busywork in the
          background.
        </p>
        <div className="hero-ctas">
          <NavLink to="/studio" className="btn-primary">
            Get early access
          </NavLink>
          <a href="#how-it-works" className="btn-ghost">
            See how it works
          </a>
        </div>
      </div>
      <HeroStudioPreview />
    </section>
  );
}
