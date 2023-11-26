import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../../utils/fetchFromApi";
import Videos from "./Videos";
import ReactPlayer from "react-player";
import { Box, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";

function VideoDetails() {
  const [videoDetails, setVideoDetails] = useState([]);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetails(data.items[0])
    );
    fetchFromApi(
      `search?part=snippet&relatedToVideoId%0A=${id}&type=video`
    ).then((data) => setVideos(data.items));
  }, [id]);

  if (!videoDetails?.snippet) return "Loading...";

  return (
    <Box minHeight={"95vh"}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={9}>
          <Box
            sx={{
              position: "fixed",
              width: { xs: "100%", md: "75%" },
              background: "#000",
              height: { xs: "40vh", sm: "50vh", md: "70vh" },

              zIndex: 1,
            }}
          >
            <ReactPlayer
              width={"100%"}
              height={"100%"}
              // className="react-player"
              url={`https://www.youtube.com/watch?v=${id}`}
              controls={true}
            />
            <Box sx={{ background: "#000", p: 2 }}>
              <Typography
                variant={"h5"}
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: { xs: "12px", sm: "18px", md: "25px" },
                }}
              >
                {videoDetails.snippet.title}
              </Typography>
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                sx={{ mt: 1 }}
              >
                <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
                  <Typography
                    variant={{ sm: "subtitle1", md: "h6" }}
                    color={"#fff"}
                  >
                    {videoDetails?.snippet?.channelTitle}
                    <CheckCircle
                      sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
                    />
                  </Typography>
                </Link>
                <Stack direction={"row"} gap={2} color={"white"}>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(
                      videoDetails.statistics?.viewCount
                    ).toLocaleString()}{" "}
                    views
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.7 }}>
                    {parseInt(
                      videoDetails.statistics?.likeCount
                    ).toLocaleString()}{" "}
                    likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={3}>
          <Box
            sx={{
              overflowY: "auto",
              height: "95vh",
              mt: { xs: "50vh", sm: "55vh", md: 0 },
            }}
          >
            <Videos videos={videos} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default VideoDetails;
