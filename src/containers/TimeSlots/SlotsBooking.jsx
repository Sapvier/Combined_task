import React, {useEffect, useState} from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import {addDays} from "date-fns";
import {useStyles} from "./styled";
import TimeSlots from "./TimeSlots";
import {useDispatch} from "react-redux";
import {fetchMovieStart, setIsCurrent} from "../../store/booking/actions";
import TodayIcon from '@material-ui/icons/Today';
import CalendarModal from "../../components/Portal/CalendarModal";


const SlotsBooking = () => {
    const [isCalenderOpen, setIsCalenderOpen] = useState(false)
    const classes = useStyles();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMovieStart())
    }, []);

    const calenderClickHandler = () => {
        setIsCalenderOpen(!isCalenderOpen)
    }

    const clickHandler = (value) => {
        dispatch(setIsCurrent((value.toString())))
    }


    return (
        <div className={classes.wrapper}>
            <CalendarModal open={isCalenderOpen} onClose={() => setIsCalenderOpen(!isCalenderOpen)}>
                <Calendar maxDate={addDays(new Date(), 7)} minDate={addDays(new Date(), -7)} showNavigation={false}
                          onClickDay={value => clickHandler(value)} onClose={() => setIsCalenderOpen(!isCalenderOpen)}/>
            </CalendarModal>
            <TimeSlots />
            <TodayIcon onClick={calenderClickHandler}/>
        </div>
    );
};


export default SlotsBooking;
