import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../components/auth/AuthLayout";
import FormField from "../components/auth/FormField";

export default function LoginPage() {
  const { login, loading, error, clearError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });

  const from = location.state?.from?.pathname || "/studio";

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    clearError();
    try {
      await login(form);
      navigate(from, { replace: true });
    } catch {
      // error is already set on context; nothing else to do here
    }
  }

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Log in to pick up your studio where you left it."
    >
      {error && <div className="auth-error">{error}</div>}

      <form onSubmit={handleSubmit} noValidate>
        <FormField
          id="email"
          label="Email"
          type="email"
          value={form.email}
          onChange={handleChange}
          autoComplete="email"
        />
        <FormField
          id="password"
          label="Password"
          type="password"
          value={form.password}
          onChange={handleChange}
          autoComplete="current-password"
        />
        <button className="auth-submit" type="submit" disabled={loading}>
          {loading ? "Logging in…" : "Log in"}
        </button>
      </form>

      <p className="auth-switch">
        New to StudYo? <Link to="/signup">Create an account</Link>
      </p>
    </AuthLayout>
  );
}
