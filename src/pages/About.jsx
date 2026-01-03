// About.jsx
import React from "react";
import { Box, Typography, Container, Button, Grid } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          textAlign: "center",
          mb: 6,
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: "bold", color: "#1976d2" }}>
          About MobileHub
        </Typography>
        <Typography variant="h6" color="textSecondary">
          Your One-Stop Platform for Buying and Selling Mobile Phones & Accessories
        </Typography>
      </Box>

      {/* About Details Section */}
      <Grid container spacing={6} sx={{ alignItems: "center" }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Who We Are
          </Typography>
          <Typography variant="body1" paragraph>
            MobileHub is a professional and user-friendly online marketplace dedicated to mobile phones and accessories. 
            Our platform allows customers to explore, compare, and purchase high-quality products with ease. 
            We connect sellers and buyers, creating a seamless experience for everyone.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether you are a tech enthusiast looking for the latest smartphone, or a shop owner aiming to sell your products online, 
            MobileHub provides a reliable, secure, and efficient environment to achieve your goals.
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="https://source.unsplash.com/500x400/?mobile,store"
            alt="About MobileHub"
            sx={{ width: "100%", borderRadius: 3, boxShadow: 3 }}
          />
        </Grid>
      </Grid>

      {/* Call to Action Section */}
      <Box sx={{ textAlign: "center", mt: 8 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
          Join MobileHub Today!
        </Typography>
        <Typography variant="body1" paragraph>
          Sign up now to start buying or selling products easily. Enjoy the best deals, latest products, and a secure shopping experience.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 2, px: 5, py: 1.5, fontWeight: "bold" }}
          onClick={() => window.location.href = "/register"}
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
};

export default About;
