import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import poussinoeuf from '../assets/img/poussin-oeuf.png';
import Logo from '../assets/img/logo.png';
import { login } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const data = await login(email, password);

      if (data.role === 'ADMIN') navigate('/admin');
      else navigate('/');
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError('Une erreur inconnue est survenue');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#F7F7F5]">
      {/* ... le reste du design inchangé ... */}
      <div className="flex shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-xl overflow-hidden w-[90vw] max-w-[900px]">
        <div className="bg-white flex flex-col p-6 sm:p-8 w-[50%] min-w-[280px] rounded-tl-xl rounded-bl-xl">
          <div className="flex items-center mb-6">
            <img src={Logo} alt="Logo Oeuficient" className="h-10" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold font-['Barlow_Condensed'] mb-2">
            Bienvenue !
          </h1>
          <p className="text-sm sm:text-base text-[#999999] mb-6">
            Connectez-vous pour accéder à votre espace de travail
          </p>

          <form onSubmit={onSubmit}>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <label className="flex flex-col mb-4">
              <span className="flex items-center gap-2 text-[#666666] text-sm">
                <Mail size={16} /> Email
              </span>
              <input
                type="email"
                placeholder="exemple@oeuficient.sn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 px-3 py-2 border border-[#AEAEAE] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </label>

            <label className="flex flex-col mb-4">
              <span className="flex items-center gap-2 text-[#666666] text-sm">
                <Lock size={16} /> Mot de passe
              </span>
              <div className="mt-1 relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-[#AEAEAE] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  required
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

            <div className="flex justify-between items-center mb-6 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 border border-[#AEAEAE]" />
                Se souvenir de moi
              </label>
              <span className="text-[#E7A519] font-semibold cursor-pointer">Mot de passe oublié ?</span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#E7A519] text-white py-2 rounded-lg hover:bg-[#d49416] transition disabled:opacity-50"
            >
              {loading ? 'Connexion...' : 'Se connecter'}
            </button>
          </form>
        </div>

        <div className="relative w-[50%] min-w-[200px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,207,104,0.77)_0%,rgba(245,181,45,0.885)_74.99%,#E7A519_99.99%)] flex items-center justify-center rounded-tr-xl rounded-br-xl overflow-hidden">
          <img src={poussinoeuf} alt="poussin" className="max-w-full max-h-full object-contain" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;