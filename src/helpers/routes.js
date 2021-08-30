import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export function IsUserRedirect({user, loggedInPath, children, ...rest}){
    return (
        <Route
            {...rest}
            render = {() => {
                if (!user){
                    return children;
                }
                if (user){
                    return(
                        <Redirect to= {{
                            pathname: loggedInPath
                        }}>
                        </Redirect>
                    );
                }
                return null;
            }}
        />
    );
}

export function ProtectRoute({user, children, ...rest}){
    return (
        <Route
            {...rest}
            render = {({location})=> {
                if (user) {
                    return children;
                }

                if (!user) {
                    return (
                        <Redirect to = {{
                            pathname: 'signin', //maybe take out
                            state: {from: location},
                        }}
                        />
                    );
                }
                return null;
            }}
        />
    );
}
