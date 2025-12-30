import { motion } from "framer-motion";

export interface PhotoItem {
  id: number;
  title: string;
  image: string;
  note: string;
  location?: string;
  locationLink?: string | null;
}

interface PhotoGridProps {
  items: PhotoItem[];
  onSelect: (item: PhotoItem) => void;
}

export default function PhotoGrid({ items, onSelect }: PhotoGridProps) {
  return (
    <div className = "w-full flex justify-center"> {}
      <div className = "grid max-w-6xl w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
        {items.map((item, index) => (
          <motion.div
            key = {item.id}
            initial = {{ opacity: 0, y: 30 }}
            animate = {{ opacity: 1, y: 0 }}
            transition = {{ delay: index * 0.08 }}
            whileHover = {{ scale: 1.03 }}
            className = "cursor-pointer group"
            onClick = {() => onSelect(item)}
          >
            <div className = "relative overflow-hidden rounded-2xl">
              <img
                src = {item.image}
                alt = {item.title}
                className = "w-full h-auto object-contain transition-transform duration-500 group-hover:scale-150"
              />
              <div className = "absolute inset-0 bg-blue-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className = "p-4">
                  <p className = "text-white text-lg font-medium leading-tight">
                    {item.title}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
