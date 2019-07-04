import React, { Component } from "react";
import { fetchData } from "../../api/apiCalls";
import { cleanShows } from "../../Helpers/cleaners";
import { connect } from "react-redux";
import { currentShows, loadingData, handleError } from "../../Actions/index";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export class Years extends Component {
  handleClick = async year => {
    this.props.loadingData(true);
    try {
      const yearResults = await fetchData(`years/${year}`);
      const cleanYearResults = await cleanShows(yearResults.data);
      this.props.currentShows(cleanYearResults);
      this.props.loadingData(false);
    } catch (error) {
      this.props.handleError(error.message);
    }
  };

  render() {
    const { year } = this.props;
    return (
      <div
        className="years-component"
        data-test="years-btn"
        onClick={() => this.handleClick(year.date)}
      >
        <Link to="/Shows">
          <h1 className="years">{year.date}</h1>
        </Link>
      </div>
    );
  }
}

Years.propTypes = {
  currentShows: PropTypes.func,
  loadingData: PropTypes.func,
  handleError: PropTypes.func
};

export const mapDispatchToProps = dispatch => ({
  currentShows: shows => dispatch(currentShows(shows)),
  loadingData: bool => dispatch(loadingData(bool)),
  handleError: errorMessage => dispatch(handleError(errorMessage))
});

export default connect(
  null,
  mapDispatchToProps
)(Years);
