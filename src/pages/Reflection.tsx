import { motion } from "framer-motion";

export default function Reflection() {
  return (
    <motion.div
      className = "max-w-3xl mx-auto px-6 py-20"
      initial = {{ opacity: 0, y: 30 }}
      animate = {{ opacity: 1, y: 0 }}
    >
      <h1 className = "text-4xl font-semibold mb-6"> Reflection </h1>

      <p className = "text-gray-600 leading-relaxed mb-4">
        Winter break felt slower than usual. Between warm drinks, quiet
        evenings, and familiar places, I continued to prefer the quit comfort 
        and time to rest.
      </p>

      <p className = "text-gray-600 leading-relaxed">
        With this journal I remind myself that productivity isn't always about doing
        more, sometimes it's about noticing more.
      </p>
    </motion.div>
  );
}
