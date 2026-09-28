import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import Button from "../Button";

function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-2xl"
    >
      {/* Badge */}
      <div
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
        style={{
          background: "rgba(124,58,237,0.15)",
          border: "1px solid rgba(124,58,237,0.3)",
          color: "var(--text)",
        }}
      >
        🚀 AI Powered Career Intelligence
      </div>

      {/* Heading */}
      <h1
        className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight"
        style={{ color: "var(--text)" }}
      >
        Bridge Your
        <br />
        <span style={{ color: "var(--primary)" }}>Skill Gap</span>
        {" "}with AI
      </h1>

      {/* Description */}
      <p
        className="mt-8 text-lg leading-8"
        style={{ color: "var(--text-secondary)" }}
      >
        Upload your resume, discover missing skills, receive
        personalized learning roadmaps, improve your ATS score,
        and prepare for interviews—all in one intelligent platform.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-wrap gap-5">
        <Button>
          Upload Resume
        </Button>

        <Button variant="secondary">
          Watch Demo
          <HiArrowRight className="inline ml-2" />
        </Button>
      </div>

      {/* Stats */}
      <div className="flex gap-12 mt-12 flex-wrap">
        <div>
          <h2
            className="text-3xl font-bold"
            style={{ color: "var(--primary)" }}
          >
            10K+
          </h2>

          <p style={{ color: "var(--text-secondary)" }}>
            Students
          </p>
        </div>

        <div>
          <h2
            className="text-3xl font-bold"
            style={{ color: "var(--primary)" }}
          >
            95%
          </h2>

          <p style={{ color: "var(--text-secondary)" }}>
            ATS Accuracy
          </p>
        </div>

        <div>
          <h2
            className="text-3xl font-bold"
            style={{ color: "var(--primary)" }}
          >
            500+
          </h2>

          <p style={{ color: "var(--text-secondary)" }}>
            Career Paths
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default HeroContent;