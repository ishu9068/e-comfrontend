import { Drawer, Box, List, ListItem, ListItemText, Typography, Divider, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

const categories = [
  "Mobile Phones",
  "Earbuds",
  "Power Banks",
  "Bluetooth Speakers",
  "Chargers",
  "Mobile Covers",
  "Screen Protectors",
  "Charging Cables",
];

const Sidebar = ({ mobileOpen, handleDrawerToggle, drawerWidth }) => {
  const navigate = useNavigate();

  const drawerContent = (
    <Box sx={{ height: "100%", color: "#fff", display: "flex", flexDirection: "column" }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" fontWeight="bold">
          Categories
        </Typography>
      </Box>

      <List sx={{ cursor: "pointer", width: 250 }}>
        {categories.map((text) => {
          const slug = text.toLowerCase().replace(/\s+/g, "-");
          return (
            <ListItem
              key={slug}
              onClick={() => {
                navigate(`/category/${slug}`);
                if (mobileOpen) handleDrawerToggle();
              }}
              sx={{ "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}
            >
              <ListItemText primary={text.toUpperCase()} />
            </ListItem>
          );
        })}
      </List>

      <Box sx={{ flexGrow: 1 }} />

      <Divider sx={{ bgcolor: "rgba(255,255,255,0.3)" }} />

      <Box sx={{ p: 2, display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <Avatar sx={{ bgcolor: "#fff", color: "#1976d2" }}>G</Avatar>
        <Typography variant="body2">Guest User</Typography>
      </Box>
    </Box>
  );

  return (
    <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "linear-gradient(180deg, #1976d2, #0d47a1)",
          },
        }}
        open
      >
        {drawerContent}
      </Drawer>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            background: "linear-gradient(180deg, #1976d2, #0d47a1)",
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;
