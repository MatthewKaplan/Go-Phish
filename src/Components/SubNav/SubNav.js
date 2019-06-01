import React, { Component } from "react";
import { fetchData } from "../../api/apiCalls";
import { connect } from "react-redux";
import { allSongs, allVenues, loadingData } from "../../Actions/index";
import "./SubNav.scss";
import { cleanSongs, cleanVenues } from "../../Helpers/cleaners";

class SubNav extends Component {
  handleClick = path => {
    const { venues } = this.props;
    const filteredVenues = venues.filter(venue => {
      return venue.name[0] === path;
    });
    this.props.allVenues(filteredVenues);
  };

  fetchVenues = (path) => {
    this.props.loadingData(true);
    fetchData(`venues.json?per_page=651`)
      .then(response => cleanVenues(response.data))
      .then(
        results =>
          this.props.allVenues(results) && this.props.loadingData(false) && this.handleClick(path)
      );
  };

  render() {
    const currentPath = window.location.href;
    console.log(currentPath);
    return (
      <nav className="sub-nav">
        <div className="char_link" onClick={() => this.fetchVenues("A")}>
          A
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("B")}>
          B
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("C")}>
          C
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("D")}>
          D
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("E")}>
          E
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("F")}>
          F
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("G")}>
          G
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("H")}>
          H
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("I")}>
          I
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("J")}>
          J
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("K")}>
          K
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("L")}>
          L
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("M")}>
          M
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("N")}>
          N
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("O")}>
          O
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("P")}>
          P
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("Q")}>
          Q
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("R")}>
          R
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("S")}>
          S
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("T")}>
          T
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("U")}>
          U
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("V")}>
          V
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("W")}>
          W
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("X")}>
          X
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("Y")}>
          Y
        </div>
        <div className="char_link" onClick={() => this.fetchVenues("Z")}>
          Z
        </div>
        <div
          className="char_link"
          onClick={() => this.handleClick("venues?char=%23")}
        >
          #
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
  loadingData: bool => dispatch(loadingData(bool))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubNav);
