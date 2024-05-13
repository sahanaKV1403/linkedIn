import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    posts_box:{
        display: "flex", 
        marginTop: "10px", 
        alignItems: "center", 
        justifyContent: "center"
    },

    divider:{
        marginRight: "7px !important", 
        width: "78%", 
        height:"1px",
        border: "1px solid lightgrey",
        '@media (min-width: 600px)': {
            marginLeft: '50px !important'
        },
        '@media (max-width: 799px)': {
            marginLeft: '3px !important'
        }
    },

    posts_card:{
        width: 600, 
        marginTop: "10px", 
        marginBottom: "10px",
        '@media (min-width: 600px)': {
            marginLeft: '50px'
        },
        '@media (max-width: 799px)': {
            marginLeft: '25px'
        } 
    },

    actions_box:{
        display: "flex",
         justifyContent: "space-between",
          margin: "10px 25px"
    },

    actions:{
        display: "flex", 
        alignItems: "center", 
        color: "rgb(113 113 122)", 
        padding: "10px", 
        "&:hover": {
            backgroundColor: "lightgrey",
            borderRadius: "5px"
        }
    },

    actions_text:{
        fontSize: "18px"
    },

    actions_icons:{
        marginRight: "5px", 
        fontSize: "30px !important" 
    },

    comments_box:{
        display: "flex", 
        justifyContent: "space-between", 
        margin: "5px 10px", 
        color: "rgb(113 113 122)"
    },

    img_details_box:{
        backgroundColor: "rgb(226 232 240)", 
        padding: "20px", 
        paddingBottom: "10px"
    },

    img_description:{
        fontSize: "16px", 
        paddingBottom: "5px" 
    },

    url:{
        fontSize: "15px", 
        color: "rgb(113 113 122)"
    },

    bio:{
        color: 'black',
        fontSize: "16px" 
    }
})