import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchData, fetchMembers } from "../../api/apiCalls";
import SubNav from "../../Containers/SubNav/SubNav";
import {
  allYears,
  allTours,
  allMembers,
  loadingData,
  handleError
} from "../../Actions/index";
import { cleanTours } from "../../Helpers/cleaners";
import PropTypes from "prop-types";

export class NavBar extends Component {
  state = { subNav: false, sidebarActive: false };

  toggleSidebar = () => {
    this.setState({
      sidebarActive: !this.state.sidebarActive
    });
  };

  fetchYears = async () => {
    this.toggleSidebar();
    this.toggleSubNav(false);
    if (this.props.years.length === 0) {
      this.props.loadingData(true);
      try {
        const yearsResults = await fetchData(`years?include_show_counts=true`);
        this.props.allYears(yearsResults.data);
        this.props.loadingData(false);
      } catch (error) {
        this.props.handleError(error.message);
      }
    }
  };

  fetchTours = async () => {
    this.toggleSidebar();
    this.toggleSubNav(false);
    if (this.props.tours.length === 0) {
      this.props.loadingData(true);

      try {
        const tourResults = await fetchData(`tours.json?per_page=99`);
        const cleanTourResults = cleanTours(tourResults.data);
        this.props.allTours(cleanTourResults);
        this.props.loadingData(false);
      } catch (error) {
        this.props.handleError(error.message);
      }
    }
  };

  fetchPhishData = async () => {
    this.toggleSidebar();
    this.toggleSubNav(false);
    if (this.props.members.length === 0) {
      const url = `https://cors-anywhere.herokuapp.com/https://peaceful-castle-66511.herokuapp.com/api/v1/phish/members`;
      this.props.loadingData(true);
      try {
        const memberResults = await fetchMembers(url);
        this.props.allMembers(memberResults);
        this.props.loadingData(false);
      } catch (error) {
        this.props.handleError(error.message);
      }
    }
  };

  toggleSubNav = bool => {
    {bool === true && this.toggleSidebar()};
    this.setState({
      subNav: bool
    });
  };

  render() {
    const { sidebarActive } = this.state;
    return (
      <React.Fragment>
        <header>
          <div className="container">
            <nav className="main-nav">
              <Link
                to="/"
                className="link logo-link"
                data-test="logo-btn"
                onClick={() => this.toggleSubNav(false)}
              >
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
                    data-test="band-btn"
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
                    data-test="years-btn"
                    onClick={() => this.fetchYears()}
                  >
                    Years
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Venues"
                    activeClassName="active"
                    className="link"
                    data-test="venue-btn"
                    onClick={() => this.toggleSubNav(true)}
                  >
                    Venues
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Songs"
                    activeClassName="active"
                    className="link"
                    data-test="songs-btn"
                    onClick={() => this.toggleSubNav(true)}
                  >
                    Songs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Tours"
                    activeClassName="active"
                    className="link"
                    data-test="tours-btn"
                    onClick={() => this.fetchTours()}
                  >
                    Tours
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/UserStats"
                    activeClassName="active"
                    className="link"
                  >
                    My Stats
                  </NavLink>
                </li>
              </ul>
            </nav>
            {this.state.subNav === true && <SubNav />}
          </div>
        </header>
        <div className="sidebar-navigation">
          <div className={sidebarActive ? "sidebarActive sidebar" : "sidebar"}>
            <section className="nav-header">
              <div
                className={sidebarActive ? "iconActive icon" : "icon"}
                onClick={() => this.toggleSidebar()}
              >
                <div className="hamburger" />
              </div>
              <Link
                to="/"
                className="link logo-link"
                data-test="logo-btn"
                onClick={() => this.toggleSubNav(false)}
              >
                <h1 className="logo">
                  G<span>O</span>PH<span>I</span>SH
                </h1>
              </Link>
            </section>
            <section className="side-nav">
              <ul className="sidebar-menu">
                <li>
                  <NavLink
                    to="/BandBio"
                    activeClassName="active"
                    className="link"
                    data-test="band-btn"
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
                    data-test="years-btn"
                    onClick={() => this.fetchYears()}
                  >
                    Years
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Venues"
                    activeClassName="active"
                    className="link"
                    data-test="venue-btn"
                    onClick={() => this.toggleSubNav(true)}
                  >
                    Venues
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Songs"
                    activeClassName="active"
                    className="link"
                    data-test="songs-btn"
                    onClick={() => this.toggleSubNav(true)}
                  >
                    Songs
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Tours"
                    activeClassName="active"
                    className="link"
                    data-test="tours-btn"
                    onClick={() => this.fetchTours()}
                  >
                    Tours
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/UserStats"
                    activeClassName="active"
                    className="link"
                    onClick={() => this.toggleSidebar()}
                  >
                    My Stats
                  </NavLink>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

NavBar.propTypes = {
  allYears: PropTypes.func,
  allTours: PropTypes.func,
  allMembers: PropTypes.func,
  loadingData: PropTypes.func,
  handleError: PropTypes.func
};

export const mapStateToProps = state => ({
  years: state.years,
  tours: state.tours,
  members: state.members
});

export const mapDispatchToProps = dispatch => ({
  allYears: years => dispatch(allYears(years)),
  allTours: tours => dispatch(allTours(tours)),
  allMembers: members => dispatch(allMembers(members)),
  loadingData: bool => dispatch(loadingData(bool)),
  handleError: errorMessage => dispatch(handleError(errorMessage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
