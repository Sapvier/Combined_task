import React, {useState} from 'react';
import {Box, Button, Link, TextField} from "@material-ui/core";
import {GoogleLogin} from "react-google-login";
import {useStyles} from "./styled";
import {setAuth} from "../../store/auth/actions";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";


const AuthForm = () => {
    const [credentials, setCredentials] = useState({
        username: null,
        password: null,
        error: false
    });
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()

    const responseGoogle = (response) => {
        if (!!response) {
            dispatch(setAuth())
            history.push('/tickets')
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (process.env.REACT_APP_USER_PASSWORD === credentials.password && process.env.REACT_APP_USER_LOGIN === credentials.username) {
            dispatch(setAuth())
            history.push('/tickets')
        } else setCredentials({...credentials, error: true})

    }
    const changeHandler = (e) => {
        setCredentials({
            ...credentials,
            [e.target.id]: e.target.value,
            error: false
        })
    }


    return (
        <Box className={classes.box}>
            <form noValidate autoComplete="off" onSubmit={submitHandler}>
                <TextField error={credentials.error} id="username" label="Username" variant="outlined" size="small"
                           type='text' onChange={changeHandler}/>
                <TextField error={credentials.error} id='password' label="Password" variant="outlined"
                           type='password' size="small" onChange={changeHandler}/>
                <div>
                    <Button type="submit" color="primary" variant="contained">SIGN IN</Button>
                    <Link href="https://google.com/" target="_blank" rel="noreferrer" color='primary'>Need help?</Link>
                </div>
            </form>
            <GoogleLogin
                clientId="329385351437-1i1mg0trorrlnckai6mqscb3el21v4td.apps.googleusercontent.com"
                buttonText="Sign In"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </Box>
    );
};


export default AuthForm;
