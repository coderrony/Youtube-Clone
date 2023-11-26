import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Feed } from "./components";
import { Box } from "@mui/material";
import ChannelDetail from "./components/feed/ChannelDetail";
import SearchVideos from "./components/feed/SearchVideos";
import VideoDetails from "./components/feed/VideoDetails";
function App() {
  return (
    <BrowserRouter>
      <Box sx={{ background: "#000" }}>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />} />
          <Route path="/video/:id" exact element={<VideoDetails />} />
          <Route path="/channel/:id" exact element={<ChannelDetail />} />
          <Route path="/search/:searchInput" exact element={<SearchVideos />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
