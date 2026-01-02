import { useState } from "react";
import { places } from "../data/places";
import SectionHeader from "../components/SectionHeader";
import PhotoGrid from "../components/PhotoGrid";
import type { PhotoItem } from "../components/PhotoGrid";
import PhotoModal from "../components/PhotoModal";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/Footer"

export default function Places() {
  const [selected, setSelected] = useState<PhotoItem | null>(null);

  return (
    <div className = "page">
      <SectionHeader
        title = "Places"
        subtitle = "Cities, streets, and quiet corners from winter break."
      />

      <PhotoGrid items = {places} onSelect = {setSelected} />

      <AnimatePresence>
        {selected && (
          <PhotoModal item = {selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
