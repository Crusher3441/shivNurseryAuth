import { AppBar, Toolbar, Typography, IconButton, Button, Menu, MenuItem } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import { AccountCircle, Logout } from "@mui/icons-material";
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

export default function Navbar({ cartCount, onCartClick }) {
  const { user, logout, isAuthenticated } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    setAnchorEl(null);
    navigate('/login');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "#FF7A7A" }}>
      <Toolbar className="flex justify-between">
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
          <img src="logo2.png" alt="" style={{height:'85px'}} /> 

        </Typography>
        
        {isAuthenticated ? (
          <>
            <div className="flex gap-4">
              <Button component={Link} to="/" sx={{ color: "white" }}>
                Home
              </Button>
              <Button component={Link} to="/shop" sx={{ color: "white" }}>
                Shop
              </Button>
              <Button component={Link} to="/about" sx={{ color: "white" }}>
                About
              </Button>
              <Button component={Link} to="/contact" sx={{ color: "white" }}>
                Contact
              </Button>
              <IconButton color="inherit" onClick={onCartClick}>
                <ShoppingCartIcon />
                {cartCount > 0 && (
                  <span className="bg-red-500 text-white rounded-full px-2 text-xs absolute translate-x-2 translate-y-2">
                    {cartCount}
                  </span>
                )}
              </IconButton>
            </div>
            
            <div className="flex items-center gap-2">
              <Typography variant="body1" sx={{ color: 'white', mr: 1 }}>
                {user?.username}!
              </Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleLogout}>
                  <Logout sx={{ mr: 1 }} />
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </>
        ) : (
          <div className="flex gap-2">
            <Button component={Link} to="/login" sx={{ color: "white", border: '1px solid white' }}>
              Login
            </Button>
            <Button component={Link} to="/register" sx={{ color: "white", bgcolor: 'rgba(255,255,255,0.1)' }}>
              Sign Up
            </Button>
          </div>
        )}
        <div className="ml-80%">
          <IconButton color="inherit" className="mr-4 flex items-center">
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" className="mr-4 flex items-center">
            <XIcon />
          </IconButton>
          <IconButton color="inherit" className="mr-4 flex items-center">
            <PinterestIcon />
          </IconButton>
          <IconButton color="inherit" className="mr-4 flex items-center">
            <InstagramIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
