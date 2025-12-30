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
            className = "cursor-pointer"
            onClick = {() => onSelect(item)}
          >
            <div className = "overflow-hidden rounded-2xl">
              <img
                src = {item.image}
                alt = {item.title}
                className = "w-full h-64 object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
