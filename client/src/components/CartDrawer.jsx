import { Drawer, List, ListItem, ListItemText, IconButton, Typography, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CartDrawer({ open, onClose, cart, removeFromCart }) {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <div className="w-80 p-4 flex flex-col h-full">
        <Typography variant="h6" sx={{ mb: 2 }}>Your Cart</Typography>
        <List className="flex-grow">
          {cart.length === 0 ? (
            <Typography>Your cart is empty.</Typography>
          ) : (
            cart.map((item) => (
              <ListItem
                key={item.id}
                secondaryAction={
                  <IconButton edge="end" onClick={() => removeFromCart(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={item.title} secondary={`₹${item.price}`} />
              </ListItem>
            ))
          )}
        </List>
        {cart.length > 0 && (
          <Button variant="contained" sx={{ backgroundColor: "#2E7D32" }}>
            Checkout
          </Button>
        )}
      </div>
    </Drawer>
  );
}
