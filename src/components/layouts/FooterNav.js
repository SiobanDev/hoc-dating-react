import React, {Component} from 'react';

class FooterNav extends Component {
    render = () => {
        return(
            <ul className="footer-links nav navbar-nav">
                <li className="propos-item nav-item col-s-1">
                    <a href="#infos">À propos</a>
                </li>

                <li className="movies-item nav-item col-s-1">
                    <a href="#movies">Films</a>
                </li>

                <li className="historical-item nav-item col-s-1">
                    <a href="#historical">Historique</a>
                </li>

                <li className="contact-item nav-item col-s-1">
                    <a className="contact-item" href="#contact">Contact</a>
                </li>
            </ul>
        );
    }
}

export default FooterNav;