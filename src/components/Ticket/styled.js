import {colors, shadows} from "../../constants";
import {makeStyles} from "@material-ui/styles";


export const useStyles = makeStyles({
    wrapper: {
        padding: `20px`,
        minHeight: `184px`,
        minWidth: `502px`,
        backgroundColor: `#FFFFFF`,
        borderRadius: `5px`,
        boxShadow: `${shadows.default}`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `flex-start`,
        alignItems: `center`,
        rowGap: `10px`,
        '&:hover': {
            boxShadow: `${shadows.active}`,
            cursor: 'pointer',
        },
        '& h2': {
            color: `${colors.primaryBlue}`,
            margin: 0,
            fontSize: `24px`,
        },
        '& img': {
            margin: 0
        }
    },
    header: {
        height: `36px`,
        width: `100%`,
        display: `flex`,
        flexDirection: `row`,
        justifyContent: `space-between`,
        alignItems: `center`,
        marginBottom: `10px`,
    },
    segment: {
        height: `39px`,
        width: `100%`,
        display: `flex`,
        flexDirection: `row`,
    },
    segmentItem: {
        width: `33.3%`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `space-between`,
        flexWrap: `wrap`,
        alignItems: `stretch`,
        columnGap: `10px`,
        "& p": {
            color: `${colors.primaryText}`,
            fontSize: `14px`,
            width: `100%`,
            height: ` 50%`
        },
        "& h5": {
            color: `${colors.secondaryGray}`,
            fontSize: `12px`,
            width: `100%`,
            height: `50%`
        }
    }
})
