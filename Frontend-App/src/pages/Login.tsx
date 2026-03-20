import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'; // Utilisation de Lucide pour les icônes
import poussinoeuf from "../assets/img/poussin-oeuf.png";
const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative bg-[#F7F7F5] overflow-hidden mx-auto shadow-2xl" 
         style={{ width: '1440px', height: '1024px' }}>
      
      {/* Ombre portée du conteneur principal (Rectangle 16) */}
      <div className="absolute left-[272px] top-[193px] bg-[#D9D9D9] rounded-[20px] shadow-[4px_4px_4px_rgba(0,0,0,0.25)]"
           style={{ width: '896px', height: '450px' }} />

      {/* --- SECTION FORMULAIRE (Gauché) --- */}
      <div className="absolute left-[272px] top-[193px] bg-white rounded-l-[20px]" 
           style={{ width: '448px', height: '450px' }}>
        
        {/* Logo */}
        <div className="absolute left-[20px] top-[14px] flex items-center gap-1">
            <span className="text-[24px] font-black text-[#E7A519] italic font-['Barlow_Condensed']">Oeuficien</span>
        </div>

        {/* Textes d'accueil */}
        <h1 className="absolute left-[35px] top-[67px] font-['Barlow_Condensed'] font-semibold text-[32px] text-black">
          Bienvenue !
        </h1>
        <p className="absolute left-[35px] top-[105px] font-['Barlow_Condensed'] font-normal text-[18px] text-[#999999]">
          Connectez-vous pour accéder à votre espace de travail
        </p>

        {/* Champ Email */}
        <div className="absolute left-[41px] top-[164px] flex items-center gap-2">
            <Mail size={16} className="text-[#666666]" />
            <span className="font-['Barlow_Condensed'] text-[16px] text-[#666666]">Email</span>
        </div>
        <div className="absolute left-[37px] top-[186px] border border-[rgba(174,174,174,0.6)] rounded-[10px] bg-white px-[35px] flex items-center" 
             style={{ width: '380px', height: '40px' }}>
            <span className="font-['Barlow_Condensed'] text-[#999999] text-[16px]">exemple@oeuficient.sn</span>
        </div>

        {/* Champ Mot de passe */}
        <div className="absolute left-[40px] top-[252px] flex items-center gap-2">
            <Lock size={16} className="text-[#666666]" />
            <span className="font-['Barlow_Condensed'] text-[16px] text-[#666666]">Mot de passe</span>
        </div>
        <div className="absolute left-[36px] top-[275px] border border-[rgba(174,174,174,0.6)] rounded-[10px] bg-white px-[36px] flex items-center justify-between" 
             style={{ width: '380px', height: '40px' }}>
            <span className="font-['Barlow_Condensed'] text-[#999999] text-[16px]">****************</span>
            <button onClick={() => setShowPassword(!showPassword)} className="absolute right-4 text-[#999999]">
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="absolute left-[44px] top-[341px] flex items-center justify-between" style={{ width: '376px' }}>
            <div className="flex items-center gap-2">
                <div className="w-[15px] h-[15px] border border-[#AEAEAE] bg-white" />
                <span className="font-['Barlow_Condensed'] text-[16px] text-[#666666]">Se souvenir de moi</span>
            </div>
            <span className="font-['Barlow_Condensed'] font-semibold text-[16px] text-[#E7A519] cursor-pointer">
                Mot de passe oublié ?
            </span>
        </div>

        {/* Bouton de connexion */}
        <button className="absolute left-[40px] top-[385px] bg-[#E7A519] rounded-[10px] flex items-center justify-center transition-hover hover:bg-[#d49416]" 
                style={{ width: '380px', height: '40px' }}>
            <span className="font-['Barlow_Condensed'] font-semibold text-[16px] text-white">Se connecter</span>
        </button>
      </div>

      {/* --- SECTION IMAGE HERO (Droite) --- */}
      <div className="absolute left-[720px] top-[193px] rounded-r-[20px] overflow-hidden" 
           style={{ 
             width: '448px', 
             height: '450px',
             background: 'radial-gradient(50% 50% at 50% 50%, rgba(255, 207, 104, 0.77) 0%, rgba(245, 181, 45, 0.885) 74.99%, #E7A519 99.99%)'
           }}>
        {/* Ici l'image du poussin avec l'oeuf */}
        <img 
          src={poussinoeuf}
              alt="poussin"
          className="w-full h-full object-contain"
          style={{ transform: 'scale(0.9)' }} 
        />
      </div>

    </div>
  );
};

export default LoginPage;
