import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import BreweryList from "./pages/Brewery/BreweryList";
import BreweryDetail from "./pages/Brewery/BreweryDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="breweries/:id" element={<BreweryDetail />} />
        <Route path="breweries" element={<BreweryList />} />
        <Route path="/" element={<Navigate to="/breweries" replace />} />
      </Routes>
    </Router>
  );
}

export default App;