import React, { Component } from "react";
import { connect } from "react-redux";
import { currentSetList, userShowList } from "../../Actions/index";
import { Link } from "react-router-dom";
import "./Shows.scss";
import PropTypes from "prop-types";

export class Shows extends Component {
  state = { inList: false };
  componentDidMount() {
    this.checkIfSaved(this.props.userShows);
  }

  handleClick = show => {
    this.props.currentSetList(show.tracks);
  };

  addToList = show => {
    this.setState({
      inList: !this.state.inList
    });
    let shows = this.props.userShows;
    shows.push(show);
    this.props.userShowList(shows);
  };

  removeFromList = showId => {
    this.setState({ inList: false });
    let shows = this.props.userShows;

    const filteredShows = shows.filter(show => show.id !== showId);
    this.props.userShowList(filteredShows);
  };

  checkIfSaved = shows => {
    const showId = this.props.show.id;
    let saved = shows.some(show => show.id === showId);
    this.setState({
      inList: saved
    });
  };

  render() {
    const { show } = this.props;
    const { inList } = this.state;

    return (
      <div className="shows-component">
        <section
          className="show-top"
          data-test="show-btn"
          onClick={() => this.handleClick(show)}
        >
          {inList === true ? (
            <div
              className="removeFromList"
              data-test="remove-btn"
              onClick={() => this.removeFromList(show.id)}
            />
          ) : (
            <div
              className="addToList"
              data-test="add-btn"
              onClick={() => this.addToList(show)}
            />
          )}
          <Link to="/SetList">
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

Shows.propTypes = {
  userShows: PropTypes.array,
  currentSetList: PropTypes.func,
  userShowList: PropTypes.func
};

export const mapStateToProps = state => ({
  userShows: state.userShows
});

export const mapDispatchToProps = dispatch => ({
  currentSetList: setList => dispatch(currentSetList(setList)),
  userShowList: userList => dispatch(userShowList(userList))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shows);
