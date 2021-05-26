import React from 'react';
import {useStyles} from "./styled";
import {Container} from "@material-ui/core";
import SlotsBooking from "../containers/TimeSlots/SlotsBooking";
import Header from "../components/Header/Header";


const BookingPage = () => {
    const classes = useStyles();

    return (
        <Container className={classes.rootCentered}>
            <Header/>
            <SlotsBooking />
        </Container>
    );
};


export default BookingPage;
