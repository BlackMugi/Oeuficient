// src/pages/Login.tsx
import React, { useState, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import poussinoeuf from "../assets/img/poussin-oeuf.png";

export default function Login(): JSX.Element {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // mot de pass  peut etre modifier
    if (email === "admin@euficien.sn" && password === "1234") {
      localStorage.setItem("auth", "true"); // sauvegarde la connexion
      navigate("/"); // redirige vers la page principale
    } else {
      alert("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#EEECE0] p-6">
      {/* Carte principale */}
      <div className="bg-white rounded-2xl shadow-lg flex w-full max-w-5xl overflow-hidden">
        {/* Partie gauche : formulaire */}
        <div className="flex-1 p-10">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🐣</span>
            <span className="font-bold text-[#FFBA28] text-lg">euficien</span>
          </div>

          {/* Texte bienvenue */}
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Bienvenue !</h2>
          <p className="text-gray-500 mb-6">
            Connectez-vous pour accéder à votre espace de travail
          </p>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="text-sm text-gray-600">Email</label>
              <input
                type="email"
                placeholder="exemple@euficient.sn"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                className="w-full mt-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFBA28]"
                required
              />
            </div>

            {/* Mot de passe */}
            <div>
              <label className="text-sm text-gray-600">Mot de passe</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="****************"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                  className="w-full mt-1 border rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#FFBA28]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 text-sm"
                  aria-label={
                    showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"
                  }
                >
                  👁
                </button>
              </div>
            </div>

            {/* Se souvenir + Mot de passe oublié */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
                Se souvenir de moi
              </label>

              <span className="text-[#FFBA28] cursor-pointer hover:underline">
                Mot de passe oublié ?
              </span>
            </div>

            {/* Bouton se connecter */}
            <button
              type="submit"
              className="w-full bg-[#FFBA28] hover:bg-[#FFBA00] text-white py-2 rounded-lg font-semibold transition"
            >
              Se connecter
            </button>
          </form>
        </div>

        {/* Partie droite : image avec bordure en dégradé radial */}
          <div
            className="
              w-[461px] h-[466px]
              rounded-xl shadow-lg overflow-hidden
              border-4 border-transparent
              bg-[radial-gradient(ellipse_at_center,_#FFCF68_77%,_#F5B52D_88%,_#E7A519_100%)]
              bg-origin-border
              [background-clip:padding-box,_border-box]
              flex items-center justify-center
            "
          >
            <img
              src={poussinoeuf}
              alt="poussin"
              className="w-full h-full object-cover rounded-xl"
            />
        </div>
      </div>
    </div>
  );
}