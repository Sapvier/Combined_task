import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import TicketsPage from "./pages/TicketsPage";
import PrivateRoute from "./pages/PrivateRoute";
import {store} from "./store/store";
import {Provider} from "react-redux";
import UsersPage from "./pages/UsersPage";



function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={AuthPage} exact/>
                    <PrivateRoute path="/tickets">
                        <TicketsPage/>
                    </PrivateRoute>
                    <PrivateRoute path="/users">
                        <UsersPage/>
                    </PrivateRoute>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
