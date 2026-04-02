export interface Annonce {
  id: number;
  type: string;
  titre: string;
  description: string;
  dateAnnonce: string; 
}

const API_URL = 'http://localhost:8080/api/annonces'; 

export async function fetchAnnonces(): Promise<Annonce[]> {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error('Erreur lors de la récupération des annonces');
  }
  return res.json();
}