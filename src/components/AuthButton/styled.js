import {makeStyles} from "@material-ui/styles";

export const useStyles = makeStyles({
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '5px',
        fontSize: '0.875rem',
        minWidth: '100%',
        lineHeight: '1.75',
        borderBottomLeftRadius: "5px",
        borderBottomRightRadius: "5px",
        letterSpacing: '0.02857em',
        textTransform: 'uppercase',
        border: "none",
        borderTop: '1px solid gray',
        cursor: 'pointer',

        '& p': {
            paddingLeft: '5px',
            fontWeight: '500',
            fontSize: '10px',
            lineHeight: '18px'
        },
        '&:hover': {
            backgroundColor: 'lightgray'
        }

    },
});