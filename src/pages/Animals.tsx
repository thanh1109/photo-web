import { FC, ReactElement, useEffect, useState } from "react";

import { Box, Card, CardActions, CardMedia, Grid, IconButton } from "@mui/material";
import { getTopics, getTopicPhotos, likePhoto, downloadPhotos } from "../api";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ImageModal from "../components/ImageModal";

const Product: FC = (): ReactElement => {
  const [images, setImages] = useState<[]>([]);
  // useEffect(() => {
  //   getTopics().then((res) => {
  //     console.log(res);
  //   })
  // }, [])
  useEffect(() => {
    getTopicPhotos("animals").then((res) => {  
      setImages(res.data);
    })
  },[images]);
  const renderImage = (item: any) => {
    const handleLike = () => {
      likePhoto(item.id);
    }
    const handleDownload = () => {
      downloadPhotos(item.id).then((res) => {
        if(res.status == 200) {
          alert("Downloaded");
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
            image={item.urls.raw}
          />
          <CardActions sx={{ display: "flex", justifyContent: "flex-end", gap: 0 }}>
            <IconButton onClick={handleDownload}>
              <DownloadOutlinedIcon/>
            </IconButton>
            <IconButton onClick={handleLike}>
              <FavoriteBorderIcon />
            </IconButton>
            <ImageModal image={item} />
          </CardActions>
        </Card>
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

export default Product;