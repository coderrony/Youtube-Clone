import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../../utils/fetchFromApi";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
function ChannelDetail() {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [channelDetail, setChannelDetail] = useState([]);

  useEffect(() => {
    fetchFromApi(`search?part=snippet&channelId=${id}&order=date`).then(
      (data) => setVideos(data.items)
    );

    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );
  }, [id]);

  return (
    <Box>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,255,201,1) 53%, rgba(121,9,94,1) 89%)",
            zIndex: 10,
            height: "300px",
          }}
        ></div>
        <ChannelCard channelDetails={channelDetail} marginTop={"-100px"} />
      </Box>
      <Box>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
}

export default ChannelDetail;
