import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Albumpage from "./pages/Album";

import "antd/dist/reset.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AlbumPage from "./pages/Album";
import Service from "./pages/Service";
import AboutUsPage from "./pages/AboutUs";
import ServiceParticulier from "./pages/ServiceParticulier";
import ServiceSecurite from "./pages/ServiceSecurite";
import ServiceDecoration from "./pages/ServiceDecoration";
import ServiceMaitreceremonie from "./pages/ServiceMaitreceremonie";
import ServiceFilledhonneur from "./pages/ServiceFilledhonneur";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<AlbumPage />} />
          <Route path="/tarifs" element={<Service />} />
          <Route path="/apropos" element={<AboutUsPage />} />
          <Route path="/protocolat" element={<ServiceParticulier />} />
          <Route path="/securite" element={<ServiceSecurite />} />
          <Route path="/decoration" element={<ServiceDecoration />} />
          <Route
            path="/maitredeceremonie"
            element={<ServiceMaitreceremonie />}
          />
          <Route path="/filled'honneur" element={<ServiceFilledhonneur />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
