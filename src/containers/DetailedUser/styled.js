import {makeStyles} from "@material-ui/styles";


export const useStyles = makeStyles({
    detailedStyledUser: {
        padding: '20px',
        opacity: '80%',
        borderRadius: '5px',
        minWidth: '300px',
        width: '30%',
        backgroundColor: `white`,
        boxShadow: "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
        '& h1': {
            textAlign: 'center',
            margin: 0,
            color: 'rgba(0,0,0, 0.8)',
        },
        '& form': {
            padding: '20px 20px 10px 20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            "& div": {
                marginBottom: '5px'
            },
            '& button': {
                minWidth: '100px'
            }
        }
    },
    wrapper: {
        padding: '50px',
        width: '90%',
        minHeight: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

