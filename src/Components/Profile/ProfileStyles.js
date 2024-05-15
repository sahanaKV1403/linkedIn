import { blue } from '@mui/material/colors';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({

    count: {
        color: blue[600],
        float: "right"
    },

    mydetails:{
        marginTop: "70px", 
        '@media (min-width: 600px)': {
            marginLeft: 50,
            width:250
        },
        '@media (max-width: 799px)': {
            marginLeft: 25,
            width:600
        }
    },

    discover_card: {
        marginTop: "20px",
        display: "flex", 
        flexDirection: "column",
        '@media (min-width: 600px)': {
            marginLeft: 50,
            width:250
        },
        '@media (max-width: 799px)': {
            marginLeft: 25,
            width:600
        }
    },

    profile_photo:{
        marginTop: "20px", 
        height: "60px !important", 
        width: '60px !important',
        '@media (min-width: 600px)': {
            marginLeft: "37%",
        },
        '@media (max-width: 799px)': {
            marginLeft: "45%",
        },
    },

    title:{
        fontSize: "20px !important", 
        "&:hover": { textDecoration: "underline" } 
    },
    
    myitems:{
        display: 'flex',
        alignItems: 'center', 
        '&:hover': { backgroundColor: "lightgrey" }
    },

    turnedInNotIcon:{
        fontSize: '40px',
        paddingRight: "5px",
        color:"rgb(82 82 91)"
    },

    discover_more:{
        color:"rgb(113 113 122)",
        textAlign:"center",
        '&:hover': { backgroundColor: "lightgrey" }, 
        paddingTop: "10px", 
        paddingBottom: "10px" 
    },

    tooggle_content:{
        textAlign: "center",
        paddingTop: "20px",
        cursor: "pointer", 
        fontSize:'14px',
        color:"rgb(113 113 122)",
        '@media (min-width: 600px)': {
            display:"none"
        },
        '@media (max-width: 799px)': {
            display:"block"
        }, 
    }
});