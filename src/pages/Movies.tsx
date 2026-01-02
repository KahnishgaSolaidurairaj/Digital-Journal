import { useState } from "react";
import { movies } from "../data/movies";
import SectionHeader from "../components/SectionHeader";
import PhotoGrid from "../components/PhotoGrid";
import type { PhotoItem } from "../components/PhotoGrid";
import PhotoModal from "../components/PhotoModal";
import { AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";

export default function Movies() {
  const [selected, setSelected] = useState<PhotoItem | null>(null);

  return (
    <div className = "page">
      <SectionHeader
        title = "Movies"
        subtitle = "Movies, shows, youtube, and anything intresting I watched"
      />

      <PhotoGrid items = {movies} onSelect = {setSelected} />

      <AnimatePresence>
        {selected && (
          <PhotoModal item = {selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
}
