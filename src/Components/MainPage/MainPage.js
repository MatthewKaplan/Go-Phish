import React, { Component } from "react";
import "./MainPage.scss";
import { fetchData } from "../../api/apiCalls";
import {
  allSongs,
  allVenues,
  currentSetList,
  loadingData
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
import { cleanSongs, cleanVenues } from "../../Helpers/cleaners";

class MainPage extends Component {
  componentDidMount() {
    this.fetchSongs();
    this.fetchVenues();
  }

  fetchSongs = () => {
    this.props.loadingData(true)
    fetchData(
      `songs.json?per_page=901`
    )
      .then(response => cleanSongs(response.data))
      .then(results => (this.props.allSongs(results), this.props.loadingData(false)));
  };

  fetchVenues = () => {
    this.props.loadingData(true)
    fetchData(
      `venues.json?per_page=651`
    )
      .then(response => cleanVenues(response.data))
      .then(results => (this.props.allVenues(results), this.props.loadingData(false)));
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
    const {isLoading} = this.props;

    switch (currentPath) {
      case "/Years":
        dataToRender = this.renderYears();
        break;
      case "/Tours":
        dataToRender = this.renderTours();
        break;
      case "/Songs":
        dataToRender = this.renderSongs();
        break;
      case "/Venues":
        dataToRender = this.renderVenues();
        break;
      case "/Shows":
        dataToRender = this.renderShows();
        break;
      case "/SetList":
        dataToRender = this.renderSetList();
        break;
      default:
        dataToRender = <HomePage />
        break;
    }

    return (
      <div className="main-page">
        <section className="page-to-render">
          {isLoading === true ? <Loading /> : dataToRender}
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
  isLoading: state.loadingData
});

export const mapDispatchToProps = dispatch => ({
  allSongs: songs => dispatch(allSongs(songs)),
  allVenues: venues => dispatch(allVenues(venues)),
  currentSetList: setList => dispatch(currentSetList(setList)),
  loadingData: bool => dispatch(loadingData(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
