import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import { demoVideoUrl } from "../../utils/constants";
function VideoCard({ video }) {
  const { id, snippet } = video;

  return (
    <Card sx={{ width: { sx: "100%", md: "350px" } }}>
      <CardActionArea
        component={Link}
        to={id.videoId ? `/video/${id.videoId}` : demoVideoUrl}
      >
        <CardMedia
          component="img"
          height="140"
          image={snippet?.thumbnails?.high?.url}
          alt={snippet?.channelTitle}
        />
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px" }}>
          <Typography variant="subtitle1" fontWeight={"bold"} color="#FFF">
            {snippet?.title.slice(0, 60)}
          </Typography>
          <Typography variant="subtitle2" fontWeight={"bold"} color="gray">
            {snippet?.channelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default VideoCard;
