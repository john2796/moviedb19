import React, { Component } from "react";
import "./footer.css";
import tmdb from "../../images/footer/tmdb.svg";
import WOW from "wowjs";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

library.add(fab, faCode, faFacebook, faTwitter);
class Footer extends Component {
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }

  render() {
    return (
      <div className="footer-container">
        <div className="footer-left-section">
          <div className="footer-menu">
            <h2 className="footer-h2 wow fadeInLeft" data-wow-delay=".5s">
              Site Name
            </h2>
            <nav className="footer-nav">
              <a
                href="#"
                className="footer-menu-a wow fadeInLeft"
                data-wow-delay=".7s"
              >
                Home
              </a>
              <a
                href="#"
                className="footer-menu-a wow fadeInLeft"
                data-wow-delay=".8s"
              >
                Profile
              </a>
              <a
                href="#"
                className="footer-menu-a wow fadeInLeft"
                data-wow-delay=".9s"
              >
                Discover
              </a>
            </nav>
          </div>
          <div className="footer-info">
            <div className="footer-info-item">
              <div className="footer-info-item-title">
                <p>Email:</p>
              </div>
              <div className="footer-info-item-content">
                <p>email@example.com</p>
              </div>
            </div>
            <div className="footer-info-item">
              <div className="footer-info-item-title">
                <p>Phone Number:</p>
              </div>
              <div className="footer-info-item-content">
                <p>888-555-8888</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <p>Copyright ©2019</p>
          </div>
        </div>
        <div className="footer-right-section">
          <img
            src={tmdb}
            alt="tmdb logo"
            className="tmdb-footer-logo wow fadeInUp"
            data-wow-delay=".5s"
          />
          <div
            className="footer-social-icons wow fadeInUp"
            data-wow-delay=".5s"
          >
            <a href="#" className="footer-social-icon">
              <FontAwesomeIcon icon="code" />
            </a>
            <a
              href="https://www.facebook.com/themoviedb"
              className="footer-social-icon wow fadeInUp"
              data-wow-delay=".7s"
              style={{ padding: "10px 13px" }}
            >
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
            <a
              href="https://twitter.com/themoviedb"
              className="footer-social-icon wow fadeInUp"
              data-wow-delay=".9s"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
