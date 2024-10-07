import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const RightSection = ({ rightSection }) => {
  return (
    <Grid container spacing={2}>
      {rightSection.map((item, i) => (
        <Grid item xs={3} key={i}>
          <Box display="flex" flexDirection="column" alignItems="start">
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
            <Typography variant="body1" sx={{ fontWeight: "normal" }}>
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "#000" }}
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
  );
};

export default RightSection;
