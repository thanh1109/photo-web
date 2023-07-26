import React, { FC, ReactElement, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
// import InputBase from "@mui/material/InputBase";
// import { alpha, styled } from "@mui/material/styles";
import { IconButton, Grid, Card, CardMedia, CardActions, Box, TextField, Button } from "@mui/material";
import { downloadPhotos, likePhoto, searchPhotos } from "../api";
import ImageModal from "../components/ImageModal";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import saveAs from "file-saver";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25)
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto"
//   }
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch"
//       }
//     }
//   }
// }));
const SearchPage: FC = (): ReactElement => {
  const [input, setInput] = useState("");
  const login = false;
  const [imagesList, setImagesList] = useState<[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSearch = () => {
    searchPhotos(input).then((res) => {
      if(res.data.results.length > 0) {
        console.log(res.data.results);
        setImagesList(res.data.results);
      } else {
        alert("No result found");
      }
    })
  }

  const handleKeyDown = (e:any) => {
    if(e.key === "Enter") {
      handleSearch();
    }
  }
  const renderImage = (item: any) => {
    const handleLike = () => {
      likePhoto(item.id);
    }
    const handleDownload = () => {
      downloadPhotos(item.id).then((res) => {
        if(res.status === 200) {
          saveAs(res.data.url, item.description);
          //console.log(res);
        } else {
          alert("Can't download photo")
        }
      })
    }
    return (
      <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
        <Card>
          <CardMedia
            component="img"
            alt={item.description || "image"}
            height="200"
            image={item.urls.small}
          />
          <CardActions sx={{ display: "flex", justifyContent: "flex-end", gap: 0 }}>
            <IconButton onClick={handleDownload} title="Download">
              <DownloadOutlinedIcon/>
            </IconButton>
            {
              login ? (<IconButton onClick={handleLike}>
                      <FavoriteBorderIcon />
                     </IconButton>):(<></>)
            }
            <ImageModal image={item} />
          </CardActions>
        </Card>
      </Grid>
    );
  };
  
  return (
    <Box sx={{ p: 4 }}>
    {/* <Search>
      <StyledInputBase
        value={input}
        onChange={handleChange}
        placeholder="Search photos"
        inputProps={{ "aria-label": "search" }}
        onKeyDown={handleKeyDown}
      />
      <IconButton 
        onClick={handleSearch}
        disabled={!input}  
      >
          <SearchIcon />
      </IconButton>
    </Search> */}
    <Box sx = {{
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <TextField
        label="Enter search term"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        variant="outlined"
        style={{
          marginBottom:"20px"
        }}
        size="small"
      />
      <Button 
        variant="contained" 
        color="secondary"
        sx={{
          marginTop: '-21px',
          marginLeft: '10px'
        }}
        disabled={!input}
        onClick={handleSearch}
        title="Search"
      >
        <SearchIcon/>
      </Button>
    </Box>
    <Grid container spacing={2}>
      {imagesList.map((item) => renderImage(item))}
    </Grid>
  </Box>
  );
};

export default SearchPage;
