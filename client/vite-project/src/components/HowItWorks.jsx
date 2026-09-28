import {
  HiOutlineDocumentArrowUp,
  HiOutlineCpuChip,
  HiOutlineChartBar,
  HiOutlineAcademicCap,
} from "react-icons/hi2";

const steps = [
  {
    icon: <HiOutlineDocumentArrowUp size={34} />,
    title: "Upload Resume",
    description: "Upload your resume in PDF or DOCX format.",
  },
  {
    icon: <HiOutlineCpuChip size={34} />,
    title: "AI Analysis",
    description: "Our AI analyzes your resume and compares it with job roles.",
  },
  {
    icon: <HiOutlineChartBar size={34} />,
    title: "Skill Gap Report",
    description: "Find missing technical and soft skills instantly.",
  },
  {
    icon: <HiOutlineAcademicCap size={34} />,
    title: "Learning Roadmap",
    description: "Receive a personalized roadmap with courses and projects.",
  },
];

function HowItWorks() {
  return (
    <section
      className="py-24 px-6"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-7xl mx-auto text-center">

        <h2
          className="text-5xl font-bold"
          style={{ color: "var(--text)" }}
        >
          How SkillGap AI Works
        </h2>

        <p
          className="mt-4 text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          Four simple steps to accelerate your career.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="rounded-3xl p-8"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg,#7C3AED,#06B6D4)",
                  color: "white",
                }}
              >
                {step.icon}
              </div>

              <h3
                className="text-2xl font-semibold mt-6"
                style={{ color: "var(--text)" }}
              >
                {step.title}
              </h3>

              <p
                className="mt-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;