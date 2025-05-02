import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import logo from "../assets/imgs/Navberimg/logo2.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
      <div className="container">
        {/* Logo Section */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} className="mx-2" height="70" alt="Logo" />
        </Link>

        {/* Navbar Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse Navber navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-5 fw-medium ps-1 gap-3 text-start">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/AboutUs">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ModuleFeatures">Module Features</Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to="/Clients">Clients</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Demo">Demo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ContactUs">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Enquiry Button - Visible only on large screens */}
        <div className="d-none d-lg-block">
          <Link to="/Enquiry" className="btn nav_btn rounded-pill ms-3">Enquiry Now</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
