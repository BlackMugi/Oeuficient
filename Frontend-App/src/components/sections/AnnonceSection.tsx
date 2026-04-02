import { useEffect, useState } from 'react';
import { motion, easeOut } from 'framer-motion';
import type { Annonce } from '../../services/annonceService';
import { fetchAnnonces } from '../../services/annonceService';

const containerVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PRIMARY = '#F5B52D';
const PRIMARY_DARK = '#E7A519';

export default function AnnonceSection() {
  const [annonces, setAnnonces] = useState<Annonce[]>([]);
  const [loading, setLoading] = useState(true);

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    fetchAnnonces()
      .then((data) => setAnnonces(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p className="text-center py-10">Chargement des annonces...</p>;

  return (
    <section className="px-10 py-16 text-center bg-gray-300">
      <div className="max-w-[1280px] mx-auto px-6 py-3">
        <motion.h2
          className="flex items-center justify-center mb-8 gap-4 uppercase text-primary text-4xl font-bold"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
          viewport={{ once: true, amount: 0.2 }}
        >
          📢Annonces internes
        </motion.h2>

        <motion.p
          className="text-lg font-semibold -500 mt-2"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Informations importantes concernant le personnel et l'entreprise
          Oeuficien
        </motion.p>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {annonces.slice(0, visibleCount).map((item) => (
            <motion.div
              key={item.id}
              className="px-4 py-6 bg-[#C7C7C7] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-xl p-6 text-left flex flex-col justify-between relative"
              variants={cardVariants}
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
              <p className="text-xs text-gray-400 mt-4">
                {new Date(item.dateAnnonce).toLocaleDateString('fr-FR')}
              </p>
            </motion.div>
          ))}
        </motion.div>
        {annonces.length > 3 && (
          <motion.button
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: easeOut }}
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 text-white rounded-full text-sm font-bold py-2 px-8 transition"
            style={{ backgroundColor: PRIMARY }}
            onClick={() => setVisibleCount(annonces.length)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = PRIMARY_DARK)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = PRIMARY)
            }
          >
            Voir plus
          </motion.button>
        )}
      </div>
    </section>
  );
}
