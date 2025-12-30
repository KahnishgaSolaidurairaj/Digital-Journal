import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Food from "./pages/Food";
import Places from "./pages/Places";
import Movies from "./pages/Movies";
import Activities from "./pages/Activities";
import Reflection from "./pages/Reflection";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/food" element={<Food />} />
        <Route path="/places" element={<Places />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/reflection" element={<Reflection />} />
      </Routes>
    </div>
  );
}
