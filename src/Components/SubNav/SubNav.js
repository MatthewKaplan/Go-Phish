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

  whatToFetch = char => {
    const currentPath = window.location.href;
    if (currentPath === "http://localhost:3000/Venues") {
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
          data-test='a-btn'
          onClick={() => this.whatToFetch("A")}
        >
          A
        </div>
        <div
          className={searchChar === "B" ? "char_link" : null}
          data-test='b-btn'
          onClick={() => this.whatToFetch("B")}
        >
          B
        </div>
        <div
          className={searchChar === "C" ? "char_link" : null}
          data-test='c-btn'
          onClick={() => this.whatToFetch("C")}
        >
          C
        </div>
        <div
          className={searchChar === "D" ? "char_link" : null}
          data-test='d-btn'
          onClick={() => this.whatToFetch("D")}
        >
          D
        </div>
        <div
          className={searchChar === "E" ? "char_link" : null}
          data-test='e-btn'
          onClick={() => this.whatToFetch("E")}
        >
          E
        </div>
        <div
          className={searchChar === "F" ? "char_link" : null}
          data-test='f-btn'
          onClick={() => this.whatToFetch("F")}
        >
          F
        </div>
        <div
          className={searchChar === "G" ? "char_link" : null}
          data-test='g-btn'
          onClick={() => this.whatToFetch("G")}
        >
          G
        </div>
        <div
          className={searchChar === "H" ? "char_link" : null}
          data-test='h-btn'
          onClick={() => this.whatToFetch("H")}
        >
          H
        </div>
        <div
          className={searchChar === "I" ? "char_link" : null}
          data-test='i-btn'
          onClick={() => this.whatToFetch("I")}
        >
          I
        </div>
        <div
          className={searchChar === "J" ? "char_link" : null}
          data-test='j-btn'
          onClick={() => this.whatToFetch("J")}
        >
          J
        </div>
        <div
          className={searchChar === "K" ? "char_link" : null}
          data-test='k-btn'
          onClick={() => this.whatToFetch("K")}
        >
          K
        </div>
        <div
          className={searchChar === "L" ? "char_link" : null}
          data-test='l-btn'
          onClick={() => this.whatToFetch("L")}
        >
          L
        </div>
        <div
          className={searchChar === "M" ? "char_link" : null}
          data-test='m-btn'
          onClick={() => this.whatToFetch("M")}
        >
          M
        </div>
        <div
          className={searchChar === "N" ? "char_link" : null}
          data-test='n-btn'
          onClick={() => this.whatToFetch("N")}
        >
          N
        </div>
        <div
          className={searchChar === "O" ? "char_link" : null}
          data-test='o-btn'
          onClick={() => this.whatToFetch("O")}
        >
          O
        </div>
        <div
          className={searchChar === "P" ? "char_link" : null}
          data-test='p-btn'
          onClick={() => this.whatToFetch("P")}
        >
          P
        </div>
        <div
          className={searchChar === "Q" ? "char_link" : null}
          data-test='q-btn'
          onClick={() => this.whatToFetch("Q")}
        >
          Q
        </div>
        <div
          className={searchChar === "R" ? "char_link" : null}
          data-test='r-btn'
          onClick={() => this.whatToFetch("R")}
        >
          R
        </div>
        <div
          className={searchChar === "S" ? "char_link" : null}
          data-test='s-btn'
          onClick={() => this.whatToFetch("S")}
        >
          S
        </div>
        <div
          className={searchChar === "T" ? "char_link" : null}
          data-test='t-btn'
          onClick={() => this.whatToFetch("T")}
        >
          T
        </div>
        <div
          className={searchChar === "U" ? "char_link" : null}
          data-test='u-btn'
          onClick={() => this.whatToFetch("U")}
        >
          U
        </div>
        <div
          className={searchChar === "V" ? "char_link" : null}
          data-test='v-btn'
          onClick={() => this.whatToFetch("V")}
        >
          V
        </div>
        <div
          className={searchChar === "W" ? "char_link" : null}
          data-test='w-btn'
          onClick={() => this.whatToFetch("W")}
        >
          W
        </div>
        <div
          className={searchChar === "X" ? "char_link" : null}
          data-test='x-btn'
          onClick={() => this.whatToFetch("X")}
        >
          X
        </div>
        <div
          className={searchChar === "Y" ? "char_link" : null}
          data-test='y-btn'
          onClick={() => this.whatToFetch("Y")}
        >
          Y
        </div>
        <div
          className={searchChar === "Z" ? "char_link" : null}
          data-test='z-btn'
          onClick={() => this.whatToFetch("Z")}
        >
          Z
        </div>
      </nav>
    );
  }
}

SubNav.propTypes = {
  songs: PropTypes.array,
  venues: PropTypes.object,
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
