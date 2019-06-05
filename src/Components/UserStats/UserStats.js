import React, { Component } from "react";
import { connect } from "react-redux";
import "./UserStats.scss";
import PropTypes from "prop-types";
const ids = require("shortid");

export class UserStats extends Component {
  state = {
    songStats: false,
    showStats: true,
    tourStats: false,
    totalSongs: false,
    unheardSongs: false,
    showLocation: false,
    showVenues: false,
    displayShows: false,
    displayYears: false
  };
  getCities = () => {
    const cities = this.props.userShows.map(shows => shows.location);
    const uniqCities = [...new Set(cities)];
    return uniqCities;
  };

  getStates = () => {
    const uniqCities = this.getCities();
    const splitCities = uniqCities.map(city => city.split(", "));
    const states = splitCities.map(cities => cities[1]);
    const uniqStates = [...new Set(states)];
    return uniqStates;
  };

  getYears = () => {
    const dates = this.props.userShows.map(shows => shows.date);
    const splitDates = dates.map(date => date.split("-"));
    const years = splitDates.map(date => date[0]);
    const uniqYears = [...new Set(years)];
    return uniqYears;
  };

  getTours = () => {
    const tours = this.props.userShows.map(shows => shows.tour_id);
    const uniqTours = [...new Set(tours)];
    return uniqTours;
  };

  getVenues = () => {
    const venues = this.props.userShows.map(shows => shows.venue.name);
    const uniqVenues = [...new Set(venues)];
    return uniqVenues;
  };

  getSongs = () => {
    const songs = this.props.userShows
      .map(shows => shows.tracks.map(track => track.title))
      .flat();
    const uniqSongs = [...new Set(songs)];
    return uniqSongs;
  };

  getTotalSongs = () => {
    const songs = this.props.userShows
      .map(shows => shows.tracks.map(track => track.title))
      .flat();
    return songs;
  };

