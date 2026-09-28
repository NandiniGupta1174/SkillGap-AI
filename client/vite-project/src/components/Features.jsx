import {
  HiOutlineDocumentText,
  HiOutlineAcademicCap,
  HiOutlineBriefcase,
  HiOutlineChartBar,
  HiOutlineSparkles,
  HiOutlineUserGroup,
} from "react-icons/hi";

const features = [
  {
    icon: <HiOutlineDocumentText size={34} />,
    title: "Resume Analysis",
    description:
      "Analyze your resume and identify missing skills instantly.",
  },
  {
    icon: <HiOutlineAcademicCap size={34} />,
    title: "Skill Gap Detection",
    description:
      "Find the exact skills required for your dream job.",
  },
  {
    icon: <HiOutlineBriefcase size={34} />,
    title: "AI Job Matching",
    description:
      "Discover jobs that best match your profile.",
  },
  {
    icon: <HiOutlineChartBar size={34} />,
    title: "ATS Score",
    description:
      "Improve your resume with AI-powered ATS suggestions.",
  },
  {
    icon: <HiOutlineSparkles size={34} />,
    title: "Interview Preparation",
    description:
      "Practice AI-generated interview questions with feedback.",
  },
  {
    icon: <HiOutlineUserGroup size={34} />,
    title: "Learning Roadmap",
    description:
      "Receive a personalized roadmap to achieve your career goals.",
  },
];

function Features() {
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
          Everything You Need
        </h2>

        <p
          className="mt-5 text-lg"
          style={{ color: "var(--text-secondary)" }}
        >
          One AI platform to accelerate your career.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                style={{
                  background: "linear-gradient(135deg,#7C3AED,#06B6D4)",
                  color: "white",
                }}
              >
                {feature.icon}
              </div>

              <h3
                className="text-2xl font-semibold"
                style={{ color: "var(--text)" }}
              >
                {feature.title}
              </h3>

              <p
                className="mt-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;