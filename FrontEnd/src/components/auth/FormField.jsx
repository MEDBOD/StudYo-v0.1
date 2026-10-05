export default function FormField({
  id,
  label,
  type = "text",
  value,
  onChange,
  autoComplete,
  required = true,
  hint,
}) {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        required={required}
      />
      {hint && <span className="form-field-hint">{hint}</span>}
    </div>
  );
}
