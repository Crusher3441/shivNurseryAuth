import { 
  AppBar, 
  Toolbar, 
  Typography, 
  IconButton, 
  Button, 
  Menu, 
  MenuItem, 
  Drawer, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText,
  ListItemButton,
  Divider,
  Box,
  useTheme,
  useMediaQuery
} from "@mui/material";
import {
  ShoppingCart,
  Menu as MenuIcon,
  Home,
  Store,
  Info,
  ContactMail,
  AccountCircle,
  Logout,
  Facebook,
  Twitter,
  Pinterest,
  Instagram
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext';
import { useState } from 'react';

export default function Navbar({ cartCount, onCartClick }) {
  const { user, logout, isAuthenticated } = useAuth();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    setAnchorEl(null);
    setMobileMenuOpen(false);
    navigate('/login');
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  const navigationItems = [
    { label: 'Home', path: '/', icon: <Home /> },
    { label: 'Shop', path: '/shop', icon: <Store /> },
    { label: 'About', path: '/about', icon: <Info /> },
    { label: 'Contact', path: '/contact', icon: <ContactMail /> },
  ];

  const socialLinks = [
    { icon: <Facebook />, label: 'Facebook' },
    { icon: <Twitter />, label: 'Twitter' },
    { icon: <Pinterest />, label: 'Pinterest' },
    { icon: <Instagram />, label: 'Instagram' },
  ];

  const renderMobileMenu = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{
        '& .MuiDrawer-paper': {
          width: 280,
          backgroundColor: '#FF7A7A',
          color: 'white'
        }
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Typography variant="h6" sx={{ mb: 2, textAlign: 'center', fontWeight: 'bold' }}>
          Menu
        </Typography>
        <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.3)', mb: 2 }} />
        
        {isAuthenticated && (
          <>
            <List>
              {navigationItems.map((item) => (
                <ListItem key={item.path} disablePadding>
                  <ListItemButton
                    component={Link}
                    to={item.path}
                    onClick={handleMobileMenuClose}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)'
                      }
                    }}
                  >
                    <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              ))}
              
              <ListItem disablePadding>
                <ListItemButton onClick={onCartClick}>
                  <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                    <ShoppingCart />
                  </ListItemIcon>
                  <ListItemText primary={`Cart (${cartCount})`} />
                </ListItemButton>
              </ListItem>
            </List>
            
            <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.3)', my: 2 }} />
            
            <Box sx={{ px: 2, py: 1, textAlign: 'center' }}>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Welcome, {user?.username}!
              </Typography>
              <Button
                onClick={handleLogout}
                startIcon={<Logout />}
                sx={{
                  color: 'white',
                  border: '1px solid white',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
                fullWidth
              >
                Logout
              </Button>
            </Box>
          </>
        )}
        
        {!isAuthenticated && (
          <Box sx={{ px: 2 }}>
            <Button
              component={Link}
              to="/login"
              onClick={handleMobileMenuClose}
              sx={{
                color: 'white',
                border: '1px solid white',
                mb: 2,
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
              fullWidth
            >
              Login
            </Button>
            <Button
              component={Link}
              to="/register"
              onClick={handleMobileMenuClose}
              sx={{
                color: 'white',
                backgroundColor: 'rgba(255,255,255,0.1)',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.2)'
                }
              }}
              fullWidth
            >
              Sign Up
            </Button>
          </Box>
        )}
        
        <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.3)', my: 2 }} />
        
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ mb: 1 }}>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            {socialLinks.map((social, index) => (
              <IconButton
                key={index}
                sx={{
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
                size="small"
              >
                {social.icon}
              </IconButton>
            ))}
          </Box>
        </Box>
      </Box>
    </Drawer>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#FF7A7A", boxShadow: 3 ,height: '8vh'}}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography 
              variant="h6" 
              component={Link} 
              to="/" 
              sx={{ 
                textDecoration: 'none', 
                color: 'white', 
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <img src="logo3.png" alt="Shiv Nursery" style={{ height: '45px', borderRadius: '50%' }} />
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && isAuthenticated && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              {navigationItems.map((item) => (
                <Button 
                  key={item.path}
                  component={Link} 
                  to={item.path} 
                  sx={{ 
                    color: "white",
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
              
              <IconButton 
                color="inherit" 
                onClick={onCartClick}
                sx={{ position: 'relative' }}
              >
                <ShoppingCart />
                {cartCount > 0 && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -8,
                      right: -8,
                      backgroundColor: 'red',
                      color: 'white',
                      borderRadius: '50%',
                      width: 20,
                      height: 20,
                      fontSize: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {cartCount}
                  </Box>
                )}
              </IconButton>
            </Box>
          )}

          {/* Right Side - Auth/Menu */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {/* Social Icons (Desktop only) */}
            {!isMobile && (
              <Box sx={{ display: 'flex', gap: 0.5, mr: 2 }}>
                {socialLinks.map((social, index) => (
                  <IconButton 
                    key={index}
                    sx={{
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.1)'
                      }
                    }}
                    size="small"
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            )}
            
            {isAuthenticated ? (
              <>
                {!isMobile && (
                  <Typography variant="body2" sx={{ color: 'white', mr: 1 }}>
                    Hi, {user?.username}!
                  </Typography>
                )}
                
                {!isMobile ? (
                  <>
                    <IconButton
                      size="large"
                      aria-label="account menu"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      anchorEl={anchorEl}
                      anchorOrigin={{
                        vertical: 'bottom',
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
                  </>
                ) : (
                  <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMobileMenuToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
              </>
            ) : (
              <>
                {!isMobile ? (
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button 
                      component={Link} 
                      to="/login" 
                      sx={{ 
                        color: "white", 
                        border: '1px solid white',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.1)'
                        }
                      }}
                    >
                      Login
                    </Button>
                    <Button 
                      component={Link} 
                      to="/register" 
                      sx={{ 
                        color: "white", 
                        bgcolor: 'rgba(255,255,255,0.1)',
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.2)'
                        }
                      }}
                    >
                      Sign Up
                    </Button>
                  </Box>
                ) : (
                  <IconButton
                    size="large"
                    edge="end"
                    color="inherit"
                    aria-label="menu"
                    onClick={handleMobileMenuToggle}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* Mobile Menu Drawer */}
      {renderMobileMenu()}
    </>
  );
}
