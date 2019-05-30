import React, { Component } from "react";
import './Songs.scss';

class Songs extends Component {
  render() {
    const { song } = this.props;
    return (
      <div className="songs-container">
        <h2 className="song-name">{song.title}</h2>
      </div>
    );
  }
}

export default Songs;
