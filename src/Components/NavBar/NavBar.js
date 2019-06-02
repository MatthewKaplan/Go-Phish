import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { fetchData, fetchMembers } from "../../api/apiCalls";
import SubNav from "../SubNav/SubNav";
import {
  allYears,
  allTours,
  allMembers,
  loadingData
} from "../../Actions/index";
import { cleanTours } from "../../Helpers/cleaners";
import "./NavBar.scss";

class NavBar extends Component {
  state = { subNav: false };
  fetchYears = () => {
    this.toggleSubNav(false);
    this.props.loadingData(true);
    fetchData(`years?include_show_counts=true`).then(
      results =>
        this.props.allYears(results.data) && this.props.loadingData(false)
    );
  };

  fetchTours = () => {
    this.toggleSubNav(false);
    this.props.loadingData(true);
    fetchData(`tours.json?per_page=99`)
      .then(response => cleanTours(response.data))
      .then(
        results => this.props.allTours(results) && this.props.loadingData(false)
      );
  };

  fetchPhishData = () => {
    this.toggleSubNav(false);
    this.props.loadingData(true);
    fetchMembers(
      `https://cors-anywhere.herokuapp.com/https://peaceful-castle-66511.herokuapp.com/api/v1/phish/members`
    ).then(
      results => this.props.allMembers(results) && this.props.loadingData(false)
    );
  };

  toggleSubNav = bool => {
    this.setState({
      subNav: bool
    });
  };

  render() {
    const { years } = this.props;
    return (
      <header>
        <div className="container">
          <nav className="main-nav">
            <Link
              to="/"
              className="link logo-link"
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
                <NavLink
                  to="/Venues"
                  activeClassName="active"
                  className="link"
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
    );
  }
}

export const mapStateToProps = state => ({
  years: state.years,
  tours: state.tours,
  songs: state.songs,
  venues: state.venues,
  shows: state.shows,
  setList: state.setList,
  isLoading: state.loadingData,
  show: state.show,
  members: state.members,
  member: state.member
});

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
