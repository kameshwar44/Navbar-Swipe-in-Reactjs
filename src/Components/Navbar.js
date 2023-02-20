import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <NavLink to="/" className="NavbarLink">
        Home
      </NavLink>
      <NavLink to="/About" className="NavbarLink">
        About
      </NavLink>
      <NavLink to="/Contactus" className="NavbarLink">
        Contact US
      </NavLink>
    </div>
  );
}

export default Navbar;
