import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import { routes as appRoutes } from "./routes";
import ResponsiveAppBar from "./components/AppBar";

export default function App() {
  const theme = createTheme({
    palette: {
      primary: {
        light: "#63b8ff",
        main: "#0989e3",
        dark: "#005db0",
        contrastText: "#000"
      },
      secondary: {
        main: "#4db6ac",
        light: "#82e9de",
        dark: "#00867d",
        contrastText: "#000"
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Router>
          <ResponsiveAppBar />
          <Routes>
            {appRoutes.map((route) => (
              <Route key={route.key} path={route.path} element={<route.component />} />
            ))}
          </Routes>
        </Router>
      </Box>
    </ThemeProvider>
  );
}
