import ContactForm from '../components/Homeform'
import ConsultForm from '../components/ConsultantForm'
import { 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Box, 
  Rating,
  Chip,
  IconButton,
  Paper,
  Avatar,
  TextField,
  InputAdornment
} from "@mui/material";
import { Link } from "react-router-dom";
import { 
  ShoppingCart, 
  Favorite, 
  LocalShipping, 
  Security, 
  SupportAgent,
  Search,
  ArrowForward,
  Star
} from "@mui/icons-material";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home({ addToCart }) {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample data - replace with real data from API
  const featuredProducts = [
    {
      id: 1,
      name: "Monstera Deliciosa",
      price: 45.99,
      originalPrice: 59.99,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop",
      rating: 4.5,
      reviews: 128,
      category: "Indoor Plants",
      isNew: true
    },
    {
      id: 2,
      name: "Snake Plant",
      price: 29.99,
      originalPrice: 35.99,
      image: "https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=300&h=300&fit=crop",
      rating: 4.8,
      reviews: 89,
      category: "Air Purifying",
      isPopular: true
    },
    {
      id: 3,
      name: "Fiddle Leaf Fig",
      price: 75.99,
      originalPrice: 89.99,
      image: "https://images.unsplash.com/photo-1558603668-6570496b66f8?w=300&h=300&fit=crop",
      rating: 4.3,
      reviews: 156,
      category: "Statement Plants",
      isSale: true
    },
    {
      id: 4,
      name: "Peace Lily",
      price: 32.99,
      originalPrice: 42.99,
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop",
      rating: 4.6,
      reviews: 94,
      category: "Flowering Plants"
    }
  ];

  const categories = [
    {
      id: 1,
      name: "Indoor Plants",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop",
      itemCount: 150
    },
    {
      id: 2,
      name: "Outdoor Plants",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop",
      itemCount: 230
    },
    {
      id: 3,
      name: "Seeds & Bulbs",
      image: "https://images.unsplash.com/photo-1600630659080-a3f0f94f93fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      itemCount: 85
    },
    {
      id: 4,
      name: "Garden Tools",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop",
      itemCount: 45
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      text: "Amazing quality plants! My Monstera arrived perfectly healthy and is thriving in my home.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c6a95c52?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Mike Chen",
      rating: 5,
      text: "Fast delivery and excellent customer service. Will definitely order again!",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emily Davis",
      rating: 4,
      text: "Great variety of plants. The packaging was excellent and plants arrived in perfect condition.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Transform Your Space */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            background: 'linear-gradient(135deg, #1A5A1A 0%, #2E7D32 30%, #4CAF50 70%, #66BB6A 100%)',
            color: 'white',
            py: { xs: 8, md: 16 },
            position: 'relative',
            overflow: 'hidden',
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {/* Animated background elements */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.1,
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          />
          
          <Container maxWidth="lg">
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} lg={6}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {/* Small badge/tag */}
                  <Box sx={{ mb: 3 }}>
                    <Chip 
                      label="🌿 Premium Plant Collection" 
                      sx={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        fontWeight: 'medium',
                        border: '1px solid rgba(255,255,255,0.3)'
                      }} 
                    />
                  </Box>
                  
                  <Typography 
                    variant="h1" 
                    component="h1" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 800, 
                      fontSize: { xs: '3rem', md: '4.5rem', lg: '5rem' },
                      lineHeight: 0.9,
                      mb: 3,
                      // background: 'linear-gradient(135deg, #ffffff 0%, #e8f5e8 100%)',
                      // WebkitBackgroundClip: 'text',
                      // WebkitTextFillColor: 'transparent',
                      // textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}
                  >
                    Transform Your
                    <br />
                    {/* <Box component="span" sx={{ color: '#A5D6A7' }}> */}
                      Living Space
                    {/* </Box> */}
                  </Typography>
                  
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      opacity: 0.95, 
                      mb: 4,
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                      fontWeight: 300,
                      lineHeight: 1.4
                    }}
                  >
                    Discover our curated collection of premium plants that bring natural beauty, 
                    fresh air, and peaceful vibes to every corner of your home.
                  </Typography>
                  
                  {/* Feature highlights */}
                  <Box sx={{ mb: 4, display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    {[
                      '🚚 Free Delivery',
                      '🌱 Healthy Plants',
                      '💚 Expert Care Tips',
                      '⭐ 5-Star Service'
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      >
                        <Typography 
                          variant="body1" 
                          sx={{ 
                            backgroundColor: 'rgba(255,255,255,0.15)',
                            px: 2,
                            py: 1,
                            borderRadius: 20,
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            border: '1px solid rgba(255,255,255,0.2)'
                          }}
                        >
                          {feature}
                        </Typography>
                      </motion.div>
                    ))}
                  </Box>
                  
                  <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' }, alignItems: { xs: 'stretch', sm: 'center' } }}>
                    <Button
                      component={Link}
                      to="/shop"
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForward />}
                      sx={{ 
                        backgroundColor: 'white', 
                        color: '#1A5A1A',
                        px: 6,
                        py: 2,
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        borderRadius: 30,
                        boxShadow: '0 8px 32px rgba(255,255,255,0.3)',
                        '&:hover': { 
                          backgroundColor: '#f8f8f8',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 12px 40px rgba(255,255,255,0.4)'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Explore Plants
                    </Button>
                    
                    <Button
                      component={Link}
                      to="/about"
                      variant="outlined"
                      size="large"
                      sx={{ 
                        borderColor: 'white', 
                        color: 'white',
                        px: 6,
                        py: 2,
                        fontSize: '1.1rem',
                        fontWeight: 500,
                        borderRadius: 30,
                        borderWidth: 2,
                        '&:hover': { 
                          backgroundColor: 'rgba(255,255,255,0.1)',
                          transform: 'translateY(-2px)',
                          borderColor: '#A5D6A7'
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                  
                  {/* Stats section */}
                  <Box sx={{ mt: 6, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                    {[
                      { number: '10K+', label: 'Happy Customers' },
                      { number: '500+', label: 'Plant Varieties' },
                      { number: '99%', label: 'Satisfaction Rate' }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                      >
                        <Box sx={{ textAlign: 'left' }}>
                          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#A5D6A7' }}>
                            {stat.number}
                          </Typography>
                          <Typography variant="body2" sx={{ opacity: 0.8, fontSize: '0.9rem' }}>
                            {stat.label}
                          </Typography>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              </Grid>
              
              <Grid item xs={12} lg={6}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Box sx={{ position: 'relative', height: { xs: 400, md: 600 } }}>
                    {/* Main image */}
                    <Box
                      component="img"
                      src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=800&fit=crop&crop=center"
                      alt="Beautiful modern living room with plants"
                      sx={{
                        width: '100%',
                        height: '100%',
                        borderRadius: 4,
                        objectFit: 'cover',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.2)',
                        border: '4px solid rgba(255,255,255,0.1)'
                      }}
                    />
                    
                    {/* Floating cards */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: 1.0 }}
                    >
                      <Paper
                        sx={{
                          position: 'absolute',
                          top: 20,
                          right: -20,
                          p: 3,
                          backgroundColor: 'rgba(255,255,255,0.95)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: 3,
                          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          minWidth: 200
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box
                            sx={{
                              backgroundColor: '#E8F5E8',
                              borderRadius: '50%',
                              p: 1,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <Typography sx={{ fontSize: '1.5rem' }}>🌱</Typography>
                          </Box>
                          <Box>
                            <Typography variant="h6" sx={{ color: '#2E7D32', fontWeight: 'bold', mb: 0.5 }}>
                              Air Purifying
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Cleaner indoor air
                            </Typography>
                          </Box>
                        </Box>
                      </Paper>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.8, delay: 1.3 }}
                    >
                      <Paper
                        sx={{
                          position: 'absolute',
                          bottom: 30,
                          left: -30,
                          p: 3,
                          backgroundColor: 'rgba(255,255,255,0.95)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: 3,
                          boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                          border: '1px solid rgba(255,255,255,0.3)',
                          minWidth: 180
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Box
                            sx={{
                              backgroundColor: '#FFF3E0',
                              borderRadius: '50%',
                              p: 1,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <Typography sx={{ fontSize: '1.5rem' }}>🏠</Typography>
                          </Box>
                          <Box>
                            <Typography variant="h6" sx={{ color: '#F57C00', fontWeight: 'bold', mb: 0.5 }}>
                              Home Décor
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              Beautiful spaces
                            </Typography>
                          </Box>
                        </Box>
                      </Paper>
                    </motion.div>
                    
                    {/* Decorative elements */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -10,
                        left: -10,
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        background: 'rgba(165, 214, 167, 0.3)',
                        filter: 'blur(20px)',
                        zIndex: -1
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: -20,
                        right: -20,
                        width: 150,
                        height: 150,
                        borderRadius: '50%',
                        background: 'rgba(76, 175, 80, 0.2)',
                        filter: 'blur(30px)',
                        zIndex: -1
                      }}
                    />
                  </Box>
                </motion.div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </motion.div>

      {/* Search Bar */}
      <Container maxWidth="lg" sx={{ mt: -3, position: 'relative', zIndex: 10 }}>
        <Paper elevation={3} sx={{ p: 2, borderRadius: 2 }}>
          <TextField
            fullWidth
            placeholder="Search for plants, seeds, tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="action" />
                </InputAdornment>
              ),
              endAdornment: (
                <Button variant="contained" sx={{ backgroundColor: '#2E7D32' }}>
                  Search
                </Button>
              )
            }}
          />
        </Paper>
      </Container>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {[
            { icon: LocalShipping, title: "Free Shipping", description: "Free delivery on orders over $50" },
            { icon: Security, title: "Secure Payment", description: "100% secure payment processing" },
            { icon: SupportAgent, title: "24/7 Support", description: "Round-the-clock customer assistance" }
          ].map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Box sx={{ textAlign: 'center', p: 3 }}>
                  <feature.icon sx={{ fontSize: 48, color: '#2E7D32', mb: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {feature.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Categories Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
            Shop by Category
          </Typography>
          <Grid container spacing={3}>
            {categories.map((category, index) => (
              <Grid item xs={12} sm={6} md={3} key={category.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card sx={{ height: '100%', cursor: 'pointer', '&:hover': { boxShadow: 8 } }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={category.image}
                      alt={category.name}
                    />
                    <CardContent sx={{ textAlign: 'center' }}>
                      <Typography variant="h6" gutterBottom>
                        {category.name}
                      </Typography>
                      <Typography color="text.secondary">
                        {category.itemCount} items
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Products Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
          Featured Products
        </Typography>
        <Grid container spacing={3}>
          {featuredProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  position: 'relative',
                  '&:hover': { boxShadow: 12 }
                }}>
                  {/* Product badges */}
                  <Box sx={{ position: 'absolute', top: 8, left: 8, zIndex: 1 }}>
                    {product.isNew && <Chip label="New" color="primary" size="small" sx={{ mr: 1 }} />}
                    {product.isPopular && <Chip label="Popular" color="secondary" size="small" sx={{ mr: 1 }} />}
                    {product.isSale && <Chip label="Sale" color="error" size="small" />}
                  </Box>
                  
                  {/* Wishlist button */}
                  <IconButton 
                    sx={{ position: 'absolute', top: 8, right: 8, zIndex: 1, backgroundColor: 'rgba(255,255,255,0.8)' }}
                    size="small"
                  >
                    <Favorite fontSize="small" />
                  </IconButton>

                  <CardMedia
                    component="img"
                    height="250"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 2 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {product.category}
                    </Typography>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {product.name}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Rating value={product.rating} precision={0.1} readOnly size="small" />
                      <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
                        ({product.reviews})
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
                        ${product.price}
                      </Typography>
                      {product.originalPrice && (
                        <Typography 
                          variant="body2" 
                          color="text.secondary" 
                          sx={{ ml: 1, textDecoration: 'line-through' }}
                        >
                          ${product.originalPrice}
                        </Typography>
                      )}
                    </Box>
                    <Button
                      fullWidth
                      variant="contained"
                      startIcon={<ShoppingCart />}
                      onClick={() => addToCart && addToCart(product)}
                      sx={{ backgroundColor: '#2E7D32' }}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button 
            component={Link}
            to="/shop"
            variant="outlined" 
            size="large"
            endIcon={<ArrowForward />}
            sx={{ px: 4, py: 1.5, borderColor: '#2E7D32', color: '#2E7D32' }}
          >
            View All Products
          </Button>
        </Box>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom sx={{ mb: 6 }}>
            What Our Customers Say
          </Typography>
          <Grid container spacing={4}>
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Paper sx={{ p: 3, height: '100%', textAlign: 'center' }}>
                    <Avatar 
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      sx={{ width: 64, height: 64, mx: 'auto', mb: 2 }}
                    />
                    <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                    <Typography variant="body1" sx={{ mb: 2, fontStyle: 'italic' }}>
                      "{testimonial.text}"
                    </Typography>
                    <Typography variant="h6">
                      {testimonial.name}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Newsletter Section */}
      <Container>
        <Box>
          {/* <ContactForm/> */}
          <ConsultForm/>
        </Box>
      </Container>
    </div>
  );
}
