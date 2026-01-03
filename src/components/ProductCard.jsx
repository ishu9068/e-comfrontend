import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Button,
} from "@mui/material";
import ProductDetailsModal from "./ProductDetailsModal";

const ProductCard = ({ item }) => {
  const [open, setOpen] = useState(false);

  if (!item) return null;

  return (
    <>
      <Card
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 3,
          boxShadow: 4,
          display: "flex",
          flexDirection: "column",
          transition: "0.3s",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: 8,
          },
        }}
      >
        {/* IMAGE AREA (FIXED HEIGHT) */}
        <Box
          sx={{
            height: 180,
            backgroundColor: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            image={item.image || ""}
            alt={item.name}
            sx={{
              height: "100%",
              width: "100%",
              objectFit: "contain", // 🔥 image distort nahi hogi
            }}
            onError={(e) => {
              e.target.onerror = null;
            }}
          />
        </Box>

        {/* CONTENT */}
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {item.name}
          </Typography>

          <Typography color="text.secondary" fontWeight="bold" mt={1}>
            ₹{item.price}
          </Typography>
        </CardContent>

        {/* BUTTON */}
        <Box sx={{ p: 2 }}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => setOpen(true)}
            sx={{
              background: "linear-gradient(135deg, #1976d2, #0d47a1)",
              textTransform: "none",
              fontWeight: "bold",
            }}
          >
            View Details
          </Button>
        </Box>
      </Card>

      <ProductDetailsModal
        open={open}
        handleClose={() => setOpen(false)}
        product={item}
      />
    </>
  );
};

export default ProductCard;
