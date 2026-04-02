import Navbar from '../../components/layout/Navbar';
export default function Tableaudetravail1() {
  return (
    <div className="min-h-screen bg-white p-8">
      <Navbar />
      <div className="max-w-[1280px] mx-auto mt-16 px-6 py-3 ">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between mb-12">
          {/* Partie gauche */}
          <div className="mb-6 lg:mb-0">
            <h1 className="text-3xl font-black text-[#E7A519]">
              Mon tableau de travail
            </h1>
            <p className="text-gray-900 text-base mt-6 font-medium">
              Suivi de vos activités quotidiennes chez Oeuficien.
            </p>
          </div>
          {/* Partie droite */}
          <div className="flex items-center gap-4">
            <h2 className="text-3xl font-black text-[#E7A519]">
              Section Couvoir
            </h2>
            <img
              src="/incubation.png" //  image de section du COUVOIR
              // ici
              alt="Incubation"
              className="w-32 h-auto"
            />
          </div>
        </div>
        {/* FIN HEADER */}

        {/* 3 CARTES STATISTIQUES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-[#EDEDED] h-32 rounded-lg shadow-[4px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center"></div>
          <div className="bg-[#EDEDED] h-32 rounded-lg shadow-[4px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center"></div>
          <div className="bg-[#EDEDED] h-32 rounded-lg shadow-[4px_4px_4px_rgba(0,0,0,0.25)] flex items-center justify-center"></div>
        </div>
        {/* FIN CARTES */}

        {/* GRAND CONTENEUR TABLEAUX */}
        <div className="bg-[#EDEDED] rounded-2xl shadow-lg p-10 space-y-24">
          {/* ACTIVITÉ DU JOUR */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 relative inline-block">
              Activité du jour
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#E7A519] rounded"></span>
            </h3>

            <div className="overflow-x-auto bg-[#EDEDED] rounded-lg shadow-[4px_4px_4px_rgba(0,0,0,0.25)]">
              <table className="min-w-full text-left">
                <thead className="font-['Barlow_Condensed']">
                  <tr className="bg-[#CCCCCC]">
                    <th className="px-6 py-4 text-left text-xl font-bold text-black ">
                      Lot
                    </th>
                    <th className="px-6 py-4 text-left text-xl font-bold text-black ">
                      Espèce
                    </th>
                    <th className="px-6 py-4 text-left text-xl font-bold text-black ">
                      Date de transfert
                    </th>
                    <th className="px-6 py-4 text-left text-xl font-bold text-black ">
                      Date de début
                    </th>
                    <th className="px-6 py-4 text-left text-xl font-bold text-black ">
                      Fin éclosion
                    </th>
                    <th className="px-6 py-4 text-left text-xl font-bold text-black ">
                      Statut
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-10 text-gray-400"
                    ></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* FIN ACTIVITÉ DU JOUR */}

          {/* ACTIVITÉ DE LA SEMAINE */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 relative inline-block">
              Activité de la semaine
              <span className="absolute left-0 -bottom-2 w-full h-1 bg-[#D9534F] rounded"></span>
            </h3>

            <div className="overflow-x-auto bg-[#EDEDED]  rounded-lg shadow-inner">
              <table className="min-w-full text-left">
                <thead className="font-['Barlow_Condensed']">
                  <tr className="border-b-2 bg-[#CCCCCC]">
                    <th className="px-6 py-4 text-left text-xl font-semibold text-black ">
                      Lot
                    </th>
                    <th className="px-6 py-4 text-left text-xl font-bold text-black ">
                      Espèce
                    </th>
                    <th className="px-6 py-4 text-left text-xl font-bold text-black ">
                      Date de transfert
                    </th>
                    <th className="px-6 py-4 text-left text-xl font-bold text-black ">
                      Date de début
                    </th>
                    <th className="px-6 py-4 text-left text-xl font-bold text-black ">
                      Fin éclosion
                    </th>
                    <th className="px-6 py-4 text-left text-xl font-bold text-black ">
                      Statut
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan={6}
                      className="text-center py-10 text-gray-400"
                    ></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
