import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../components/auth/AuthLayout";
import FormField from "../components/auth/FormField";

export default function SignupPage() {
  const { signup, loading, error, clearError } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    clearError();
    try {
      await signup(form);
      navigate("/studio", { replace: true });
    } catch {
      // error is already set on context; nothing else to do here
    }
  }

  return (
    <AuthLayout
      title="Set up your studio"
      subtitle="One account, every tool, one place to work."
    >
      {error && <div className="auth-error">{error}</div>}

      <form onSubmit={handleSubmit} noValidate>
        <FormField
          id="name"
          label="Full name"
          value={form.name}
          onChange={handleChange}
          autoComplete="name"
        />
        <FormField
          id="username"
          label="Username"
          value={form.username}
          onChange={handleChange}
          autoComplete="username"
          hint="This is how you'll appear inside your studio."
        />
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
          autoComplete="new-password"
          hint="At least 8 characters."
        />
        <button className="auth-submit" type="submit" disabled={loading}>
          {loading ? "Creating account…" : "Create account"}
        </button>
      </form>

      <p className="auth-switch">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </AuthLayout>
  );
}
