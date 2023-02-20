import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import './App.css'


function App() {
  return (
    <div className="App" >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/about" element={<About />}>
          About
        </Route>
        <Route path="/Contactus" element={<ContactUs />}>
          ContactUs
        </Route>
      </Routes>
    </div>
  );
}

export default App;
