import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles({
    addtofeed_box: {
        '@media (min-width: 600px)': {
            display: 'block'
        },
        '@media (max-width: 799px)': {
            display: 'none'
        }
    },

    addtofeed_card: {
        width: 345,
        marginLeft: "50px",
        marginTop: "100px",
        height: "450px"
    },

    addtofeed_heading: {
        padding: "20px",
        paddingBottom: "3px",
        fontSize: "medium !important"
    },

    recommendations: {
        paddingLeft: '25px',
        color: "rgb(113 113 122)",
        fontWeight: '500',
        cursor: 'pointer',
        paddingTop: "15px"
    },

    links_card: {
        display: "flex",
        margin: "20px 97px",
        flexWrap: "wrap",
        position: "sticky",
        top: 80
    },

    links: {
        padding: "5px",
        color: 'rgb(113 113 122) !important',
        '&:hover': {
            color: "blue !important"
        }
    },

    menuitem: {
        paddingBottom: "5px",
        width: "230px"
    },

    plus:{
        fontSize: "20px", 
        marginRight: "10px"
    }
})