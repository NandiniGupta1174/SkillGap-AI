function ATSScoreCard() {
  return (
    <div
      className="rounded-3xl p-6 shadow-lg"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      <h2
        className="text-2xl font-bold"
        style={{ color: "var(--text)" }}
      >
        ATS Score
      </h2>

      <div className="mt-6 flex items-center justify-center">
        <div
          className="w-40 h-40 rounded-full flex items-center justify-center text-4xl font-bold"
          style={{
            border: "8px solid var(--primary)",
            color: "var(--primary)",
          }}
        >
          92%
        </div>
      </div>

      <p
        className="mt-6 text-center"
        style={{ color: "var(--text-secondary)" }}
      >
        Excellent! Your resume is highly ATS friendly.
      </p>
    </div>
  );
}

export default ATSScoreCard;