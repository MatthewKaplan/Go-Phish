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
              <li>Years</li>
              <li>Venues</li>
              <li>Songs</li>
              <li>Tours</li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;
