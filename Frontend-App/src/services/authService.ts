// authService.ts
const API_URL = "http://localhost:8080/api/auth";

// Connexion
export const login = async (email: string, password: string) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Email ou mot de passe incorrect");
  }

  const data = await response.json();

  // Stockage du token et de l'utilisateur
  localStorage.setItem("token", data.token);
  localStorage.setItem("user", JSON.stringify(data));

  return data;
};

// Déconnexion
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

// Récupération de l'utilisateur complet
export const getUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

// Première lettre du prénom
export const getUserFirstLetter = () => {
  const user = getUser();
  return user?.prenom?.charAt(0).toUpperCase() || "";
};

// Prénom complet
export const getUserPrenom = () => {
  const user = getUser();
  return user?.prenom || "";
};