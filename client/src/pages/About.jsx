import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>About Us</Typography>
      <Typography variant="body1">
        Shiv Nursery is your trusted partner in bringing nature to your home.
        We provide high-quality plants and flowers for homes, offices, and gardens.
        Our mission is to make greenery accessible to everyone, one plant at a time.
      </Typography>
    </Container>
  );
}
