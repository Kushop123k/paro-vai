import {AppBar,Toolbar,Typography, styled}from '@mui/material';
import { NavLink } from 'react-router-dom';
const Header=styled(AppBar)
`
background:#111111
`
const Tab=styled(NavLink)`
font-size:20px;
margin-right:20px;
color:inherit;
text-decoration:none; 
`

const NavBar=()=>{
    return(
       <Header position='static'>
        
        <Toolbar>
        <Tab>Ecommerce</Tab>
        <Tab to='/'>Home</Tab>
        <Tab to='add'>AddUser</Tab>
        <Tab to='view'>ViewUser</Tab>

        </Toolbar>
       </Header>
    )
}
export default NavBar;