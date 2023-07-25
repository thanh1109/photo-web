import * as React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  p: 4
};

const ImageModal = (props: any) => {
  const { image } = props;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <ZoomInIcon />
      </IconButton>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <img src={image.urls.raw} style={{ width: "100%" }} />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {image.description || ""}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Avatar src={image.user.profile_image.large} />
            <Box>
              <Typography sx={{ fontWeight: 600 }}>{image.user.name}</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                <InstagramIcon color="secondary" />
                <Link href={image.user.portfolio_url}>{image.user.instagram_username}</Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default ImageModal;
