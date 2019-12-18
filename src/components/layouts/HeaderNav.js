import React, {Component} from 'react';

class HeaderNav extends Component {
    render = () => {
        return(
            <nav className="navbar navbar-expand-sm">
                <ul id="header-navigation" className="nav navbar-nav collapse navbar-collapse row">
                    <li className="propos-item nav-item col-s-1">
                        <a href="#infos">A propos</a>
                    </li>

                    <li className="movies-item nav-item col-s-1">
                        <a href="#movies">Films</a>
                    </li>

                    <li className="historical-item nav-item col-s-1">
                        <a href="#historical">Historique</a>
                    </li>

                    <li className="contact-item nav-item col-s-1">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>

                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#header-navigation"
                        aria-controls="header-navigation" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
        );
    }
}

export default HeaderNav;