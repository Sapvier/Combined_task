import {makeStyles} from "@material-ui/styles";


export const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    timeSlotsWrapper: {
        minHeight:"30vh",
        width: '50%',
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        columnGap: '10px'
    },
    timeSlot: {
        width: '50px',
        height: '30px',
        backgroundColor: 'white',
        border: '1px solid grey',
        textAlign: "center",
        lineHeight: '30px',
        fontSize: '12px',
        '&:hover': {
            backgroundColor: 'dodgerblue',
            color: 'white',
            cursor: 'pointer'
        }
    }
})