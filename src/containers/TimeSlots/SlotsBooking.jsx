import React, {useEffect} from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import {addDays, getDate} from "date-fns";
import {useStyles} from "./styled";
import TimeSlots from "./TimeSlots";
import {addingDays} from "./index";
import {useDispatch} from "react-redux";
import {saveMovie, setCurrentDay, setDates, setIsCurrent} from "../../store/booking/actions";
import {fetchMovie} from "../../api/fetch";


const SlotsBooking = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const localStore = JSON.parse(localStorage.getItem('isAuth'))

    useEffect(() => {
        fetchMovie()
            .then(result => dispatch(saveMovie(result)))
        if (localStore === null) {
            dispatch(setDates(addingDays()))
        }
    }, []);

    const clickHandler = (value) => {
        dispatch(setIsCurrent((value.toString())))
        dispatch(setCurrentDay())
    }

    return (
        <div className={classes.wrapper}>
            <Calendar maxDate={addDays(new Date(), 7)} minDate={addDays(new Date(), -7)} showNavigation={false}
                      onClickDay={value => clickHandler(value)}/>
            <TimeSlots />
        </div>
    );
};


export default SlotsBooking;
