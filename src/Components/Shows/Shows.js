import React, { Component } from "react";
import { connect } from "react-redux";
import { currentSetList } from "../../Actions/index";
import { Link } from "react-router-dom";
import "./Shows.scss";

class Shows extends Component {
  handleClick = show => {
    this.props.currentSetList(show.tracks);
  };

  render() {
    const { show } = this.props;

    console.log(show)

    return (
      <div className="shows-component">
        <section className="show-top" onClick={() => this.handleClick(show)}>
        <Link to="/SetList" >
          <h1 className="venue-name">{show.venue_name}</h1>
        </Link>
        </section>
        <section className="show-bottom">
          <article className="show-info">
            <div>
              <h4>Date:</h4>
              <p className="venue-date">{show.date}</p>
            </div>
            <div>
              <h4>Location:</h4>
              <p className="venue-location">{show.location}</p>
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
