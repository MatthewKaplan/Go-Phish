import React, { Component } from "react";
import { connect } from "react-redux";
import { userShowList } from "../../Actions/index";
import "./UserStats.scss";

class UserStats extends Component {
  state = {
    songStats: true,
    showStats: false,
    tourStats: false,
    totalSongs: false,
    unheardSongs: false
  };
  getCities = () => {
    const cities = this.props.userShows.map(shows => shows.location);
    const uniqCities = [...new Set(cities)];
    return uniqCities.length;
  };

  getStates = () => {
    const cities = this.props.userShows.map(shows => shows.location);
    const uniqCities = [...new Set(cities)];
    const splitCities = uniqCities.map(city => city.split(", "));
    const states = splitCities.map(cities => cities[1]);
    const uniqStates = [...new Set(states)];
    return uniqStates.length;
  };

  getYears = () => {
    const dates = this.props.userShows.map(shows => shows.date);
    const splitDates = dates.map(date => date.split("-"));
    const years = splitDates.map(date => date[0]);
    const uniqYears = [...new Set(years)];
    return uniqYears.length;
  };

  getTours = () => {
    const tours = this.props.userShows.map(shows => shows.tour_id);
    const uniqTours = [...new Set(tours)];
    return uniqTours.length;
  };

  getVenues = () => {
    const venues = this.props.userShows.map(shows => shows.venue.name);
    const uniqVenues = [...new Set(venues)];
    return uniqVenues.length;
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
    return songs.length;
  };

  songTotals = () => {
    const songs = this.props.userShows
      .map(shows => shows.tracks.map(track => track.title))
      .flat();

    songs.sort();

    const totalSongs = [];

    var current = null;
    var cnt = 0;
    for (var i = 0; i < songs.length; i++) {
      if (songs[i] != current) {
        if (cnt > 0) {
          totalSongs.push(current + ": " + cnt);
        }
        current = songs[i];
        cnt = 1;
      } else {
        cnt++;
      }
    }
    if (cnt > 0) {
      totalSongs.push(current + ": " + cnt);
    }
    const totalSplit = totalSongs.map(songs => songs.split(": "));

    return totalSplit.map(total => {
      return (
        <React.Fragment>
          <p className="song-title">{total[0]}</p>
          <p>{total[1]}</p>
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
      return <p>{song}</p>;
    });
  };

  displayTotalSongs = () => {
    this.setState({
      totalSongs: !this.state.totalSongs
    });
  };

  displaySongsNotHeard = () => {
    this.setState({
      unheardSongs: !this.state.unheardSongs
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
    const { songStats, showStats, tourStats, totalSongs, unheardSongs } = this.state;
    return (
      <div className="user-stats-component">
        <div className="all-stats">
          {showStats && (
            <div className="showStats">
              <section className="stat">
                <h2>Number of Shows seen:</h2>
                <p>{userShows.length}</p>
              </section>
              <section className="stat">
                <h2>Precent of All Shows:</h2>
                <p>{((userShows.length / songs.length) * 100).toFixed(2)} %</p>
              </section>
              <section className="stat">
                <h2>Number of Different Years:</h2>
                {this.getYears()}
              </section>
            </div>
          )}
          {tourStats && (
            <div className="tour-stats">
              <section className="stat">
                <h2>Number of Different Cities:</h2>
                {this.getCities()}
              </section>
              <section className="stat">
                <h2>Number of Different US States:</h2>
                {this.getStates()}
              </section>
              <section className="stat">
                <h2>Number of Different Tours:</h2>
                {this.getTours()}
              </section>
              <section className="stat">
                <h2>Number of Different Venues:</h2>
                {this.getVenues()}
              </section>
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
                {this.getTotalSongs()}
              </section>
              <section className="stat">
                <h2>Average Songs Per Show:</h2>
                {Math.floor(this.getTotalSongs() / userShows.length)}
              </section>
              <section
                className="stat pointer"
                onClick={() => this.displayTotalSongs()}
              >
                <h2>Song Totals</h2>
              </section>
              <section
                className="stat pointer"
                onClick={() => this.displaySongsNotHeard()}
              >
                <h2>Songs Not Heard</h2>
              </section>
              <div
                className={totalSongs ? "total-songs-active" : "total-songs"}
              >
                {this.songTotals()}
              </div>
              <div
                className={unheardSongs ? "total-unheard-songs-active" : "total-unheard-songs"}
              >
                {this.songsNotHeard()}
              </div>
            </div>
          )}
        </div>
        <section className="btn-container">
          <button
            className={songStats && "song-stats-btn"}
            onClick={() => this.displayStats(true, false, false)}
          >
            Song Stats
          </button>
          <button
            className={tourStats && "tour-stats-btn"}
            onClick={() => this.displayStats(false, false, true)}
          >
            Location + Tour
          </button>
          <button
            className={showStats && "show-stats-btn"}
            onClick={() => this.displayStats(false, true, false)}
          >
            Show Stats
          </button>
        </section>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  userShows: state.userShows,
  songs: state.songs
});

export const mapDispatchToProps = dispatch => ({
  userShowList: userList => dispatch(userShowList(userList))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserStats);
