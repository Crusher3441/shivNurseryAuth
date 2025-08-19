import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProductCard({ product, addToCart }) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition">
      <CardMedia
        component="img"
        height="200"
        image={product.thumbnail}
        alt={product.title}
      />
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1 }}>
          ₹{product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#2E7D32" }}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
        <Button
          component={Link}
          to={`/product/${product.id}`}
          variant="outlined"
          sx={{ color: "#2E7D32", borderColor: "#2E7D32" }}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
