import React, { useState } from "react";
import {
  Button,
  Drawer,
  Grid,
  Hidden,
  IconButton,
  ListItemButton,
} from "@mui/material";
import hamburgerMenu from "../../../assets/Hamburger Menu.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => {
    setOpen(newOpen);
  };

  return (
    <Grid item container alignItems={"center"}>
      <Grid item md={3} xs={5}>
        <b>Fiber</b>
      </Grid>
      <Hidden mdDown>
        <Grid container item xs={6} spacing={3} justifyContent={"center"}>
          <Grid item>Commiunity</Grid>
          <Grid item>Pricing</Grid>
          <Grid item>Features</Grid>
        </Grid>
      </Hidden>
      <Grid item md={3} xs={5} gap={3} container justifyContent={"center"}>
        <Button variant="text" color="inherit">
          <b>sing In</b>
        </Button>
        <Button variant="contained" color="secondary" size="large">
          Sing Up
        </Button>
      </Grid>
      <Hidden mdUp>
        <Grid item xs={2}>
          <IconButton onClick={() => toggleDrawer(true)}>
            <img src={hamburgerMenu} alt={"hamburgerMenu"} />
          </IconButton>
        </Grid>
        <Drawer
          open={open}
          onClose={() => toggleDrawer(false)}
          anchor={"right"}
        >
          <Grid container direction={"column"}>
            <ListItemButton>Commiunity</ListItemButton>
            <ListItemButton>Pricing</ListItemButton>
            <ListItemButton>Features</ListItemButton>
          </Grid>
        </Drawer>
      </Hidden>
    </Grid>
  );
};

export default Header;
