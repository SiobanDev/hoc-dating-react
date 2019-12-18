import React, {Component} from 'react';
import HeaderNav from "./HeaderNav";
import Logo from "./Logo";

class Header extends Component {
    render = () => {
        return (
            <header className="row App-header">

            <Logo/>
                <HeaderNav/>

                <div className="search-logout-item nav-item col-s-1">
                    <span className="fas fa-search"/>
                    <a id="logout-item" href="">Déconnexion</a>
                </div>
            </header>
        );
    }
}

export default Header;