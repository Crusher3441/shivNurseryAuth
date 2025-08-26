import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  IconButton,
  TextField,
  Button,
  Divider
} from "@mui/material";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Pinterest,
  Email,
  Phone,
  LocationOn
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1a4731',
        color: 'white',
        pt: 6,
        pb: 3
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              🌱 Shiv Nursery
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
              Your trusted source for premium plants, seeds, and garden supplies. 
              Bringing nature closer to your home since 2020.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <IconButton sx={{ color: 'white', '&:hover': { color: '#4CAF50' } }}>
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: '#4CAF50' } }}>
                <Twitter />
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: '#4CAF50' } }}>
                <Instagram />
              </IconButton>
              <IconButton sx={{ color: 'white', '&:hover': { color: '#4CAF50' } }}>
                <Pinterest />
              </IconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link 
                component={RouterLink} 
                to="/shop" 
                sx={{ color: 'white', opacity: 0.8, textDecoration: 'none', '&:hover': { opacity: 1, color: '#4CAF50' } }}
              >
                Shop Plants
              </Link>
              <Link 
                component={RouterLink} 
                to="/about" 
                sx={{ color: 'white', opacity: 0.8, textDecoration: 'none', '&:hover': { opacity: 1, color: '#4CAF50' } }}
              >
                About Us
              </Link>
              <Link 
                component={RouterLink} 
                to="/contact" 
                sx={{ color: 'white', opacity: 0.8, textDecoration: 'none', '&:hover': { opacity: 1, color: '#4CAF50' } }}
              >
                Contact
              </Link>
              <Link 
                href="#" 
                sx={{ color: 'white', opacity: 0.8, textDecoration: 'none', '&:hover': { opacity: 1, color: '#4CAF50' } }}
              >
                Plant Care Guide
              </Link>
              <Link 
                href="#" 
                sx={{ color: 'white', opacity: 0.8, textDecoration: 'none', '&:hover': { opacity: 1, color: '#4CAF50' } }}
              >
                FAQ
              </Link>
            </Box>
          </Grid>

          {/* Categories */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Categories
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Link href="#" sx={{ color: 'white', opacity: 0.8, textDecoration: 'none', '&:hover': { opacity: 1, color: '#4CAF50' } }}>
                Indoor Plants
              </Link>
              <Link href="#" sx={{ color: 'white', opacity: 0.8, textDecoration: 'none', '&:hover': { opacity: 1, color: '#4CAF50' } }}>
                Outdoor Plants
              </Link>
              <Link href="#" sx={{ color: 'white', opacity: 0.8, textDecoration: 'none', '&:hover': { opacity: 1, color: '#4CAF50' } }}>
                Seeds & Bulbs
              </Link>
              <Link href="#" sx={{ color: 'white', opacity: 0.8, textDecoration: 'none', '&:hover': { opacity: 1, color: '#4CAF50' } }}>
                Garden Tools
              </Link>
              <Link href="#" sx={{ color: 'white', opacity: 0.8, textDecoration: 'none', '&:hover': { opacity: 1, color: '#4CAF50' } }}>
                Fertilizers
              </Link>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Contact Info
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <LocationOn sx={{ fontSize: 20, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  123 Garden Street, Green City, GC 12345
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ fontSize: 20, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  +1 (555) 123-4567
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Email sx={{ fontSize: 20, opacity: 0.8 }} />
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  info@shivnursery.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.2)' }} />

        {/* Bottom Section */}
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              © {new Date().getFullYear()} Shiv Nursery. All rights reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 3, justifyContent: { xs: 'flex-start', md: 'flex-end' } }}>
              <Link href="#" sx={{ color: 'white', opacity: 0.8, textDecoration: 'none', '&:hover': { opacity: 1 } }}>
                Privacy Policy
              </Link>
              <Link href="#" sx={{ color: 'white', opacity: 0.8, textDecoration: 'none', '&:hover': { opacity: 1 } }}>
                Terms of Service
              </Link>
              <Link href="#" sx={{ color: 'white', opacity: 0.8, textDecoration: 'none', '&:hover': { opacity: 1 } }}>
                Shipping Info
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
