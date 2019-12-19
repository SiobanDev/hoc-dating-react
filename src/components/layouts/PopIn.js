import React, {Component, useContext} from 'react';
import {MainContext} from "../../mainContext";

class PopIn extends Component {
    constructor(props) {
        super(props);
        // const mainContext = useContext(MainContext);
        const mainContext = this.context;
    }

    closePopIn = () => {
        this.mainContext.showPopIn = false;
    };

    render = () => {

        return (
            <div id={`feedback-popup-${this.props.popInType}`}>
                <img src={this.props.imageUrl} alt={this.props.imageAlt}/>
                <p className="feedback-text">{this.props.imageText}</p>
                <button className="fas fa-times" onClick={this.closePopIn}/>
            </div>
        );
    }
}

export default PopIn;