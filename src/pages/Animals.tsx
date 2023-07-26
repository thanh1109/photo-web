import { FC, ReactElement, useEffect, useState } from "react";
import {saveAs} from "file-saver";
import { Box, Card, CardActions, CardMedia, Grid, IconButton } from "@mui/material";
import { getTopicPhotos, likePhoto, downloadPhotos } from "../api";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ImageModal from "../components/ImageModal";
import Loading from "../components/Loading";

const Product: FC = (): ReactElement => {
  const [images, setImages] = useState<[]>([]);
  const [login, setLogin] = useState(false);
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
          saveAs(res.data.url, item.description);
          //console.log(res);
        } else {
          alert("Can't download photo")
        }
      })
    }
    return (
      <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
        {item?(<Card>
          <CardMedia
            component="img"
            alt={item.description || "image"}
            height="200"
            image={item.urls.small}
          />
          <CardActions sx={{ display: "flex", justifyContent: "flex-end", gap: 0 }}>
            <IconButton onClick={handleDownload}>
              <DownloadOutlinedIcon/>
            </IconButton>
            {
              login ? (<IconButton onClick={handleLike}>
                        <FavoriteBorderIcon />
                       </IconButton>) : (<></>)
            }
            <ImageModal image={item} />
          </CardActions>
        </Card>):(<Loading/>)}
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