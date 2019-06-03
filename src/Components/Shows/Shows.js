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
    this.props.userShowList(show)
    console.log("add to list", show);
  };

  removeFromList = show => {
    this.setState({ inList: !this.state.inList });
    console.log("remove from list", show);
  };

  render() {
    const { show } = this.props;
    const { inList } = this.state;

    return (
      <div className="shows-component">
        <section className="show-top" onClick={() => this.handleClick(show)}>
          {inList === true ? (
            <div
              className="removeFromList"
              onClick={() => this.removeFromList(show)}
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
  setList: state.setList
});

export const mapDispatchToProps = dispatch => ({
  currentSetList: setList => dispatch(currentSetList(setList)),
  userShowList: userList => dispatch(userShowList(userList))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shows);
