import React, { Component } from "react";
import { fetchData } from "../../api/apiCalls";
import {
  allMembers,
  currentMember,
  allYears,
  allTours
} from "../../Actions/index";
import { connect } from "react-redux";
import Tours from "../Tours/Tours";
import Years from "../Years/Years";

class MainPage extends Component {
  componentDidMount() {
    this.fetchYears();
    this.fetchTours();
  }

  fetchYears = () => {
    fetchData(
      `https://cors-anywhere.herokuapp.com/http://phish.in/api/v1/years?include_show_counts=true`
    ).then(results => this.props.allYears(results.data));
  };

  fetchTours = () => {
    fetchData(
      `https://cors-anywhere.herokuapp.com/http://phish.in/api/v1/tours.json?per_page=99`
    ).then(results => this.props.allTours(results.data));
  };

  renderYears = () => {
    const { years } = this.props;
    return years.map(year => <Years key={years.id} year={year} />);
  };

  renderTours = () => {
    const { tours } = this.props;
    return tours.map(tour => <Tours key={tour.id} tour={tour} />);
  };

  render() {
    const currentPath = this.props.location.pathname;
    console.log(currentPath);

    let dataToRender;

    if (currentPath === "/Years") {
      dataToRender = this.renderYears();
    } else if (currentPath === "/Tours") {
      dataToRender = this.renderTours();
    } else {
      console.log('HI!')
    }

    return (
      <div className="main-page">
        {dataToRender}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  members: state.members,
  member: state.member,
  years: state.years,
  tours: state.tours
});

export const mapDispatchToProps = dispatch => ({
  allMembers: members => dispatch(allMembers(members)),
  currentMember: member => dispatch(currentMember(member)),
  allYears: years => dispatch(allYears(years)),
  allTours: tours => dispatch(allTours(tours))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
