import React from 'react';
import {doConnectionActions} from "../services/connection";

const ConnectionForm = () => {

    return (
        <div id="form-content" className="row">
            <h4 className="mb-3">Connection</h4>
            <form
                //If I add parentheses on the function, it is executed when the loading. If not, it is just a reference
                onSubmit={doConnectionActions}
                id="connection-form"
                className="needs-validation"
            >
                <div className="mb-3">
                    <label htmlFor="username">Mail</label>

                    <div id="invalid-email-login-feedback" className="invalid-feedback">
                        Votre email n'est pas au bon format.
                    </div>

                    <input
                        type="email"
                        className="form-control"
                        id="username"
                        name="username"
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
                    id="connection-button"
                    className="btn btn-primary btn-lg btn-block"
                    type="submit"
                >
                    Connection
                </button>
            </form>
        </div>
    );
};

export default ConnectionForm;