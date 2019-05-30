import React, {Component} from 'react';
import './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav>
            <h1 className="logo">
              PH<span>I</span>SH
            </h1>
            <ul>
              <li>Band</li>
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