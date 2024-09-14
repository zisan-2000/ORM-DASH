import { Close as CloseIcon, Menu as MenuIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const MobileMenuToggle = ({ isMenuOpen, toggleMenu }) => {
  return (
    <IconButton edge="start" color="inherit" onClick={toggleMenu}>
      {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
    </IconButton>
  );
};

export default MobileMenuToggle;
