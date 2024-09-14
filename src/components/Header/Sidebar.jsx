import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

const Sidebar = ({ isMenuOpen, toggleMenu, navLinks }) => {
  return (
    <Drawer anchor="left" open={isMenuOpen} onClose={toggleMenu}>
      <List>
        {navLinks.map((link, index) => (
          <ListItem
            button
            key={index}
            component={Link}
            to={link.path}
            onClick={toggleMenu}
          >
            <ListItemText primary={link.name} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
