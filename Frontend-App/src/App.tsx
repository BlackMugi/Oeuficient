import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Tableaudetravail1 from './pages/tableauDeTravail/TableauDeTravailEmploye';
import Tableaudetravailduouvoir1 from './pages/tableauDeTravail/TableauDeTavailResponsable';
import { BarreProgression } from './components/BarreProgression';
import { IndicateurEtape } from './components/IndicateurEtape';
import { TableauBord } from './pages/TableauBord';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/employe-tableau-detravail"
          element={<Tableaudetravail1 />}
        />
        <Route path="/tableau3" element={<Tableaudetravailduouvoir1 />} />
        <Route path="/admin" element={<TableauBord />} />
        <Route
          path="/tableau6"
          element={<IndicateurEtape numero={0} label={''} estActif={false} />}
        />
        <Route
          path="/tableau7"
          element={<BarreProgression etapeActuelle={0} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
