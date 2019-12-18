import React from 'react';

const InscriptionForm = () => {
    return(
        <div id="form-content" className="row">
            <div className="col-md-8 order-md-1">
                <h4 className="mb-3">Inscription</h4>
                <form id="inscription-form" className="needs-validation">
                    <div className="mb-3">
                        <label htmlFor="login">Login <span className="text-muted">*</span></label>

                        <div id="invalid-empty-login-feedback" className="invalid-feedback">
                            La longueur de votre login doit être comprise entre 3 et 18 caractères.
                        </div>
                        <div id="invalid-regex-login-feedback" className="invalid-feedback">
                            Votre login doit contenir uniquement des caractères alphanumériques.
                        </div>
                        <div id="invalid-size-login-feedback" className="invalid-feedback">
                            La longueur de votre login doit être comprise entre 3 et 18 caractères.
                        </div>

                        <input type="text" className="form-control" id="login" name="login" placeholder="Login"
                               onBlur="validateLogin()" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="mail">Email <span className="text-muted">*</span></label>

                        <div id="invalid-email-login-feedback" className="invalid-feedback">
                            Votre email n'est pas au bon format.
                        </div>

                        <input type="email" className="form-control" id="mail" name="mail" placeholder="you@example.com"
                               onBlur="validateMail()" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="sr-only">Password <span
                            className="text-muted">*</span></label>

                        <div id="invalid-size-pwd-feedback" className="invalid-feedback">
                            La longueur de votre mot de passe doit être au minimum de 12 caractères.
                        </div>

                        <input type="password" id="password" className="form-control" name="password"
                               placeholder="Password" onBlur="validatePassword()" />
                    </div>

                    <div className="mb-3">
                        <label>Date of Birth <span className="text-muted">*</span></label>

                        <div id="invalid-age-feedback" className="invalid-feedback">
                            Vous devez avoir plus de 15 ans pour vous inscrire.
                        </div>

                        <input type="date" className="form-control" id="birth_date" name="birth_date"
                               placeholder="Date of Birth" onKeyUp="validateAge()" />
                    </div>

                    <div id="invalid-empty-feedback" className="invalid-feedback">
                        Certains champs requis sont vides.
                    </div>
                    <button id="inscription-button" className="btn btn-primary btn-lg btn-block"
                            type="submit">Inscription
                    </button>

                    <p className="obligatory-fields">Les champs avec une * sont obligatoires.</p>
                </form>
            </div>
        </div>
    );
};

export default InscriptionForm;