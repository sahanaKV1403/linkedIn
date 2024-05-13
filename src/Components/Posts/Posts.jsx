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
import CardMedia from '@mui/material/CardMedia';
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
import { addPosts } from '../../Store/postsSlice';
import { useStyles } from './PostsStyles';

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
    
        useEffect(() => {
            fetch(`https://api.unsplash.com/search/photos/?page=2&query=office&client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}`)
                .then(response => response.json())
                .then(data => {
                    dispatch(addPosts(data.results));
                })
                .catch(error => console.error(error));
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
                <Divider color='darkgrey' className={classes.divider}/>
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

            {results.map((result, index) =>(
            <Card key={index} className={classes.posts_card}>
                <CardHeader
                    avatar={
                        <Avatar src={result.user.profile_image.large} sx={{ height: '50px', width: '50px' }}>
                        </Avatar>
                    }
                    title={<Typography style={{fontWeight:"bold"}}>{result.user.name}<FiberManualRecordIcon sx={{ fontSize: '8px',color:"grey", margin: "0 5px" }} /><Typography style={{display:'inline' ,color:"grey", fontSze:"4px"}}>{index + 1}</Typography></Typography>}                    
                    subheader={result.user.location}
                />
                <CardContent>
                    <Typography className={classes.bio} >
                        {result.user.bio}
                    </Typography>
                </CardContent>
                <CardMedia
                    component="img"
                    image={result.urls.full}
                    alt={result.alt_description}
                />
                <Box className={classes.img_details_box}>
                    <Typography variant='body2'  className={classes.img_description}><b>{result.alt_description}</b></Typography>
                    <Typography variant='body2'  className={classes.url}>{result.user.portfolio_url}</Typography>
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
                        <NearMeOutlinedIcon className={classes.actions_icons}/>
                        <Typography variant='body2' className={classes.actions_text}>Send</Typography>
                    </Box>

                </Box>
            </Card>
            ))}
        </>
    )
}

export default Posts;