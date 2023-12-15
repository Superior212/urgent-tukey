// eslint-disable-next-line no-unused-vars
import React, { useState, MouseEvent } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
} from "@mui/material";
import logo from "../../assets/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import TukayBtn from "../Buttons/TukayBtn";
const Navbar = () => {
  const customStyles = {
    backgroundColor: "#215056",
    marginLeft: "400px",
    marginRight: 10,
    display: { xs: "none", md: "flex" },
  };
  const [anochorNav, setanochorNav] = useState(null);

  const openMenu = (e) => {
    setanochorNav(e.currentTarget);
  };

  const closeMenu = () => {
    setanochorNav(null);
  };
  const handleMenuItemClick = () => {
    closeMenu();
  };

  return (
    <div className="border-b border-white fixed w-full z-10">
      <AppBar position="static" style={{ backgroundColor: "#222" }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ marginLeft: 5 }}>
            <img src={logo} style={{ width: "140px" }} alt="" />
          </IconButton>
          <Box sx={{ marginLeft: 15, display: { xs: "none", md: "flex" } }}>
            <Button color="inherit">About us</Button>
            <Button color="inherit">Sapa</Button>
            <Button color="inherit">Help</Button>
            <Button color="inherit">Contacts</Button>
          </Box>

          <TukayBtn {...customStyles}>Urgent tukay</TukayBtn>
          <Box
            sx={{
              display: {
                xs: "flex",
                md: "none",
                marginLeft: "auto",
              },
            }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={openMenu}>
              <MenuIcon />
              <Menu
                open={Boolean(anochorNav)}
                onClose={closeMenu}
                anchorEl={anochorNav}
                sx={{
                  display: { xs: "flex", md: "none" },
                }}>
                <MenuList>
                  <MenuItem onClick={handleMenuItemClick}>About us</MenuItem>
                  <MenuItem>Sapa</MenuItem>
                  <MenuItem>Help</MenuItem>
                  <MenuItem>Contacts</MenuItem>
                </MenuList>
              </Menu>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
