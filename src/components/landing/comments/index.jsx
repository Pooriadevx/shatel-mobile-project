import React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { PersonsComments } from "../../../constants/landing";
import classes from "./style.module.css";

const Comments = () => {
  return (
    <Grid item container md={9} xs={11} marginBlock={10} gap={3}>
      {PersonsComments.map((item) => (
        <Grid
          item
          container
          alignItems={"center"}
          gap={2}
          lg
          xs={9}
          className={classes.box}
        >
          <img src={item.img} alt={item.name} />
          <Grid item container justifyItems={"flex-start"} xs={5}>
            <Typography>{item.name}</Typography>
            <Typography>{item.number}</Typography>
          </Grid>
          <Typography fontSize={15}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            harum tenetur labore iure fuga a accusamus minus ut quidem enim
            ducimus culpa nesciunt, quae distinctio voluptates debitis vero
            adipisci. Rerum.
          </Typography>
          <Button fullWidth variant={"text"} className={classes.box_button}>
            {`View ${item.name}'s Portfolio`}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default Comments;
