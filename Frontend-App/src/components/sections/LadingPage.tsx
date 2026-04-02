import { easeOut, motion } from 'framer-motion';
import poussin from '../../assets/img/poussin-coquille.png';
import { getUserPrenom } from '../../services/authService';

const PRIMARY = '#F5B52D'; //100%
const PRIMARY_DARK = '#E7A519'; //100%
const prenom = getUserPrenom();

export default function LandingPage() {
  return (
    <section className="mt-16 px-10 py-12  bg-white">
      <div className="max-w-[1280px] mx-auto px-6 py-3 grid md:grid-cols-2 gap-10 items-center">
        {/* Annimation avec framer motion */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {/*texte d'accueil */}
          <p className="text-gray-600 mb-8">Bonjour {prenom} ! 👋</p>

          <h2 className="text-2xl font-normal text-gray-800">
            Bienvenue sur{' '}
            <span className="text-primary font-bold">Oeuficien</span>.
          </h2>

          <h1 className="text-4xl font-bold mt-4 leading-snug text-primary">
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
            className="mt-6 text-white px-12 py-3 rounded-full shadow transition text-lg  font-normal bg-primary"
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = PRIMARY_DARK)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = PRIMARY)
            }
          >
            Accéder à mon espace
          </button>
        </motion.div>

        {/* Annimation du poussin avec framer-motion */}
        <motion.div
          className="flex justify-center"
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <img src={poussin} alt="poussin" className="max-h-[650px]" />
        </motion.div>
      </div>
    </section>
  );
}

LandingPage();
