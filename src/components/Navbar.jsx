import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Logo from "../assets/images/logo.png";

const Navbar = ({ handleDrawerToggle }) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: "linear-gradient(135deg, #1976d2, #0d47a1)",
      }}
    >
      <Toolbar>
        {/* Mobile Menu Icon */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Logo */}
        <Typography
          variant="h6"
          fontWeight="bold"
          sx={{ flexGrow: 1, letterSpacing: 1, cursor: "pointer" }}
        >
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img src={Logo} alt="MobileHub Logo" style={{ height: 40, marginRight: 8 }} />
          </Link>
        </Typography>

        {/* Login Button */}
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          <Button
            variant="outlined"
            sx={{
              color: "#fff",
              borderColor: "#fff",
              "&:hover": {
                borderColor: "#fff",
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Login
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
