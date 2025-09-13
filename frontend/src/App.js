import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Ecosystem from "./pages/Ecosystem";
import PublishingHouses from "./pages/PublishingHouses";
import Network from "./pages/Network";
import Services from "./pages/Services";
import Oracle from "./pages/Oracle";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/publishing" element={<PublishingHouses />} />
            <Route path="/network" element={<Network />} />
            <Route path="/services" element={<Services />} />
            <Route path="/oracle" element={<Oracle />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;