{
  /*importation des images pour que ça correspond à la maquette*/
}
import { CarteLot } from '../components/CarteLot';
import basketImg from '../assets/img/basket.png';
import clockImg from '../assets/img/clock.png';
import pouleImg from '../assets/img/poule.png';
import oieImg from '../assets/img/oie.png';
import dindeImg from '../assets/img/dinde.png';
import cailleImg from '../assets/img/caille.png';

interface SelectionProps {
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}

export const SelectionLotPage = ({ selectedId, onSelect }: SelectionProps) => {
  const lots = [
    {
      id: '1',
      espece: 'Poule',
      qte: 3600,
      lot: '#LOT-4581',
      arr: '14/02/2026',
      age: '3 jours',
      inc: '21j',
      img: pouleImg,
      L: '54px',
      T: '366px',
    },
    {
      id: '2',
      espece: 'Oie',
      qte: 1800,
      lot: '#LOT-4582',
      arr: '15/02/2026',
      age: '2 jours',
      inc: '321j',
      img: oieImg,
      L: '403px',
      T: '366px',
    },
    {
      id: '3',
      espece: 'Dinde',
      qte: 2160,
      lot: '#LOT-4583',
      arr: '16/02/2026',
      age: '1 jour',
      inc: '28j',
      img: dindeImg,
      L: '752px',
      T: '366px',
    },
    {
      id: '4',
      espece: 'Caille',
      qte: 1080,
      lot: '#LOT-4587',
      arr: '14/02/2026',
      age: '3 jours',
      inc: '17j',
      img: cailleImg,
      L: '54px',
      T: '625px',
    },
  ];

  return (
    <>
      {/* Titre : top: 298px */}
      <div
        className="absolute flex items-center gap-3"
        style={{ left: '111px', top: '298px' }}
      >
        <img src={basketImg} alt="" style={{ width: '24px', height: '24px' }} />
        <h2 className="text-[20px] font-bold uppercase text-[#333] font-['Barlow_Condensed']">
          Sélectionner un lot d'œufs
        </h2>
      </div>

      {lots.map((l) => (
        <CarteLot
          key={l.id}
          {...l}
          iconClock={clockImg}
          estSelectionne={selectedId === l.id}
          onSelect={() => onSelect(l.id)}
        />
      ))}
    </>
  );
};
