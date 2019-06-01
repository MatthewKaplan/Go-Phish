import React, { Component } from "react";
import { fetchData } from "../../api/apiCalls";
import { cleanShows } from "../../Helpers/cleaners";
import { connect } from "react-redux";
import { currentShows, loadingData } from "../../Actions/index";
import { Link } from "react-router-dom";
import "./Years.scss";

class Years extends Component {
  handleClick = year => {
    this.props.loadingData(true)
    fetchData(
      `years/${year}`
    )
      .then(response => cleanShows(response.data))
      .then(result => (this.props.currentShows(result), this.props.loadingData(false)));
  };

  render() {
    const { year } = this.props;
    return (
      <div
        className="years-component"
        onClick={() => this.handleClick(year.date)}
      >
        <Link to="/Shows">
          <h1 className="years">{year.date}</h1>
        </Link>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  shows: state.shows
});

export const mapDispatchToProps = dispatch => ({
  currentShows: shows => dispatch(currentShows(shows)),
  loadingData: bool => dispatch(loadingData(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Years);
