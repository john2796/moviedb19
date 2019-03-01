import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import HeaderCarousel from "../../components/header-carousel/HeaderCarousel";
import Footer from "../../components/footer/footer";
import MovieTvSwitch from "../../components/movie-tv-switch/MovieTvSwitch";
import HomeMain from "../../components/home-main/HomeMain";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HeaderCarousel />
        <MovieTvSwitch />
        <HomeMain />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
