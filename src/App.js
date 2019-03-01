import React, { Component } from "react";
import Register from "./containers/register/Register";
import Login from "./containers/login/Login";
import Dashboard from "./containers/dashboard/Dashboard";
import "./App.css";
import { Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Routes dynamic */}
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
