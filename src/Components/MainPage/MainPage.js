import React, { Component } from "react";
import "./MainPage.scss";
import { fetchData, fetchMembers } from "../../api/apiCalls";
import {
  allSongs,
  allVenues,
  currentSetList,
  loadingData,
  randomShow,
  upcomingShows
} from "../../Actions/index";
import { connect } from "react-redux";
import Tours from "../Tours/Tours";
import Years from "../Years/Years";
import Songs from "../Songs/Songs";
import Venues from "../Venues/Venues";
import Shows from "../Shows/Shows";
import HomePage from "../HomePage/HomePage";
import SetLists from "../SetLists/SetLists";
import Loading from "../Loading/Loading";
import {
  cleanSongs,
  cleanVenues,
  cleanRandomShow
} from "../../Helpers/cleaners";

class MainPage extends Component {
  state = { randomShowFetching: false };

  componentDidMount() {
    this.fetchSongs();
    this.fetchVenues();
    this.fetchRandomShow();
    this.fetchUpcomingShows();
  }

  fetchUpcomingShows = () => {
    fetchMembers('https://cors-anywhere.herokuapp.com/https://mighty-mountain-16368.herokuapp.com/api/v1/phishTour')
      .then(response => this.props.upcomingShows(response))
  }

  fetchRandomShow = () => {
    this.props.loadingData(true);
    this.setState({ randomShowFetching: true });
    fetchData(`random-show`)
      .then(response => cleanRandomShow(response.data))
      .then(
        results =>
          this.props.randomShow(results) &&
          this.setState({ randomShowFetching: false })
      );
  };

  fetchSongs = () => {
    this.props.loadingData(true);
    fetchData(`songs.json?per_page=901`)
      .then(response => cleanSongs(response.data))
      .then(
        results => this.props.allSongs(results) && this.props.loadingData(false)
      );
  };

  fetchVenues = () => {
    this.props.loadingData(true);
    fetchData(`venues.json?per_page=651`)
      .then(response => cleanVenues(response.data))
      .then(
        results =>
          this.props.allVenues(results) && this.props.loadingData(false)
      );
  };

  pathToRender = () => {
    const currentPath = this.props.location.pathname;
    const { years, tours, songs, shows, venues } = this.props;

    switch (currentPath) {
      case "/Years":
        return years.map(year => <Years key={year.date} year={year} />);
      case "/Tours":
        return tours.map(tour => <Tours key={tour.id} tour={tour} />);
      case "/Songs":
        return songs.map(song => <Songs key={song.id} song={song} />);
      case "/Venues":
        return venues.map(venue => <Venues key={venue.id} venue={venue} />);
      case "/Shows":
        return shows.map(show => <Shows key={show.id} show={show} />);
      case "/SetList":
        return <SetLists />;
      default:
        return <HomePage />;
    }
  };

  render() {
    const { isLoading } = this.props;
    const { randomShowFetching } = this.state;

    return (
      <div className="main-page">
        <section className="page-to-render">
          {isLoading === true || randomShowFetching === true ? (
            <Loading />
          ) : (
            this.pathToRender()
          )}
        </section>
      </div>
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
  members: state.members
});

export const mapDispatchToProps = dispatch => ({
  allSongs: songs => dispatch(allSongs(songs)),
  allVenues: venues => dispatch(allVenues(venues)),
  currentSetList: setList => dispatch(currentSetList(setList)),
  loadingData: bool => dispatch(loadingData(bool)),
  randomShow: show => dispatch(randomShow(show)),
  upcomingShows: upcoming => dispatch(upcomingShows(upcoming))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
