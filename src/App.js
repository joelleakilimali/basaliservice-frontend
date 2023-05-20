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
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album" element={<AlbumPage />} />
          <Route path="/service" element={<Service />} />
          <Route path="/apropos" element={<AboutUsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
