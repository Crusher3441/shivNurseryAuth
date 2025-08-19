import { useEffect, useState } from "react";
import { Container, Grid, CircularProgress, Typography } from "@mui/material";
import ProductCard from "../components/ProductCard";

export default function Shop({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=12")
      .then((res) => res.json())
      .then((data) => {
        // Pretend these are plants 🌿
        const renamed = data.products.map((p, index) => ({
          ...p,
          title: `Plant ${index + 1}`,
          description: "Beautiful green plant for your home and garden.",
          price: (Math.random() * 300 + 100).toFixed(0),
          thumbnail: `https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`
        }));
        setProducts(renamed);
        setLoading(false);
      });
  }, []);

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        🪴 Our Plants
      </Typography>
      {loading ? (
        <div className="flex justify-center py-10">
          <CircularProgress />
        </div>
      ) : (
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard product={product} addToCart={addToCart} />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
