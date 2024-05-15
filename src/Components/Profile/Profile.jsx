import * as React from 'react';
import { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import myphoto from "../../assets/myphoto.jpg";
import Divider from '@mui/material/Divider';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { grey } from '@mui/material/colors';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { mydetails } from "../data";
import { useStyles } from './ProfileStyles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';


const Profile = () => {
    const classes = useStyles();
    const [showContent, setShowContent] = React.useState(true);

    //to toggle when screen size is small
    const toggleContent = () => {
            setShowContent(!showContent);
    };

    return (
        <> 
            <Box sx={{ paddingTop: "30px" }}>
                <Card className={classes.mydetails}>
                    <Avatar className={classes.profile_photo} src={myphoto} />
                    <CardHeader sx={{ textAlign: "center" }}
                        title={
                            <Typography className={classes.title}>
                                Sahana K V
                            </Typography>
                        }
                        subheader="Front End Developer"
                    />



                    <Divider />
                    {(window.innerWidth >= 768 || showContent) && (
                        <div sx={{display:{md:'block',sm:'none'}}}>
                            <CardContent >
                                <Typography variant="body2" color="text.secondary" paddingBottom={"10px"} >
                                    <b>{mydetails.views} <span className={classes.count}>50</span></b>
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <b>{mydetails.impressions} <span className={classes.count}>5195</span></b>
                                </Typography>
                            </CardContent>
                            <Divider />
                            <CardContent className={classes.myitems}>
                                <TurnedInNotIcon className={classes.turnedInNotIcon} />
                                <Typography fontSize='14px' color={grey[700]}><b>My Items</b></Typography>
                            </CardContent>
                        </div>
                    )}
                </Card>
                {(window.innerWidth >= 768 || showContent) && (
                    <div sx={{display:{md:'flex',sm:'none'}}}>
                        <Card className={classes.discover_card} >
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
                    </div>
                )}

                <Typography onClick={toggleContent} className={classes.tooggle_content}><b>{showContent ? 'Show Less': 'Show More'}{showContent ? <ExpandLessIcon sx={{verticalAlign: 'middle'}} /> : <ExpandMoreIcon sx={{verticalAlign: 'middle'}} />}</b></Typography>
            </Box>
          
        </>
    );
};


export default Profile;


