import React, { Component } from "react";
import { fetchData } from "../../api/apiCalls";
import { allMembers, currentMember, allYears } from "../../Actions/index";
import { connect } from "react-redux";
import Years from "../Years/Years";

class MainPage extends Component {
  componentDidMount() {
    this.fetchYears();
  }

  fetchYears = () => {
    fetchData(
      `https://cors-anywhere.herokuapp.com/http://phish.in/api/v1/years?include_show_counts=true`
    ).then(results => this.props.allYears(results.data));
  };

  renderYears = () => {
    const { years } = this.props;
    return years.map(year => <Years key={years.id} year={year} />);
  };

  render() {
    const currentPath = this.props.location.pathname;
    console.log(currentPath);
    return (
      <div className="main-page">
        <h1>Main Page</h1>
        {currentPath === "/Years" && this.renderYears()}
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  members: state.members,
  member: state.member,
  years: state.years
});

export const mapDispatchToProps = dispatch => ({
  allMembers: members => dispatch(allMembers(members)),
  currentMember: member => dispatch(currentMember(member)),
  allYears: years => dispatch(allYears(years))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainPage);
