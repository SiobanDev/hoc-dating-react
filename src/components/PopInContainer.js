import React, {Component} from 'react';
import PopIn from "./layouts/PopIn";
import {mainContextData} from "../mainContext";

class PopInContainer extends Component {
    render = () => {
        if (this.props.show) {
            switch (this.props.popInType) {
                //Inscription
                case 1:
                    return (
                        <PopIn
                            popInType={this.popInType}
                            imageUrl={"../images/thumb.png"}
                            imageAlt={"thumb-success"}
                            imageText={"Félicitations, vous avez bien été enregistré(e) ! Vous pouvez maintenant vous connecter."}
                            close={this.state.show}
                        />
                    );

                //Connection
                case 2:
                    return (
                        <PopIn
                            popInType={this.props.popInType}
                            imageUrl={"../images/thumb.png"}
                            imageAlt={"thumb-success"}
                            imageText={"Tu es bien connecté(e)."}
                            close={this.show}
                        />
                    );

                //Error inscription
                case 3:
                    return (
                        <PopIn
                            popInType={this.props.popInType}
                            imageUrl={"../images/thumb.png"}
                            imageAlt={"thumb-success"}
                            imageText={"Il y a déjà un compte enregistré avec ce mail."}
                            close={this.show}
                        />
                    );

                //Error Connection
                case 4:
                    return (
                        <PopIn
                            popInType={this.props.popInType}
                            imageUrl={"../images/thumb.png"}
                            imageAlt={"thumb-success"}
                            imageText={"Votre email ou votre mot de passe est erroné."}
                            close={this.show}
                        />
                    );

                default:
                    break;
            }
        }
        return null;
    }
}

export default PopInContainer;