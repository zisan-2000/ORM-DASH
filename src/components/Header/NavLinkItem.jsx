import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const NavLinkItem = ({
  link,
  index,
  activeDropdown,
  handleHover,
  handleClose,
}) => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", position: "relative" }}
      onMouseEnter={link.hasDropdown ? () => handleHover(index) : null}
      onMouseLeave={handleClose}
    >
      <Button color="inherit" component={Link} to={link.path}>
        {link.name}
      </Button>
      {link.hasDropdown && <ArrowDropDownIcon />}

      {link.hasDropdown && link.dropdownItems && activeDropdown === index && (
        <DropdownMenu
          dropdownItems={link.dropdownItems}
          handleClose={handleClose}
        />
      )}
    </Box>
  );
};

export default NavLinkItem;
