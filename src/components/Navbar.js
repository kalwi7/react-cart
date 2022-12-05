import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/" className="logo">
          <img src={logo}></img>
        </Link>
        <ul className="nav-links">
          <li>
            <NavLink to="/">home</NavLink>
          </li>
          <li>
            <NavLink to="/about">about</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