  songTotals = arr => {
    arr.sort();
    const total = [];

    var current = null;
    var cnt = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== current) {
        if (cnt > 0) {
          total.push(current + ": " + cnt);
        }
        current = arr[i];
        cnt = 1;
      } else {
        cnt++;
      }
    }
    if (cnt > 0) {
      total.push(current + ": " + cnt);
    }
    const totalSplit = total.map(songs => songs.split(": "));

    return totalSplit.map(total => {
      return (
        <React.Fragment key={ids.generate()}>
          <p className="song-title" key={ids.generate()}>
            {total[0]}
          </p>
          <p key={ids.generate()}>{total[1]}</p>
        </React.Fragment>
      );
    });
  };

  songsNotHeard = () => {
    const songsHeard = this.getSongs();
    const allSongs = this.props.songs.map(song => song.title);

    const notHeard = allSongs.filter(function(n) {
      return !this.has(n);
    }, new Set(songsHeard));

    return notHeard.map(song => {
      return <p key={ids.generate()}>{song}</p>;
    });
  };

  displayStats = (songBool, showBool, tourBool) => {
    this.setState({
      songStats: songBool,
      showStats: showBool,
      tourStats: tourBool
    });
  };

  render() {
    const { userShows, songs } = this.props;
    const {
      songStats,
      showStats,
      tourStats,
      totalSongs,
      unheardSongs,
      showLocation,
      showVenues,
      displayShows,
      displayYears
    } = this.state;
    return (
      <div className="user-stats-component">
        <div className="all-stats">
          {showStats && (
            <div className="showStats">
              <section
                className="stat pointer"
                data-test="number-of-shows"
                onClick={() => this.setState({ displayShows: !displayShows })}
              >
                <h2>Number of Shows seen:</h2>
                <p>{userShows.length}</p>
              </section>
              <section className="stat">
                <h2>Precent of All Shows:</h2>
                <p>{((userShows.length / songs.length) * 100).toFixed(2)} %</p>
              </section>
              <section
                className="stat pointer"
                data-test="display-years"
                onClick={() => this.setState({ displayYears: !displayYears })}
              >
                <h2>Number of Different Years:</h2>
                {this.getYears().length}
              </section>
              <div
                className={
                  displayYears ? "display-years-active" : "display-years"
                }
              >
                {this.getYears().map(year => (
                  <p key={ids.generate()}>{year}</p>
                ))}
              </div>
              <div
                className={
                  displayShows ? "display-shows-active" : "display-shows"
                }
              >
                {userShows.map(shows => {
                  return (
                    <React.Fragment key={ids.generate()}>
                      <p key={ids.generate()}>{shows.venue_name}</p>
                      <p key={ids.generate()}>{shows.location}</p>
                      <p key={ids.generate()}>{shows.date}</p>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          )}
          {tourStats && (
            <div className="tour-stats">
              <section
                className="stat pointer"
                data-test="display-location"
                onClick={() => this.setState({ showLocation: !showLocation })}
              >
                <h2>Number of Different Cities:</h2>
                {this.getCities().length}
              </section>
              <section className="stat">
                <h2>Number of Different US States:</h2>
                {this.getStates().length}
              </section>
              <section className="stat">
                <h2>Number of Different Tours:</h2>
                {this.getTours().length}
              </section>
              <section
                className="stat pointer"
                data-test="display-venues"
                onClick={() => this.setState({ showVenues: !showVenues })}
              >
                <h2>Number of Different Venues:</h2>
                {this.getVenues().length}
              </section>
              <div
                className={
                  showLocation ? "show-location-active" : "show-location"
                }
              >
                {this.songTotals(
                  this.props.userShows.map(shows => shows.location)
                )}
              </div>
              <div
                className={
                  showVenues ? "show-location-active" : "show-location"
                }
              >
                {this.songTotals(
                  this.props.userShows.map(shows => shows.venue.name)
                )}
              </div>
            </div>
          )}

          {songStats && (
            <div className="song-stats">
              <section className="stat">
                <h2>Number of Different Songs:</h2>
                {this.getSongs().length}
              </section>
              <section className="stat">
                <h2>Precent of All Songs:</h2>
                <p>{((this.getSongs().length / 901) * 100).toFixed(2)} %</p>
              </section>
              <section className="stat">
                <h2>Number of Songs:</h2>
                {this.getTotalSongs().length}
              </section>
              <section className="stat">
                <h2>Average Songs Per Show:</h2>
                {Math.floor(this.getTotalSongs().length / userShows.length)}
              </section>
              <section
                className="stat pointer"
                data-test="display-totalSongs"
                onClick={() => this.setState({ totalSongs: !totalSongs })}
              >
                <h2>Song Totals</h2>
              </section>
              <section
                className="stat pointer"
                data-test="display-unheardSongs"
                onClick={() => this.setState({ unheardSongs: !unheardSongs })}
              >
                <h2>Songs Not Heard</h2>
              </section>
              <div
                className={totalSongs ? "total-songs-active" : "total-songs"}
              >
                {this.songTotals(this.getTotalSongs())}
              </div>
              <div
                className={
                  unheardSongs
                    ? "total-unheard-songs-active"
                    : "total-unheard-songs"
                }
              >
                {this.songsNotHeard()}
              </div>
            </div>
          )}
        </div>
        <section className="btn-container">
          <button
            data-test="song-stats"
            className={songStats ? "song-stats-btn" : null}
            onClick={() => this.displayStats(true, false, false)}
          >
            Song Stats
          </button>
          <button
            data-test="tour-stats"
            className={tourStats ? "tour-stats-btn" : null}
            onClick={() => this.displayStats(false, false, true)}
          >
            Location + Tour
          </button>
          <button
            data-test="show-stats"
            className={showStats ? "show-stats-btn" : null}
            onClick={() => this.displayStats(false, true, false)}
          >
            Show Stats
          </button>
        </section>
      </div>
    );
  }
}

UserStats.propTypes = {
  userShows: PropTypes.array,
  songs: PropTypes.array
};

export const mapStateToProps = state => ({
  userShows: state.userShows,
  songs: state.songs
});

export default connect(
  mapStateToProps,
  null
)(UserStats);
