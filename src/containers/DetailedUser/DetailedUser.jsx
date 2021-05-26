import React, {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {Button, TextField} from "@material-ui/core";
import {useSelector, useDispatch} from "react-redux";
// styled
import {useStyles} from "./styled";
//utils
import {postUser} from "../../api/fetch";
import {fetchUserFetching, saveUser} from "../../store/detailedUser/actions";


const DetailedUser = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const user = useSelector(state => state.detailedUserReducer.user)
    const isDisabled = useSelector(state => state.authReducer.isAuth) || false
    const history = useHistory()

    useEffect(() => {
        dispatch(fetchUserFetching(history.location.pathname))
    }, []);

    const submitHandler = (e) => {
        e.preventDefault()
        postUser(user).then(r => null)
    }

    const changeHandler = (e) => {
        if (e.target.id === 'city') {
            dispatch(saveUser({
                ...user,
                address: {
                    ...user.address,
                    city: e.target.value
                }
            }))
        } else if (e.target.id === 'company') {
            dispatch(saveUser({
                ...user,
                company: {
                    ...user.company,
                    name: e.target.value
                }
            }))
        } else {
            dispatch(saveUser({
                ...user,
                [e.target.id]: e.target.value
            }))
        }
    }


    return (
        <div className={classes.wrapper}>
            {Object.keys(user).length !== 0 ?
                <div className={classes.detailedStyledUser}>
                    <form noValidate autoComplete="off" onSubmit={submitHandler}>
                        <TextField id="name" label="Name" size="small" disabled={!isDisabled}
                                   defaultValue={user?.name}
                                   onChange={changeHandler}
                                   error={user?.name.length < 1}/>
                        <TextField id="email" label="Email" size="small" disabled={!isDisabled}
                                   defaultValue={user?.email}
                                   onChange={changeHandler}
                                   error={user?.email.length < 1}/>
                        <TextField id="city" label="City" size="small" disabled={!isDisabled}
                                   defaultValue={user?.address.city}
                                   onChange={changeHandler}
                                   error={user?.address.city.length < 1}/>
                        <TextField id="company" label="Company" size="small" disabled={!isDisabled}
                                   defaultValue={user?.company.name}
                                   onChange={changeHandler}
                                   error={user?.company.name.length < 1}/>
                        <Button type="submit" variant="contained" color="primary"
                                disabled={!isDisabled ? true
                                    : user?.name?.length === 0
                                        ? true
                                        : user?.email?.length === 0
                                            ? true
                                            : user?.address?.city.length === 0
                                                ? true
                                                : user?.company?.name.length === 0
                                }>Save</Button>
                    </form>
                </div>
                : <h2>Loading...</h2>}
        </div>
    );
};

export default DetailedUser;
