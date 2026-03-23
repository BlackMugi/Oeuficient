import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import poussinoeuf from "../assets/img/poussin-oeuf.png";
import Logo from "../assets/img/logo.png"; // ton logo

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen flex items-center justify-center bg-[#F7F7F5]">
      {/* Conteneur principal avec shadow */}
      <div className="flex shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-xl overflow-hidden w-[90vw] max-w-[900px]">

        {/* Partie formulaire */}
        <div className="bg-white flex flex-col p-6 sm:p-8 w-[50%] min-w-[280px] rounded-tl-xl rounded-bl-xl">
          
          {/* Logo en haut à gauche */}
          <div className="flex items-center mb-6">
            <img src={Logo} alt="Logo Oeuficient" className="h-10" />
          </div>

          {/* Textes d'accueil */}
          <h1 className="text-2xl sm:text-3xl font-semibold font-['Barlow_Condensed'] mb-2">Bienvenue !</h1>
          <p className="text-sm sm:text-base text-[#999999] mb-6">
            Connectez-vous pour accéder à votre espace de travail
          </p>

          {/* Champ Email */}
          <label className="flex flex-col mb-4">
            <span className="flex items-center gap-2 text-[#666666] text-sm">
              <Mail size={16} /> Email
            </span>
            <input 
              type="email" 
              placeholder="exemple@oeuficient.sn" 
              className="mt-1 px-3 py-2 border border-[#AEAEAE] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </label>

          {/* Champ Mot de passe */}
          <label className="flex flex-col mb-4">
            <span className="flex items-center gap-2 text-[#666666] text-sm">
              <Lock size={16} /> Mot de passe
            </span>
            <div className="mt-1 relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="********" 
                className="w-full px-3 py-2 border border-[#AEAEAE] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button 
                type="button" 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#999999]"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </label>

          {/* Remember me + Forgot password */}
          <div className="flex justify-between items-center mb-6 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 border border-[#AEAEAE]" />
              Se souvenir de moi
            </label>
            <span className="text-[#E7A519] font-semibold cursor-pointer">Mot de passe oublié ?</span>
          </div>

          {/* Bouton de connexion */}
          <button className="w-full bg-[#E7A519] text-white py-2 rounded-lg hover:bg-[#d49416] transition">
            Se connecter
          </button>
        </div>

        {/* Partie image */}
        <div className="relative w-[50%] min-w-[200px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,207,104,0.77)_0%,rgba(245,181,45,0.885)_74.99%,#E7A519_99.99%)] flex items-center justify-center rounded-tr-xl rounded-br-xl overflow-hidden">
          <img src={poussinoeuf} alt="poussin" className="max-w-full max-h-full object-contain" />
        </div>

      </div>
    </div>
  );
};

export default LoginPage;