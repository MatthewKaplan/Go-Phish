import React, { Component } from "react";
import "./App.scss";
// import { fetchData } from "../../api/apiCalls";
import NavBar from "../NavBar/NavBar";
import { Route } from "react-router-dom";

export class App extends Component {
  
  render() {  
    return (
      <div className="App">
        <NavBar />
        <h1>Phish.in</h1>
      </div>
      );
    }
  }
  
  export default App;


    // componentDidMount() {
    //   this.fetchPropertyData();
    // }
  
    // fetchPropertyData = () => {
    //   fetchData(`https://cors-anywhere.herokuapp.com/http://phish.in/api/v1/years`).then(response =>
    //     console.log(response)
    //   );
    // }
