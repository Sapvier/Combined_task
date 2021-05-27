import {makeStyles} from "@material-ui/styles";


export const useStyles = makeStyles({
    wrapper: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%'
    },
    timeSlotsWrapper: {
        minHeight:"25vh",
        width: '50%',
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        columnGap: '10px',
        backgroundColor: 'white',
        borderRadius: '4px',
        border: '1px solid lightgray',
        padding: 20
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
    },
    timeSlotDisabled: {
        color: 'lightgrey',
        border: '1px solid lightgrey',
        width: '50px',
        height: '30px',
        backgroundColor: 'white',
        textAlign: "center",
        lineHeight: '30px',
        fontSize: '12px',
        cursor: 'pointer',
        "& hover": {
            backgroundColor: 'white'
        }
    },
    slots: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        columnGap: '5px'
    },
    imageWrapper: {
        height: '100%',
        width: '20%',
        '& img': {
            objectFit: 'contain'
        }
    },
    slotsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        rowGap: '10px',
    },
    movieInfo: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        rowGap: '10px',
        '& p': {
            color: 'grey',
            fontSize: '12px'
        },
        "& > div": {
            minHeight: '30%',
        }
    }
})