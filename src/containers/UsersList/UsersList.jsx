import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {saveUsers} from "../../store/users/actions";
import {sortArray} from "./index";
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import {v4} from "uuid";
import {useStyles} from "./styled";
import {useHistory} from "react-router-dom";


const UsersList = () => {
    const fields = ['#', 'Name', 'City', 'Company']
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory();
    const users = useSelector(state => state.usersReducer.users)
    const [sorted, setSorted] = useState({
        '#': true,
        name: false,
        city: false,
        company: false
    })

    const unsorted = {
        '#': false,
        name: false,
        city: false,
        company: false
    }


    const itemClickHandler = (id) => {
        history.push(`/users/${id}`)
    }


    const clickHandler = (param) => {
        const receivedParam = param.toLowerCase()
        if (sorted[receivedParam]) {
            dispatch(saveUsers(users.reverse()))
            setSorted({...unsorted})
        } else {
            dispatch(saveUsers(sortArray(receivedParam, users)))
            setSorted({
                ...unsorted,
                [receivedParam]: true
            })
        }
    }

    return (
        users.length > 0 ?
            <div className={classes.wrapper}>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead className={classes.tableHeader}>
                            <TableRow>
                                {fields.map(field => <TableCell key={v4()} onClick={() => clickHandler(field)}
                                                                align="left">{field} {sorted[field.toLowerCase()] ? `⇧` : `⇩`}</TableCell>)}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.name} className={classes.tableItem} onClick={() => itemClickHandler(user.id)}>
                                    <TableCell component="th" scope="row">{user.id}</TableCell>
                                    <TableCell align="left">{user.name}</TableCell>
                                    <TableCell align="left">{user.address.city}</TableCell>
                                    <TableCell align="left">{user.company.name}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            : <h2 className={classes.h2}>Loading ...</h2>
    )
};

export default UsersList;
