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
      image: "https://images.unsplash.com/photo-1416436917180-ca2bb3c0e0d1?w=400&h=250&fit=crop",
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
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 50%, #66BB6A 100%)',
            color: 'white',
            py: { xs: 6, md: 12 },
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <Container maxWidth="lg">
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
                    🌱 Transform Your Space
                  </Typography>
                  <Typography variant="h5" gutterBottom sx={{ opacity: 0.9, mb: 4 }}>
                    Discover premium plants that bring life to your home. Fresh, healthy, and delivered with care.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
                    <Button
                      component={Link}
                      to="/shop"
                      variant="contained"
                      size="large"
                      endIcon={<ArrowForward />}
                      sx={{ 
                        backgroundColor: 'white', 
                        color: '#2E7D32',
                        px: 4,
                        py: 1.5,
                        '&:hover': { backgroundColor: '#f5f5f5' }
                      }}
                    >
                      Shop Now
                    </Button>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{ 
                        borderColor: 'white', 
                        color: 'white',
                        px: 4,
                        py: 1.5,
                        '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
                      }}
                    >
                      Learn More
                    </Button>
                  </Box>
                </motion.div>
              </Grid>
              <Grid item xs={12} md={6}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <Box
                    component="img"
                    src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop"
                    alt="Beautiful plants collection"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: 2,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                    }}
                  />
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
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Paper 
            sx={{ 
              background: 'linear-gradient(135deg, #2E7D32, #4CAF50)',
              color: 'white',
              p: { xs: 4, md: 6 },
              textAlign: 'center',
              borderRadius: 4
            }}
          >
            <Typography variant="h4" gutterBottom>
              Stay Updated!
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Subscribe to get special offers, plant care tips, and new arrivals
            </Typography>
            <Box sx={{ maxWidth: 400, mx: 'auto', display: 'flex', gap: 2 }}>
              <TextField
                fullWidth
                placeholder="Enter your email"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white',
                    '& fieldset': { borderColor: 'white' }
                  }
                }}
              />
              <Button 
                variant="contained" 
                sx={{ 
                  backgroundColor: 'white', 
                  color: '#2E7D32',
                  minWidth: 120,
                  '&:hover': { backgroundColor: '#f5f5f5' }
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </div>
  );
}
