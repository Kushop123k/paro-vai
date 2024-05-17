import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, styled, Box, Menu, MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import logo from './image.png'; // Adjust the path as needed

const Header = styled(AppBar)`
  background: #111111;
`;

const Tab = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;

  @media (max-width: 600px) {
    font-size: 16px;
    margin-right: 10px;
  }
`;

const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Header position="static">
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <img src={logo} alt="logo" style={{ height: '40px', marginRight: '10px' }} />
          <Typography variant="h6">
            Ecommerce
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexGrow: 1 }}>
          <Tab to="/">Products</Tab>
          <Box sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer', marginRight: '20px', color: 'inherit' }} onClick={handleClick}>
            <Typography sx={{ fontSize: '20px', textDecoration: 'none' }}>
              Resources
            </Typography>
            <ArrowDropDownIcon />
          </Box>
          <Menu
            id="resources-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} component={NavLink} to="/resource1">Resource 1</MenuItem>
            <MenuItem onClick={handleClose} component={NavLink} to="/resource2">Resource 2</MenuItem>
            <MenuItem onClick={handleClose} component={NavLink} to="/resource3">Resource 3</MenuItem>
          </Menu>
          <Tab to="view">Support</Tab>
        </Box>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
