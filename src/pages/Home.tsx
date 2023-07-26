import { FC, ReactElement, useState, useEffect } from "react";
import {saveAs} from "file-saver";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import ImageModal from "../components/ImageModal";
import Loading from "../components/Loading";
import { getImage, downloadPhotos } from "../api";

const Home: FC = (): ReactElement => {
  const [images, setImages] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  var pageNumber = 0; 
  
  const loadMoreImage = () => {
    pageNumber += 1;  
    getImage(pageNumber)
      .then((res) => {
        if(res.data.length === 0) {
          setHasMore(false);
        } else {
          const newImages:[] = [];
          res.data.forEach((image:never) => newImages.push(image));
          setImages((prevImages) => [...prevImages,...newImages]);
        }
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleScroll = (e:any) => {
    if(window.innerHeight + e.target.documentElement.scrollTop + 1 >= e.target.documentElement.scrollHeight) {
      loadMoreImage();
    }
  }

  useEffect(() => {
    if(hasMore) {
      loadMoreImage();
      window.addEventListener("scroll", handleScroll);
    }
  }, [])

  const renderImage = (item: any) => {
    const handleDownload = () => {
      downloadPhotos(item.id)
      .then((res) => {
        if(res.status === 200) {
          saveAs(res.data.url, item.description);
        } else {
          alert("Can't download photo");
        }
      })
      .catch((error) => {
        console.log(error);
      })
    }
    return (
      <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
        {
          isLoading?(<Loading/>):
            (<Card>
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
                <ImageModal image={item} />
              </CardActions>
            </Card>)
        }
      </Grid>
    );
  };
  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={2}>
        {images.map((item) => renderImage(item))}
      </Grid>
    </Box>
  );
};

export default Home;
