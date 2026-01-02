import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkStyle = (path: string) => `transition ${
      pathname === path ? "text-black" : "text-gray-500 hover:text-black"
    }`;

  return (
    <nav className = "px-6 py-5 flex justify-between items-center max-w-6xl mx-auto">
      <Link to = "/" className = "text-lg font-medium"> Winter 2025 </Link>

      <div className = "space-x-6 text-sm">
        <Link to = "/" className = {linkStyle("/")}> Home </Link>
        <Link to = "/food" className = {linkStyle("/food")}> Food </Link>
        <Link to = "/movies" className = {linkStyle("/movies")}> Movies </Link>
        <Link to = "/places" className = {linkStyle("/places")}> Places </Link>
        <Link to = "/reflection" className = {linkStyle("/reflection")}> Reflection </Link>
      </div>
    </nav>
  );
}
