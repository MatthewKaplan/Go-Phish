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
        <h1>{show[0].venue_name}</h1>
        <p>{show[0].date}</p>
        <p>{show[0].location}</p>
      </React.Fragment>
    );
  };

  renderSetOne = () => {
    const { show } = this.props;
    const setOne = show[0].tracks.filter(track => track.set_name === "Set 1");
    return setOne.map(firstSet => {
      return (
          <h1 key={firstSet.id}>{firstSet.title}</h1>
      );
    });
  };

  renderSetTwo = () => {
    const { show } = this.props;
    const setTwo = show[0].tracks.filter(track => track.set_name === "Set 2");
    return setTwo.map(secondSet => {
      return (
          <h1 key={secondSet.id}>{secondSet.title}</h1>
      );
    });
  };

  renderEncore = () => {
    const { show } = this.props;
    const encores = show[0].tracks.filter(track => track.set_name === "Encore");
    return encores.map(encore => {
      return (
          <h1 key={encore.id}>{encore.title}</h1>
      );
    });
  };

  render() {
    const { show } = this.props;
    return (
      <div className="home-page-component">
        <h1>Show of the Day:</h1>
        <div className="randomShow">
          <section className="random-show-top">
            {show.length ? this.renderRandomInfo() : null}
          </section>
          <section className="random-show-bottom">
            <h1>Set 1:</h1>
            {show.length && this.renderSetOne()}
            <h2>Set 2:</h2>
            {show.length && this.renderSetTwo()}
            <h2>Encore:</h2>
            {show.length && this.renderEncore()}
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
