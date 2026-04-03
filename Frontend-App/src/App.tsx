import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Tableaudetravail1 from './pages/tableauDeTravail/TableauDeTravailEmploye';
import Tableaudetravailduouvoir1 from './pages/tableauDeTravail/TableauDeTavailResponsable';
import { BarreProgression } from './components/BarreProgression';
import { IndicateurEtape } from './components/IndicateurEtape';
import { TableauBord } from './pages/TableauBord';
import { ProtectedRoute } from './middleware/ProtectedRoute';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Routes protégées */}
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>}
        />
        <Route
          path="/employe-tableau-detravail" element={<ProtectedRoute><Tableaudetravail1 /></ProtectedRoute>}
        />
        <Route
          path="/tableau3" element={
            <ProtectedRoute>
              <Tableaudetravailduouvoir1 />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin" element={
            <ProtectedRoute>
              <TableauBord />
            </ProtectedRoute>
          }
        />

        <Route path="/tableau6" element={
            <ProtectedRoute>
              <IndicateurEtape numero={0} label={''} estActif={false} />
            </ProtectedRoute>
          }
        />
        <Route path="/tableau7" element={
            <ProtectedRoute>
              <BarreProgression etapeActuelle={0} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
