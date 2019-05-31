import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchData, fetchMembers } from "../../api/apiCalls";
import { allYears, allTours, allMembers, loadingData } from "../../Actions/index";
import { cleanTours } from "../../Helpers/cleaners";
import "./NavBar.scss";

class NavBar extends Component {
  fetchYears = () => {
    this.props.loadingData(true);
    fetchData(
      `https://cors-anywhere.herokuapp.com/http://phish.in/api/v1/years?include_show_counts=true`
    ).then(results => (this.props.allYears(results.data), this.props.loadingData(false)));
  };

  fetchTours = () => {
    this.props.loadingData(true);
    fetchData(
      `https://cors-anywhere.herokuapp.com/http://phish.in/api/v1/tours.json?per_page=99`
    )
      .then(response => cleanTours(response.data))
      .then(results => (this.props.allTours(results), this.props.loadingData(false)));
  };

  fetchPhishData = () => {
    this.props.loadingData(true);
    fetchMembers(
      `https://cors-anywhere.herokuapp.com/https://peaceful-castle-66511.herokuapp.com/api/v1/phish/members`
    ).then(results => (this.props.allMembers(results), this.props.loadingData(false)));
  };

  render() {
    const currentPath = window.location.href;
    console.log(currentPath)
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
                <NavLink
                  to="/BandBio"
                  activeClassName="active"
                  className="link"
                  onClick={() => this.fetchPhishData()}
                >
                  Band
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Years"
                  activeClassName="active"
                  className="link"
                  onClick={() => this.fetchYears()}
                >
                  Years
                </NavLink>
              </li>
              <li>
                <NavLink to="/Venues" activeClassName="active" className="link">
                  Venues
                </NavLink>
              </li>
              <li>
                <NavLink to="/Songs" activeClassName="active" className="link">
                  Songs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Tours"
                  activeClassName="active"
                  className="link"
                  onClick={() => this.fetchTours()}
                >
                  Tours
                </NavLink>
              </li>
            </ul>
          </nav>
          <nav className="sub-nav">
            <a className="char_link" href="/songs?char=B">
              A
            </a>
            <a className="char_link" href="/songs?char=B">
              B
            </a>
            <a className="char_link" href="/songs?char=C">
              C
            </a>
            <a className="char_link" href="/songs?char=D">
              D
            </a>
            <a className="char_link" href="/songs?char=E">
              E
            </a>
            <a className="char_link" href="/songs?char=F">
              F
            </a>
            <a className="char_link" href="/songs?char=G">
              G
            </a>
            <a className="char_link" href="/songs?char=H">
              H
            </a>
            <a className="char_link" href="/songs?char=I">
              I
            </a>
            <a className="char_link" href="/songs?char=J">
              J
            </a>
            <a className="char_link" href="/songs?char=K">
              K
            </a>
            <a className="char_link" href="/songs?char=L">
              L
            </a>
            <a className="char_link" href="/songs?char=M">
              M
            </a>
            <a className="char_link" href="/songs?char=N">
              N
            </a>
            <a className="char_link" href="/songs?char=O">
              O
            </a>
            <a className="char_link" href="/songs?char=P">
              P
            </a>
            <a className="char_link" href="/songs?char=Q">
              Q
            </a>
            <a className="char_link" href="/songs?char=R">
              R
            </a>
            <a className="char_link" href="/songs?char=S">
              S
            </a>
            <a className="char_link" href="/songs?char=T">
              T
            </a>
            <a className="char_link" href="/songs?char=U">
              U
            </a>
            <a className="char_link" href="/songs?char=V">
              V
            </a>
            <a className="char_link" href="/songs?char=W">
              W
            </a>
            <a className="char_link" href="/songs?char=X">
              X
            </a>
            <a className="char_link" href="/songs?char=Y">
              Y
            </a>
            <a className="char_link" href="/songs?char=Z">
              Z
            </a>
            <a className="char_link" href="/songs?char=%23">
              #
            </a>
          </nav>
        </div>
      </header>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  allYears: years => dispatch(allYears(years)),
  allTours: tours => dispatch(allTours(tours)),
  allMembers: members => dispatch(allMembers(members)),
  loadingData: bool => dispatch(loadingData(bool))
});

export default connect(
  null,
  mapDispatchToProps
)(NavBar);
