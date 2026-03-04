import Navbar from "../components/Navbar";
import poussin from "../assets/img/poussin-coquille.png";
const PRIMARY = "#F5B52D";//100%
const PRIMARY_DARK = "#E7A519";//100%

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
< Navbar />

      {/*  hero */}
      <section className="px-10 py-12 grid md:grid-cols-2 gap-10 items-center bg-white">
        
        {/* Texte */}
        <div>
          <p className="text-gray-600 mb-2">Bonjour Utilisateur ! 👋</p>

          <h2 className="text-2xl font-semibold text-gray-800">
            Bienvenue sur <span style={{ color: PRIMARY }}>Oeuficien</span>.
          </h2>

          <h1
            className="text-4xl font-bold mt-4 leading-snug"
            style={{ color: PRIMARY }}
          >
            Gérez efficacement votre couvoir
          </h1>

          <p className="text-gray-600 mt-4 max-w-md">
            Pilotez les incubations, surveillez les cycles et assurez des
            éclosions optimales pour la performance d'Oeuficien.
          </p>

          <ul className="mt-4 space-y-1 text-gray-600">
            <li>✔ Suivi des incubations et éclosions</li>
            <li>✔ Consultation de vos affectations</li>
            <li>✔ Saisie du nombre de poussins obtenus</li>
          </ul>

          <button
            className="mt-6 text-white px-8 py-3 px-6 py-2 rounded-full shadow transition text-2xl  font-bold"
            style={{ backgroundColor: PRIMARY }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = PRIMARY_DARK)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = PRIMARY)
            }
          >
            Accéder à mon espace
          </button>
        </div>

        {/* Image poussin */}
        <div className="flex justify-center">
          <img src={poussin} alt="poussin" className="max-h-[350px]" />
        </div>
      </section>

      {/* ================= ANNONCES ================= */}
      <section className="px-10 py-16 text-center">
      <h2
  className="flex items-center justify-center gap-4 uppercase"
  style={{ 
    color: PRIMARY,
    fontFamily: "'Roboto Condensed', sans-serif",
    fontSize: '48px',
    fontWeight: 900,
    lineHeight: '100%',
    letterSpacing: '0%'
  }}
>
  {/* L'icône tournée vers la gauche */}
  <span className="transform -scale-x-100 inline-block">📢</span>
  
  <span>Annonces internes</span>
</h2>

        <p className="text-3xl font-semibold -500 mt-2">
          Informations importantes concernant le personnel et l'entreprise
          Oeuficien
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          
          <div className="w-[375px] h-[300px] bg-white rounded-xl shadow p-6 text-left flex flex-col justify-between">
            <span className="bg-[#E7A519] text-white  rounded-full text-1xl font-bold w-[100px] h-[25px] flex items-center justify-center text-center">
             Entreprise
            </span>
            <h3 className="text-3xl font-semibold mt-3">Réunion du personnel</h3>
            <p className="font-['Barlow_Condensed'] font-light text-[16px] leading-[100%] tracking-[0%] w-[307px] h-[57px]">
  Une réunion générale est prévue vendredi à 10h pour faire le point
  sur l'organisation et les objectifs de production.
</p>

            <p className="text-xs text-gray-400 mt-4">05 Février 2026</p>
          </div>

          <div className="w-[380px] h-[303px] bg-white rounded-xl shadow p-6 text-left flex flex-col justify-between">
          <span className="bg-[#D9534F] text-white  rounded-full text-1xl font-bold w-[100px] h-[25px] flex items-center justify-center text-center">
           Technique
            </span>
            <h3 className="text-3xl font-semibold mt-3">Maintenance programmée</h3>
            <p className="font-['Barlow_Condensed'] font-light text-[16px] leading-[100%] tracking-[0%] w-[307px] h-[57px]">
              Une intervention de maintenance aura lieu sur le couvoir #2.
              L'accès sera temporairement restreint.
            </p>
            <p className="text-xs text-gray-900 mt-4">17 Janvier 2026</p>
          </div>

          <div className="w-[375px] h-[303px] bg-white rounded-xl shadow p-6 text-left flex flex-col justify-between ">
         <span className="bg-[#5BC0DE] text-white  rounded-full text-1xl font-bold w-[100px] h-[25px] flex items-center justify-center text-center">
         Personnel
        </span>
        <h3 className="text-3xl font-semibold mt-3">
       Réunion du personnel
      </h3>
       <p className="font-['Barlow_Condensed'] font-light text-[16px] leading-[100%] tracking-[0%] w-[307px] h-[57px]">
       Les nouvelles affectations de section sont disponibles dans votre
       espace personnel.
      </p>

      <p className="text-xs text-gray-400 mt-4">
             08 Février 2026
              </p>
       </div>


        </div>

        <button
          className="mt-10  text-white  rounded-full text-2xl font-bold w-[150px] h-[42px] rounded-full transition"
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
      </section>

    </div>
  );
}