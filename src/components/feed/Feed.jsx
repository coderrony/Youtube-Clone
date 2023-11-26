import { Stack, Box, Typography } from "@mui/material";
import SideBar from "./SideBar";
import { useEffect, useState } from "react";
import { fetchFromApi } from "../../utils/fetchFromApi";

import Videos from "./Videos";
function Feed() {
  const [selectCategory, setSelectCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectCategory]);

  return (
    <Stack sx={{ flexDirection: { sm: "column", md: "row" } }}>
      <Box
        sx={{
          borderRight: "1px solid #3d3d3d",

          height: { sm: "auto", md: "90vh" },
          px: { sm: 0, md: 2 },
        }}
      >
        <SideBar
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright ronydas 2023
        </Typography>
      </Box>
      <Box padding={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
        <Typography
          variant="h4"
          sx={{
            color: "white",
            fontWeight: "bold",
            ml: 2,
            mb: 3,
          }}
        >
          {selectCategory} <span style={{ color: "#F31503" }}>videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
}

export default Feed;
