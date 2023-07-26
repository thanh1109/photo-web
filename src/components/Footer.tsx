import { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


export const Footer: FC = (): ReactElement => {
    return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
        backgroundColor: "inherit",
        paddingTop: "1rem",
        paddingBottom: "1rem",
      }}
    >
      <Container maxWidth="lg">
        <Grid container direction="column" alignItems="center" spacing={1}>
          <Grid item xs={12} direction="row">
            <Typography color="black" variant="h5">
              Photos
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="subtitle1">
              {`${new Date().getFullYear()} | ReactJS`}
            </Typography>
          </Grid>
          <Grid item xs={12} columnGap={2}> 
                <a href="https://www.facebook.com/unsplash" target="_blank">
                    <IconButton>
                        <FacebookIcon/>
                    </IconButton>
                </a>
                <a href="https://twitter.com/unsplash" target="_blank">
                    <IconButton>
                        <TwitterIcon/> 
                    </IconButton>
                </a>
                <a href="https://www.instagram.com/unsplash/?hl=vi" target="_blank">
                    <IconButton>
                        <InstagramIcon/>
                    </IconButton>
                </a>  
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;