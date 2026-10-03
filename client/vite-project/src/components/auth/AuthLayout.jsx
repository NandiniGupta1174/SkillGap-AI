function AuthLayout({ children }) {
  return (
    <div
      className="min-h-screen grid lg:grid-cols-2"
      style={{ background: "var(--bg)" }}
    >
      {/* Left Side */}
      <div
        className="hidden lg:flex flex-col justify-center px-16"
        style={{
          background:
            "linear-gradient(135deg,#7C3AED,#06B6D4)",
          color: "white",
        }}
      >
        <h1 className="text-5xl font-bold">
          Welcome to
          <br />
          SkillGap AI
        </h1>

        <p className="mt-6 text-xl opacity-90 leading-8">
          Analyze resumes.
          <br />
          Discover missing skills.
          <br />
          Prepare for your dream job using AI.
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center justify-center px-6">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;