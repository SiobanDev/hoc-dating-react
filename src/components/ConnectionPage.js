import React, {useContext, useEffect, useState} from 'react';
import {connexion} from "../services/connexion";
import Loader from "./layouts/Loader";
import PopInContainer from "./layouts/PopIn";
import ConnexionForm from "./layouts/ConnexionForm";
import {MainContext} from "../mainContext";

const ConnectionPage = () => {

    const [onSubmit, setOnSubmit] = useState(false);
    // const [showLoader, setShowLoader] = useState(false);
    const [feedbackType, setFeedbacktype] = useState(null);
    // const [showPopIn, setShowPopIn] = useState(false);

    const mainContext = useContext(MainContext);

    useEffect((e) => {
        async function fetchData() {
            const userApiToken = await connexion(e);

            if (userApiToken) {
                mainContext.showPopIn = true;
                setFeedbacktype(2);
                mainContext.userStateHandler(userApiToken);
                return true;
            }
            mainContext.userStateHandler(userApiToken);
            setFeedbacktype(4);
            return false;
        }

        fetchData().then();
    }, [onSubmit]);

    if (!mainContext.userIsConnected) {
        return (
            <>
                <ConnexionForm submitHandler={setOnSubmit(onSubmit)}/>
                {/*<Loader display={showLoader}/>*/}
                <PopInContainer popInType={feedbackType} show={mainContext.showPopIn}/>
            </>
        );
    }

    return (
        <PopInContainer popInType={feedbackType} show={mainContext.showPopIn}/>
    );
};

export default ConnectionPage;