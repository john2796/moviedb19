import React, { Component } from "react";
import Register from "./containers/register/Register";
import Login from "./containers/login/Login";
import Dashboard from "./containers/dashboard/Dashboard";
import Footer from "./components/footer/footer";
import HomeMain from "./components/home-main/HomeMain";
import MovieTvSwitch from "./components/movie-tv-switch/MovieTvSwitch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* Routes dynamic */}
        <Dashboard />
        <MovieTvSwitch />
        <HomeMain />
        <Register />
        <Login />
        <Footer />
      </div>
    );
  }
}

export default App;
