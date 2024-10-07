import { Box, Typography } from "@mui/material";
import React from "react";

const LeftSection = ({ leftSection }) => {
  return (
    <Box
      sx={{
        backgroundColor: "#F1F5F9",
        padding: "16px",
        borderRadius: "8px",
        border: "1px solid #ddd",
      }}
    >
      <Typography variant="h6" color="primary">
        {leftSection.title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {leftSection.description}
      </Typography>
    </Box>
  );
};

export default LeftSection;
