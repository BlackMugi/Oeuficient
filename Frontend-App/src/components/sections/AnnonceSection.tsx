import { annonceCArds } from '../../data/sections/annonceData'

const PRIMARY = '#F5B52D' //100%
const PRIMARY_DARK = '#E7A519' //100%

export default function AnnonceSection() {
  return (
    <section className="px-10 py-16 text-center bg-gray-300">
      <div className="max-w-[1280px] mx-auto px-6 py-3">
        <h2 className="flex items-center justify-center mb-8 gap-4 uppercase text-primary text-4xl  font-bold">
          📢Annonces internes
        </h2>

        <p className="text-lg font-semibold -500 mt-2">
          Informations importantes concernant le personnel et l'entreprise
          Oeuficien
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {annonceCArds.map((item) => (
            <div
              key={item.id}
              className="px-4 py-6 bg-[#C7C7C7] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-xl  p-6 text-left flex flex-col justify-between relative"
            >
              <span
                className={`self-start text-white rounded-full text-xs py-1 px-2 flex items-center justify-center text-center
                ${
                  item.type === 'Entreprise'
                    ? 'bg-[#E7A519]'
                    : item.type === 'Technique'
                      ? 'bg-[#D9534F]'
                      : 'bg-[#5BC0DE]'
                }`}
              >
                {item.type}
              </span>
              <h3 className="text-xl font-semibold mt-3 mb-6">{item.titre}</h3>
              <p className="text-sm mb-12">{item.description}</p>

              <p className="text-xs text-gray-400 mt-4 ">05 Février 2026</p>
            </div>
          ))}
        </div>

        <button
          className="mt-10  text-white  rounded-full text-sm font-bold py-2 px-8 transition"
          style={{ backgroundColor: PRIMARY }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = PRIMARY_DARK)
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = PRIMARY)
          }
        >
          Voir plus
        </button>
      </div>
    </section>
  )
}

AnnonceSection()
