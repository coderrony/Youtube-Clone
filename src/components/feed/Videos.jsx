import { Box, Stack } from "@mui/material";

import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

function Videos({ videos }) {
  return (
    <Stack
      direction={"row"}
      flexWrap={"wrap"}
      justifyContent={"center"}
      gap={2}
    >
      {videos.map((item, index) => (
        <Box key={index}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && (
            <ChannelCard channelDetails={item} marginTop={"30px"} />
          )}
        </Box>
      ))}
    </Stack>
  );
}

export default Videos;
