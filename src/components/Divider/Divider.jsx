import React from "react";
import {useStyles} from "./styled";


const Divider = () => {
    const classes = useStyles();

    return (
        <h2 className={classes.h2}><span>or</span></h2>
    );
};
export default Divider;