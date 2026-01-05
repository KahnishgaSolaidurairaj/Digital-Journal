import { motion } from "framer-motion";
import type { PhotoItem } from "./PhotoGrid";

interface Props {
  item: PhotoItem;
  onClose: () => void;
}

export default function PhotoModal({ item, onClose }: Props) {
  return (
    <motion.div
      className = "fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
      initial = {{ opacity: 0 }}
      animate = {{ opacity: 1 }}
      exit = {{ opacity: 0 }}
      onClick = {onClose}
    >
      <motion.div
        initial = {{ scale: 0.92 }}
        animate = {{ scale: 1 }}
        exit = {{ scale: 0.92 }}
        className = "relative bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto"
        onClick = {(e) => e.stopPropagation()}
      >
        <img src = {item.image} className = "w-full h-auto max-h-[50vh] sm:max-h-[60vh] mx-auto object-cover" />
        
        <button
          onClick={onClose}
          className="absolute top-4 right-6 text-black hover:text-red-600 text-xl"
          aria-label="Close"
        > ✕ </button>

        <div className = "p-6 space-y-3">
          <h2 className = "text-2xl font-medium"> {item.title} </h2>

          {item.location && (
            item.locationLink ? (
              <a
                href = {item.locationLink}
                target = "_blank"
                rel = "noreferrer"
                className = "text-sm text-blue-600"
              > {item.location} </a>
            ) : (
              <p className = "text-sm text-gray-500"> {item.location} </p>
            )
          )}

          <p className = "text-gray-600 leading-relaxed"> {item.note} </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
