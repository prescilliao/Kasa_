import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import Accueil from "./pages/Acceuil";
import Apropos from "./pages/Apropos";
import Erreur from "./pages/Erreur";
import Footer from "./composants/Footer";
import ContentCard from "./composants/CardContent";
import Donnees from "./data.json";

function App() {
  let { id } = useParams();

  const nb = Donnees.map((donnee) => donnee.id);

  const IsValid = (id) => {
    return Donnees.some((data) => data.id === parseInt(id));
  };
  const ContentCardRoute = ({ id }) => {
    return IsValid(id) ? (
      <Navigate to="/erreur" />
    ) : (
      <ContentCard Donnees={Donnees} />

      // <ContentCard Donnees={Donnees} />
    );
  };
  return (
    <Router>
      <div className="font">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route
            path="/ContentCard/:id"
            element={<ContentCardRoute Donnees={Donnees} />}
          />
          <Route path="/erreur" element={<Erreur />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
