import React, { Component } from "react";
import "./HomePage.scss";
import { fetchData } from "../../api/apiCalls";
import { cleanRandomShow } from "../../Helpers/cleaners";
import Loading from "../Loading/Loading";
import { randomShow } from "../../Actions/index";
import { connect } from "react-redux";

class HomePage extends Component {
  renderRandomInfo = () => {
    const { show } = this.props;
    console.log(show);
    return (
      <React.Fragment>
        <h1 className="venue-name venue-info">{show[0].venue_name}</h1>
        <p className="venue-location venue-info">{show[0].location}</p>
        <p className="date venue-info">{show[0].date}</p>
      </React.Fragment>
    );
  };

  renderSetOne = () => {
    const { show } = this.props;
    const setOne = show[0].tracks.filter(track => track.set_name === "Set 1");
    return setOne
      .map(firstSet => (
        <span key={firstSet.id} className="song-title">
          {firstSet.title}
        </span>
      ))
      .reduce((prev, curr) => [prev, ", ", curr]);
  };

  renderSetTwo = () => {
    const { show } = this.props;
    const setTwo = show[0].tracks.filter(track => track.set_name === "Set 2");
    return setTwo
      .map(secondSet => (
        <span key={secondSet.id} className="song-title">
          {secondSet.title}
        </span>
      ))
      .reduce((prev, curr) => [prev, ", ", curr]);
  };

  renderEncore = () => {
    const { show } = this.props;
    const encores = show[0].tracks.filter(track => track.set_name === "Encore");
    return encores
      .map(encore => (
        <span key={encore.id} className="song-title">
          {encore.title}
        </span>
      ))
      .reduce((prev, curr) => [prev, ", ", curr]);
  };

  render() {
    const { show } = this.props;
    return (
      <div className="home-page-component">
        <h1>Show of the Day:</h1>
        <div className="random-show">
          <section className="random-show-top">
            {show.length ? this.renderRandomInfo() : null}
          </section>
          <div className="sets">
            <section className="set-one">
              <h2>Set 1:</h2>
              <div>{show.length && this.renderSetOne()}</div>
            </section>
            <section className="set-two">
              <h2>Set 2:</h2>
              <div>{show.length && this.renderSetTwo()}</div>
            </section>
          </div>
          <section className="encore">
            <h2>Encore:</h2>
            <div>{show.length && this.renderEncore()}</div>
          </section>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  show: state.show
});

export const mapDispatchToProps = dispatch => ({
  randomShow: show => dispatch(randomShow(show))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
