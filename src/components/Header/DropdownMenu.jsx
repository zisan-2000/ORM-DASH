import { Box, Grid } from "@mui/material";
import React from "react";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const DropdownMenu = ({ dropdownItems, handleClose }) => {
  return (
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
        width: "900px",
      }}
      onMouseLeave={handleClose}
    >
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <LeftSection leftSection={dropdownItems[0].leftSection} />
        </Grid>
        <Grid item xs={9}>
          <RightSection rightSection={dropdownItems[0].rightSection} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default DropdownMenu;
