import React, { Component } from "react";
import { connect } from "react-redux";
import { userShowList } from "../../Actions/index";
import "./UserStats.scss";

class UserStats extends Component {
  getCities = () => {
    const { userShows } = this.props;
    const cities = userShows.map(shows => shows.location);
    const uniqCities = [...new Set(cities)];
    return <p>{uniqCities.length}</p>;
  };

  render() {
    const { userShows } = this.props;
    console.log(userShows);
    return (
      <div className="user-stats-component">
        <h1>Welcome to your Phish Stat Page:</h1>
        <h2>Number of Shows seen:</h2>
        <p>{userShows.length}</p>
        <h2>Number of cities you've seen Phish in:</h2>
        {this.getCities()}
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
