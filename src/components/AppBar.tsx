import React, { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";

import MonochromePhotosIcon from "@mui/icons-material/MonochromePhotos";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { routes } from "../routes";
import SearchBar from "./SearchBar";

const ResponsiveAppBar: FC = (): ReactElement => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MonochromePhotosIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            PHOTOS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {routes.map((page) => (
              <Link
                key={page.key}
                component={NavLink}
                to={page.path}
                color="black"
                underline="none"
                variant="button"
                sx={{ my: 2, mx: 2, color: "white", display: "block" }}
              >
                {page.title}
              </Link>
            ))}
          </Box>

          <SearchBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
