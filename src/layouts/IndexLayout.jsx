import { Box, Modal, Typography, Button } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const drawerWidth = 260;

const IndexLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
  const handleContactOpen = () => setContactOpen(true);
  const handleContactClose = () => setContactOpen(false);

  return (
    <Box sx={{ display: "flex", minHeight: "100vh" }}>
      <Navbar handleDrawerToggle={handleDrawerToggle} />
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
        drawerWidth={drawerWidth}
      />

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          backgroundColor: "#f4f8ff",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>

        <Footer handleContactOpen={handleContactOpen} />

        {/* Contact Modal */}
        <Modal
          open={contactOpen}
          onClose={handleContactClose}
          sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <Box
            sx={{
              bgcolor: "#fff",
              p: 4,
              borderRadius: 2,
              width: { xs: "90%", sm: "400px" },
              boxShadow: 24,
            }}
          >
            <Typography variant="h6" mb={2}>
              Contact Us
            </Typography>
            <form>
              <input type="text" placeholder="Your Name" style={{ width: "100%", marginBottom: 10, padding: 8 }} />
              <input type="email" placeholder="Your Email" style={{ width: "100%", marginBottom: 10, padding: 8 }} />
              <textarea placeholder="Message" style={{ width: "100%", marginBottom: 10, padding: 8 }} rows={4} />
              <Button type="submit" variant="contained" sx={{ bgcolor: "#1976d2" }} fullWidth onClick={(e) => e.preventDefault()}>
                Submit
              </Button>
            </form>
          </Box>
        </Modal>
      </Box>
    </Box>
  );
};

export default IndexLayout;
