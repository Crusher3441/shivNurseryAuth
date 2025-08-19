import { Container, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Container>
      <Container
        sx={{
          display: "flex",
          gap: "10px",
          marginTop: "40px",
          marginLeft: "-200px",
        }}
      >
        <div>
          <img
            src="https://nurserylive.com/cdn/shop/files/nurserylive-offers-menu_96x108.png?v=1652634796"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://nurserylive.com/cdn/shop/files/nurserylive-gardening-menu_96x108.png?v=1652634796"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://nurserylive.com/cdn/shop/files/nurserylive-plant-menu_95x109.png?v=1652634796"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://nurserylive.com/cdn/shop/files/nurserylive-seeds-menu_96x108.png?v=1652634796"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://nurserylive.com/cdn/shop/files/nurserylive-bulbs-menu_96x108.png?v=1652634796"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://nurserylive.com/cdn/shop/files/nurserylive-corporate-menu_96x108.png?v=1652634796"
            alt=""
          />
        </div>
      </Container>
      {/* <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h3" gutterBottom>
          🌱 Welcome to Shiv Nursery
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Your trusted source for fresh plants and flowers at your doorstep.
        </Typography>
        <Button
          component={Link}
          to="/shop"
          variant="contained"
          sx={{ backgroundColor: "#2E7D32", mt: 3 }}
        >
          Shop Now
        </Button>
      </Container> */}
      <Container
      maxWidth={false}
        sx={{
          width: "100vw",
          height: "75vh",
          marginLeft: "-390px",
          marginTop: "40px",
          borderRadius: "8px",
          overflow: "hidden",
          p: 0, // remove padding
        }}
      >
        <Link to="/shop"><img
          src="/img2.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        /></Link>
        
      </Container>
      <Container maxWidth={false} disableGutters  sx={{width:"100vw", marginLeft: "-390px",marginTop:"60px"}}>
        <Link to="/shop"><img
          src="/img3.png"
          alt=""
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        /></Link>
      </Container>
    </Container>
  );
}
