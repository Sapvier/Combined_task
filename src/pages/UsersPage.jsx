import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import {Container} from "@material-ui/core";
import {useStyles} from "./styled";
import {fetchRequest} from "../api/fetch";
import {saveUsers} from "../store/users/actions";
import {useDispatch} from "react-redux";
import UsersList from "../containers/UsersList/UsersList";


const UsersPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    useEffect(() => {
        fetchRequest({
            url: '/users',
            method: 'GET',
            body: null
        })
            .then(r => r.json())
            .then(result => dispatch(saveUsers(result)))
    }, []);

    return (
        <Container className={classes.rootCentered}>
            <Header />
            <UsersList />
        </Container>
    );
};


export default UsersPage;
