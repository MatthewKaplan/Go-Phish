import React from "react";

export const Venues = ({ venue }) => {
  return (
    <div className="venues-component">
      <section className="venue-top">
        <h2 className="venue-name">{venue.name}</h2>
      </section>
      <section className="venue-bottom">
        <article className="venue-info">
          <h4>Location:</h4>
          <p>{venue.location}</p>
          <h4>Amount of shows at venue:</h4>
          <p>{venue.shows_count}</p>
          <br />
          <br />
          <section className="right-info">
            <h4>First time playing venue:</h4>
            <p>{venue.show_dates[0]}</p>
            <h4>Last time playing venue:</h4>
            <p>{venue.show_dates.slice(-1)[0]}</p>
          </section>
        </article>
      </section>
    </div>
  );
};
