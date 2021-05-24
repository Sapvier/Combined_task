import {makeStyles} from "@material-ui/styles";
import {colors} from "../../constants";

export const useStyles = makeStyles({
    box: {
        width: '300px',
        minHeight: '200px',
        padding: '20px 20px 10px 20px',
        backgroundColor: `rgb(${colors.grey})`,
        border: 'none',
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",

        '& form': {
            width: '100%',
            display: 'flex',
            rowGap: '10px',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: "15px",
            "& div": {
                width: '100%'
            },
        },
        '& div': {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: 0
        },
        '& > button': {
            fontSize: '0.875rem',
            minWidth: '80px',
            maxHeight: '38px',
            lineHeight: '2',
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            letterSpacing: '0.02857em',
            textTransform: 'uppercase',
            border: "none",
            borderTop: '1px solid gray',
            cursor: 'pointer',
            boxShadow: 'none',
        }
    }
});