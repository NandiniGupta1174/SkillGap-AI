function LearningRoadmap() {
  const roadmap = [
    "Learn React.js Fundamentals",
    "Master Node.js & Express",
    "Practice MongoDB",
    "Learn AWS Cloud Basics",
    "Build 3 Full-Stack Projects",
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
        Learning Roadmap
      </h2>

      <ul className="space-y-4">
        {roadmap.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-3"
            style={{ color: "var(--text-secondary)" }}
          >
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center font-bold"
              style={{
                background: "var(--primary)",
                color: "white",
              }}
            >
              {index + 1}
            </span>

            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LearningRoadmap;