import React from "react";
import { Grid, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import classes from "./style.module.css";
import image from "../../../assets/Sign Up Image.png";

const Templates = () => {
  return (
    <Grid
      item
      container
      className={classes.container}
      justifyContent={"center"}
      alignContent={"center"}
      gap={3}
    >
      <Grid item>
        <img
          src={image}
          alt="signup"
          decoding="async"
          className={classes.container_image}
        />
      </Grid>
      <Grid
        item
        container
        justifyContent={"center"}
        alignItems={"center"}
        gap={1}
        xs={12}
      >
        <Grid item container justifyContent={"center"}>
          <Typography fontSize={30} fontWeight={"bold"} color={"white"}>
            Unparalleled Templates
          </Typography>
        </Grid>
        <Grid item xs={6} container>
          <Typography color={"white"}>
            Crafted by a team of professional designers, our templates are
            eunparalleled in the market.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container justifyContent={"center"} columnGap={1}>
        <CircleIcon sx={{ color: "white" }} />
        {Array.from({ length: 3 }, () => (
          <CircleIcon sx={{ color: "white", opacity: 0.6 }} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Templates;
