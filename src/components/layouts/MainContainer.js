import React, {useContext} from 'react';
import ConnectionForm from "./ConnectionForm";
import {MainContext} from "../../mainContext";

let MainContainer = () => {
    return (
        <section id="main-container" className="main-content row">
            <ConnectionForm/>
        </section>
    );
}

export default MainContainer;