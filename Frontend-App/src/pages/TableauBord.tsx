import { useState } from 'react';
import { BarreProgression } from '../components/BarreProgression';
import { SelectionLotPage } from './SelectionLotPage';

export const TableauBord = () => {
  const [etape, setEtape] = useState(1);
  const [selectedLot, setSelectedLot] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-300 flex justify-center items-center py-10 font-['Barlow_Condensed']">
      <div className="relative w-[1123px] h-[1000px] bg-[#EEECE0] rounded-[10px] shadow-2xl overflow-hidden">
        {/* Header Orange */}
        <div className="absolute top-0 left-0 w-full h-[120px] bg-[#E7A519] flex items-center px-10 gap-6 text-white z-20">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl font-bold">
            🥚
          </div>
          <h1 className="text-3xl font-black uppercase">
            Démarrer une incubation
          </h1>
        </div>

        {/* Barre de progression grise */}
        <div className="absolute top-[120px] left-0 w-full h-[125px] bg-[#D9D9D9] flex items-center justify-center z-20">
          <BarreProgression etapeActuelle={etape} />
        </div>

        {/* Zone de contenu dynamique */}
        <div className="absolute inset-0 z-10">
          {etape === 1 && (
            <SelectionLotPage
              selectedId={selectedLot}
              onSelect={setSelectedLot}
            />
          )}
        </div>

        {/* Étape 1/4 (Position maquette) */}
        <div className="absolute w-full text-center" style={{ top: '938px' }}>
          <span className="text-[#999] font-medium text-[15px]">
            Étape {etape} / 4
          </span>
        </div>

        {/* Rectangle 58 : BOUTON SUIVANT ORANGE */}
        <button
          onClick={() =>
            etape < 4 && selectedLot && setEtape((prev) => prev + 1)
          }
          style={{
            width: '200px',
            height: '50px',
            left: '888px',
            top: '915px',
            backgroundColor: '#E7A519',
            borderRadius: '15px',
          }}
          className="absolute text-white font-black text-xl flex items-center justify-center gap-2 shadow-lg transition-all hover:scale-105 active:scale-95 uppercase"
        >
          SUIVANT <span>→</span>
        </button>
      </div>
    </div>
  );
};
