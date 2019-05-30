import React, { Component } from "react";
import "./Tours.scss";

class Tours extends Component {
  render() {
    const { tour } = this.props;
    return (
      <div className="tours-component">
        <h2 className="tour-name">{tour.name}</h2>
      </div>
    );
  }
}

export default Tours;
