function SkillGapCard() {
  const skills = [
    "React.js",
    "Node.js",
    "MongoDB",
    "AWS",
    "Docker",
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
        Missing Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full text-sm font-semibold"
            style={{
              background: "rgba(124,58,237,0.15)",
              color: "var(--primary)",
              border: "1px solid rgba(124,58,237,0.3)",
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      <p
        className="mt-6"
        style={{ color: "var(--text-secondary)" }}
      >
        These are the important skills missing from your resume based on the selected job role.
      </p>
    </div>
  );
}

export default SkillGapCard;