import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav__header">
                <div className="nav__header__logo">
                    <img src="Logo-final-11 1.png" alt="arcadia" />
                </div>
                <ul className="nav__header__list">
                    <li className="nav__header__list__element">Announcements</li>
                    <li className="nav__header__list__element">Events</li>
                    <li className="nav__header__list__element">Games</li>
                    <li className="nav__header__list__element">About us</li>
                    <li className="nav__header__list__element"><button className="login-btn">Login</button></li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;