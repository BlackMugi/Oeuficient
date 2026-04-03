export interface Annonce {
  id: number;
  type: string;
  titre: string;
  description: string;
  dateAnnonce: string; 
}

export async function fetchAnnonces(): Promise<Annonce[]> {
  const token = localStorage.getItem("token")

  const res = await fetch("http://localhost:8080/api/annonces", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  if (!res.ok) {
    throw new Error("Erreur lors de la récupération des annonces")
  }

  return res.json()
}