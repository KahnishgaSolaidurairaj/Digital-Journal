import { motion } from "framer-motion";

export default function Reflection() {
  return (
    <div className = "min-h-screen py-24">
      <motion.article
        className = "max-w-3xl mx-auto px-6"
        initial = {{ opacity: 0, y: 30 }}
        animate = {{ opacity: 1, y: 0 }}
        transition = {{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className = "text-4xl font-semibold mb-6 tracking-tight"> Winter Reflection </h1>
        <div className = "space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Winter break felt slower than usual. Between sweet drinks, quiet
            evenings, and familiar places, I continued to prefer the quiet comfort 
            and time to rest.
          </p>
          
          <p>
            I also noticed how rest affected my creativity. Sleeping better,
            spending time offline, and moving slower gave me space to think more
            clearly. By the end of the break, I felt more fufilled because I allowed 
            myself to do less in quantity and more in quality. 
          </p>

          <p>
            This digital journal isn't meant to document everything. It's a snapshot 
            of how it felt to be present. Looking back, the memories that stayed weren't
            the big events, but the small everyday moments I enjoyed.
          </p>
          
          <p>
            With this journal I remind myself that productivity isn't always about doing
            more, sometimes it's about noticing more.
          </p>
        </div>
      </motion.article>
    </div>
  );
}
