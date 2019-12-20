import React, {useState} from 'react';
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import MainContainer from "./layouts/MainContainer";
import {MainContext, mainContextData} from "../mainContext";

function App() {
    const [isConnected, setIsConnected] = useState(localStorage.getItem("token"));
    const [username, setUsername] = useState(null);

    return (
        <>
            {/*<Header />*/}
            <MainContext.Provider value={{isConnected, setIsConnected, username, setUsername}}>
                <MainContainer/>
            </MainContext.Provider>

            {/*<Footer />*/}
        </>
    );
}

export default App;
