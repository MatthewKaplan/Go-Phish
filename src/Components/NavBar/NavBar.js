import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav>
            <Link to="/" className="link logo-link">
              <h1 className="logo">
                PH<span>I</span>SH
              </h1>
            </Link>
            <ul>
              <Link to="/BandBio" className="link">
                <li>Band</li>
              </Link>
              <Link to="/Years" className="link">
                <li>Years</li>
              </Link>
              <Link to="/Venues" className="link">
                <li>Venues</li>
              </Link>
              <Link to="/Songs" className="link">
                <li>Songs</li>
              </Link>
              <Link to="/Tours" className="link">
                <li>Tours</li>
              </Link>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;
