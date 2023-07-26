import React, { FC, ReactElement, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { alpha, styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
import { searchPhotos } from "../api";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto"
  }
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  }
}));
const SearchBar: FC = (): ReactElement => {
  const [input, setInput] = useState("");
  const [imagesList, setImagesList] = useState<[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSearch = () => {
    searchPhotos(input).then((res) => {
      if(res.data) {
        console.log(res.data.results);
        setImagesList(res.data.results);
      } else {
        alert("No result found");
      }
    })
  }

  return (
    <Search>
      <StyledInputBase
        value={input}
        onChange={handleChange}
        placeholder="Search photos"
        inputProps={{ "aria-label": "search" }}
        onKeyDown={handleSearch}
      />
      <IconButton 
        onClick={handleSearch}
        disabled={!input}  
      >
          <SearchIcon />
      </IconButton>
    </Search>
  );
};

export default SearchBar;
