import React from 'react';
import './LandingPage.scss';

const LandingPage = () => {
    return(
        <div className="landingPage">
            <div className="landingPage__head">

                <p className="landingPage__head__players">Players</p>

                <p className="landingPage__head__matches">Matches</p>

                <hr className="landingPage__head__line1" />
                
                <p className="landingPage__head__auctions">Auctions</p>

                <hr className="landingPage__head__line2" />

                <p className="landingPage__head__games">Games</p>

                <p className="landingPage__head__teams">Teams</p>

                <div className="landingPage__head__dot">
                    <div className="landingPage__head__dot__dot1" />
                    <div className="landingPage__head__dot__dot1" />
                    <div className="landingPage__head__dot__dot2" />
                    <div className="landingPage__head__dot__dot1" />
                    <div className="landingPage__head__dot__dot1" />
                </div>
            </div>
            <hr className="landingPage__mid" />
            
            <div className="landingPage__content">
                <div className="landingPage__content__title">
                    <img className="landingPage__content__title__arcadia" src="images/Arcadia _.svg" alt="" />
                </div>
                <p className="landingPage__content__desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non sodales neque sodales. Sapien pellentesque habitant morbi tristique senectus. Enim ut sem viverra aliquet eget. Eget nulla facilisi etiam dignissim diam quis. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo. Urna neque viverra justo nec ultrices dui. Turpis massa tincidunt dui ut ornare lectus sit amet. Amet cursus sit amet dictum. Vitae congue mauris rhoncus aenean. Arcu ac tortor dignissim convallis aenean et tortor. Euismod nisi porta lorem mollis aliquam ut porttitor. Amet aliquam id diam maecenas.

                    In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Commodo elit at imperdiet dui accumsan sit amet nulla. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Purus in mollis nunc sed id. Auctor elit sed vulputate mi sit amet. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Dapibus ultrices in iaculis nunc sed augue. Sit amet mattis vulputate enim. Id eu nisl nunc mi ipsum. Lobortis feugiat vivamus at augue eget
                </p>
                <div className="landingPage__content__tags">
                    <img className="landingPage__content__tags__tag1" src="images/Get your match stats.svg" alt="" />
                    <img className="landingPage__content__tags__tag2" src="images/Watch Auctions Results.svg" alt="" />
                    <img className="landingPage__content__tags__tag3" src="images/Support Your Favourite teams.svg" alt="" />
                </div>
            </div>
        </div>
    );
}
export default LandingPage;