import { Link } from "react-router-dom";

const PRIMARY = "#F5B52D";
const BEIGE = "#EEECE0";

export default function Navbar() {
  return (
    <header
      className="px-8 py-4 flex justify-between items-center"
      style={{ backgroundColor: BEIGE }}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 font-bold text-lg" style={{ color: PRIMARY }}>
        🐣 euficien
      </div>

      {/* Menu */}
      <nav className="flex gap-8 font-medium" style={{ color: PRIMARY }}>
        <Link to="/" className="hover:underline">
          Accueil
        </Link>

        <Link to="/login" className="hover:underline">
          Accéder à mon espace
        </Link>
      </nav>

      {/* Avatar */}
      <div className="bg-gray-300 w-8 h-8 rounded-full flex items-center justify-center text-sm">
        U
      </div>
    </header>
  );
}