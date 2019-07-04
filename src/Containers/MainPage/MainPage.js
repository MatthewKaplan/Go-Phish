import React, { Component } from "react";
import { fetchData, fetchMembers } from "../../api/apiCalls";
import {
  allSongs,
  allVenues,
  loadingData,
  randomShow,
  upcomingShows,
  handleError
} from "../../Actions/index";
import { connect } from "react-redux";
import Tours from "../../Containers/Tours/Tours";
import Years from "../../Containers/Years/Years";
import { Songs } from "../../Components/Songs/Songs";
import { Venues } from "../../Components/Venues/Venues";
import Shows from "../../Containers/Shows/Shows";
import HomePage from "../../Containers/HomePage/HomePage";
import SetLists from "../../Containers/SetLists/SetLists";
import { Loading } from "../../Components/Loading/Loading";
import UserStats from "../../Containers/UserStats/UserStats";
import {
  cleanSongs,
  cleanVenues,
  cleanRandomShow
} from "../../Helpers/cleaners";
import PropTypes from "prop-types";


export class MainPage extends Component {
  state = { randomShowFetching: false };

  componentDidMount() {
    this.fetchSongs();
    this.fetchVenues();
    this.fetchRandomShow();
    this.fetchUpcomingShows();
  }

  fetchUpcomingShows = async () => {
    if (this.props.upcoming.length === 0) {
      const url = "https://cors-anywhere.herokuapp.com/https://mighty-mountain-16368.herokuapp.com/api/v1/phishTour";
      try {
        const upcomingShowsResult = await fetchMembers(url);
        this.props.upcomingShows(upcomingShowsResult)
      } catch (error) {
        this.props.handleError(error.message)
      }
    }
  };

  fetchRandomShow = async () => {
    if (this.props.show.length === 0) {
      this.setState({ randomShowFetching: true });
      try {
        const randomShow = await fetchData(`random-show`);
        const cleanRandom = cleanRandomShow(randomShow.data);
        this.props.randomShow(cleanRandom);
        this.setState({ randomShowFetching: false });
      } catch (error) {
        this.props.handleError(error.message);
      }
    }
  };

  fetchSongs = async () => {
    if (this.props.songs.length === 0) {
      this.props.loadingData(true);
      try {
        const songsResults = await fetchData(`songs.json?per_page=901`);
        const cleanSongsResults = cleanSongs(songsResults.data);
        this.props.allSongs(cleanSongsResults);
        this.props.loadingData(false);
      } catch (error) {
        this.props.handleError(error.message);
      }
    }
  };

  fetchVenues = async () => {
    if (this.props.venues.length === 0) {
      this.props.loadingData(true);
      try {
        const venueResults = await fetchData(`venues.json?per_page=651`);
        const cleanVenueResults = cleanVenues(venueResults.data);
        this.props.allVenues(cleanVenueResults);
        this.props.loadingData(false);
      } catch (error) {
        this.props.handleError(error.message);
      }
    }
  };

  componentToRender = currentPath => {
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
      case "/UserStats":
        return <UserStats />;
      default:
        return <HomePage />;
    }
  };

  render() {
    const { isLoading } = this.props;
    console.log(isLoading)
    const { randomShowFetching } = this.state;

    return (
      <div className="main-page">
        <section className="page-to-render">
          {isLoading === true || randomShowFetching === true ? (
            <Loading />
          ) : (
            this.componentToRender(this.props.location.pathname)
          )}
        </section>
      </div>
    );
  }
}

MainPage.propTypes = {
  years: PropTypes.array,
  songs: PropTypes.array,
  venues: PropTypes.array,
  shows: PropTypes.array,
  isLoading: PropTypes.bool,
  allSongs: PropTypes.func,
  allVenues: PropTypes.func,
  loadingData: PropTypes.func,
  randomShow: PropTypes.func,
  upcomingShows: PropTypes.func,
  handleError: PropTypes.func
};

export const mapStateToProps = state => ({
  years: state.years,
  tours: state.tours,
  songs: state.songs,
  venues: state.venues,
  shows: state.shows,
  isLoading: state.isLoading,
  upcoming: state.upcoming,
  show: state.show
});

export const mapDispatchToProps = dispatch => ({
  allSongs: songs => dispatch(allSongs(songs)),
  allVenues: venues => dispatch(allVenues(venues)),
  loadingData: isLoading => dispatch(loadingData(isLoading)),
  randomShow: show => dispatch(randomShow(show)),
  upcomingShows: upcoming => dispatch(upcomingShows(upcoming)),
  handleError: errorMessage => dispatch(handleError(errorMessage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
