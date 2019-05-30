import React, { Component } from "react";
import { fetchData } from "../../api/apiCalls";

class MainPage extends Component {
  componentDidMount() {
    this.fetchPhishData();
  }

  fetchPhishData = () => {
    fetchData(
      `https://cors-anywhere.herokuapp.com/http://phish.in/api/v1/years?include_show_counts=true`
    ).then(response => console.log(response.data));
  };

  render() {
    const currentPath = this.props.location.pathname;
    console.log(currentPath);
    return (
      <div className="main-page">
        <h1>Main Page</h1>
      </div>
    );
  }
}

export default MainPage;
