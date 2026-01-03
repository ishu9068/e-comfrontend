import { Box, Typography, Button } from "@mui/material";

const Footer = ({ handleContactOpen }) => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        p: 3,
        backgroundColor: "#1976d2",
        color: "#fff",
        borderRadius: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="h6" fontWeight="bold">
        About MobileHub
      </Typography>
      <Typography sx={{ mt: 1, mb: 2 }}>
        MobileHub is your trusted store for mobiles & accessories. Best quality products at best prices.
      </Typography>
      <Button
        variant="contained"
        sx={{ bgcolor: "#0d47a1", "&:hover": { bgcolor: "#1565c0" } }}
        onClick={handleContactOpen}
      >
        Contact Us
      </Button>
    </Box>
  );
};

export default Footer;
