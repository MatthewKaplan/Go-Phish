import React, { Component } from "react";
import "./Shows.scss";

class Shows extends Component {
  render() {
    const { show } = this.props;
    console.log(show)

    return (
      <div className="shows-component">
        <h1>{show.venue_name}</h1>
        <p>{show.venue.location}</p>
        <p>{show.date}</p>

      </div>
    );
  }
}

export default Shows;
