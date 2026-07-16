import {
  Drawer,
  Toolbar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { NavLink } from "react-router-dom";
import { navigationItems } from "../../config/navigation";

const drawerWidth = 240;

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,

        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />

      <List>
        {navigationItems.map((item) => {
          const Icon = item.icon;

          return (
            <ListItemButton
              key={item.title}
              component={NavLink}
              to={item.path}
            >
              <ListItemIcon>
                <Icon />
              </ListItemIcon>

              <ListItemText primary={item.title} />
            </ListItemButton>
          );
        })}
      </List>
    </Drawer>
  );
}