import React, { Component } from "react";
import { fetchData } from "../../api/apiCalls";
import { connect } from "react-redux";
import { allSongs, allVenues, handleError } from "../../Actions/index";
import "./SubNav.scss";
import { cleanSongs, cleanVenues } from "../../Helpers/cleaners";
import PropTypes from "prop-types";

export class SubNav extends Component {
  state = { venues: [], songs: [], searchChar: "A" };
  componentDidMount() {
    this.fetchVenues();
    this.fetchSongs();
  }

  fetchVenues = async () => {
    try {
      const venuesResults = await fetchData(`venues.json?per_page=651`);
      const cleanVenuesResults = await cleanVenues(venuesResults.data);
      await this.setState({ venues: cleanVenuesResults });
    } catch (error) {
      this.props.handleError(error.message);
    }
  };

  fetchSongs = async () => {
    try {
      const songsResults = await fetchData(`songs.json?per_page=901`);
      const cleanSongsResults = await cleanSongs(songsResults.data);
      await this.setState({ songs: cleanSongsResults });
    } catch (error) {
      this.props.handleError(error.message);
    }
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

  filterSongs = path => {
    this.props.allSongs(this.state.songs);
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

  whatToFetch = (char, path) => {
    if (path === "http://localhost:3000/Venues") {
      this.filterVenues(char);
    } else {
      this.filterSongs(char);
    }
  };

  render() {
    const { searchChar } = this.state;
    return (
      <nav className="sub-nav">
        <div
          className={searchChar === "A" ? "char_link" : null}
          data-test="a-btn"
          onClick={() => this.whatToFetch("A", window.location.href)}
        >
          A
        </div>
        <div
          className={searchChar === "B" ? "char_link" : null}
          data-test="b-btn"
          onClick={() => this.whatToFetch("B", window.location.href)}
        >
          B
        </div>
        <div
          className={searchChar === "C" ? "char_link" : null}
          data-test="c-btn"
          onClick={() => this.whatToFetch("C", window.location.href)}
        >
          C
        </div>
        <div
          className={searchChar === "D" ? "char_link" : null}
          data-test="d-btn"
          onClick={() => this.whatToFetch("D", window.location.href)}
        >
          D
        </div>
        <div
          className={searchChar === "E" ? "char_link" : null}
          data-test="e-btn"
          onClick={() => this.whatToFetch("E", window.location.href)}
        >
          E
        </div>
        <div
          className={searchChar === "F" ? "char_link" : null}
          data-test="f-btn"
          onClick={() => this.whatToFetch("F", window.location.href)}
        >
          F
        </div>
        <div
          className={searchChar === "G" ? "char_link" : null}
          data-test="g-btn"
          onClick={() => this.whatToFetch("G", window.location.href)}
        >
          G
        </div>
        <div
          className={searchChar === "H" ? "char_link" : null}
          data-test="h-btn"
          onClick={() => this.whatToFetch("H", window.location.href)}
        >
          H
        </div>
        <div
          className={searchChar === "I" ? "char_link" : null}
          data-test="i-btn"
          onClick={() => this.whatToFetch("I", window.location.href)}
        >
          I
        </div>
        <div
          className={searchChar === "J" ? "char_link" : null}
          data-test="j-btn"
          onClick={() => this.whatToFetch("J", window.location.href)}
        >
          J
        </div>
        <div
          className={searchChar === "K" ? "char_link" : null}
          data-test="k-btn"
          onClick={() => this.whatToFetch("K", window.location.href)}
        >
          K
        </div>
        <div
          className={searchChar === "L" ? "char_link" : null}
          data-test="l-btn"
          onClick={() => this.whatToFetch("L", window.location.href)}
        >
          L
        </div>
        <div
          className={searchChar === "M" ? "char_link" : null}
          data-test="m-btn"
          onClick={() => this.whatToFetch("M", window.location.href)}
        >
          M
        </div>
        <div
          className={searchChar === "N" ? "char_link" : null}
          data-test="n-btn"
          onClick={() => this.whatToFetch("N", window.location.href)}
        >
          N
        </div>
        <div
          className={searchChar === "O" ? "char_link" : null}
          data-test="o-btn"
          onClick={() => this.whatToFetch("O", window.location.href)}
        >
          O
        </div>
        <div
          className={searchChar === "P" ? "char_link" : null}
          data-test="p-btn"
          onClick={() => this.whatToFetch("P", window.location.href)}
        >
          P
        </div>
        <div
          className={searchChar === "Q" ? "char_link" : null}
          data-test="q-btn"
          onClick={() => this.whatToFetch("Q", window.location.href)}
        >
          Q
        </div>
        <div
          className={searchChar === "R" ? "char_link" : null}
          data-test="r-btn"
          onClick={() => this.whatToFetch("R", window.location.href)}
        >
          R
        </div>
        <div
          className={searchChar === "S" ? "char_link" : null}
          data-test="s-btn"
          onClick={() => this.whatToFetch("S", window.location.href)}
        >
          S
        </div>
        <div
          className={searchChar === "T" ? "char_link" : null}
          data-test="t-btn"
          onClick={() => this.whatToFetch("T", window.location.href)}
        >
          T
        </div>
        <div
          className={searchChar === "U" ? "char_link" : null}
          data-test="u-btn"
          onClick={() => this.whatToFetch("U", window.location.href)}
        >
          U
        </div>
        <div
          className={searchChar === "V" ? "char_link" : null}
          data-test="v-btn"
          onClick={() => this.whatToFetch("V", window.location.href)}
        >
          V
        </div>
        <div
          className={searchChar === "W" ? "char_link" : null}
          data-test="w-btn"
          onClick={() => this.whatToFetch("W", window.location.href)}
        >
          W
        </div>
        <div
          className={searchChar === "X" ? "char_link" : null}
          data-test="x-btn"
          onClick={() => this.whatToFetch("X", window.location.href)}
        >
          X
        </div>
        <div
          className={searchChar === "Y" ? "char_link" : null}
          data-test="y-btn"
          onClick={() => this.whatToFetch("Y", window.location.href)}
        >
          Y
        </div>
        <div
          className={searchChar === "Z" ? "char_link" : null}
          data-test="z-btn"
          onClick={() => this.whatToFetch("Z", window.location.href)}
        >
          Z
        </div>
      </nav>
    );
  }
}

SubNav.propTypes = {
  songs: PropTypes.array,
  venues: PropTypes.array,
  allSongs: PropTypes.func,
  allVenues: PropTypes.func,
  handleError: PropTypes.func
};

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
