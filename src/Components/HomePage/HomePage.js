import React, { Component } from "react";
import "./HomePage.scss";
import { setData } from "../../Helpers/cleaners";
import { connect } from "react-redux";
import { ReactComponent as Arrow } from "../../Assets/arrow.svg";
import UpcomingShows from "../UpcomingShows/UpcomingShows";

export class HomePage extends Component {
  state = { showTour: false };
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

  renderUpcomingShows = () => {
    const { upcoming } = this.props;
    return upcoming.map(shows => (
      <UpcomingShows key={shows.id} shows={shows} />
    ));
  };

  toggleTour = () => {
    this.setState({
      showTour: !this.state.showTour
    });
  };

  render() {
    const { show } = this.props;
    const { showTour } = this.state;
    return (
      <div className="home-page-component">
        <div className="slideshow-section">
          <div className="summer-tour-artwork">
            <Arrow
              data-test="arrow-btn"
              className={showTour ? "arrow-up arrow" : "arrow-down arrow"}
              onClick={() => this.toggleTour()}
            />
          </div>
        </div>
        <section
          className={showTour ? "summer-tour-active" : "summer-tour"}
        >
          {this.renderUpcomingShows()}
        </section>
        <div className={showTour ? "random-show" : "random-show-active"}>
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
  show: state.show,
  upcoming: state.upcoming
});

export default connect(
  mapStateToProps,
  null
)(HomePage);
