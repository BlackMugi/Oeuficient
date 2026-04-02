import { Calendar, CheckCircle2 } from 'lucide-react';

interface Props {
  espece: string;
  qte: number;
  lot: string;
  arr: string;
  age: string;
  inc: string;
  img: string;
  iconClock: string;
  T: string;
  L: string;
  estSelectionne: boolean;
  onSelect: () => void;
}

export const CarteLot = ({
  espece,
  qte,
  lot,
  arr,
  age,
  inc,
  img,
  iconClock,
  T,
  L,
  estSelectionne,
  onSelect,
}: Props) => (
  <div
    className="absolute"
    style={{
      width: '339px',
      height: '242px',
      top: T,
      left: L,
      fontFamily: 'Barlow Condensed',
    }}
  >
    {/* Rectangle 51 : Fond beige */}
    <div
      className={`absolute inset-0 rounded-[15px] border transition-all ${estSelectionne ? 'border-[#E7A519] ring-2 ring-[#E7A519]/20 shadow-xl' : 'border-gray-400/50'}`}
      style={{ width: '336px', height: '240px', backgroundColor: '#EEECE0' }}
    />

    {/* Rectangle 52 : Header Gris */}
    <div
      className="absolute bg-[#D9D9D9] rounded-t-[14px]"
      style={{ width: '334px', height: '52px', left: '2px', top: '1px' }}
    >
      <div
        className="absolute bg-[#28A745] rounded-full flex items-center justify-center px-2"
        style={{ width: '85px', height: '18px', left: '18px', top: '17px' }}
      >
        <span className="text-white font-bold text-[10px] uppercase flex items-center gap-1">
          <CheckCircle2 size={10} /> Disponible
        </span>
      </div>
      <span
        className="absolute text-[#666] text-[14px] font-bold text-right"
        style={{ width: '100px', right: '20px', top: '17px' }}
      >
        {lot}
      </span>
    </div>

    {/* Ellipse 14 : Image Animal (40x40px) */}
    <img
      src={img}
      alt=""
      className="absolute rounded-full bg-white object-cover shadow-inner"
      style={{ width: '40px', height: '40px', left: '18px', top: '72px' }}
    />

    <div
      className="absolute font-semibold text-[16px] text-[#333] uppercase"
      style={{ left: '62px', top: '71px' }}
    >
      {espece} - {qte} Œufs
    </div>

    {/* Icônes techniques (Respect 20x20px) */}
    <div
      className="absolute flex items-center gap-1.5"
      style={{ left: '18px', top: '123px' }}
    >
      <Calendar size={16} className="text-[#E7A519]" />{' '}
      <span className="text-[#999] text-[13px]">Arrivée : {arr}</span>
    </div>
    <div
      className="absolute flex items-center gap-1.5"
      style={{ left: '245px', top: '123px' }}
    >
      <img src={iconClock} alt="" style={{ width: '20px', height: '20px' }} />{' '}
      <span className="text-[#999] text-[13px]">{age}</span>
    </div>

    {/* Badges Bas */}
    <div
      className="absolute bg-[#D9D9D9] rounded-full flex items-center justify-center text-[10px] text-[#666] font-bold uppercase"
      style={{ width: '90px', height: '20px', left: '18px', top: '155px' }}
    >
      {espece}
    </div>
    <div
      className="absolute bg-[#D9D9D9] rounded-full flex items-center justify-center text-[10px] text-[#666] font-bold uppercase"
      style={{ width: '110px', height: '20px', left: '210px', top: '155px' }}
    >
      Incubation: {inc}
    </div>

    {/* Bouton sélection orange */}
    <button
      onClick={onSelect}
      className={`absolute rounded-[10px] font-bold text-[14px] text-white uppercase transition-all shadow-sm ${estSelectionne ? 'bg-[#28A745]' : 'bg-[#E7A519] hover:brightness-110'}`}
      style={{ width: '293px', height: '32px', left: '21px', top: '198px' }}
    >
      SÉLECTIONNER CE LOT
    </button>
  </div>
);
