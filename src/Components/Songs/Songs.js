import React, { Component } from "react";
import "./Songs.scss";

class Songs extends Component {
  render() {
    const { song } = this.props;
    return (
      <div className="songs-container">
        <section className="song-info">
          <h2 className="song-name">{song.title}</h2>
          <h4>Times played: {song.tracks_count}</h4>
        </section>
      </div>
    );
  }
}

export default Songs;
