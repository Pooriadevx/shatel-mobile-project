import React from "react";
import { Grid, Typography } from "@mui/material";
import { FooterData } from "../../../constants/landing";
import classes from "./style.module.css";

const Footer = () => {
  return (
    <Grid
      item
      container
      className={classes.footer}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Grid item container md={9} xs={10}>
        <Grid item md={5} xs={12} container gap={5}>
          <Grid
            item
            justifyContent={"flex-start"}
            alignContent={"flex-start"}
            container
            md={9}
          >
            <Typography fontWeight={"bold"}>Fiber</Typography>
            <Typography textAlign={"left"}>
              With Fiber, you can setup our own personal portfolio in minutes
              with dozens of premade. beautiful templates.
            </Typography>
          </Grid>
          <Typography>Made with heart in the netherlands</Typography>
        </Grid>
        {FooterData.map((item) => (
          <Grid
            item
            md
            sm={6}
            xs={10}
            container
            direction={"column"}
            spacing={2}
            justifyContent={"flex-start"}
            justifyItems={"flex-start"}
          >
            <Grid item alignItems={"flex-start"} container direction={"column"}>
              <b>{item.title}</b>
            </Grid>
            <Grid
              item
              gap={0.5}
              container
              direction={"column"}
              alignItems={"flex-start"}
            >
              {item.list.map((text) => (
                <Typography>{text}</Typography>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Footer;
