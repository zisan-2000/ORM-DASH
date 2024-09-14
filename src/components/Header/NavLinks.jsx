import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ navLinks }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleHover = (event, index) => {
    setAnchorEl(event.currentTarget);
    setActiveDropdown(index);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setActiveDropdown(null);
  };

  return (
    <Stack direction="row" spacing={2}>
      {navLinks.map((link, index) => (
        <Box
          key={index}
          sx={{ display: "flex", alignItems: "center", position: "relative" }}
          onMouseEnter={
            link.hasDropdown ? (event) => handleHover(event, index) : null
          }
          onMouseLeave={handleClose}
        >
          <Button color="inherit" component={Link} to={link.path}>
            {link.name}
          </Button>
          {link.hasDropdown && <ArrowDropDownIcon />}

          {/* Custom Dropdown */}
          {link.hasDropdown &&
            link.dropdownItems &&
            activeDropdown === index && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: -200,
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  padding: "16px",
                  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  zIndex: 1000,
                  width: "900px", // Adjust the width accordingly
                }}
                onMouseLeave={handleClose}
              >
                <Grid container spacing={2}>
                  {/* Left section */}
                  <Grid item xs={3} key={"leftSection"}>
                    <Box
                      sx={{
                        backgroundColor: "#F1F5F9",
                        padding: "16px",
                        borderRadius: "8px",
                        border: "1px solid #ddd",
                      }}
                    >
                      <Typography variant="h6" color="primary">
                        {link.dropdownItems[0].leftSection.title}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {link.dropdownItems[0].leftSection.description}
                      </Typography>
                    </Box>
                  </Grid>

                  {/* Right section */}
                  <Grid item xs={9}>
                    <Grid container spacing={2}>
                      {link.dropdownItems[0].rightSection.map((item, i) => (
                        <Grid item xs={3} key={i}>
                          <Box
                            display="flex"
                            flexDirection="column"
                            alignItems="start"
                          >
                            <Box
                              sx={{
                                display: "inline-flex",
                                marginBottom: "8px",
                                fontSize: "20px",
                                color: "#000",
                              }}
                            >
                              {item.icon}
                            </Box>
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: "normal" }}
                            >
                              <Link
                                to={item.path}
                                style={{
                                  textDecoration: "none",
                                  color: "#000",
                                }}
                              >
                                {item.name}
                              </Link>
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              {item.description}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            )}
        </Box>
      ))}
    </Stack>
  );
};

export default NavLinks;
