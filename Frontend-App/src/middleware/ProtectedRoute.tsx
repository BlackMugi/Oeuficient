import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const token = localStorage.getItem('token'); // On vérifie si l'utilisateur est connecté

  if (!token) {
    // Si pas connecté, redirection vers login
    return <Navigate to="/login" replace />;
  }

  return children; // Sinon, afficher le composant demandé
};
