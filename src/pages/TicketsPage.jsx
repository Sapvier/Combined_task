import React, {useCallback, useEffect, useState} from 'react';
import {Container} from "@material-ui/core";
import TicketsList from "../containers/TicketsList/TicketsList";
import {useStyles} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {fetchTicketsLoading} from "../store/tickets/actions";
import {sortArray} from "../components/Tabs";
import {fetchIdLoading} from "../store/auth/actions";
import Header from "../components/Header/Header";


const TicketsPage = () => {
    const classes = useStyles();
    const [sorted, setSorted] = useState([])
    const dispatch = useDispatch()
    const tickets = useSelector(state => state.ticketsReducer.tickets).slice(0, 5)
    const searchId = useSelector(state => state.ticketsReducer.searchId)
    const fetchStatus = useSelector(state => state.ticketsReducer.fetchStatus)
    const stableDispatch = useCallback(
        dispatch, [],
    );

    useEffect(() => {
        stableDispatch(fetchIdLoading())
    }, [stableDispatch])

    useEffect(() => {
        stableDispatch(fetchTicketsLoading(searchId))
    }, [searchId]);

    useEffect(() => {
        if(fetchStatus === 'success') {
            setSorted(sortArray('price', tickets))
        }
    }, [fetchStatus])

    return (
        <Container className={classes.root}>
            <Header />
            <TicketsList tickets={tickets}/>
        </Container>
    );
};


export default TicketsPage;
