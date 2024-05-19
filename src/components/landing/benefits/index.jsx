import React from "react";
import { Grid, Typography } from "@mui/material";
import { FibersBenefits } from "../../../constants/landing";

const Benefits = () => {
  return (
    <Grid
      item
      container
      direction={"column"}
      alignContent={"flex-start"}
      md={9}
      xs={10}
      marginBlock={10}
    >
      <Typography align="left">Why Fiber?</Typography>
      <Grid xs={6} container marginBlockEnd={5}>
        <Typography align="left" fontSize={35} fontWeight={800}>
          A good portfolio means good employability
        </Typography>
      </Grid>
      <Grid item container xs={2} gap={4}>
        {FibersBenefits.map((item) => (
          <Grid
            container
            item
            direction={"column"}
            md
            xs={6}
            alignItems={"flex-start"}
            gap={1}
          >
            <img src={item.img} alt={item.title} />
            <Typography fontWeight={"bold"}>{item.title}</Typography>
            <Typography textAlign={"left"}>{item.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Benefits;
