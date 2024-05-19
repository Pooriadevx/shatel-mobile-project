import React from "react";
import { Button, Grid, Link, Rating, Typography } from "@mui/material";
import Header from "../../components/landing/header";
import Benefits from "../../components/landing/benefits";
import Comments from "../../components/landing/comments";
import Footer from "../../components/landing/footer";
import classes from "./style.module.css";
import hero from "../../assets/hero-Illustration.png";
import checkmark from "../../assets/Checkmark.svg";
import portfolio from "../../assets/portfolio.png";

const Landing = () => {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"} xs={12}>
      <Grid item container className={classes.container}>
        <Header />
        <Grid
          item
          container
          justifyContent={"center"}
          alignItems={"center"}
          rowSpacing={5}
        >
          <Grid container item md={4} xs={8} gap={2}>
            <Grid item container alignItems={"center"} gap={1}>
              <Rating name="read-only" value={5} readOnly />
              <Typography>Rated 4.8/5 (243 reviews)</Typography>
            </Grid>
            <Typography
              variant="h1"
              textAlign={"left"}
              fontSize={40}
              fontWeight={"bold"}
            >
              Create your portfolio in minutes.
            </Typography>
            <Typography textAlign={"left"}>
              With Fiber, you can setup your own personal portfolio in minutes
              with dozends of premade, beautiful templates.
            </Typography>
            <Grid container gap={3} alignItems={"center"}>
              <Button
                variant="contained"
                size="large"
                sx={{ backgroundColor: "#4d13d1" }}
              >
                Start Free Trial
              </Button>
              <Link>view Examples</Link>
            </Grid>
            <Grid container>
              <Grid container xs={6} alignItems={"center"} columnGap={1}>
                <img src={checkmark} />
                <Typography> No Credit Card Required</Typography>
              </Grid>
              <Grid container xs={6} alignItems={"center"} columnGap={1}>
                <img src={checkmark} />
                <Typography> 100 Free Examples</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container md={4} xs={10}>
            <img
              src={hero}
              decoding="async"
              loading="lazy"
              alt="hero"
              width={600}
              height={600}
            />
          </Grid>
        </Grid>
      </Grid>
      <Benefits />
      <Grid
        item
        container
        lg={9}
        sm={10}
        xs={11}
        className={classes.container_box}
        marginBlock={10}
        justifyContent={"space-around"}
      >
        <Grid item md={5} xs={10} container alignContent={"center"} gap={1}>
          <Typography
            fontSize={40}
            fontWeight={"bold"}
            className={classes.container_text}
          >
            Diversify your portfolio
          </Typography>
          <Typography
            className={classes.container_text}
            textAlign={"left"}
            fontSize={20}
          >
            Create an even more impressive portfolio by creating case studies
            for your projects. simply follow out step-by-step guide.
          </Typography>
          <Button
            variant="contained"
            size="large"
            className={classes.container_button}
          >
            Start Free Trial
          </Button>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            position: "relative",
          }}
        >
          <img
            src={portfolio}
            alt="portfolio"
            height={"90%"}
            width={"100%"}
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
          />
        </Grid>
      </Grid>
      <Comments />
      <Footer />
    </Grid>
  );
};

export default Landing;
