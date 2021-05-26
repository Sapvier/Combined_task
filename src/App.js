import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import TicketsPage from "./pages/TicketsPage";
import PrivateRoute from "./pages/PrivateRoute";
import {store} from "./store/store";
import {Provider} from "react-redux";
import UsersPage from "./pages/UsersPage";
import DetailedUserPage from "./pages/DetailedUserPage";
import BookingPage from "./pages/BookingPage";


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/" component={AuthPage} exact/>
                    <PrivateRoute path="/tickets">
                        <TicketsPage/>
                    </PrivateRoute>
                    <PrivateRoute path="/users" exact>
                        <UsersPage/>
                    </PrivateRoute>
                    <Route path="/users/:id" component={DetailedUserPage}/>
                    <Route path="/booking" component={BookingPage} exact/>
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
