import React, { Component } from "react";
import NavBar from "../../Containers/NavBar/NavBar";
import MainPage from "../../Containers/MainPage/MainPage";
import NotFound from "../NotFound/NotFound";
import BandBio from "../../Containers/BandBio/BandBio";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/BandBio" component={BandBio} />
          <Route path="/Years" component={MainPage} />
          <Route path="/Venues" component={MainPage} />
          <Route path="/Songs" component={MainPage} />
          <Route path="/Tours" component={MainPage} />
          <Route path="/Shows" component={MainPage} />
          <Route path="/SetList" component={MainPage} />
          <Route path="/UserStats" component={MainPage} />
          <Route path="" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
