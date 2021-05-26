import {colors, shadows, typography} from "../../constants";
import {makeStyles} from "@material-ui/styles";


export const useStyles = makeStyles({
    aside: {
        minHeight: '100vh',
        margin: 0,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
    },
    filtersBox: {
        minWidth: '232px',
        minHeight: '252px',
        padding: '20px 0px',

        backgroundColor: '#FFFFFF',
        borderRadius: '5px',
        boxShadow: `${shadows.default}`,

        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        '& div': {
            width: '100%',
            height: '40px',
            padding: '5px 20px 5px 20px',
            display: 'flex',
            justifyContent: 'center',
            alignSelf: 'flex-start',
            margin: 0,
            fontSize: '13px',
            fontWeight: `${typography.regular}`,
            color: `${colors.primaryText}`,
            '&:hover': {
                backgroundColor: `${colors.hoverBlue}`
            }
        },
        '& h5':
            {
                padding: '0 20px 10px',
                color: `${colors.primaryText}`,
                fontSize: '12px',
                textAlign: 'left',
                margin: 0,
                textTransform: 'uppercase',
            }

    },
    icon: {
        borderRadius: 2,
        width: 20,
        height: 20,
        border: `1px solid #9ABBCE`,
        backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
        'input:disabled ~ &': {
            boxShadow: 'none',
            background: 'rgba(206,217,224,.5)',
        },
    },
    checkedIcon: {
        border: `1px solid dodgerblue`,
        '&:before': {
            display: 'block',
            width: 16,
            height: 16,
            backgroundImage:
                "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='1 1 13 13 '%3E%3Cpath" +
                " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
                "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='dodgerblue'/%3E%3C/svg%3E\")",
            content: '""',
        },
    }
})

