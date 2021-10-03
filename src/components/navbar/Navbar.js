import React from "react";
import "./Navbar.scss";
import logo from "./logo1.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav__header">
                <div className="nav__header__logo">
                    <img src={logo} alt="arcadia" />
                </div>
                <ul className="nav__header__list">
                    <li className="nav__header__list__element">Announcements</li>
                    <li className="nav__header__list__element">Events</li>
                    <li className="nav__header__list__element">Games</li>
                    <li className="nav__header__list__element">About Us</li>
                    <li className="nav__header__list__element"><button className="nav__header__list__element__login">Login</button></li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;