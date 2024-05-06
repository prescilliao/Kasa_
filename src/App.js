import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Accueil from "./pages/Acceuil";
import Apropos from "./pages/Apropos";
import Erreur from "./pages/Erreur";
import Footer from "./composants/Footer";
import ContentCard from "./composants/CardContent";
import Donnees from "./data.json";

function App() {
  return (
    <Router>
      <div className="font">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="*" element={<Erreur />} />
          <Route
            path="/ContentCard/:id"
            element={<ContentCard Donnees={Donnees} />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
