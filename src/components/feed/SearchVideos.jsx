import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../../utils/fetchFromApi";
import Videos from "./Videos";
import { Box, Typography } from "@mui/material";
function SearchVideos() {
  const [videos, setVideos] = useState([]);
  const { searchInput } = useParams();
  useEffect(() => {
    fetchFromApi(`search?part=snippet&order=date&q=${searchInput}`).then(
      (data) => setVideos(data.items)
    );
  }, [searchInput]);

  return (
    <Box>
      <Box
        sx={{
          position: "fixed",
          zIndex: 1,
          background: "#000",
          width: "100%",
          top: "70px",
          mb: 15,
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "20px", sm: "25px", md: "35px" },
            color: "white",
            fontWeight: "bold",
            ml: 3,
            mb: 3,
          }}
        >
          Search Result for <span style={{ color: "red" }}>{searchInput}</span>{" "}
          Videos{" "}
        </Typography>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default SearchVideos;
