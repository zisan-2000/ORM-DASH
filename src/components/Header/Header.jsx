import { AppBar, Box, Toolbar } from "@mui/material";
import React, { useState } from "react";
import { headerData } from "../../Data/Data";
import Logo from "./Logo";
import MobileMenuToggle from "./MobileMenuToggle";
import NavLinks from "./NavLinks";
import Sidebar from "./Sidebar";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {/* Logo for larger screens */}
        <Logo logoIcon={headerData.logoIcon} logo={headerData.logo} />

        {/* Navigation links for larger screens */}
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <NavLinks navLinks={headerData.navLinks} />
        </Box>

        {/* Mobile menu toggle button */}
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <MobileMenuToggle isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </Box>

        {/* Sidebar for mobile screens */}
        <Sidebar
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          navLinks={headerData.navLinks}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
