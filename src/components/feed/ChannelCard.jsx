import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
function ChannelCard({ channelDetails, marginTop }) {
  return (
    <Box
      component={Link}
      to={`/channel/${channelDetails?.id?.channelId}`}
      sx={{
        width: { xs: "356px", md: "320px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        margin: "auto",
      }}
    >
      <CardMedia
        sx={{
          borderRadius: "50%",
          width: "150px",
          height: "150px",
          marginTop: marginTop,
        }}
        component="img"
        image={channelDetails?.snippet?.thumbnails?.high?.url}
        alt={channelDetails?.snippet?.title}
      />
      <CardContent>
        <Typography variant="h6" color={"white"}>
          {channelDetails.snippet?.title}
          <CheckCircle
            sx={{ color: "gray", fontSize: "14px", marginLeft: "5px" }}
          />
        </Typography>
        {channelDetails?.statistics?.subscriberCount && (
          <Typography sx={{ textAlign: "center", color: "white" }}>
            {parseInt(
              channelDetails?.statistics?.subscriberCount
            ).toLocaleString()}{" "}
            Subscribers
          </Typography>
        )}
      </CardContent>
    </Box>
  );
}

export default ChannelCard;
