/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../assets/footer-logo.png";
import Facebbok from "../../assets/fb.png";
import Linkedin from "../../assets/linked-in.png";
import Twitter from "../../assets/twitter.png";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="siteFooter">
        <div className="footer_left">
          <section className="footer_logo">
            <img src={Logo} alt="logo" />
          </section>
          <p className="footer_content">
            Arcadia, <br />
            Gaming Club, <br />
            IIIT Vadodara
          </p>
          <section className="footer_socials">
            <a href="#" className="footer_social">
              <img src={Facebbok} alt="logo" />
            </a>
            <a href="#" className="footer_social">
              <img src={Twitter} alt="logo" />
            </a>
            <a href="#" className="footer_social">
              <img src={Linkedin} alt="logo" />
            </a>
          </section>
        </div>
        <div className="footer_center">
          <section className="footer_links">
            <a className="footer_link">Teams</a>
            <a className="footer_link">Events</a>
            <a className="footer_link">Games</a>
          </section>
          <section className="footer_links">
            <a className="footer_link">About Us</a>
            <a className="footer_link">Login</a>
            <a className="footer_link">matches</a>
          </section>
          <section className="footer_links">
            <a className="footer_link">Home</a>
            <a className="footer_link">Players</a>
            <a className="footer_link">auctions</a>
          </section>
        </div>
        <div className="footer_right">
          <input className="footer_input" placeholder="Mail" />
          <p className="footer_info">
            Subsribe to our newsletter for latest updates
          </p>
          <button className="footer_button">Join</button>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
