import { Toolbar, Typography, AppBar as AppBarMui } from "@mui/material";
import React from "react";
import { DRAWER_WIDTH } from "../../utils/enums";

export default function AppBar({ onClickHeader }) {
  return (
    <AppBarMui
      position="fixed"
      sx={{
        width: `calc(100% - ${DRAWER_WIDTH}px)`,
        ml: `${DRAWER_WIDTH}px`,
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="div"
          onClick={() => onClickHeader("/")}
        >
          Cours React / Redux
        </Typography>
      </Toolbar>
    </AppBarMui>
  );
}
