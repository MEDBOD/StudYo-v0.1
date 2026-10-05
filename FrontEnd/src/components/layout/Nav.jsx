import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Nav.css';

export default function Nav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="topbar">
      <NavLink to="/" className="logo">
        Stud<span>Yo</span>
      </NavLink>

      <nav className="navlinks">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </NavLink>
        <NavLink to="/studio" className={({ isActive }) => (isActive ? 'active' : '')}>
          Studio
        </NavLink>
      </nav>

      <div className="nav-actions">
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <NavLink to="/studio" className="cta-small">
          Open studio
        </NavLink>
      </div>
    </div>
  );
}
