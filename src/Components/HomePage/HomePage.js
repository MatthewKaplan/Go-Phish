import React, { Component } from "react";
import "./HomePage.scss";
import { setData } from "../../Helpers/cleaners";
import { connect } from "react-redux";

class HomePage extends Component {
  renderRandomInfo = () => {
    const { show } = this.props;
    return (
      <React.Fragment>
        <h1 className="venue-name venue-info">{show[0].venue_name}</h1>
        <p className="venue-location venue-info">{show[0].location}</p>
        <p className="date venue-info">{show[0].date}</p>
      </React.Fragment>
    );
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
              <div>{show.length && setData(show[0].tracks, "Set 1")}</div>
            </section>
            <section className="set-two">
              <h2>Set 2:</h2>
              <div>{show.length && setData(show[0].tracks, "Set 2")}</div>
            </section>
          </div>
          <section className="encore">
            <h2>Encore:</h2>
            <div>{show.length && setData(show[0].tracks, "Encore")}</div>
          </section>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  show: state.show
});

export default connect(
  mapStateToProps,
  null
)(HomePage);
