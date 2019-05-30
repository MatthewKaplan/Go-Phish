import React, { Component } from "react";

class Songs extends Component {
  render() {
    const { song } = this.props;
    return (
      <div className="songs-container">
        <h2>{song.title}</h2>
      </div>
    );
  }
}

export default Songs;
