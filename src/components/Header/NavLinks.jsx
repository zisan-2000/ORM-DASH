import { Stack } from "@mui/material";
import React, { useState } from "react";
import NavLinkItem from "./NavLinkItem";

const NavLinks = ({ navLinks }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleHover = (index) => {
    setActiveDropdown(index);
  };

  const handleClose = () => {
    setActiveDropdown(null);
  };

  return (
    <Stack direction="row" spacing={2}>
      {navLinks.map((link, index) => (
        <NavLinkItem
          key={index}
          link={link}
          index={index}
          activeDropdown={activeDropdown}
          handleHover={handleHover}
          handleClose={handleClose}
        />
      ))}
    </Stack>
  );
};

export default NavLinks;
