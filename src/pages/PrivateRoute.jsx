import React from 'react';
import {Redirect, Route} from "react-router-dom"


function PrivateRoute({children, ...rest}) {
    const isAuth = JSON.parse(localStorage.getItem('isAuth'))?.authReducer?.isAuth

    return (
        <Route
            {...rest}
            render={({location}) =>
                isAuth ? (children)
                    : (<Redirect to={{
                        pathname: "/",
                        state: {from: location}
                    }}/>)
            }
        />
    );
}

export default PrivateRoute;