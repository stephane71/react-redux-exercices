import React from "react";
import "./App.css";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import AppBar from "./components/AppBar";
import Drawer from "./components/Drawer";

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleClickMenu(to) {
    navigate(to);
  }

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar onClickHeader={handleClickMenu} />

      <Drawer onSelectMenuItem={handleClickMenu} />

      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {location.pathname === "/" && (
          <div>
            Cette application regroupe les projets développés pendant le cours.
          </div>
        )}
        <div>
          <Outlet />
        </div>
      </Box>
    </Box>
  );
}

export default App;
