import React, { Component } from "react";
import { fetchData } from "../../api/apiCalls";
import {
  allMembers,
  currentMember,
  allYears,
  allTours,
  allSongs,
  allVenues
} from "../../Actions/index";
import { connect } from "react-redux";
import Tours from "../Tours/Tours";
import Years from "../Years/Years";
import Songs from "../Songs/Songs";
import Venues from "../Venues/Venues";
import {cleanSongs} from "../../Helpers/cleaners";

class MainPage extends Component {
  componentDidMount() {
    this.fetchYears();
    this.fetchTours();
    this.fetchSongs();
    this.fetchVenues();
  }

  fetchYears = () => {
    fetchData(
      `https://cors-anywhere.herokuapp.com/http://phish.in/api/v1/years?include_show_counts=true`
    ).then(results => this.props.allYears(results.data));
  };

  fetchTours = () => {
    fetchData(
      `https://cors-anywhere.herokuapp.com/http://phish.in/api/v1/tours.json?per_page=99`
    ).then(results => this.props.allTours(results.data));
  };

  fetchSongs = () => {
    fetchData(
      `https://cors-anywhere.herokuapp.com/http://phish.in/api/v1/songs.json?per_page=901`
    )
    .then(response => cleanSongs(response.data))
    .then(results => console.log(results));
  };

  fetchVenues = () => {
    fetchData(
      `https://cors-anywhere.herokuapp.com/http://phish.in/api/v1/venues.json?per_page=651`
    ).then(results => this.props.allVenues(results.data));
  };

  renderYears = () => {
    const { years } = this.props;
    return years.map(year => <Years key={years.id} year={year} />);
  };

  renderTours = () => {
    const { tours } = this.props;
    return tours.map(tour => <Tours key={tour.id} tour={tour} />);
  };

  renderSongs = () => {
    const { songs } = this.props;
    return songs.map(song => <Songs key={song.id} song={song} />);
  };

  renderVenues = () => {
    const { venues } = this.props;
    return venues.map(venue => <Venues key={venue.id} venue={venue} />);
  };

  render() {
    const currentPath = this.props.location.pathname;
    console.log(currentPath);

    let dataToRender;

    if (currentPath === "/Years") {
      dataToRender = this.renderYears();
    } else if (currentPath === "/Tours") {
      dataToRender = this.renderTours();
    } else if (currentPath === "/Songs") {
      dataToRender = this.renderSongs();
    } else {
      dataToRender = this.renderVenues();
    }

    return <div className="main-page">{dataToRender}</div>;
  }
}

export const mapStateToProps = state => ({
  members: state.members,
  member: state.member,
  years: state.years,
  tours: state.tours,
  songs: state.songs,
  venues: state.venues
});

export const mapDispatchToProps = dispatch => ({
  allMembers: members => dispatch(allMembers(members)),
  currentMember: member => dispatch(currentMember(member)),
  allYears: years => dispatch(allYears(years)),
  allTours: tours => dispatch(allTours(tours)),
  allSongs: songs => dispatch(allSongs(songs)),
  allVenues: venues => dispatch(allVenues(venues))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
