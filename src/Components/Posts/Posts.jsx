import React from 'react'
import { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { Divider } from '@mui/material';
import Box from '@mui/material/Box';
import { Typography } from '@material-ui/core';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CardContent from '@mui/material/CardContent';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SyncAltOutlinedIcon from '@mui/icons-material/SyncAltOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import Popper from '@mui/material/Popper';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useStyles } from './PostsStyles';
import {fetchData} from '../api'

const Posts = () => {
    const classes = useStyles();
    const results = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    // without redux store :=
    // const [results, setResults] = useState([]);
    // useEffect(() => {
    //     fetch(`https://api.unsplash.com/search/photos/?page=2&query=office&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             setResults(data.results);
    //         })
    //         .catch(error => console.error(error));
    // }, []);

    //dispatch is a function that is used to send actions to the Redux store. 
    //Notifies the Redux store that a specific action has occurred
    //fetch data -> convert to json -> call dispatch which inturn updates the state with results array of fetched data 
    
    useEffect(() => {
        fetchData(dispatch);
      }, [dispatch]);


    const [searchAnchorEl, setSearchAnchorEl] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSearchClick = (event) => {
        setSearchAnchorEl(event.currentTarget);
        setMenuOpen((prev) => !prev);
    };

    const handleClose = () => {
        setMenuOpen(false);
    };

    const MenuItems = styled(MenuItem)(() => ({
        paddingBottom: "5px",
        width: "120px"
    }));

    return (
        <>
            <Box className={classes.posts_box}>
                <Divider color='darkgrey' className={classes.divider} />
                <Typography onClick={handleSearchClick} variant="body2">Sort by: <b>Top</b></Typography>

            </Box>
            <Popper open={menuOpen} anchorEl={searchAnchorEl}>
                <Menu
                    anchorEl={searchAnchorEl}
                    keepMounted
                    open={menuOpen}
                    onClose={handleClose}
                    sx={{ top: 5, left: 5 }}
                >
                    <MenuItems>Top</MenuItems>
                    <MenuItems>Recent</MenuItems>
                </Menu>
            </Popper>

            {results.map((result, index) => (
                <Card key={index} className={classes.posts_card}>
                    <CardHeader
                        avatar={
                            <Avatar src={result.user.profile_image.large} sx={{ height: '50px', width: '50px' }}>
                            </Avatar>
                        }
                        title={<Typography style={{ fontWeight: "bold" }}>{result.user.name}<FiberManualRecordIcon sx={{ fontSize: '8px', color: "grey", margin: "0 3px" }} /><Typography style={{ display: 'inline', color: "grey", fontSze: "4px" }}>{index + 1}</Typography></Typography>}
                        subheader={result.user.location}
                    />
                    <CardContent>
                        <Typography className={classes.bio} >
                            {result.user.bio}
                        </Typography>
                    </CardContent>
                    {result.urls.full &&
                            //checks if the selected file has a substring "data:image/jpeg;base64" as selected file value is large
                            ((result.urls.full.includes("data:image/jpeg;base64")||result.urls.full.includes("https://images.unsplash.com/")) ?
                                <img src={result.urls.full} alt="Selected" height={'350px'} width={'100%'} />
                                :
                                (result.urls.full.includes("data:video/mp4;base64") ?
                                    <video controls style={{ width: '100%', height: "350px" }}>
                                        <source src={result.urls.full} type="video/mp4" />
                                    </video>
                                    :
                                    (result.urls.full.includes("data:application/pdf;base64") ?
                                        <embed src={result.urls.full + "#page=1"} type="application/pdf" style={{ width: '100%', height: "350px" }}/>
                                        :
                                        null
                                    )
                                )
                            )

                        }
                    <Box className={classes.img_details_box}>
                        <Typography variant='body2' className={classes.img_description}><b>{result.alt_description}</b></Typography>
                        <Typography variant='body2' className={classes.url}>{result.user.portfolio_url}</Typography>
                    </Box>
                    <Box className={classes.comments_box}>
                        <Box sx={{ display: "flex" }}>
                            <LightbulbOutlinedIcon />
                            <Typography>{result.user.total_likes}</Typography>
                        </Box>
                        <Box >
                            <Typography variant='body2'>139 comments <FiberManualRecordIcon sx={{ fontSize: '8px', margin: "0 3px" }} /> 593 reposts</Typography>
                        </Box>
                    </Box>
                    <Divider />
                    <Box className={classes.actions_box}>
                        <Box className={classes.actions}>
                            <ThumbUpOutlinedIcon className={classes.actions_icons} />
                            <Typography variant='body2' className={classes.actions_text}>Like</Typography>
                        </Box>
                        <Box className={classes.actions}>
                            <ChatBubbleOutlineOutlinedIcon className={classes.actions_icons} />
                            <Typography variant='body2' className={classes.actions_text}>Comment</Typography>
                        </Box>
                        <Box className={classes.actions}>
                            <SyncAltOutlinedIcon className={classes.actions_icons} />
                            <Typography variant='body2' className={classes.actions_text}>Repost</Typography>
                        </Box>
                        <Box className={classes.actions}>
                            <NearMeOutlinedIcon className={classes.actions_icons} />
                            <Typography variant='body2' className={classes.actions_text}>Send</Typography>
                        </Box>

                    </Box>
                </Card>
            ))}
        </>
    )
}

export default Posts;