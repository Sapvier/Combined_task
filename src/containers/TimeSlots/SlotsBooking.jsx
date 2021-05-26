import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import {addingDays, getCurrentDay} from "./index";
import {addDays, getDate} from "date-fns";
import {useStyles} from "./styled";
import TimeSlots from "./TimeSlots";


const SlotsBooking = () => {
    const [dates, setDates] = useState([])
    const [activeDay, setActiveDay] = useState({})
    const classes = useStyles();

    useEffect(() => {
        setDates(addingDays())
        setActiveDay(getCurrentDay())
    }, []);

    const clickHandler = (value) => {
        setDates(dates.map(item => {
            if (item.date === getDate(value)) {
                setActiveDay({...item, isCurrent: true})
                return {...item, isCurrent: true}
            } else {
                return {...item, isCurrent: false}
            }
        }))
    }

    return (
        <div className={classes.wrapper}>
            <Calendar maxDate={addDays(new Date(), 6)} minDate={new Date()} showNavigation={false}
                      onClickDay={value => clickHandler(value)}/>
            <TimeSlots activeDay={activeDay}/>
        </div>
    );
};


export default SlotsBooking;
