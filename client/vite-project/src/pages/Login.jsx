import AuthLayout from "../components/auth/AuthLayout";

function Login() {
  return (
    <AuthLayout>
      <div
        className="w-full max-w-md rounded-3xl p-10"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h2
          className="text-4xl font-bold text-center"
          style={{ color: "var(--text)" }}
        >
          Login
        </h2>

        <p
          className="text-center mt-3"
          style={{ color: "var(--text-secondary)" }}
        >
          Welcome back!
        </p>

        <form className="mt-10 space-y-6">

          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 rounded-xl outline-none"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 rounded-xl outline-none"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
          />

          <button
            className="w-full py-4 rounded-xl font-semibold text-white"
            style={{
              background:
                "linear-gradient(135deg,#7C3AED,#06B6D4)",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </AuthLayout>
  );
}

export default Login;