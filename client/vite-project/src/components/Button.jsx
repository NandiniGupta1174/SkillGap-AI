function Button({ children, variant = "primary" }) {
  const styles = {
    primary:
      "text-white shadow-lg hover:scale-105 transition-all duration-300",

    secondary:
      "border hover:scale-105 transition-all duration-300",
  };

  return (
    <button
      className={`px-6 py-3 rounded-2xl font-semibold ${styles[variant]}`}
      style={{
        background:
          variant === "primary"
            ? "linear-gradient(135deg,#7C3AED,#06B6D4)"
            : "transparent",
        border:
          variant === "secondary"
            ? "1px solid var(--border)"
            : "none",
        color: variant === "secondary" ? "var(--text)" : "#fff",
      }}
    >
      {children}
    </button>
  );
}

export default Button;