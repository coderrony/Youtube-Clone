import { Stack } from "@mui/material";
import { logo } from "../../utils/constants";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
function Navbar() {
  return (
    <Stack
      direction="row"
      alignItems={"center"}
      p={2}
      sx={{
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        background: "#000",
        zIndex: 1,
      }}
    >
      <Link to={"/"}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  );
}

export default Navbar;
