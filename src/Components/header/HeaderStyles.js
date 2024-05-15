import { grey } from '@mui/material/colors';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    logoimg: {
        height: "35px",
        width: "40px",
        '@media (min-width: 600px)': {
            marginLeft: '50px ',
            marginRight: '10px'
        },
        '@media (max-width: 799px)': {
            marginLeft: '5px ',
            marginRight: '200px'
        }
    },

    divider: {
        height: '65px !important',      
    },

    search: {
        backgroundColor:grey[200],
        width: "300px",
        paddingLeft: "10px",
        borderRadius: "5px",
        height: "38px",
        marginRight: "225px",
        color: grey[900],
        '&:hover': {
            boxShadow: "3px 5px 5px gray",
        }
    },

    searchicon: {
        paddingRight: "10px",
    },

    menuitems: {
        width: "270px"
    },

    customicon_button: {
        display: 'flex',
        flexDirection: 'column',
        fontSize: '15px !important',
        color:"rgb(86 86 86) !important",
        borderRadius: "0",
        paddingRight: "20px !important",
        paddingLeft: "20px !important",
        '&:hover': {
            color: "black !important",
            backgroundColor: "white !important"
        },
    },

    custom_toolbar:{
        backgroundColor: 'white',
        width: '100%',
    },

    display_style:{
        
        '@media (min-width: 600px)': {
            display:'flex',
            paddingTop:"3px",
        },
        '@media (max-width: 799px)': {
           display:'none',
        }
    },
})
