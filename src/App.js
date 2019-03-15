import React, { Component } from "react";
import Register from "./containers/register/Register";
import Login from "./containers/login/Login";
import Dashboard from "./containers/dashboard/Dashboard";
import "./App.css";
import { Route } from "react-router-dom";
import IndividualMovie from './components/individual-movie/IndividualMovie';


class App extends Component {

  render() {
    const { location } = this.props
    const str = location.pathname
    let tab = str.split('/')[2]

    return (
      <div className="App">
        {/* Routes dynamic */}
        <Route exact path="/" component={Dashboard} />
        <Route path={`/movie/${tab}/:id`} render={(props) => <IndividualMovie {...props} tab={tab} />} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    );
  }
}

export default App;
