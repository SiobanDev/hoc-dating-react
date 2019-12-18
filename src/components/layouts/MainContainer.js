import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {connexionUrl, homeUrl, inscriptionUrl, moviesUrl} from "../../constants";
import Movies from "../Movies";
import Home from "../Home";
import connexionForm from "../ConnexionForm";
import inscriptionForm from "../InscriptionForm";

class MainContainer extends Component {
    render = () => {
        return (
            <section id="main-container" className="main-content row">
                <Router className="row">
                    {/*Il faut aller des url les plus spécifiques aux plus générales, car le switch s'arrête dès le premier résultat correspondant en lisant l'url de gauche à droite.*/}
                    <Switch>
                        <Route exact path={moviesUrl} component={Movies} />
                        <Route exact path={connexionUrl} component={connexionForm} />
                        <Route exact path={inscriptionUrl} component={inscriptionForm} />
                        <Route exact path={homeUrl} component={Home} />
                    </Switch>
                </Router>
            </section>
        );
    }
}

export default MainContainer;