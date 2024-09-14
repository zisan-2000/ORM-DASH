import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Logo = ({ logoIcon, logo }) => {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
    >
      {logoIcon}
      <Link
        to="/"
        style={{ marginLeft: "10px", textDecoration: "none", color: "white" }}
      >
        {logo}
      </Link>
    </Typography>
  );
};

export default Logo;
