import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import HeaderCarousel from "../../components/header-carousel/HeaderCarousel";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HeaderCarousel />
      </div>
    );
  }
}

export default Dashboard;
