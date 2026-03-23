import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/img/logo.png";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navbar">
      <div className="max-w-[1120px] mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo + navigation desktop */}
        <div className="flex items-center gap-8">
          <Link to="/">
            <img src={Logo} alt="logo" className="max-h-10" />
          </Link>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center text-lg gap-6 text-primary">
            <NavLink to="/" className={({isActive}) => isActive ? "font-bold" : ""}>
              Accueil
            </NavLink>

            <NavLink to="/tableau1" className={({isActive}) => isActive ? "font-bold" : ""}>
              Tableau de travail
            </NavLink>
          </nav>
        </div>

        {/* Partie droite */}
        <div className="flex items-center gap-4">

          {/* bouton hamburger mobile */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={24}/> : <Menu size={24}/>}
          </button>

          {/* utilisateur */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-avatar flex items-center justify-center">
                U
              </div>

              <ChevronDown className="w-4 h-4"/>
            </button>

            {open && (
              <div className="absolute right-0 mt-3 w-40 bg-white shadow-lg rounded-lg overflow-hidden">

                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">
                  Profil
                </Link>

                <Link to="/section" className="block px-4 py-2 hover:bg-gray-100">
                  Ma section
                </Link>

                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500">
                  Déconnexion
                </button>

              </div>
            )}
          </div>
        </div>
      </div>

      {/* MENU MOBILE */}
      {mobileMenu && (
        <div className="md:hidden bg-navbar border-t">

          <nav className="flex flex-col px-6 py-4 text-primary gap-3">

            <NavLink to="/" className={({isActive}) => isActive ? "font-bold" : ""}>
              Accueil
            </NavLink>

            <NavLink to="/dashboard" className={({isActive}) => isActive ? "font-bold" : ""}>
              Tableau de travail
            </NavLink>

            <div className="border-t my-2"></div>

            <Link to="/profile">Profil</Link>
            <Link to="/section">Ma section</Link>

            <button className="text-red-500 text-left">
              Déconnexion
            </button>

          </nav>

        </div>
      )}
    </header>
  );
}