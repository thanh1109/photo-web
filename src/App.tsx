import React from "react";
import { Box, Paper, Typography, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes as appRoutes } from "./routes";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Loading from "./components/Loading";
import searchImage from "./api";

export default function App(){
  const theme = createTheme({
    palette:{
      primary:{
        light: "#63b8ff",
        main: "#0989e3",
        dark: "#005db0",
        contrastText: "#000",
      },
      secondary:{
        main: "#4db6ac",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000",
      },
    },
  });
  //searchImage();
  return(
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <SearchBar/>
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Router>
        <NavBar/>
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.key}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Router>
      </Box>
      {/* <Loading/> */}
    </ThemeProvider>
  );
}