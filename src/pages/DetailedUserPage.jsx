import React from 'react';
import {useStyles} from "./styled";
import {Container} from "@material-ui/core";
import DetailedUser from "../containers/DetailedUser/DetailedUser";
import Header from "../components/Header/Header";



const DetailedUserPage = () => {
    const classes = useStyles();
    return (
        <Container className={classes.rootCentered}>
            <Header/>
            <DetailedUser/>
        </Container>
    );
};


export default DetailedUserPage;