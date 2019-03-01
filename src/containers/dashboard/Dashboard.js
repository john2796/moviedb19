import React, { Component } from "react";
import Navbar from "../../components/navbar/Navbar";
import HeaderCarousel from "../../components/header-carousel/HeaderCarousel";
import Footer from "../../components/footer/footer";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <HeaderCarousel />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;
