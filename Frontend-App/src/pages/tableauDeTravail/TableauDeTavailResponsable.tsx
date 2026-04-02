import { Egg, Users, Box, Drill, Calendar, Beaker } from 'lucide-react';

// --- COMPOSANTS ENFANTS (Gardent vos mesures exactes) ---

const StatCard = ({ label, value, icon: Icon, bgColor, left }: any) => (
  <div
    className="absolute w-[255px] h-[150px] top-[313px] bg-[#EEECE0] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] flex items-center p-6 gap-4"
    style={{ left }}
  >
    <div
      className={`w-14 h-14 rounded-full flex items-center justify-center ${bgColor} text-white shadow-inner flex-shrink-0`}
    >
      <Icon size={28} fill="currentColor" />
    </div>
    <div className="flex flex-col">
      <p className="font-['Barlow_Condensed'] text-[16px] font-medium text-gray-500 uppercase leading-none">
        {label}
      </p>
      <p className="font-['Roboto_Condensed'] text-3xl font-black text-[#333333] mt-1">
        {value}
      </p>
    </div>
  </div>
);

const TeamMember = ({
  name,
  role,
  top,
}: {
  name: string;
  role: string;
  top: string;
}) => (
  <div
    className="absolute w-[303px] h-[70px] left-[30px] bg-[#EEECE0] border border-[#999999] rounded-[10px] flex items-center gap-4 p-3"
    style={{ top }}
  >
    <div className="w-[50px] h-[50px] bg-slate-400 rounded-full border-2 border-white overflow-hidden shadow-sm flex-shrink-0" />
    <div className="flex flex-col">
      <span className="font-['Barlow_Condensed'] text-[18px] font-bold text-[#333333] leading-tight">
        {name}
      </span>
      <span className="font-['Barlow_Condensed'] text-[14px] text-[#666666]">
        {role}
      </span>
    </div>
  </div>
);

const LotItem = ({ id, type, progress, days, status, urgent, top }: any) => (
  <div
    className="absolute w-[634px] h-[100px] left-[40px] bg-white rounded-[10px] p-4 shadow-sm"
    style={{ top }}
  >
    <div className="flex justify-between items-center mb-2">
      <div className="flex items-baseline gap-2">
        <span className="font-['Barlow_Condensed'] text-[18px] font-black text-[#333333]">
          Lot {id}
        </span>
        <span className="font-['Barlow_Condensed'] text-[14px] text-[#999999]">
          {type}
        </span>
      </div>
      <div
        className={`px-4 py-1 text-white text-[13px] font-bold rounded-[10px] ${urgent ? 'bg-[#E63946]' : 'bg-[#17A2B8]'}`}
      >
        {days}
      </div>
    </div>
    <div className="w-full h-[4px] bg-[#D9D9D9] rounded-full relative mt-3">
      <div
        className="absolute h-full bg-[#E7A519] rounded-full transition-all"
        style={{ width: `${progress}%` }}
      />
    </div>
    <div className="flex justify-between mt-3 text-[14px] text-[#999999] font-['Barlow_Condensed']">
      <span>Couvoir C1 (Chariot A et B)</span>
      <span>
        Transfert : <span className="font-bold">{status}</span>
      </span>
    </div>
  </div>
);

// --- PAGE PRINCIPALE ---

