import { motion } from "framer-motion";
import {
  HiSparkles,
  HiBriefcase,
  HiCheckCircle,
} from "react-icons/hi";

import { HiOutlineChartBar } from "react-icons/hi2";

import FloatingCard from "./FloatingCard";

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center items-center w-full"
    >
      {/* Main Glass Panel */}
      <div
        className="relative rounded-3xl p-8 w-[420px] h-[500px] backdrop-blur-xl shadow-2xl"
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.15)",
        }}
      >
        <h2
          className="text-2xl font-bold mb-6"
          style={{ color: "var(--text)" }}
        >
          AI Career Dashboard
        </h2>

        <div className="space-y-5">
          <FloatingCard
            title="ATS Score"
            value="92%"
            icon={<HiOutlineChartBar color="#06B6D4" />}
            delay={0.2}
          />

          <FloatingCard
            title="Job Match"
            value="87%"
            icon={<HiBriefcase color="#22C55E" />}
            delay={0.4}
          />

          <FloatingCard
            title="Skills Learned"
            value="14"
            icon={<HiCheckCircle color="#7C3AED" />}
            delay={0.6}
          />
        </div>

        {/* Floating AI Icon */}
        <motion.div
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="absolute -top-6 -right-6 w-16 h-16 rounded-full flex items-center justify-center shadow-xl"
          style={{
            background: "linear-gradient(135deg,#7C3AED,#06B6D4)",
            color: "white",
          }}
        >
          <HiSparkles size={28} />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroImage;

            
              
            