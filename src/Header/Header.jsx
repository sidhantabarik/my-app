/** @jsx jsx */
/** 
 * Header Component for KIMS Hospital
 * Includes dark mode toggle, menu, and settings options
 */
import React, { useState, useContext } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Avatar,
  Tooltip,
  Switch,
  Box,
  Container,
  Divider,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import { ThemeContext } from "./ThemeContext"; // Assuming a ThemeContext for dark mode

export default function KIMSHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const themeMode = useContext(ThemeContext); // Custom Theme Context
  const darkMode = themeMode.state.darkMode;

  const open = Boolean(anchorEl);
  const profileMenuOpen = Boolean(profileAnchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event) => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: darkMode ? "#333" : "#fff" }}>
      <Container maxWidth="xl">
        <Toolbar>
          {/* Hospital Logo */}
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: darkMode ? "#fff" : "#333",
              textDecoration: "none",
            }}
          >
            <Link href="https://kims.kiit.ac.in/" underline="none" color="inherit">
              KIMS Hospital
            </Link>
          </Typography>

          {/* Dark Mode Toggle */}
          <Tooltip title="Toggle Dark Mode">
            <IconButton
              onClick={() => themeMode.dispatch({ type: darkMode ? "LIGHTMODE" : "DARKMODE" })}
            >
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>

          {/* Settings and Logout Menu */}
          <Tooltip title="Open Menu">
            <IconButton onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            PaperProps={{
              sx: {
                mt: 2,
                minWidth: 180,
                bgcolor: darkMode ? "#424242" : "#fff",
                color: darkMode ? "#fff" : "#333",
              },
            }}
          >
            <MenuItem>
              <HomeIcon fontSize="small" sx={{ mr: 1 }} />
              Home
            </MenuItem>
            <MenuItem>
              <SettingsIcon fontSize="small" sx={{ mr: 1 }} />
              Settings
            </MenuItem>
            <Divider />
            <MenuItem>
              <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
              Logout
            </MenuItem>
          </Menu>

          {/* Profile Avatar */}
          <Tooltip title="Account Settings">
            <IconButton onClick={handleProfileMenuOpen} sx={{ ml: 2 }}>
              <Avatar sx={{ bgcolor: darkMode ? "#90caf9" : "#1976d2" }}>K</Avatar>
            </IconButton>
          </Tooltip>
          <Menu
            anchorEl={profileAnchorEl}
            open={profileMenuOpen}
            onClose={handleProfileMenuClose}
            PaperProps={{
              sx: {
                mt: 2,
                minWidth: 180,
                bgcolor: darkMode ? "#424242" : "#fff",
                color: darkMode ? "#fff" : "#333",
              },
            }}
          >
            <MenuItem>
              <Avatar sx={{ mr: 1 }} /> Profile
            </MenuItem>
            <Divider />
            <MenuItem>
              <SettingsIcon fontSize="small" sx={{ mr: 1 }} />
              Settings
            </MenuItem>
            <MenuItem>
              <LogoutIcon fontSize="small" sx={{ mr: 1 }} />
              Logout
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