export default function TableauDeTravailDuCouvoir1() {
  return (
    /* 1. On enlève le w-[1440px] ici pour que le fond blanc soit infini */
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* 2. NAVBAR : Sortie du flux pour couvrir 100% de la largeur réelle de l'écran */}
      <nav className="fixed top-0 left-0 w-full h-[74px] bg-[#EEECE0] z-[100] shadow-sm flex items-center px-10">
        {/* Contenu de votre Navbar ici */}
        <div className="flex items-center gap-10">
          <span className="text-[#E7A519] font-black text-xl italic">
            euficien
          </span>
          <div className="flex gap-6 text-[#E7A519] font-bold uppercase text-sm">
            <span>Accueil</span>
            <span className="border-b-2 border-[#E7A519]">
              Tableau de travail
            </span>
          </div>
        </div>
      </nav>

      {/* 3. CONTENEUR DE CONTENU : Centré avec vos mesures exactes (1440px) */}
      <main className="relative mx-auto w-[1440px] h-[1113px] mt-[74px]">
        {/* Header Section */}
        <div className="absolute w-[1123px] h-[150px] left-[135px] top-[60px] bg-[#EEECE0] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px] p-10 flex justify-between items-start">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 px-4 py-1 bg-[#E7A519] rounded-full w-fit">
              <Egg size={14} className="text-white fill-white" />
              <span className="text-[11px] font-black text-white uppercase tracking-widest">
                Section couvoir
              </span>
            </div>
            <h1 className="font-['Roboto_Condensed'] text-3xl font-black text-[#333333]">
              Tableau de bord Responsable
            </h1>
            <p className="font-['Barlow_Condensed'] text-gray-400 text-lg">
              Supervision et gestion d'équipe
            </p>
          </div>

          <div className="bg-white/60 p-4 rounded-[15px] border border-white flex flex-col items-end min-w-[180px]">
            <div className="flex items-center gap-2 text-[#3D3935] font-bold text-sm">
              <Calendar size={16} className="text-[#E7A519]" /> Lundi 01 Janvier
            </div>
            <div className="text-gray-400 font-bold text-sm mt-1">12:00</div>
          </div>
        </div>

        {/* Cartes Stats (Positions respectées par rapport au conteneur 1440px) */}
        <StatCard
          label="Incubation du jour"
          value="2.450"
          icon={Egg}
          bgColor="bg-[#FFB000]"
          left="135px"
        />
        <StatCard
          label="Équipe"
          value="12"
          icon={Users}
          bgColor="bg-[#4CC9F0]"
          left="425px"
        />
        <StatCard
          label="Lot disponible"
          value="12"
          icon={Box}
          bgColor="bg-[#4CAF50]"
          left="715px"
        />
        <StatCard
          label="Chariot disponible"
          value="15"
          icon={Drill}
          bgColor="bg-[#FF6B6B]"
          left="1005px"
        />

        {/* Section Équipe */}
        <div className="absolute w-[363px] h-[488px] left-[136px] top-[490px] bg-[#EEECE0] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px]">
          <div className="p-6 flex justify-between items-center">
            <h2 className="font-['Barlow_Condensed'] text-xl font-bold text-[#333333]">
              Mon équipe
            </h2>
            <span className="bg-white px-3 py-1 rounded-full text-[12px] text-gray-400 font-bold">
              12 employés
            </span>
          </div>
          <TeamMember
            name="Mamadou Diagne"
            role="Responsable section"
            top="70px"
          />
          <TeamMember
            name="Dieynaba Ndiaye"
            role="Employée - Incubation"
            top="155px"
          />
          <TeamMember
            name="Mouhamed Diouf"
            role="Employé - Incubation"
            top="240px"
          />
          <TeamMember
            name="Aminata Seck"
            role="Employée - Incubation"
            top="325px"
          />
          <button className="absolute bottom-6 left-8 text-[#E7A519] font-black text-sm uppercase tracking-widest">
            Voir toute l'équipe →
          </button>
        </div>

        {/* Section Incubation */}
        <div className="absolute w-[718px] h-[488px] left-[530px] top-[490px] bg-[#EEECE0] shadow-[4px_4px_4px_rgba(0,0,0,0.25)] rounded-[10px]">
          <div className="p-8 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Beaker className="text-[#E7A519]" size={22} />
              <h2 className="font-['Barlow_Condensed'] text-xl font-bold text-[#333333]">
                Incubation en cours
              </h2>
              <span className="bg-white px-3 py-1 rounded-full text-[12px] text-gray-400 font-bold">
                8 actives
              </span>
            </div>
            <button className="bg-[#E7A519] text-white px-8 py-3 rounded-[12px] font-black uppercase text-[13px] shadow-md">
              Nouvelle incubation
            </button>
          </div>
          <LotItem
            id="3562"
            type="Poule"
            progress={100}
            days="J18/18"
            status="Aujourd'hui"
            urgent={true}
            top="90px"
          />
          <LotItem
            id="3578"
            type="Poule"
            progress={85}
            days="J15/18"
            status="J-3"
            urgent={false}
            top="205px"
          />
          <LotItem
            id="3592"
            type="Dinde"
            progress={55}
            days="J15/28"
            status="J-13"
            urgent={false}
            top="320px"
          />
        </div>
      </main>
    </div>
  );
}
