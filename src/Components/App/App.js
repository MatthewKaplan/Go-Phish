import React, { Component } from "react";
import "./App.scss";
import NavBar from "../NavBar/NavBar";
import MainPage from "../MainPage/MainPage";
import { Route, Switch } from "react-router-dom";

export class App extends Component {
  
  render() {  
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </div>
      );
    }
  }
  
  export default App;
