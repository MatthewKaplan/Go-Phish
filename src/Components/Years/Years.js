import React, {Component} from "react";
import { fetchData } from "../../api/apiCalls";
import {cleanShows} from "../../Helpers/cleaners";
import './Years.scss';

class Years extends Component {

  handleClick = (year) => {
    fetchData(`https://cors-anywhere.herokuapp.com/http://phish.in/api/v1/years/${year}`)
      .then(response => cleanShows(response.data))
      .then(result => console.log(result))
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

export default Years;