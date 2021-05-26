import {makeStyles} from "@material-ui/styles";


export const useStyles = makeStyles({
    box: {
        width: '300px',
        minHeight: '200px',
        padding: '20px',
        backgroundColor: `white`,
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
            "& div": {
                width: '100%',
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
            minWidth: '100%',
            maxHeight: '38px',
            lineHeight: '2',
            borderBottomLeftRadius: "5px",
            borderBottomRightRadius: "5px",
            letterSpacing: '0.02857em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            backgroundColor: 'red',
            display: "flex",
            borderRadius: '4px !important',
            flexDirection: 'row',
            justifyContent: 'center',
            boxShadow: 'none !important',
            alignItems: 'center',
            border: '1px solid rgba(0, 0, 0, 0.25) !important',
            "& > div": {
                padding: '5px !important'
            },
            '&:hover': {
                border: '1px solid rgba(0, 0, 0, 0.8) !important'
            }
        }
    }
});