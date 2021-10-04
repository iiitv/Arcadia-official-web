import React from 'react';
import './Games.scss';

function Games() {
  return(
      <div className = "games">
        <div className = "games__head">
          <p className = "games__head__text">Games</p>
        </div>
        <div className  = "games__cards">
          <div className  = "games__cards__top">
            <img className = "games__cards__top__csgo" alt = "" src = "images/CSGO.png" ></img>
            <img className = "games__cards__top__pubg" alt = "" src = "images/PUBG.png" ></img>
          </div>
          <div className  = "games__cards__middle">
            <img className = "games__cards__middle__fifa" alt = "" src = "images/fifa.png" ></img>
            <img className = "games__cards__middle__apex" alt = "" src = "images/apex.png" ></img>
          </div>
          <div className  = "games__cards__bottom">
            <img className = "games__cards__bottom__assassins" alt = "" src = "images/assasin.png" ></img>
            <img className = "games__cards__bottom__fortnite" alt = "" src = "images/fortnite.png" ></img>
          </div>
        </div>
        <div className = "games__bottom">
          <p className = "games__bottom__text">& many more</p>
        </div>
      </div>
  );
}
export default Games;
