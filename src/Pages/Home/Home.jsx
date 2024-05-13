import React from 'react';
import Profile from "../../Components/Profile/Profile";
import Startpost from '../../Components/Startpost/Startpost';
import Box from '@mui/material/Box';
import Addtofeed from '../../Components/Addtofeed/Addtofeed';
import Posts from '../../Components/Posts/Posts';
const Home = () => {
  return (
    <Box sx={{ backgroundColor: "#f3f2ee" }}>
      <Box sx={{ display: { md: 'flex', sm: 'inline' } }}>
        <Profile />
        <Box sx={{ display: 'block' }}>
          <Startpost />
          <Posts />
        </Box>
        <Addtofeed/>
      </Box>
    </Box>

  );
};

export default Home;