import React, {useState} from 'react';
import ConnectionPage from "../ConnectionPage";
import {MainContext, mainContextData} from "../../mainContext";

let MainContainer = () => {
    const [userState, setUserstate] = useState(localStorage.setItem("token", null));

    return (
        <MainContext.Provider value={mainContextData}>
            <section id="main-container" className="main-content row">
               <ConnectionPage/>
            </section>
        </MainContext.Provider>

    );
}

export default MainContainer;