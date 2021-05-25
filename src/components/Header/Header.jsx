import React, {useCallback, useEffect} from 'react';
import {AppBar, Button, Toolbar} from "@material-ui/core";
import Logo from "../../assets/Logo.svg";
import {useStyles} from "./styled";
import {v4} from 'uuid';
import {useHistory} from "react-router-dom";
import {setAuth} from "../../store/auth/actions";
import {useDispatch, useSelector} from "react-redux";
import {googleSignOut, onLoad} from "../../utils/googleAuth";


const Header = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles();
    const clientId = useSelector(state => state.authReducer.clientId)
    const links = ['tickets', 'users', 'login']


    useEffect(() => {
        onLoad()
    }, []);


    const signOut = useCallback(() => {
            if (googleSignOut()) {
                dispatch(setAuth())
                history.push('/')
            }
    }, [])


    const clickHandler = (e) => {
        const target = '/' + e.target.innerText.toLowerCase()
        if (target === history.location.pathname) {
            return null
        }
        else if (target === '/login') {
            signOut()
        }
        else {
            history.push(target)
        }
    }


    return (
        <AppBar position="static" className={classes.appBar}>
            <Toolbar className={classes.header}>
                <div className={classes.logoWrapper}>
                    <img src={Logo} height='60' width='60' alt="logo"/>
                </div>
                <div>
                    {links.map(item => <Button color="inherit" key={v4()} onClick={clickHandler}>{item}</Button>)}
                </div>
            </Toolbar>
        </AppBar>
    );
};


export default Header;
