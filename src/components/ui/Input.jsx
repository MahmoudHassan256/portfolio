export const Input = ({
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  name = "",
  id = "",
  required = false,
  disabled = false,
  className = "",
  ...props
}) => {
  const inputStyles = {
    width: "100%",
    padding: "12px 16px",
    fontSize: "1rem",
    lineHeight: "1.5",
    border: "2px solid #d1d5db",
    borderRadius: "8px",
    transition: "all 0.2s ease",
    outline: "none",
    fontFamily: "inherit",
  };

  const focusStyles = {
    borderColor: "#4f46e5",
    boxShadow: "0 0 0 3px rgba(79, 70, 229, 0.1)",
  };

  const hoverStyles = {
    borderColor: "#9ca3af",
  };

  const disabledStyles = {
    borderColor: "#e5e7eb",
    cursor: "not-allowed",
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      required={required}
      disabled={disabled}
      className={className}
      style={{
        ...inputStyles,
        ...(disabled ? disabledStyles : {}),
      }}
      onFocus={(e) => {
        if (!disabled) {
          Object.assign(e.target.style, focusStyles);
        }
      }}
      onBlur={(e) => {
        if (!disabled) {
          e.target.style.borderColor = "#d1d5db";
          e.target.style.boxShadow = "none";
        }
      }}
      onMouseEnter={(e) => {
        if (!disabled && document.activeElement !== e.target) {
          Object.assign(e.target.style, hoverStyles);
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && document.activeElement !== e.target) {
          e.target.style.borderColor = "#d1d5db";
        }
      }}
      {...props}
    />
  );
};
