import { motion } from "framer-motion";

function GradientBlob({
  className = "",
  color = "#7C3AED",
}) {
  return (
    <motion.div
      animate={{
        x: [0, 40, -30, 0],
        y: [0, -30, 20, 0],
        scale: [1, 1.2, 0.9, 1],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute rounded-full blur-[120px] opacity-30 ${className}`}
      style={{
        background: color,
      }}
    />
  );
}

export default GradientBlob;