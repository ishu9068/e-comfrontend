import React, { useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
  Button,
  Modal,
  TextField
} from "@mui/material";
import { useForm } from "react-hook-form";

const SellerDashboard = () => {
  // ===== Dummy Data =====
  const [products, setProducts] = useState([
    {
      name: "iPhone 14",
      description: "Apple smartphone with A15 Bionic chip",
      price: 69999,
      category: "Mobile Phones",
      image: "https://images.unsplash.com/photo-1663499482523-1c0c1bae4ce1?auto=format&fit=crop&q=80&w=400&h=300",
      sellerEmail: "seller2@shop.com"
    }
  ]);

  const [orders, setOrders] = useState({
    total: 50,
    delivered: 30,
    processing: 20
  });

  const [modalOpen, setModalOpen] = useState(false);

  const { register, handleSubmit, reset } = useForm();

  const handleAddProduct = (data) => {
    setProducts([...products, data]);
    reset();
    setModalOpen(false);
  };

  const cardStyle = {
    color: "#fff",
    p: 2,
    borderRadius: 2,
    textAlign: "center",
    fontWeight: "bold"
  };

  return (
    <Box sx={{ p: 3, backgroundColor: "#e3f2fd", minHeight: "100vh" }}>
      <Typography variant="h4" fontWeight="bold" color="#0d47a1" mb={4}>
        Seller Dashboard
      </Typography>

      {/* Summary Cards */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ ...cardStyle, bgcolor: "#1565c0" }}>
            <Typography>Total Products</Typography>
            <Typography variant="h5">{products.length}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ ...cardStyle, bgcolor: "#0d47a1" }}>
            <Typography>Total Orders</Typography>
            <Typography variant="h5">{orders.total}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ ...cardStyle, bgcolor: "#1976d2" }}>
            <Typography>Delivered</Typography>
            <Typography variant="h5">{orders.delivered}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper sx={{ ...cardStyle, bgcolor: "#0288d1" }}>
            <Typography>Processing</Typography>
            <Typography variant="h5">{orders.processing}</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* Add Product Button */}
      <Button
        variant="contained"
        sx={{ bgcolor: "#0d47a1", mb: 3 }}
        onClick={() => setModalOpen(true)}
      >
        Add New Product
      </Button>

      {/* Products List */}
      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper sx={{ p: 2, borderRadius: 2 }}>
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }}
              />
              <Typography variant="h6" mt={1}>
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.description}
              </Typography>
              <Typography variant="subtitle1" mt={1}>
                ₹{product.price}
              </Typography>
              <Typography variant="caption">{product.category}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Add Product Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Paper sx={{ p: 4, borderRadius: 2, width: { xs: "90%", sm: "400px" } }}>
          <Typography variant="h6" mb={2}>
            Add Product
          </Typography>
          <form onSubmit={handleSubmit(handleAddProduct)}>
            <TextField
              label="Name"
              fullWidth
              required
              {...register("name")}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Description"
              fullWidth
              required
              {...register("description")}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Price"
              type="number"
              fullWidth
              required
              {...register("price")}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Category"
              fullWidth
              required
              {...register("category")}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Image URL"
              fullWidth
              required
              {...register("image")}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Seller Email"
              fullWidth
              required
              {...register("sellerEmail")}
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" sx={{ bgcolor: "#0d47a1" }} fullWidth>
              Add Product
            </Button>
          </form>
        </Paper>
      </Modal>
    </Box>
  );
};

export default SellerDashboard;
