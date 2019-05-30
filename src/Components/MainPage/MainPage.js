import React, { Component } from "react";
import { fetchData, fetchMembers } from "../../api/apiCalls";

class MainPage extends Component {
  componentDidMount() {
    this.fetchPhishData();
  }

  // fetchPhishData = () => {
  //   fetchData(
  //     `https://cors-anywhere.herokuapp.com/http://phish.in/api/v1/years`
  //   ).then(response => console.log(response));
  // };

  fetchPhishData = () => {
    fetchMembers(
      `https://cors-anywhere.herokuapp.com/https://peaceful-castle-66511.herokuapp.com/api/v1/phish/members`
    ).then(response => console.log(response));
  };

  render() {
    return (
      <div className="main-page">
        <h1>Main Page</h1>
      </div>
    );
  }
}

export default MainPage;
