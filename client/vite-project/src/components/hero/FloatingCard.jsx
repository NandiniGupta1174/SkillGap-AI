import { motion } from "framer-motion";

function FloatingCard({
  title,
  value,
  icon,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.7,
      }}
      className="backdrop-blur-xl rounded-3xl p-5 w-56 border"
      style={{
        background: "rgba(255,255,255,0.08)",
        borderColor: "rgba(255,255,255,0.15)",
      }}
    >
      <div className="text-3xl">{icon}</div>

      <p
        className="mt-3 text-sm"
        style={{ color: "var(--text-secondary)" }}
      >
        {title}
      </p>

      <h2
        className="text-3xl font-bold mt-2"
        style={{ color: "var(--text)" }}
      >
        {value}
      </h2>
    </motion.div>
  );
}

export default FloatingCard;