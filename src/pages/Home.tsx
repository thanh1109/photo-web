import React, { FC, ReactElement, useEffect } from "react";
import { getUser, getCollection } from "../api";

import { Box, Typography } from "@mui/material";

const Home: FC = (): ReactElement => {
  useEffect(() => {
    getCollection().then((res) => console.log(res));
  })
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
      <Typography variant="h3">Home</Typography>
    </Box>
  );
};

export default Home;
