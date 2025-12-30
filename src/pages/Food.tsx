import { useState } from "react";
import { food } from "../data/food";
import SectionHeader from "../components/SectionHeader";
import PhotoGrid from "../components/PhotoGrid";
import type { PhotoItem } from "../components/PhotoGrid";
import PhotoModal from "../components/PhotoModal";
import { AnimatePresence } from "framer-motion";

export default function Places() {
  const [selected, setSelected] = useState<PhotoItem | null>(null);

  return (
    <div className = "page">
      <SectionHeader
        title = "Food"
        subtitle = "Cozy meals, cafes, and sweet treats"
      />

      <PhotoGrid items = {food} onSelect = {setSelected} />

      <AnimatePresence>
        {selected && (
          <PhotoModal item = {selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </div>
  );
}
