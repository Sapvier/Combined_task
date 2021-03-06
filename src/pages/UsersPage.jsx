import React, {useEffect} from 'react';
import Header from "../components/Header/Header";
import {Container} from "@material-ui/core";
import {useStyles} from "./styled";
import {fetchUsersFetching} from "../store/users/actions";
import {useDispatch} from "react-redux";
import UsersList from "../containers/UsersList/UsersList";


const UsersPage = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsersFetching())
    }, []);

    return (
        <Container className={classes.rootCentered}>
            <Header/>
            <UsersList/>
        </Container>
    );
};


export default UsersPage;
