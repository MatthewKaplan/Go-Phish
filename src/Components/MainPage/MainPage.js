import React, { Component } from "react";
import "./MainPage.scss";
import { fetchData } from "../../api/apiCalls";
import {
  allMembers,
  currentMember,
  allYears,
  allTours,
  allSongs,
  allVenues,
  currentSetList
} from "../../Actions/index";
import { connect } from "react-redux";
import Tours from "../Tours/Tours";
import Years from "../Years/Years";
import Songs from "../Songs/Songs";
import Venues from "../Venues/Venues";
import Shows from "../Shows/Shows";
import SetLists from "../SetLists/SetLists";
import { cleanSongs, cleanVenues, cleanTours } from "../../Helpers/cleaners";

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
    )
      .then(response => cleanTours(response.data))
      .then(results => this.props.allTours(results));
  };

  fetchSongs = () => {
    fetchData(
      `https://cors-anywhere.herokuapp.com/http://phish.in/api/v1/songs.json?per_page=901`
    )
      .then(response => cleanSongs(response.data))
      .then(results => this.props.allSongs(results));
  };

  fetchVenues = () => {
    fetchData(
      `https://cors-anywhere.herokuapp.com/http://phish.in/api/v1/venues.json?per_page=651`
    )
      .then(response => cleanVenues(response.data))
      .then(results => this.props.allVenues(results));
  };

  renderYears = () => {
    const { years } = this.props;
    return years.map(year => <Years key={year.date} year={year} />);
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

  renderShows = () => {
    const { shows } = this.props;
    return shows.map(show => <Shows key={show.id} show={show} />);
  };

  renderSetList = () => {
    const { setList } = this.props;
    return setList.map(set => <SetLists key={set.id} setList={set} />);
  };

  render() {
    const currentPath = this.props.location.pathname;
    let dataToRender;

    if (currentPath === "/Years") {
      dataToRender = this.renderYears();
    } else if (currentPath === "/Tours") {
      dataToRender = this.renderTours();
    } else if (currentPath === "/Songs") {
      dataToRender = this.renderSongs();
    } else if (currentPath === "/Venues") {
      dataToRender = this.renderVenues();
    } else if (currentPath === "/Shows") {
      dataToRender = this.renderShows();
    } else if (currentPath === "/SetList") {
      dataToRender = this.renderSetList();
    } else {
      return true;
    }

    return (
      <div className="main-page">
        <section className="page-to-render">{dataToRender}</section>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  members: state.members,
  member: state.member,
  years: state.years,
  tours: state.tours,
  songs: state.songs,
  venues: state.venues,
  shows: state.shows,
  setList: state.setList
});

export const mapDispatchToProps = dispatch => ({
  allMembers: members => dispatch(allMembers(members)),
  currentMember: member => dispatch(currentMember(member)),
  allYears: years => dispatch(allYears(years)),
  allTours: tours => dispatch(allTours(tours)),
  allSongs: songs => dispatch(allSongs(songs)),
  allVenues: venues => dispatch(allVenues(venues)),
  currentSetList: setList => dispatch(currentSetList(setList))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
