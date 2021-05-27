import React from 'react';
import {useStyles} from "./styled";
import {v4} from "uuid";
import {setIsAvailable} from "../../store/booking/actions";
import {useDispatch, useSelector} from "react-redux";
import {format} from "date-fns";


const TimeSlots = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const movie = useSelector(state => state.bookingReducer.movie)
    const activeDay = useSelector(state => state.bookingReducer.day)

    //вынести в index.js?
    const clickHandler = (e) => {
        e.preventDefault()
        const result = activeDay.slots.map(item => {
            if (item.id === +e.target.id) {
                return {...item, isAvailable: !item.isAvailable}
            } else return item
        })
        dispatch(setIsAvailable({result, number: activeDay.number}))
    }


    return (
        Object.keys(activeDay).length > 0 ?
            <div className={classes.timeSlotsWrapper}>
                <img height='200' width='135' src={movie?.show?.image?.medium} alt='poster'/>
                <div className={classes.movieInfo}>
                    <div>
                        <h2>{movie?.show?.name}</h2>
                        <p>{movie?.show?.genres.join(", ")}</p>
                    </div>
                    <div className={classes.slotsWrapper}>
                        <h3>{format(Date.parse(activeDay.date), 'PPPP').substr(0, format(Date.parse(activeDay.date), 'PPPP').length - 6)}</h3>
                        <div className={classes.slots}>
                            {activeDay?.slots.map(item => <div key={v4()} id={item.id}
                                                              className={item.isAvailable ? classes.timeSlot : classes.timeSlotDisabled}
                                                              onClick={activeDay.isEditable ? clickHandler : null}>
                                {item.timeslot}:00
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
            : <h2>Loading...</h2>
    );
}


export default TimeSlots;
