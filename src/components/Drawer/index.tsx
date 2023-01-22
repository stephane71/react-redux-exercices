import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Drawer as DrawerMui,
} from "@mui/material";
import React from "react";
import { DRAWER_WIDTH } from "../../utils/enums";
import { useLocation } from "react-router-dom";

export default function Drawer({ onSelectMenuItem }) {
  const location = useLocation();

  return (
    <DrawerMui
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Divider />
      <List>
        <ListItem disablePadding onClick={() => onSelectMenuItem("/cities")}>
          <ListItemButton selected={location.pathname === "/cities"}>
            <ListItemText primary={"Liste des communes"} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding onClick={() => onSelectMenuItem("/counter")}>
          <ListItemButton selected={location.pathname === "/counter"}>
            <ListItemText primary={"Counter"} />
          </ListItemButton>
        </ListItem>
      </List>
    </DrawerMui>
  );
}
