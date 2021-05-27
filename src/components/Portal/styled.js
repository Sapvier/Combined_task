import {makeStyles} from "@material-ui/styles";


export const useStyles = makeStyles({
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: '1000',
    },
    modal: {
        position: 'fixed',
        top: '40%',
        left: '75%',
        transform: 'translate(-50%, -50%)',
        padding: '30px',
        zIndex: '1000',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
})