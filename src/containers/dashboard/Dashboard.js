import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import HeaderCarousel from "../../components/header-carousel/HeaderCarousel";
class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HeaderCarousel />
        <h1>etc</h1>
      </div>
    );
  }
}

export default Dashboard;
