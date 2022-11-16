import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../IMG/logo.png";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-color ">
      <div className="container-fluid d-flex justify-content-evenly">
        <Link to="/" className="navbar-brand d-flex justify-content-center">
          <img src={logo} className="navbar-logo-size" alt="Logo" />
        </Link>
        <div className="col-5 col-md-8 col-lg-9">
          <div>
            <div className="d-flex justify-content-evenly">
              <Link to="/flights">
                <button className="btn btn-menu mx-2">
                  <span className="btn-text">BUSCAR VUELOS</span>
                </button>
              </Link>
              <Link to="/bookFlight">
                <button className="btn btn-menu mx-2">
                  <span className="btn-text">RESERVAR VUELOS</span>
                </button>
              </Link>
              <Link to="/destinations">
                <button className="btn btn-menu mx-2">
                  <span className="btn-text">DESTINOS</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
