import React from 'react';
import {Redirect, Route} from "react-router-dom"


function PrivateRoute({children, ...rest}) {
    console.log('redirected')

    return (
        <Route
            {...rest}
            render={({location}) =>
                true ? (children)
                    : (<Redirect to={{
                        pathname: "/",
                        state: {from: location}
                    }}/>)
            }
        />
    );
}

export default PrivateRoute;