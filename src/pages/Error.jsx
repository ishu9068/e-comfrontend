// src/pages/Error.jsx
import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <Container
      maxWidth="md"
      sx={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: "6rem", sm: "8rem" },
          fontWeight: "bold",
          color: "#1976d2",
        }}
      >
        404
      </Typography>

      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", mb: 2 }}
      >
        Oops! Page Not Found
      </Typography>


      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(135deg, #1976d2, #0d47a1)",
          color: "#fff",
          px: 4,
          py: 1.5,
          fontSize: "1rem",
          "&:hover": {
            background: "linear-gradient(135deg, #0d47a1, #1976d2)",
          },
        }}
        onClick={() => navigate("/")}
      >
        Go to Home
      </Button>

      <Box
        component="img"
        src="https://cdn-icons-png.flaticon.com/512/564/564619.png"
        alt="Error Image"
        sx={{
          width: { xs: "200px", sm: "300px" },
          mt: 5,
          opacity: 0.8,
        }}
      />
    </Container>
  );
};

export default Error;
