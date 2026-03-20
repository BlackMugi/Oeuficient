import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Tableaudetravail1 from "./pages/Tableaudetravail1";
import Tableaudetravail2 from "./pages/Tableaudetravail2";
import Navbar from "./components/Navbar";
import Tableaudetravailduouvoir1 from "./pages/Tableaudetravailducouvoir1";
import Tableaudetravailduouvoir2 from "./pages/Tableaudetravailducouvoir2";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Navbar/>} />
          <Route path="/tableau1" element={<Tableaudetravail1 />} />
            <Route path="/tableau2" element={<Tableaudetravail2 />} />
            <Route path="/tableau3" element={<Tableaudetravailduouvoir1 />} />
         <Route path="/tableau4" element={<Tableaudetravailduouvoir2 />} />

      </Routes>
    </BrowserRouter>
  );
}