import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/AboutMe";
import Projects from './Pages/Projects';
import Contact from "../src/Pages/Contact/index";
// import Home from './Components';

function App() {
  return (
    <Router className>
      <Navbar />
      <Routes>
        <Route exact path="/React_Portfolio/" exact element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
