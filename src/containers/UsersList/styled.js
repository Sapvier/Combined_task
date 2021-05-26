import {makeStyles} from "@material-ui/core";
import {colors} from "../../constants";

export const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableHeader: {
        backgroundColor: `${colors.materialPrimary}`,
        "& tr th": {
            color: 'white',
            textTransform: 'uppercase',
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: 'dodgerblue'
            }
        }
    },
    tableItem: {
        "&:hover": {
            backgroundColor: "rgb(240, 240, 240)",
            cursor: 'pointer'
        }
    },
    wrapper: {
        minWidth: '90%'
    },
    h2: {
        flexGrow: 2,
        lineHeight: '200px'
    }
});