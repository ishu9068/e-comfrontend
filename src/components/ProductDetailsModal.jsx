import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  IconButton,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductDetailsModal = ({ open, handleClose, product, isLoggedIn }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const navigate = useNavigate();

  if (!product) return null;

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      setSnackbarOpen(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000); // 2 second delay
      return;
    }

    // If user is logged in, handle adding to cart here
    console.log("Product added to cart:", product);
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ fontWeight: "bold" }}>
          {product.name}
          <IconButton
            onClick={handleClose}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              width: "100%",
              height: 250,
              objectFit: "contain",
              mb: 2,
            }}
          />

          <Typography variant="h6" fontWeight="bold">
            ₹{product.price}
          </Typography>

          <Typography color="text.secondary" mb={1}>
            Category: {product.category}
          </Typography>

          <Typography variant="body1" mb={2}>
            {product.description}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            Seller: {product.sellerEmail}
          </Typography>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              background: "linear-gradient(135deg, #1976d2, #0d47a1)",
              textTransform: "none",
              fontWeight: "bold",
            }}
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        </DialogContent>
      </Dialog>

      {/* Snackbar for login prompt */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert severity="warning" sx={{ width: "100%" }}>
          Please login first!
        </Alert>
      </Snackbar>
    </>
  );
};

export default ProductDetailsModal;
