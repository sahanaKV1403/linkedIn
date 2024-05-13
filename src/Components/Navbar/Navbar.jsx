import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ViewCompactOutlinedIcon from '@mui/icons-material/ViewCompactOutlined';
import logo from './logo.png'
import Menu from '@mui/material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popper from '@mui/material/Popper';
import Divider from '@mui/material/Divider';
import InputBase from '@mui/material/InputBase';
import { SearchOutlined } from '@mui/icons-material';
import { useStyles } from './NavbarStyles';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

const Navbar = () => {
    const classes = useStyles();
    const [searchAnchorEl, setSearchAnchorEl] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleSearchClick = (event) => {
        setSearchAnchorEl(event.currentTarget);
        setMenuOpen((prev) => !prev);
    };

    const handleClose = () => {
        setMenuOpen(false);
    };


    return (
        <Box >
            <AppBar position="fixed" >
                <Toolbar className={classes.custom_toolbar}>
                    <Box />
                    <img
                        className={classes.logoimg}
                        src={logo}
                        alt="logo"
                    />

                    {/* Searchbox */}
                    <Box className={classes.display_style}>
                        <InputBase
                            className={classes.search}
                            onClick={handleSearchClick}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'menu' }}
                        />
                    </Box>
                    <Popper open={menuOpen} anchorEl={searchAnchorEl}>
                        <Menu
                            anchorEl={searchAnchorEl}
                            keepMounted
                            open={menuOpen}
                            onClose={handleClose}
                            sx={{ top: 10, left: 10 }}
                        >
                            <MenuItem className={classes.menuitems}>Try searching for</MenuItem>
                            <MenuItem className={classes.menuitems}><SearchOutlined className={classes.searchicon} /><b>#hiring</b></MenuItem>
                            <MenuItem className={classes.menuitems}><SearchOutlined className={classes.searchicon} /><b>#jobadvice</b></MenuItem>
                            <MenuItem className={classes.menuitems}><SearchOutlined className={classes.searchicon} /><b>#jobs</b></MenuItem>
                            <MenuItem className={classes.menuitems}><SearchOutlined className={classes.searchicon} /><b>#career</b></MenuItem>
                        </Menu>
                    </Popper>

                    {/* Icons */}
                    <IconButton className={classes.customicon_button} sx={{ borderBottom: "2px solid black", borderRadius: '0' }}>
                        <HomeOutlinedIcon sx={{ color: 'black' }} />
                        <Box className={classes.display_style} sx={{ color: 'black' }}>
                            Home
                        </Box>
                    </IconButton>
                    <IconButton className={classes.customicon_button}>
                        <AccountTreeOutlinedIcon />
                        <Box className={classes.display_style}>
                            My Network
                        </Box>
                    </IconButton>
                    <IconButton className={classes.customicon_button} >
                        <CasesOutlinedIcon />
                        <Box className={classes.display_style}>
                            Jobs
                        </Box>
                    </IconButton>
                    <IconButton className={classes.customicon_button} >
                        <MapsUgcOutlinedIcon />
                        <Box className={classes.display_style}>
                            Messaging
                        </Box>
                    </IconButton>
                    <IconButton className={classes.customicon_button}>
                        <NotificationsActiveOutlinedIcon />
                        <Box className={classes.display_style}>
                            Notifications
                        </Box>
                    </IconButton>

                    <Box sx={{ display: { md: 'none', small: 'flex' } }}>
                        <IconButton >
                            <MoreVertIcon />
                        </IconButton>
                    </Box>

                    <Box className={classes.display_style}>
                        <IconButton className={classes.customicon_button}>
                            <AccountCircleOutlinedIcon />
                            <Box className={classes.display_style}>
                                Me
                            </Box>

                        </IconButton>
                        <Divider className={classes.divider} orientation="vertical" />
                        <IconButton className={classes.customicon_button}>
                            <ViewCompactOutlinedIcon />
                            <Box className={classes.display_style}>
                                For Business
                            </Box>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
