import React, { Component } from "react";
import "./Tours.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { currentShows } from "../../Actions/index";

class Tours extends Component {
  handleClick = tour => {
    this.props.currentShows(tour.shows);
  };

  render() {
    const { tour } = this.props;
    return (
      <div className="tours-component" onClick={() => this.handleClick(tour)}>
        <Link to="/Shows">
          <h2 className="tour-name">{tour.name}</h2>
        </Link>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  shows: state.shows
});

export const mapDispatchToProps = dispatch => ({
  currentShows: shows => dispatch(currentShows(shows))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tours);
