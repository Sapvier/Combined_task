import {colors, shadows} from "../../constants";
import {makeStyles} from "@material-ui/styles";


export const useStyles = makeStyles({
    tabsWrapper: {
        minWidth: '502px',
        height: '50px',
        backgroundColor: '#FFFFFF',
        borderRadius: '5px',
        boxShadow: `${shadows.default}`,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'stretch',
        '& div': {
            height: '100%',
            minWidth: '33.3%',
            textAlign: 'center',
            lineHeight: '50px',
            fontSize: '12px',
            color: `${colors.primaryText}`,
            cursor: 'pointer',
            textTransform: 'uppercase',
            '&[data-active=true]': {
                color: 'white',
                backgroundColor: `${colors.materialPrimary}`,
            },
        },
        '& div:hover:not(div[data-active=true])': {
            backgroundColor: `${colors.hoverBlue}`
        },
        '& div:first-child': {
            borderRadius: '5px 0 0 5px'
        },
        '& div:last-child': {
            borderRadius: '0 5px 5px 0'
        }
    }
})


