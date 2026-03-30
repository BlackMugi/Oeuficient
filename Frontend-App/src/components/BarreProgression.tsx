import { IndicateurEtape } from './IndicateurEtape'

export const BarreProgression = ({
  etapeActuelle,
}: {
  etapeActuelle: number
}) => {
  const ETP = [
    'Sélection du lot',
    'Choix du couvoir',
    'Configuration chariots',
    'Validation',
  ]

  // Calcul : Si etapeActuelle = 1, on veut 33.3% de orange (du 1 au 2)
  const progressionOrange = (etapeActuelle / (ETP.length - 1)) * 100

  return (
    <div className="relative flex justify-between items-start w-[850px] mx-auto py-4">
      {/* 1. LIGNE DE FOND GRISE (#999999) : S'arrête au cercle 4 */}
      <div className="absolute top-[39px] left-[25px] right-[25px] h-[1px] bg-[#999999] z-0" />

      {/* 2. LIGNE ORANGE DYNAMIQUE (#E7A519) : Relie le 1 au 2 dès le départ */}
      <div
        className="absolute top-[39px] left-[25px] h-[1px] bg-[#E7A519] z-0 transition-all duration-700"
        style={{ width: `calc(${progressionOrange}% - 25px)` }}
      />

      {/* 3. LES CERCLES INDICATEURS */}
      {ETP.map((nom, i) => (
        <IndicateurEtape
          key={i}
          numero={i + 1}
          label={nom}
          estActif={i + 1 <= etapeActuelle}
        />
      ))}
    </div>
  )
}
