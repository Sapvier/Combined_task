import React from 'react';
import ReactDom from 'react-dom'
import {useStyles} from "./styled";


function CalendarModal({open, children, onClose}) {
    const classes = useStyles();

    if (!open) return null
    return ReactDom.createPortal(
        <>
            <div className={classes.overlay} onClick={onClose}/>
            <div className={classes.modal}>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default CalendarModal;