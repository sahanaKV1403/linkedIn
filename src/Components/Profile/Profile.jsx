import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import myphoto from "./myphoto.jpg";
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import {  grey } from '@mui/material/colors';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { mydetails } from "../data";
import { useStyles } from './ProfileStyles';

const Profile = () => {
    const classes = useStyles();
    const [showContent, setShowContent] = React.useState(true);
    
    const toggleContent = () => {
        setShowContent(!showContent);
    };

    React.useEffect(() => {
        const handleResize = () => {
            setShowContent(window.innerWidth > 800);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <>
            <Box sx={{ paddingTop: "30px" }}>
                <Card className={classes.mydetails}>
                    <Avatar className={classes.profile_photo} aria-label="logo" src={myphoto}/>
                    <CardHeader sx={{ textAlign: "center" }}
                        title={
                            <Typography className={classes.title}>
                                Sahana K V
                            </Typography>
                        }
                        subheader="Front End Developer"
                    />
                    <Divider />
                    {showContent && (
                        <>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary" paddingBottom={"10px"} >
                                    <b>{mydetails.views} <span className={classes.count}>50</span></b>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <b>{mydetails.impressions} <span className={classes.count}>5195</span></b>
                                </Typography>
                            </CardContent>
                            <Divider />
                            <CardContent className={classes.myitems}>
                                <TurnedInNotIcon  className={classes.turnedInNotIcon}/>
                                <Typography fontSize='14px' color={grey[700]}><b>My Items</b></Typography>
                            </CardContent>
                        </>
                    )}
                </Card>
                {showContent && (
                    <>
                        <Card className={classes.discover_card}>
                            <Link href="#" underline="hover" padding={"10px"}>
                                <b>Groups</b>
                            </Link>
                            <Link href="#" underline="hover" padding={"10px"}>
                                <b>Events</b>
                            </Link>
                            <Link href="#" underline="hover" padding={"10px"}>
                                <b>Followed hashtags</b>
                            </Link>
                            <Divider />
                            <Typography className={classes.discover_more} ><b>Discover more</b></Typography>
                        </Card>
                    </>
                )}

                <Typography onClick={toggleContent} className={classes.tooggle_content}><b>{showContent ? 'Show Less' : 'Show More'}</b></Typography>

            </Box>
        </>
    );
};


export default Profile;


