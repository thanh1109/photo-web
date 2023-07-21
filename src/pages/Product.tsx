import React, { FC, ReactElement } from "react";

import { Box, Typography } from "@mui/material";

const Product: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "white-smoke",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Typography variant="h3">Product</Typography>
    </Box>
  );
};

export default Product;
