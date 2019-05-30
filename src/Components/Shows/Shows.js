import React, { Component } from "react";
import { connect } from "react-redux";
import { currentSetList } from "../../Actions/index";
import SetLists from "../SetLists/SetLists";
import "./Shows.scss";

class Shows extends Component {
  handleClick = show => {
    this.props.currentSetList(show.tracks);
  };

  render() {
    const { show } = this.props;

    return (
      <div className="shows-component">
        <section className="show-top" onClick={() => this.handleClick(show)}>
          <h1 className="venue-name">{show.venue_name}</h1>
        </section>
        <section className="show-bottom">
          <article className="show-info">
            <div>
              <h4>Date:</h4>
              <p className="venue-date">{show.date}</p>
            </div>
            <div>
              <h4>Location:</h4>
              <p className="venue-location">{show.venue.location}</p>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  setList: state.setList
});

export const mapDispatchToProps = dispatch => ({
  currentSetList: setList => dispatch(currentSetList(setList))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shows);
