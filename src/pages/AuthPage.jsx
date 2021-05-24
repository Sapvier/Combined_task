import React from 'react';
import {Container} from "@material-ui/core";
import {useStyles} from "./styled";
import AuthForm from "../containers/AuthForm/AuthForm";


const AuthPage = () => {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <AuthForm/>
        </Container>
    );
};


export default AuthPage;
