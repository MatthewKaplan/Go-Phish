import React, { Component } from "react";
import "./Songs.scss";

export const Songs = ({ song }) => {
  return (
    <div className="songs-container">
      <section className="song-info">
        <h2 className="song-name">{song.title}</h2>
        <h4>Times played: {song.tracks_count}</h4>
      </section>
    </div>
  );
};
