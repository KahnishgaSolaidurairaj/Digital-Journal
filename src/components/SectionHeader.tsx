import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  title,
  subtitle,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial = {{ opacity: 0, y: 24 }}
      animate = {{ opacity: 1, y: 0 }}
      transition = {{ duration: 0.6, ease: "easeOut" }}
      className = "mb-14 text-center"
    >
      <h1 className = "text-4xl md:text-5xl font-semibold tracking-tight mb-3"> {title} </h1>

      {subtitle && (
        <p className="text-gray-500 max-w-xl mx-auto leading-relaxed"> {subtitle} </p>
      )}
    </motion.div>
  );
}
