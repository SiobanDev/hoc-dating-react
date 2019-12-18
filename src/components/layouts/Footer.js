import React, {Component} from 'react';
import FooterNav from "./FooterNav";
import Logo from "./Logo";
import facebook from '../../images/ic-facebook.png';
import pinterest from '../../images/ic-pinterest.png';
import twitter from '../../images/ic-twitter.png';
import linkedin from '../../images/ic-linkedin.png';

class Footer extends Component {
    render = () => {
        return (
            <footer className="row">

                <div className="footer-row col-xs">
                    <ul>
                        <li className="logo-item item col-s-2">
                            <Logo/>
                        </li>

                        <FooterNav/>

                        <li className="media-items">
                            <div className="media-item nav-item">
                                <a className="facebook-item" href="">
                                    <img
                                        className="fb-icon icon"
                                        src={facebook}
                                        alt="icone facebook"
                                    />
                                </a>

                                <a className="pinterest-item" href="">
                                    <img
                                        className="pint-icon icon"
                                        src={pinterest}
                                        alt="icone pinterest"/>
                                </a>
                            </div>

                            <div className="media-item nav-item">
                                <a className="twitter-item" href="">
                                    <img
                                        className="tw-icon icon"
                                        src={twitter}
                                        alt="icone twitter"
                                    />
                                </a>

                                <a className="linkedin-item" href="">
                                    <img
                                        className="linked-icon icon"
                                        src={linkedin}
                                        alt="icone linkedin"
                                    />
                                </a>
                            </div>

                        </li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;