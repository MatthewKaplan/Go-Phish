import React, { Component } from "react";
import "./HomePage.scss";
import { fetchData } from "../../api/apiCalls";
import { cleanRandomShow } from "../../Helpers/cleaners";
import Loading from "../Loading/Loading";
import {randomShow} from "../../Actions/index";
import {connect} from "react-redux";

class HomePage extends Component {
  componentDidMount() {
    this.fetchRandomShow();
  }

  fetchRandomShow = () => {
    fetchData(`random-show`)
      .then(response => cleanRandomShow(response.data))
      .then(results => this.props.randomShow(results));
  };

  renderRandomShow = () => {
    const {show} = this.props;
    console.log(show)
    return (
      <section className="randomShow">
        <h1>{show.venue_name}</h1>
      </section>
    )
  }

  render() {
    console.log(this.props.show)
    return <div className="home-page-component">{this.renderRandomShow()}</div>;
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
