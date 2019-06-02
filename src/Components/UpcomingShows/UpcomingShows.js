import React, { Component } from "react";
import "./UpcomingShows.scss";

class UpcomingShows extends Component {
  componentDidMount() {
    this.splitDate()
  }

  splitDate = () => {
    const {shows} = this.props;
    const splitDates = shows.date.split(" ")
    return (
      <React.Fragment>
        <p>{splitDates[0]}</p>
        <p>{splitDates[1]}</p>
        <p>{splitDates[2]}</p>
      </React.Fragment>
    )
  }



  render() {
    const { shows } = this.props;
    return (
      <div className="upcoming-shows-component">
        <section className="show-date">{this.splitDate()}</section>
        <h1>{shows.venue_name}</h1>
      </div>
    );
  }
}

export default UpcomingShows;
