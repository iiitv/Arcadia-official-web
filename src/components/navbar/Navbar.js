import React from "react";
import "./Navbar.scss";
import logo from "./logo1.png";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
const Navbar = () => {
    let history = useHistory();
    const handleGames = () => {
        history.push("/games")
    }
    const handleLogin = () => {
        history.push("/login")
    }
    const handleHome = () => {
        history.push('/');
    }
    return (
        <div className="nav">
            <div className="nav__header" >
                <div className="nav__header__logo" onClick={handleHome}>
                    <img src={logo} alt="arcadia" />
                </div>
                <ul className="nav__header__list">
                    <li className="nav__header__list__element">Announcements</li>
                    <li className="nav__header__list__element">Events</li>
                    <li className="nav__header__list__element" onClick={handleGames}>Games</li>
                    <li className="nav__header__list__element">About Us</li>
                    <li className="nav__header__list__element"><button className="nav__header__list__element__login" onClick={handleLogin}>Login</button></li>
                </ul>
            </div>
        </div>
    );
}
export default Navbar;