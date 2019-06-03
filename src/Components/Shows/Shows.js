import React, { Component } from "react";
import { connect } from "react-redux";
import { currentSetList, userShowList } from "../../Actions/index";
import { Link } from "react-router-dom";
import "./Shows.scss";

class Shows extends Component {
  state = { inList: false, showList: [] };

  handleClick = show => {
    this.props.currentSetList(show.tracks);
  };

  addToList = show => {
    this.setState({
      inList: !this.state.inList
    });
    this.props.userShowList({...show, showSaved: true})
  };

  removeFromList = showId => {
    this.setState({ inList: !this.state.inList });
    const shows = this.props.userShows.filter(show => show.id !== showId)
    this.props.userShowList(shows)
    console.log("remove from list", showId);
  };

  render() {
    const { show, userShows } = this.props;
    const { inList } = this.state;
    // console.log("userShows", userShows)

    return (
      <div className="shows-component">
        <section className="show-top" onClick={() => this.handleClick(show)}>
          {inList === true ? (
            <div
              className="removeFromList"
              onClick={() => this.removeFromList(show.id)}
            />
          ) : (
            <div className="addToList" onClick={() => this.addToList(show)} />
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

export const mapStateToProps = state => ({
  setList: state.setList,
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
