function ResumeAnalyzer() {
  return (
    <div
      className="min-h-screen px-6 py-20"
      style={{ background: "var(--bg)" }}
    >
      <div
        className="max-w-4xl mx-auto rounded-3xl p-10 text-center"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
        }}
      >
        <h1
          className="text-5xl font-bold"
          style={{ color: "var(--text)" }}
        >
          Resume Analyzer
        </h1>

        <p
          className="mt-4 text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          Upload your resume and let AI analyze your skills.
        </p>

        <div
          className="mt-12 border-2 border-dashed rounded-3xl p-16"
          style={{
            borderColor: "var(--primary)",
          }}
        >
          <h2
            className="text-2xl font-semibold"
            style={{ color: "var(--text)" }}
          >
            📄 Drag & Drop Resume Here
          </h2>

          <p
            className="mt-3"
            style={{ color: "var(--text-secondary)" }}
          >
            PDF and DOCX supported
          </p>

          <button
            className="mt-8 px-8 py-4 rounded-2xl text-white font-semibold"
            style={{
              background:
                "linear-gradient(135deg,#7C3AED,#06B6D4)",
            }}
          >
            Choose File
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResumeAnalyzer;