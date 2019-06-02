import React, { Component } from "react";
import "./UpcomingShows.scss";

class UpcomingShows extends Component {
  componentDidMount() {
    this.splitDate();
  }

  splitDate = () => {
    const { shows } = this.props;
    const removeCommas = shows.date.replace(/,/g, "");
    const splitDates = removeCommas.split(" ");
    return (
      <React.Fragment>
        <p className="month">{splitDates[0]}</p>
        <p className="day">{splitDates[1]}</p>
        <p className="year">{splitDates[2]}</p>
      </React.Fragment>
    );
  };

  render() {
    const { shows } = this.props;
    return (
        <div className="upcoming-shows-component">
          <article className="show-card">
            <section className="show-date">{this.splitDate()}</section>
            <section className="venue-information">
              <h1>{shows.venue_name}</h1>
              <p className="show-location">{shows.location}</p>
            </section>
            <section className="ticket-btn">
              <button className="tickets">Tickets</button>
            </section>
          </article>
          <hr className="bottom-border" />
        </div>
    );
  }
}

export default UpcomingShows;
