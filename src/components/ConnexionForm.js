import React from 'react';
import {apiLogin} from "../services/hocDatingApiService";

const ConnexionForm = () => {
    // let $connexionForm  = document.getElementById("connexion-form");
    // $connexionForm.addEventListener("onSubmit", () =>{
    //     getBlablaMovieApiData
    // });

    const submitConnexion = async () => {
        await apiLogin;


    };

    return(
        <div id="form-content" className="row">
            <div className="col-md-8 order-md-1">
                <h4 className="mb-3">Connexion</h4>
                <form
                    onSubmit={submitConnexion}
                    id="connexion-form"
                    className="needs-validation"
                >
                    <div className="mb-3">
                        <label htmlFor="mail">Mail</label>

                        <div id="invalid-email-login-feedback" className="invalid-feedback">
                            Votre email n'est pas au bon format.
                        </div>

                        <input
                            type="email"
                            className="form-control"
                            id="mail"
                            name="mail"
                            placeholder="Mail"
                            autoFocus
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            name="password"
                            placeholder="Password"
                        />
                    </div>

                    <div id="invalid-empty-feedback" className="invalid-feedback">
                        Certains champs requis sont vides.
                    </div>

                    <button
                        id="connexion-button"
                        className="btn btn-primary btn-lg btn-block"
                        type="submit"
                    >
                        Connexion
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ConnexionForm;