import React, { Component } from "react";
import "./Tours.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { currentShows } from "../../Actions/index";
import PropTypes from "prop-types";

export class Tours extends Component {
  handleClick = tour => {
    this.props.currentShows(tour.shows);
  };

  render() {
    const { tour } = this.props;
    return (
      <div
        className="tours-component"
        data-test="tour-btn"
        onClick={() => this.handleClick(tour)}
      >
        <Link to="/Shows">
          <h2 className="tour-name">{tour.name}</h2>
        </Link>
      </div>
    );
  }
}

Tours.propTypes = {
  currentShows: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  currentShows: shows => dispatch(currentShows(shows))
});

export default connect(
  null,
  mapDispatchToProps
)(Tours);
