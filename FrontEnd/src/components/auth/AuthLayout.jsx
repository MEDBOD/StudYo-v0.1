import { Link } from "react-router-dom";
import "./auth.css";

// testing  this and that for github
export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="auth-shell">
      <aside className="auth-side">
        <Link to="/" className="auth-brand">
          StudYo
        </Link>
        <p className="auth-side-line">
          One studio for the work.
          <br />
          Not one more tab to lose.
        </p>
        <div className="auth-side-stat">
          <span className="auth-side-stat-num">6</span>
          <span className="auth-side-stat-label">
            tools most students juggle before they've opened a single assignment
          </span>
        </div>
      </aside>

      <main className="auth-main">
        <div className="auth-card">
          <h1 className="auth-title">{title}</h1>
          {subtitle && <p className="auth-subtitle">{subtitle}</p>}
          {children}
        </div>
      </main>
    </div>
  );
}
