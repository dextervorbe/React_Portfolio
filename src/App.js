import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/AboutMe";
import Projects from './Pages/Projects';
import Contact from "../src/Pages/Contact/index";
// import Home from './Components';

function App() {
  return (
    // <Router >
    //   <Navbar />
    //   <Routes>
    //     <Route exact path="React_Portfolio/" element={<About />} />
    //     <Route path="/React_Portfolio/projects" element={<Projects />} />
    //     <Route path="/React_Portfolio/contact" element={<Contact />} />
    //   </Routes>
    // </Router>

    <BrowserRouter basename="React_Portfolio">
    <Navbar />
    <Routes>
    <Route exact path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
