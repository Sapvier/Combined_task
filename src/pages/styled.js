import {makeStyles} from "@material-ui/styles";
import {colors} from "../constants/index";

export const useStyles = makeStyles({
    root: {
        background: colors.main,
        maxWidth: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    },
});