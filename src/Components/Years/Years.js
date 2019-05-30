import React, {Component} from "react";
import { fetchData } from "../../api/apiCalls";
import {cleanShows} from "../../Helpers/cleaners";
import {connect} from "react-redux";
import {currentShows} from "../../Actions/index";
import './Years.scss';

class Years extends Component {

  handleClick = (year) => {
    fetchData(`https://cors-anywhere.herokuapp.com/http://phish.in/api/v1/years/${year}`)
      .then(response => cleanShows(response.data))
      .then(result => this.props.currentShows(result))
  }

  render() {
    const { year } = this.props;
    return (
      <div className="years-component" onClick={() => this.handleClick(year.date)}>
        <h1 className="years">{year.date}</h1>
      <hr/>
      </div>
    )
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
)(Years);
