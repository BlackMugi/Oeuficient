import { Link } from "react-router-dom";

const PRIMARY = "#E7A519"; 
const BEIGE = "#EEECE0";

export default function Navbar() {
  return (
    <header 
      className="w-full h-[83px] px-8 flex items-center justify-between" 
      style={{ backgroundColor: BEIGE }}
    >
      {/* PARTIE GAUCHE : Logo + Liens */}
      <div className="flex items-center gap-12">
        {/* Logo */}
        <Link to="/" className="flex items-center">
           <span className="text-2xl font-bold" style={{ color: PRIMARY }}>🐣 euficien</span>
        </Link>

        {/* Liens de Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className="text-[22px] font-normal"
            style={{ color: PRIMARY, fontFamily: "'Roboto Condensed', sans-serif" }}
          >
            Accueil
          </Link>

          <Link 
            to="/dashboard" 
            className="text-[22px] font-[900]" 
            style={{ color: PRIMARY, fontFamily: "'Roboto Condensed', sans-serif" }}
          > 
            Tableau de travail 
          </Link>
        </nav>
      </div>

      {/* PARTIE DROITE : Avatar / Menu */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="relative w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#D9D9D9]">
          <span className="text-[16px] text-black font-sans">U</span>
        </div>
        <span className="text-black transform rotate-90 text-[16px] inline-block">
          {">"}
        </span>
      </div>
    </header>
  );
}
