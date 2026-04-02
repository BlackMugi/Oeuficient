import React from 'react';

interface Employee {
  name: string;
  role: string;
}

interface Incubation {
  lot: string;
  type: string;
  status: string;
  progress: string;
  color: string;
}

const Header: React.FC = () => {
  const employees: Employee[] = [
    { name: 'Mamadou Diagne', role: 'Responsable section-Incubation' },
    { name: 'Dieynaba Ndiaye', role: 'Employée - Incubation' },
    { name: 'Mouhamed Diouf', role: 'Employé - Incubation' },
    { name: 'Aminata Seck', role: 'Employée - Incubation' },
  ];

  const incubations: Incubation[] = [
    {
      lot: 'Lot 3562',
      type: 'Poule',
      status: 'J18/18',
      progress: '100%',
      color: 'bg-rose-500',
    },
    {
      lot: 'Lot 3578',
      type: 'Poule',
      status: 'J15/18',
      progress: '75%',
      color: 'bg-teal-600',
    },
    {
      lot: 'Lot 3592',
      type: 'Dinde',
      status: 'J15/28',
      progress: '50%',
      color: 'bg-teal-600',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans text-slate-900">
      {/* HEADER */}
      <header className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="bg-amber-400 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Section couvoir
          </span>
          <h1 className="text-2xl font-bold mt-2">
            Tableau de bord Responsable
          </h1>
          <p className="text-slate-500 text-sm">
            Supervision et gestion d'équipe
          </p>
        </div>
        <div className="text-right border-l-2 border-slate-100 pl-4">
          <p className="font-bold text-sm">Lundi 01 Janvier</p>
          <p className="text-sm text-slate-500">12 : 00</p>
        </div>
      </header>

      {/* CARDS STATS */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          {
            label: 'Incubation du jour',
            value: '2.450',
            color: 'bg-amber-100',
          },
          { label: 'Équipe', value: '12', color: 'bg-blue-100' },
          { label: 'Lot disponible', value: '12', color: 'bg-emerald-100' },
          { label: 'Chariot disponible', value: '15', color: 'bg-rose-100' },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4"
          >
            <div className={`w-12 h-12 ${stat.color} rounded-full`} />
            <div>
              <p className="text-[10px] text-slate-400 font-bold uppercase">
                {stat.label}
              </p>
              <p className="text-xl font-extrabold">{stat.value}</p>
            </div>
          </div>
        ))}
      </section>

      {/* CONTENT GRID */}
      <main className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* SECTION ÉQUIPE */}
        <section className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold">Mon équipe</h2>
            <span className="text-[10px] bg-slate-100 px-2 py-1 rounded text-slate-500">
              12 employés
            </span>
          </div>
          <div className="space-y-4">
            {employees.map((emp, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold leading-none">{emp.name}</p>
                  <p className="text-[10px] text-slate-400 mt-1">{emp.role}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-6 text-sm text-amber-500 font-bold hover:underline">
            Voir toute l'équipe →
          </button>
        </section>

        {/* SECTION INCUBATION */}
        <section className="lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-lg">
              Incubation en cours{' '}
              <span className="text-[10px] text-slate-400 font-normal ml-1">
                8 actives
              </span>
            </h2>
            <button className="bg-amber-400 text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-amber-500 transition">
              Nouvelle incubation
            </button>
          </div>

          <div className="space-y-6">
            {incubations.map((item, i) => (
              <div key={i} className="group">
                <div className="flex justify-between items-end text-xs mb-2">
                  <div>
                    <p className="font-bold text-sm">{item.lot}</p>
                    <p className="text-slate-400 font-normal">{item.type}</p>
                  </div>
                  <span
                    className={`${item.color} text-white px-2 py-0.5 rounded text-[10px] font-medium`}
                  >
                    {item.status}
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-400 h-full transition-all duration-500"
                    style={{ width: item.progress }}
                  />
                </div>
                <p className="text-[10px] text-slate-400 mt-2 flex items-center gap-1">
                  Couvoir C1 (Chariot A et B) •{' '}
                  <span className="font-medium text-slate-500">
                    Transfert: Aujourd'hui
                  </span>
                </p>
              </div>
            ))}
          </div>
          <button className="mt-8 w-full md:w-auto text-sm text-amber-500 font-bold hover:underline py-2">
            Voir toutes les incubations
          </button>
        </section>
      </main>
    </div>
  );
};

export default Header;
