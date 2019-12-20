import React from 'react';

// export let mainContextData = {
//     userIsConnected: false,
//     // userStateHandler: (userApiToken) =>{
//     //     if(userApiToken){
//     //         return localStorage.setItem("token", userApiToken);
//     //     }
//     //     return localStorage.setItem("token", null);
//     // },
//     userStateHandler: () => {},
//     username: null,
//     setUsername: () => {}
// };

export const MainContext = React.createContext(
    {
        userIsConnected: false,
        userStateHandler: () => {},
        username: null,
        setUsername: () => {}
    }
);