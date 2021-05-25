import React from 'react';
import {useStyles} from "./styled";
import {useDispatch, useSelector} from "react-redux";
import {setChecked} from "../../store/filter/actions";
import {Checkbox, FormControlLabel, FormGroup} from '@material-ui/core';
import clsx from "clsx";
import {v4} from 'uuid';


const Filter = () => {
    const classes = useStyles();
    const slicedTickets = useSelector(state => state.ticketsReducer.slicedTickets)
    const checkboxes = useSelector(state => state.filterReducer)
    const dispatch = useDispatch()

    const changeHandler = (id) => {
        dispatch(setChecked({id, checkboxes, slicedTickets}))
    }

    return (
        <aside className={classes.aside}>
            <div className={classes.filtersBox}>
                <h5>Количество пересадок</h5>
                {checkboxes.map(checkbox => (
                    <FormGroup key={v4()}>
                        <FormControlLabel
                        control={<Checkbox checked={checkbox.isActive} onChange={() => changeHandler(checkbox.id)} name={checkbox.text}
                                           disableRipple
                                           color="default"
                                           checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
                                           icon={<span className={classes.icon} />}
                                           inputProps={{ 'aria-label': 'decorative checkbox' }}
                                           />}
                        label={checkbox.text}
                    />
                    </FormGroup>
                    ))}
            </div>
        </aside>
    );
}

export default Filter;
