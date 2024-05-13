import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    startpost_card:{
        width: 600, 
        height: 120, 
        marginTop: "100px", 
        display: 'flex', 
        alignItems: "center", 
        flexWrap: "wrap",
        '@media (min-width: 600px)': {
            marginLeft: '50px'
        },
        '@media (max-width: 799px)': {
            marginLeft: '25px'
        }
    },

    dialog_title:{
        margin: 0, 
        padding: 2, 
        display: "flex", 
        alignItems: "center"
    },

    dialog_avatar:{
        margin: "10px 15px 10px 0px"        
    },

    close:{
        position: 'absolute !important',
        right: 8,
        top: 10,
        color: "grey",
    },

    textfield:{
        width: "100%",
        marginTop: "10px !important"
    },

    add_avatar:{
        backgroundColor:'rgb(235 235 235) !important' , 
        width: 40, 
        height: 40, 
        marginRight: '15px', 
        padding: "10px", 
        '&:hover': { boxShadow: '0px 5px 0px 0px grey' }
    },

    add_icons:{
        color: 'rgb(97 97 97) !important', 
        fontSize: '30px !important'
    },

    icon_labels:{
        color:"grey", 
        paddingRight:"7%", 
        marginLeft:"1% !important"
    }

})