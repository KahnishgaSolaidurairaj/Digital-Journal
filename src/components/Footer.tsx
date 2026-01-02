import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="mt-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 py-10 flex">

        <p className="text-sm text-gray-500 text-center sm:text-left">
          Dec 2025 - Jan 2026 · Kahnishga Solaidurairaj · Digital Journal
        </p>

      </motion.div>
    </footer>
  );
}
