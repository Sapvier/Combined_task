import React from 'react';
import {useStyles} from "./styled";
import {useSelector, useDispatch} from "react-redux";
import {setSorted} from "../../store/sort/actions";


const Tabs = () => {
    const classes = useStyles();
    const tickets = useSelector(state => state.ticketsReducer.slicedTickets)
    const tabs = useSelector(state => state.sortReducer)
    const dispatch = useDispatch()

    const clickHandler = (id) => {
        dispatch(setSorted({id, tabs, tickets}))
    }

    return (
        <div className={classes.tabsWrapper}>
            {tabs.map((tab, i) => <div
                onClick={() => clickHandler(tab.sort)}
                data-active={tab.isActive}
                key={i}>{tab.text}
            </div>)}
        </div>
    );
};


export default Tabs;
