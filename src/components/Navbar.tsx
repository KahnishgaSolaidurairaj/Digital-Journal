import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const linkStyle = (path: string) => `block transition ${
      pathname === path ? "text-black font-medium" : "text-gray-500 hover:text-black"
    }`;

  return (
    <nav className = "px-6 py-5 max-w-6xl mx-auto">
      <div className = "flex justify-between items-center">
        <Link to = "/" className = "text-lg font-medium"> Winter 2025 </Link>

        <div className = "hidden md:flex space-x-6 text-sm">
          <Link to = "/" className = {linkStyle("/")}> Home </Link>
          <Link to = "/food" className = {linkStyle("/food")}> Food </Link>
          <Link to = "/movies" className = {linkStyle("/movies")}> Movies </Link>
          <Link to = "/places" className = {linkStyle("/places")}> Places </Link>
          <Link to = "/reflection" className = {linkStyle("/reflection")}> Reflection </Link>
        </div>

        <button onClick={() => setOpen(!open)}
          className = "md:hidden text-gray-700 focus:outline-none"
          aria-label = "Toggle menu"
        >
          <span className = "text-xl"> {open ? "x" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-6 space-y-4 text-sm">
          <Link to="/" onClick={() => setOpen(false)} className={linkStyle("/")}>Home</Link>
          <Link to="/food" onClick={() => setOpen(false)} className={linkStyle("/food")}>Food</Link>
          <Link to="/movies" onClick={() => setOpen(false)} className={linkStyle("/movies")}>Movies</Link>
          <Link to="/places" onClick={() => setOpen(false)} className={linkStyle("/places")}>Places</Link>
          <Link to="/reflection" onClick={() => setOpen(false)} className={linkStyle("/reflection")}>Reflection</Link>
        </div>
      )}
    </nav>
  );
}
