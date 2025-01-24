import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import HikingIcon from "@mui/icons-material/Hiking";

import imageLogo from "../../assets/logo-kuyen.png";
import { useState } from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { InboxRounded, MailOutline } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const ImageLogo = styled("img")(({ theme }) => ({
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  objectFit: "cover",
  width: "4rem",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Navbar = ({ title = "TITLE" }) => {
  const [open, setOpen] = useState(false);

  const handleOpenDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute">
        <Toolbar>
          <ImageLogo src={imageLogo} />
          <Typography
            variant="h4"
           
            component="div"
            sx={{
              flexGrow: 1,
              display: "block",
              pl: 2,
              textAlign: "center",
              fontFamily: "Joti One",
              fontSize: {xs: 26, sm:32, md: 40 },
              overflowBlock:"auto"
            }}
          >
            {title}
          </Typography>

          <IconButton
            onClick={handleOpenDrawer}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer open={open} onClose={handleOpenDrawer} anchor="right">
        <Toolbar>
          <Typography variant="h5">Comienza la aventura</Typography>
        </Toolbar>

        <Divider />

        {
          <List>
            {["Cabalgata", "Hoteles", "Trekking", "Rutas"].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <HikingIcon /> : <MailOutline />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        }
      </Drawer>
    </Box>
  );
};
