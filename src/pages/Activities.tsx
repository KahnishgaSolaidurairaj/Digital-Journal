import { useState } from "react";
import { activities } from "../data/activities";
import SectionHeader from "../components/SectionHeader";
import PhotoGrid from "../components/PhotoGrid";
import type { PhotoItem } from "../components/PhotoGrid";

import PhotoModal from "../components/PhotoModal";
import { AnimatePresence } from "framer-motion";

export default function Activities() {
  const [selected, setSelected] = useState<PhotoItem | null>(null);

  return (
    <div className = "page">
      <SectionHeader
        title = "Activities"
        subtitle = "Hobbies, Events, and fun"
      />

      <PhotoGrid items = {activities} onSelect = {setSelected} />

      <AnimatePresence>
        {selected && (
          <PhotoModal item = {selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
