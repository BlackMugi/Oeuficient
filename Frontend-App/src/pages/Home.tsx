import Navbar from '../components/layout/Navbar';
import LandingPage from '../components/sections/LadingPage';
import AnnonceSection from '../components/sections/AnnonceSection';

export default function Home() {
  return (
    <div>
      <Navbar />
      <LandingPage />
      <AnnonceSection />
    </div>
  );
}
