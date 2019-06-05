import React, { Component } from "react";
import { fetchData } from "../../api/apiCalls";
import { connect } from "react-redux";
import { allSongs, allVenues, handleError } from "../../Actions/index";
import "./SubNav.scss";
import { cleanSongs, cleanVenues } from "../../Helpers/cleaners";

export class SubNav extends Component {
  state = { venues: [], songs: [], searchChar: "A" };
  componentDidMount() {
    this.fetchVenues();
    this.fetchSongs();
  }

  fetchVenues = () => {
    fetchData(`venues.json?per_page=651`)
      .then(response => cleanVenues(response.data))
      .then(results => this.setState({ venues: results }))
      .catch(err => this.props.handleError(err.message));
  };

  fetchSongs = () => {
    fetchData(`songs.json?per_page=901`)
      .then(response => cleanSongs(response.data))
      .then(results => this.setState({ songs: results }))
      .catch(err => this.props.handleError(err.message));
  };

  filterVenues = async path => {
    await this.props.allVenues(this.state.venues);
    this.toggleActiveState(path);
    const { venues } = this.props;
    const filteredVenues = venues.filter(venue => {
      return venue.name[0] === path;
    });
    this.props.allVenues(filteredVenues);
  };

  filterSongs = async path => {
    await this.props.allSongs(this.state.songs);
    this.toggleActiveState(path);
    const { songs } = this.props;
    const filteredSongs = songs.filter(song => {
      return song.title[0] === path;
    });
    this.props.allSongs(filteredSongs);
  };

  toggleActiveState = char => {
    this.setState({
      searchChar: char
    });
  };

  render() {
    const currentPath = window.location.href;
    const { searchChar } = this.state;
    let whatToFetch;
    if (currentPath === "http://localhost:3000/Venues") {
      whatToFetch = this.filterVenues;
    } else {
      whatToFetch = this.filterSongs;
    }
    return (
      <nav className="sub-nav">
        <div
          className={searchChar === "A" && "char_link"}
          onClick={() => whatToFetch("A")}
        >
          A
        </div>
        <div
          className={searchChar === "B" && "char_link"}
          onClick={() => whatToFetch("B")}
        >
          B
        </div>
        <div
          className={searchChar === "C" && "char_link"}
          onClick={() => whatToFetch("C")}
        >
          C
        </div>
        <div
          className={searchChar === "D" && "char_link"}
          onClick={() => whatToFetch("D")}
        >
          D
        </div>
        <div
          className={searchChar === "E" && "char_link"}
          onClick={() => whatToFetch("E")}
        >
          E
        </div>
        <div
          className={searchChar === "F" && "char_link"}
          onClick={() => whatToFetch("F")}
        >
          F
        </div>
        <div
          className={searchChar === "G" && "char_link"}
          onClick={() => whatToFetch("G")}
        >
          G
        </div>
        <div
          className={searchChar === "H" && "char_link"}
          onClick={() => whatToFetch("H")}
        >
          H
        </div>
        <div
          className={searchChar === "I" && "char_link"}
          onClick={() => whatToFetch("I")}
        >
          I
        </div>
        <div
          className={searchChar === "J" && "char_link"}
          onClick={() => whatToFetch("J")}
        >
          J
        </div>
        <div
          className={searchChar === "K" && "char_link"}
          onClick={() => whatToFetch("K")}
        >
          K
        </div>
        <div
          className={searchChar === "L" && "char_link"}
          onClick={() => whatToFetch("L")}
        >
          L
        </div>
        <div
          className={searchChar === "M" && "char_link"}
          onClick={() => whatToFetch("M")}
        >
          M
        </div>
        <div
          className={searchChar === "N" && "char_link"}
          onClick={() => whatToFetch("N")}
        >
          N
        </div>
        <div
          className={searchChar === "O" && "char_link"}
          onClick={() => whatToFetch("O")}
        >
          O
        </div>
        <div
          className={searchChar === "P" && "char_link"}
          onClick={() => whatToFetch("P")}
        >
          P
        </div>
        <div
          className={searchChar === "Q" && "char_link"}
          onClick={() => whatToFetch("Q")}
        >
          Q
        </div>
        <div
          className={searchChar === "R" && "char_link"}
          onClick={() => whatToFetch("R")}
        >
          R
        </div>
        <div
          className={searchChar === "S" && "char_link"}
          onClick={() => whatToFetch("S")}
        >
          S
        </div>
        <div
          className={searchChar === "T" && "char_link"}
          onClick={() => whatToFetch("T")}
        >
          T
        </div>
        <div
          className={searchChar === "U" && "char_link"}
          onClick={() => whatToFetch("U")}
        >
          U
        </div>
        <div
          className={searchChar === "V" && "char_link"}
          onClick={() => whatToFetch("V")}
        >
          V
        </div>
        <div
          className={searchChar === "W" && "char_link"}
          onClick={() => whatToFetch("W")}
        >
          W
        </div>
        <div
          className={searchChar === "X" && "char_link"}
          onClick={() => whatToFetch("X")}
        >
          X
        </div>
        <div
          className={searchChar === "Y" && "char_link"}
          onClick={() => whatToFetch("Y")}
        >
          Y
        </div>
        <div
          className={searchChar === "Z" && "char_link"}
          onClick={() => whatToFetch("Z")}
        >
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
  allVenues: venues => dispatch(allVenues(venues)),
  handleError: errorMessage => dispatch(handleError(errorMessage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubNav);
