import { Container, Typography, TextField, Button } from "@mui/material";

export default function Contact() {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <form className="flex flex-col gap-4 max-w-md">
        <TextField label="Your Name" variant="outlined" required />
        <TextField label="Your Email" type="email" variant="outlined" required />
        <TextField label="Message" variant="outlined" multiline rows={4} required />
        <Button variant="contained" sx={{ backgroundColor: "#2E7D32" }}>
          Send
        </Button>
      </form>
    </Container>
  );
}
