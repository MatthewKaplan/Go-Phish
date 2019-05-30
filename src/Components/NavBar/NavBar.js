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
                G<span>O</span>PH<span>I</span>SH
              </h1>
            </Link>
            <ul>
              <li>
                <Link to="/BandBio" className="link">
                  Band
                </Link>
              </li>
              <li>
              <Link to="/Years" className="link">
                Years
              </Link>
              </li>
              <li>
              <Link to="/Venues" className="link">
                Venues
              </Link>
              </li>
              <li>
              <Link to="/Songs" className="link">
                Songs
              </Link>
              </li>
              <li>
              <Link to="/Tours" className="link">
                Tours
              </Link>
              </li>
            </ul>
          </nav>
          <nav className="sub-nav">
            <a class="char_link" href="/songs?char=B">
              A
            </a>
            <a class="char_link" href="/songs?char=B">
              B
            </a>
            <a class="char_link" href="/songs?char=C">
              C
            </a>
            <a class="char_link" href="/songs?char=D">
              D
            </a>
            <a class="char_link" href="/songs?char=E">
              E
            </a>
            <a class="char_link" href="/songs?char=F">
              F
            </a>
            <a class="char_link" href="/songs?char=G">
              G
            </a>
            <a class="char_link" href="/songs?char=H">
              H
            </a>
            <a class="char_link" href="/songs?char=I">
              I
            </a>
            <a class="char_link" href="/songs?char=J">
              J
            </a>
            <a class="char_link" href="/songs?char=K">
              K
            </a>
            <a class="char_link" href="/songs?char=L">
              L
            </a>
            <a class="char_link" href="/songs?char=M">
              M
            </a>
            <a class="char_link" href="/songs?char=N">
              N
            </a>
            <a class="char_link" href="/songs?char=O">
              O
            </a>
            <a class="char_link" href="/songs?char=P">
              P
            </a>
            <a class="char_link" href="/songs?char=Q">
              Q
            </a>
            <a class="char_link" href="/songs?char=R">
              R
            </a>
            <a class="char_link" href="/songs?char=S">
              S
            </a>
            <a class="char_link" href="/songs?char=T">
              T
            </a>
            <a class="char_link" href="/songs?char=U">
              U
            </a>
            <a class="char_link" href="/songs?char=V">
              V
            </a>
            <a class="char_link" href="/songs?char=W">
              W
            </a>
            <a class="char_link" href="/songs?char=X">
              X
            </a>
            <a class="char_link" href="/songs?char=Y">
              Y
            </a>
            <a class="char_link" href="/songs?char=Z">
              Z
            </a>
            <a class="char_link" href="/songs?char=%23">
              #
            </a>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;
