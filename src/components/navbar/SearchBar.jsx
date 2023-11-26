import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function SearchBar() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      navigate(`/search/${input}`);
    }
    setInput("");
  };
  return (
    <Paper
      onSubmit={handleSubmit}
      component={"form"}
      sx={{ mr: { sm: 5 }, pl: 2, borderRadius: 20, boxShadow: "none" }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          padding: "10px",
          color: "red",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
