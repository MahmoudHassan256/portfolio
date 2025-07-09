export const Label = ({ htmlFor, children, className = "", ...props }) => {
  const labelStyles = {
    display: "block",
    fontSize: "0.875rem",
    fontWeight: "500",
    marginBottom: "6px",
    cursor: "pointer",
    transition: "color 0.2s ease",
  };

  return (
    <label
      htmlFor={htmlFor}
      className={className}
      style={labelStyles}
      onMouseEnter={(e) => (e.target.style.color = "#4f46e5")}
      onMouseLeave={(e) => (e.target.style.color = "#374151")}
      {...props}
    >
      {children}
    </label>
  );
};
