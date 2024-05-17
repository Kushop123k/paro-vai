import React from 'react';
import { AppBar, Toolbar, Typography, styled, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import logo from './image.png'
const Header = styled(AppBar)`
  background: #111111;
`;

const Tab = styled(NavLink)`
  font-size: 20px;
  margin-right: 30px;
  color: inherit;
  text-decoration: ;

  @media (max-width: 600px) {
    font-size: 16px;
    margin-right: 10px;
  }
`;

const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src={logo} alt="logo" style={{ height: '40px', marginRight: '15px' }} />
          <Typography variant="h6">
            
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1 }}>
          <Tab to="/">Products</Tab>
          <Tab to="add">Resources</Tab>
          <Tab to="view">Support</Tab>
        </Box>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
