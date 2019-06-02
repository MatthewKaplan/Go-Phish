import React, { Component } from "react";
import { fetchData } from "../../api/apiCalls";
import { connect } from "react-redux";
import { allSongs, allVenues, loadingData } from "../../Actions/index";
import "./SubNav.scss";
import { cleanSongs, cleanVenues } from "../../Helpers/cleaners";

class SubNav extends Component {
  state = { venues: [], songs: [] };
  componentDidMount() {
    this.fetchVenues();
    this.fetchSongs();
  }

  fetchVenues = () => {
    fetchData(`venues.json?per_page=651`)
      .then(response => cleanVenues(response.data))
      .then(results => this.setState({ venues: results }));
  };

  fetchSongs = () => {
    fetchData(`songs.json?per_page=901`)
      .then(response => cleanSongs(response.data))
      .then(results => this.setState({ songs: results }));
  };

  filterVenues = async path => {
    await this.props.allVenues(this.state.venues);
    const { venues } = this.props;
    const filteredVenues = venues.filter(venue => {
      return venue.name[0] === path;
    });
    this.props.allVenues(filteredVenues);
  };

  filterSongs = async path => {
    await this.props.allSongs(this.state.songs);
    const { songs } = this.props;
    const filteredSongs = songs.filter(song => {
      return song.title[0] === path;
    });
    this.props.allSongs(filteredSongs);
  };

  render() {
    const currentPath = window.location.href;
    let whatToFetch;
    if (currentPath === "http://localhost:3000/Venues") {
      whatToFetch = this.filterVenues;
    } else {
      whatToFetch = this.filterSongs;
    }
    return (
      <nav className="sub-nav">
        <div className="char_link" onClick={() => whatToFetch("A")}>
          A
        </div>
        <div className="char_link" onClick={() => whatToFetch("B")}>
          B
        </div>
        <div className="char_link" onClick={() => whatToFetch("C")}>
          C
        </div>
        <div className="char_link" onClick={() => whatToFetch("D")}>
          D
        </div>
        <div className="char_link" onClick={() => whatToFetch("E")}>
          E
        </div>
        <div className="char_link" onClick={() => whatToFetch("F")}>
          F
        </div>
        <div className="char_link" onClick={() => whatToFetch("G")}>
          G
        </div>
        <div className="char_link" onClick={() => whatToFetch("H")}>
          H
        </div>
        <div className="char_link" onClick={() => whatToFetch("I")}>
          I
        </div>
        <div className="char_link" onClick={() => whatToFetch("J")}>
          J
        </div>
        <div className="char_link" onClick={() => whatToFetch("K")}>
          K
        </div>
        <div className="char_link" onClick={() => whatToFetch("L")}>
          L
        </div>
        <div className="char_link" onClick={() => whatToFetch("M")}>
          M
        </div>
        <div className="char_link" onClick={() => whatToFetch("N")}>
          N
        </div>
        <div className="char_link" onClick={() => whatToFetch("O")}>
          O
        </div>
        <div className="char_link" onClick={() => whatToFetch("P")}>
          P
        </div>
        <div className="char_link" onClick={() => whatToFetch("Q")}>
          Q
        </div>
        <div className="char_link" onClick={() => whatToFetch("R")}>
          R
        </div>
        <div className="char_link" onClick={() => whatToFetch("S")}>
          S
        </div>
        <div className="char_link" onClick={() => whatToFetch("T")}>
          T
        </div>
        <div className="char_link" onClick={() => whatToFetch("U")}>
          U
        </div>
        <div className="char_link" onClick={() => whatToFetch("V")}>
          V
        </div>
        <div className="char_link" onClick={() => whatToFetch("W")}>
          W
        </div>
        <div className="char_link" onClick={() => whatToFetch("X")}>
          X
        </div>
        <div className="char_link" onClick={() => whatToFetch("Y")}>
          Y
        </div>
        <div className="char_link" onClick={() => whatToFetch("Z")}>
          Z
        </div>
      </nav>
    );
  }
}

export const mapStateToProps = state => ({
  songs: state.songs,
  venues: state.venues
});

export const mapDispatchToProps = dispatch => ({
  allSongs: songs => dispatch(allSongs(songs)),
  allVenues: venues => dispatch(allVenues(venues))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubNav);
