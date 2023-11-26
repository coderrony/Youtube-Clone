import { categories } from "../../utils/constants";
import { Stack } from "@mui/material";
function SideBar({ selectCategory, setSelectCategory }) {
  return (
    <Stack
      direction={"row"}
      sx={{
        overflowY: "auto",
        flexDirection: { md: "column" },
        height: { sm: "auto", md: "95%" },
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={() => setSelectCategory(category.name)}
          className="category-btn"
          style={{
            background: selectCategory === category.name && "#FC1503",
            color: "white",
          }}
        >
          <span
            style={{
              marginRight: "15px",
              color: selectCategory === category.name ? "white" : "red",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectCategory ? "1" : "0.7",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default SideBar;
