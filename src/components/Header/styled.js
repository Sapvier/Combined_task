import {makeStyles} from "@material-ui/styles";


export const useStyles = makeStyles({
    appBar: {
        marginBottom: "10px"
    },
    logoWrapper: {
        paddingTop: '5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

        '& img': {
            height: '70px',
            width: '70px',
            objectFit: 'cover',
        }
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
    }
})