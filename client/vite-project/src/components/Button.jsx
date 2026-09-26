function Button({
  children,
  variant = "primary",
}) {
  const styles = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white",

    secondary:
      "border border-blue-600 text-blue-600 hover:bg-blue-50",

    ghost:
      "text-slate-700 hover:text-blue-600"
  };

  return (
    <button
      className={`px-5 py-3 rounded-xl font-semibold transition ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

export default Button;