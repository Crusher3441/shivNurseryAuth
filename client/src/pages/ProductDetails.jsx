import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Container, Typography, CircularProgress, Button } from "@mui/material";

export default function ProductDetails({ addToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((p) => {
        const renamed = {
          ...p,
          title: `Plant ${id}`,
          description: "Beautiful green plant for your home and garden.",
          price: (Math.random() * 300 + 100).toFixed(0),
          thumbnail: `https://source.unsplash.com/600x400/?plant,${id}`
        };
        setProduct(renamed);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <CircularProgress />
      </div>
    );
  }

  return (
    <Container sx={{ py: 6 }}>
      <img src={product.thumbnail} alt={product.title} className="w-full max-w-lg mx-auto rounded-lg shadow-lg" />
      <Typography variant="h4" sx={{ mt: 4 }}>{product.title}</Typography>
      <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
        ₹{product.price}
      </Typography>
      <Typography variant="body1" sx={{ mt: 2 }}>
        {product.description}
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#2E7D32", mt: 4 }}
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </Button>
    </Container>
  );
}
