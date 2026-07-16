import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SecurityIcon from "@mui/icons-material/Security";

export default function Navbar() {
  return (
    <AppBar
      position="fixed"
      elevation={1}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar>
        <SecurityIcon sx={{ mr: 1 }} />

        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            flexGrow: 1,
          }}
        >
          SentinelAI
        </Typography>

        <IconButton color="inherit">
          <NotificationsNoneIcon />
        </IconButton>

        <Avatar sx={{ ml: 2 }}>
          S
        </Avatar>
      </Toolbar>
    </AppBar>
  );
}