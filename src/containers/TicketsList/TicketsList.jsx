import React from 'react';
import {v4} from 'uuid';
import {useSelector} from "react-redux";
//components
import Ticket from "../../components/Ticket/Ticket";
import Filter from "../../components/Filter/Filter";
import Tabs from "../../components/Tabs/Tabs";
//styles
import {useStyles} from "./styled";


const TicketsList = ({tickets}) => {
    const classes = useStyles();
    const fetchStatus = useSelector(state => state.ticketsReducer.fetchStatus)

    return (
        <>
            <div className={classes.ticketsListContainer}>
                <Filter/>
                <div className={classes.ticketsListWrapper}>
                    <Tabs/>
                    {fetchStatus === 'fetching' ? <h3>Loading...</h3>
                        : <>
                            {tickets.map(ticket => <Ticket key={v4()} ticket={{
                                ...ticket,
                                logo: `//pics.avs.io/99/36/${ticket.carrier}.png`
                            }}/>)}
                            <button className={classes.showMoreButton}>Показать еще 5 билетов!</button>
                        </>
                    }
                </div>
            </div>
        </>
    );
}


export default TicketsList


