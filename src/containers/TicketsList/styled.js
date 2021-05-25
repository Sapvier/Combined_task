import {colors} from "../../constants";
import {makeStyles} from "@material-ui/styles";


export const useStyles = makeStyles({
    ticketsListWrapper: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        rowGap: '20px',

        '& h3': {
            height: '70vh',
        }
    },
    ticketsListContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: '20px',
        paddingTop: '60px'
    },
    showMoreButton: {
        width: '502px',
        height: '50px',
        textTransform: 'uppercase',
        backgroundColor: `${colors.primaryBlue}`,
        border: 'none',
        color: 'white',
        fontSize: '12px',
        borderRadius: '5px',
        cursor: 'pointer',
    }
})
