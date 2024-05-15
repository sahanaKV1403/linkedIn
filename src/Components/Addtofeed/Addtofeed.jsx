import React from 'react'
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import { grey } from '@mui/material/colors';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import Typography from '@mui/material/Typography';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Link from '@mui/material/Link';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import peopleData from "../data";
import Popper from '@mui/material/Popper';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useStyles } from './AddtofeedStyles';

const Addtofeed = () => {
  const classes = useStyles();
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 14,
      padding: 10
    },
  }));

  const Follow = styled(Button)(() => ({
    border: "2px solid lightgrey",
    borderRadius: "50px 50px",
    color: grey[700],
    padding: "0px 20px",
    textTransform: 'none',
    fontSize: '15px',
    marginLeft: "70px",
    marginTop: "2px",
    '&:hover': {
      border: "2px solid lightgrey",
      backgroundColor: "lightgrey"
    }
  }));

  //for dropdown
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
    <Box className={classes.addtofeed_box}>
      <Card className={classes.addtofeed_card}>
        <Typography variant="body2" className={classes.addtofeed_heading}>
          <b>Add to your feed</b>
          <LightTooltip title="Follow things that interest you to personalize your feed. Learn more." placement="top" >
            <span style={{ float: "right" }}>
              <ErrorOutlineOutlinedIcon sx={{ fontSize: "medium" }} /></span>
          </LightTooltip>
        </Typography>

       {/* peopleData, variable containing hard coded values */}
        {peopleData.map((person, index) => (
          <div key={index}>
            <Box sx={{ marginBottom: '10px' }}>
              <CardHeader
                sx={{ paddingBottom: "5px" }}
                avatar={
                  <Avatar sx={{ bgcolor: grey[500] }}>OG</Avatar>
                }
                title={<Typography sx={{ fontSize: "15px" }}><b>{person.name}</b></Typography>}
                subheader={<Typography sx={{ fontSize: "13px" }}>{person.jobTitle}</Typography>}
              />
              <Follow><span className={classes.plus}>+</span> Follow</Follow>
            </Box>
          </div>
        ))}
        <Typography className={classes.recommendations}>View all recommendations <ArrowForwardIosIcon sx={{ fontSize: "small" }} /> </Typography>
      </Card>

      <Box className={classes.links_card}>
        <Link className={classes.links} href="#" underline="hover" >About</Link>
        <Link className={classes.links} href="#" underline="hover" >Accessibility</Link>
        <Link className={classes.links} href="#" underline="hover"  >Help Center</Link>

        <div>
          <Link className={classes.links} href="#" underline="hover" onClick={handleSearchClick} sx={{ display: "flex" }}>Privacy & Terms <ExpandMoreIcon /></Link>

          <Popper open={menuOpen} anchorEl={searchAnchorEl}>
            <Menu
              anchorEl={searchAnchorEl}
              keepMounted
              open={menuOpen}
              onClose={handleClose}
              sx={{ top: "2%", left: "10%" }}
            >
              <MenuItem>Privacy Policy</MenuItem>
              <MenuItem>User Agreement</MenuItem>
              <MenuItem>Pages Terms</MenuItem>
              <MenuItem>Cookie Policy</MenuItem>
              <MenuItem>Copyright Policy</MenuItem>
            </Menu>
          </Popper>
        </div>
        <Link className={classes.links} href="#" underline="hover" >Ad Choices</Link>
        <Link className={classes.links} href="#" underline="hover" >Advertising</Link>
        <Link className={classes.links} href="#" underline="hover" >Business Services</Link>
      </Box>

    </Box>
  )
}

export default Addtofeed