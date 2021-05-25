import {makeStyles} from "@material-ui/styles";


export const useStyles = makeStyles({
    h2: {
        width: '100%',
        textAlign: 'center',
        borderBottom: '1px solid lightgrey',
        lineHeight: '0.1em',
        margin: '15px 0 20px',
        '& span': {
            background: '#fff',
            padding: '0 10px',
            color: 'lightgrey',
            fontSize: '12px'
        }
    }
});