interface Props {
  numero: number;
  label: string;
  estActif: boolean;
}

export const IndicateurEtape = ({ numero, label, estActif }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2 z-10">
      {/* Cercle : 45px | Actif: Orange/Blanc | Inactif: Blanc/Noir */}
      <div 
        className={`
          w-[45px] h-[45px] rounded-full border flex items-center justify-center
          font-['Roboto_Condensed'] font-[900] text-xl transition-all duration-300
          ${estActif 
            ? 'bg-[#E7A519] border-[#E7A519] text-[#FFFFFF] shadow-md' 
            : 'bg-white border-gray-300 text-[#000000]'
          }
        `}
      >
        {numero}
      </div>

      {/* Label sous le cercle */}
      <span 
        className={`
          font-['Barlow_Condensed'] text-[10px] font-bold uppercase tracking-tighter
          text-center w-24 transition-colors duration-300
          ${estActif ? 'text-[#E7A519]' : 'text-gray-500'}
        `}
      >
        {label}
      </span>
    </div>
  );
};
