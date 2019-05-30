import React, { Component } from "react";
import "./App.scss";
import NavBar from "../NavBar/NavBar";
import MainPage from "../MainPage/MainPage";
import NotFound from "../NotFound/NotFound";
import BandBio from "../BandBio/BandBio";
import { Route, Switch } from "react-router-dom";

export class App extends Component {
  
  render() {  
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/BandBio" component={BandBio} />
          <Route path="" component={NotFound} />
        </Switch>
      </div>
      );
    }
  }
  
  export default App;
