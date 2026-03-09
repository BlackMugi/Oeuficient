// Type d'une annonce 
interface Announcement {
  tag: string; // ex: Urgent, Technique...
  title: string; // titre de l'annonce
  desc: string; // description
  date: string; // date affichée
  color: string; // classes tailwind pour la couleur du badge
}


export const announcements: Announcement[] = [
  {
    tag: "Urgent",
    title: "Réunion du personnel",
    desc:
      "Une réunion générale est prévue vendredi à 10h pour faire le point sur l'organisation et les objectifs de production.",
    date: "05 Février 2026",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    tag: "Technique",
    title: "Maintenance programmée",
    desc:
      "Une intervention de maintenance aura lieu sur le couvoir n°2. L'accès sera temporairement restreint.",
    date: "07 Février 2026",
    color: "bg-red-100 text-red-700",
  },
  {
    tag: "Personnel",
    title: "Réunion du personnel",
    desc:
      "Les nouvelles affectations de section sont disponibles dans votre espace personnel.",
    date: "08 Février 2026",
    color: "bg-blue-100 text-blue-700",
  },
];