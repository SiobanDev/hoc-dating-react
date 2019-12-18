import React from 'react';
import {connexionUrl, inscriptionUrl} from "../constants";

const Home = () => {

    return(
        <div className="accueil-content">
            <div className="main-hook">
                <div className="first-hook">
                    <div className="lign1"/>
                    <p className="first-lines-hook"><span
                        className="bold-style">Votez pour votre film préféré,</span><br/>
                        et découvrez le classement
                    </p>
                </div>

                <p className="last-lines"> au fil des jours !</p>

                <p className="members-hook">Déjà <span className="members-number">284 056</span> membres</p>

                <div id="home-buttons">
                    <a
                        id="connexion-btn"
                        className="btn"
                        href={connexionUrl}
                    >
                        CONNEXION
                    </a>

                    <a
                        id="inscription-btn"
                        className="btn"
                        href={inscriptionUrl}
                    >
                        INSCRIPTION
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;