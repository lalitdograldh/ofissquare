import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-sm">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse justify-content-end navbar-collapse ${show ? "show" : ""
              }`}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item drop">
                <Link to="#" className="nav-link">Locations <span>&#9660;</span></Link>
                <div className="dropbox">
                  <Link to="/Coworkingspaces" className="nav-link">Noida</Link>
                  <Link to="/CoworkingspacesGurugram" className="nav-link">Gurugram</Link>
                </div>
              </li>
              <li className="nav-item drop">
                <Link to="#" className="nav-link">Solutions <span>&#9660;</span></Link>
                <div className="dropbox">
                  <Link to="#" className="nav-link">Coworking Spaces</Link>
                  <Link to="#" className="nav-link">Managed offices</Link>
                  <Link to="#" className="nav-link">Virtual Offices</Link>
                  <Link to="#" className="nav-link">Event Spaces</Link>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/About" className="nav-link">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/Blogs" className="nav-link">Blogs</Link>
              </li>
              <li className="nav-item link_btn">
                <Link to="/Contact" className="nav-link">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
