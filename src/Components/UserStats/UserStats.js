import React, { Component } from "react";
import { connect } from "react-redux";
import { userShowList } from "../../Actions/index";
import "./UserStats.scss";

class UserStats extends Component {
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

  mostVisitedVenue = () => {
    const venues = this.props.userShows.map(shows => shows.venue.name);
    return venues
      .sort(
        (a, b) =>
          venues.filter(v => v === a).length -
          venues.filter(v => v === b).length
      )
      .pop();
  };

  getSongs = () => {
    const songs = this.props.userShows
      .map(shows => shows.tracks.map(track => track.title))
      .flat();
    const uniqSongs = [...new Set(songs)];
    return uniqSongs.length;
  };

  mostHeard = () => {
    const songs = this.props.userShows
      .map(shows => shows.tracks.map(track => track.title))
      .flat();
    return songs
      .sort(
        (a, b) =>
          songs.filter(v => v === a).length - songs.filter(v => v === b).length
      )
      .pop();
  };

  render() {
    const { userShows } = this.props;
    console.log(userShows);
    return (
      <div className="user-stats-component">
        <h1>Welcome to your Phish Stat Page:</h1>
        <h2>Number of Shows seen:</h2>
        <p>{userShows.length}</p>
        <h2>Precent of All Shows:</h2>
        <p>{((userShows.length / 1587) * 100).toFixed(2)} %</p>
        <h2>Number of Different Cities:</h2>
        {this.getCities()}
        <h2>Number of Different US States:</h2>
        {this.getStates()}
        <h2>Number of Different Years:</h2>
        {this.getYears()}
        <h2>Number of Different Tours:</h2>
        {this.getTours()}
        <h2>Number of Different Venues:</h2>
        {this.getVenues()}
        <h2>Number of Different Songs:</h2>
        {this.getSongs()}
        <h2>Precent of All Songs:</h2>
        <p>{((parseInt(this.getSongs()) / 901) * 100).toFixed(2)} %</p>
        <h2>Most Heard Song:</h2>
        {this.mostHeard()}
        <h2>Most Visited Venue:</h2>
        {this.mostVisitedVenue()}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  userShows: state.userShows
});

export const mapDispatchToProps = dispatch => ({
  userShowList: userList => dispatch(userShowList(userList))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserStats);
