import React from 'react';
import { Calendar, Clock } from 'lucide-react';

interface LotCardProps {
  left: number;
  top: number;
  title: string;
  id: string;
  supplier: string;
  arrival: string;
  age: string;
  incubation: string;
  image: string;
}

const LotCard: React.FC<LotCardProps> = ({ left, top, title, id, supplier, arrival, age, incubation, image }) => {
  return (
    <div className="absolute" style={{ width: '339px', height: '242px', left: `${left}px`, top: `${top}px` }}>
      {/* Rectangle 51 (Main Card) */}
      <div className="absolute w-[336px] h-[240px] left-[1px] top-0 bg-[#EEECE0] border border-[rgba(144,144,144,0.5)] rounded-[15px] box-border" />
      
      {/* Rectangle 52 (Header Card) */}
      <div className="absolute w-[334px] h-[52px] left-[2px] top-[1px] bg-[#D9D9D9] rounded-t-[14px]" />
      
      {/* #LOT ID */}
      <span className="absolute w-[52px] h-[12px] left-[274px] top-[19px] font-['Barlow_Condensed'] text-[14px] text-[#666666]">#{id}</span>

      {/* Rectangle 53 & Disponible */}
      <div className="absolute w-[71px] h-[15px] left-[18px] top-[19px] bg-[#28A745] rounded-[50px] flex items-center justify-center">
        <span className="font-['Barlow_Condensed'] font-semibold text-[11px] text-white">Disponible</span>
      </div>

      {/* Ellipse 14 (Icon) */}
      <div className="absolute w-10 h-10 left-[18px] top-[72px] rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm overflow-hidden">
        <span className="text-xl">{image}</span>
      </div>

      {/* Text Info */}
      <div className="absolute left-[62px] top-[71px] font-['Barlow_Condensed']">
        <h3 className="text-[16px] font-semibold text-[#333333] leading-[19px]">{title}</h3>
        <p className="text-[13px] text-[#999999]">Fournisseur: {supplier}</p>
      </div>

      {/* Icons & Dates */}
      <div className="absolute left-[18px] top-[123px] flex items-center gap-1.5 text-[#999999]">
        <Calendar size={16} />
        <span className="font-['Barlow_Condensed'] text-[14px]">Arrivée : {arrival}</span>
      </div>
      <div className="absolute left-[245px] top-[123px] flex items-center gap-1.5 text-[#999999]">
        <Clock size={16} />
        <span className="font-['Barlow_Condensed'] text-[14px]">Âge: {age}</span>
      </div>

      {/* Badges Info (Rectangle 54 & 55) */}
      <div className="absolute w-[90px] h-[20px] left-[18px] top-[155px] bg-[#D9D9D9] rounded-[50px] flex items-center justify-center">
        <span className="font-['Barlow_Condensed'] text-[11px] text-[#666666]">Espece: Poule</span>
      </div>
      <div className="absolute w-[90px] h-[20px] left-[236px] top-[155px] bg-[#D9D9D9] rounded-[50px] flex items-center justify-center">
        <span className="font-['Barlow_Condensed'] text-[11px] text-[#666666]">Incub: {incubation}</span>
      </div>

      {/* Divider & Button (Rectangle 56 & 57) */}
      <div className="absolute w-[334px] h-[1px] left-[2px] top-[182px] bg-[rgba(144,144,144,0.5)]" />
      <button className="absolute w-[293px] h-[28px] left-[21px] top-[199px] bg-[#E7A519] rounded-[10px] flex items-center justify-center hover:bg-[#d89812] transition-colors">
        <span className="font-['Barlow_Condensed'] font-semibold text-[16px] text-white">Selectionner ce lot</span>
      </button>
    </div>
  );
};
