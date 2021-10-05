import React from 'react';
import './LandingPage.scss';

const LandingPage = () => {
    return(
        <div className="landingPage">
            <div className="landingPage__head">
                <div className="landingPage__head__players">
                    <p className="landingPage__head__players__text1">Players</p>
                </div>
                <div className="landingPage__head__matches">
                    <p className="landingPage__head__matches__text2">Matches</p>
                </div>
                <div className="landingPage__head__auctions">
                    <hr className="landingPage__head__auctions__line" />
                    <p className="landingPage__head__auctions__text3">Auctions</p>
                    <hr className="landingPage__head__auctions__line" />
                </div>
                <div className="landingPage__head__games">
                    <p className="landingPage__head__games__text4">Games</p>
                </div>
                <div className="landingPage__head__teams">
                    <p className="landingPage__head__teams__text5">Teams</p>
                </div>
            </div>
        </div>
    );
}
export default LandingPage;