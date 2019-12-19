import React from 'react';

export let mainContextData = {
    userIsConnected: false,
    userStateHandler: (userApiToken) =>{
        if(userApiToken){
            return localStorage.setItem("token", userApiToken);
        }
        return localStorage.setItem("token", null);
    },
    showPopIn: false
};

export const MainContext = React.createContext(mainContextData);