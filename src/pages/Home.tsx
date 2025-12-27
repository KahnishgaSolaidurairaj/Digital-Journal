import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="px-6 pt-24 pb-32 max-w-5xl mx-auto text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-semibold mb-6"
      > Winter Break 2025</motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 max-w-2xl mx-auto mb-14"
      >
        A digital memory book capturing food, places, movies, and moments that
        made this winter slow, warm, and meaningful.
      </motion.p>
    </div>
  );
}
