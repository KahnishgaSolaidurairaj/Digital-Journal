import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <motion.div
      className = "max-w-5xl mx-auto px-6 pt-20 pb-40 text-center"
      initial = "hidden"
      animate = "show"
      transition = {{ staggerChildren: 0.15 }}
    >
      <motion.h1
        variants = {item}
        className = "text-5xl md:text-6xl font-semibold mb-6"
      > Winter Break 2025 </motion.h1>

      <motion.p
        variants = {item}
        className = "text-gray-600 max-w-2xl mx-auto mb-16"
      > A digital memory book capturing food, places, movies, and moments that made this winter slow and meaningful. </motion.p>

      <motion.div
        variants = {item}
        className = "grid sm:grid-cols-2 gap-5"
      >
        {[
          ["Food", "/food"],
          ["Places", "/places"],
          ["Movies", "/movies"],
          ["Reflection", "/reflection"],
        ].map(([label, path]) => (
          <Link
            key = {label}
            to = {path}
            className = "rounded-3xl bg-blue-100 p-10 shadow-sm hover:shadow-md transition"
          >
            <h2 className = "text-2xl font-medium">{label}</h2>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
}
