function JobMatchCard() {
  const jobs = [
    { role: "Software Engineer", match: "95%" },
    { role: "Frontend Developer", match: "91%" },
    { role: "Full Stack Developer", match: "88%" },
    { role: "React Developer", match: "84%" },
  ];

  return (
    <div
      className="rounded-3xl p-6 shadow-lg"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      <h2
        className="text-2xl font-bold mb-6"
        style={{ color: "var(--text)" }}
      >
        Job Matches
      </h2>

      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.role}
            className="flex justify-between items-center"
          >
            <span style={{ color: "var(--text)" }}>
              {job.role}
            </span>

            <span
              className="font-bold"
              style={{ color: "var(--primary)" }}
            >
              {job.match}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobMatchCard;