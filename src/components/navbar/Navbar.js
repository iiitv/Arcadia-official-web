import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav__logo">
                <ul>
                    <li><img src="./Logo-fina-11 1.png" alt="arcadia" /></li>
                </ul>
            </div>
            <div>
                <ul className="nav__list">
                    <li className="nav__list__element">Announcements</li>
                    <li className="nav__list__element">Events</li>
                    <li className="nav__list__element">Games</li>
                    <li className="nav__list__element">About us</li>
                    <li className="nav__list__element"><button className="login-btn">Login</button></li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;