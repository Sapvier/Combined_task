import React, {useEffect, useState} from 'react';
import {useStyles} from "./styled";


const TimeSlots = ({activeDay = {}}) => {
    const classes = useStyles();
    const [movie , setMovie] = useState({})
    useEffect(() => {
        fetch('http://api.tvmaze.com/search/shows?q=batman')
            .then(r => r.json())
            .then(result => setMovie(result[0]))
    }, []);

    console.log(movie)
    return (
            Object.keys(activeDay).length > 0 ?
                <div className={classes.timeSlotsWrapper}>
                    {activeDay.slots.map(item => <div className={classes.timeSlot}>
                        {item.timeslot}:00
                    </div>)}
                </div>
            : <h1>Loading...</h1>
    );
}

export default TimeSlots;
