import React from "react";
import {
  Button,
  Checkbox,
  Grid,
  InputLabel,
  Link,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { CreateAccountFields } from "../../../constants/signup";
import classes from "./style.module.css";

const CreateAccount = () => {
  return (
    <Grid container justifyContent={"center"} className={classes.container}>
      <Grid
        item
        container
        alignItems={"flex-start"}
        direction={"column"}
        gap={4}
        xs={7}
        margin={5}
      >
        <Grid item>
          <Link href="/" underline="hover" fontSize={25} fontWeight={"bold"}>
            Fiber
          </Link>
        </Grid>
        <Grid item>
          <Typography fontSize={25}>Create your Fiber account</Typography>
        </Grid>
        <Grid item container gap={3}>
          {CreateAccountFields.map((item) => (
            <Grid item container gap={0.5}>
              <InputLabel htmlFor={item.label}>{item.label}</InputLabel>
              <OutlinedInput
                size="small"
                fullWidth
                id={item.label}
                placeholder={item.defaultValue}
                variant="outlined"
                type={item.type}
                endAdornment={item.icon}
              />
            </Grid>
          ))}
        </Grid>
        <Grid item container>
          <Grid item>
            <Checkbox />
          </Grid>
          <Grid item xs={10} container>
            <Typography>
              By creating an account on Fiber, you agree to the
              <Link>Terms & Conditions</Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Button
            id={classes.container_button}
            size="large"
            fullWidth
            variant="contained"
          >
            Create your account
          </Button>
        </Grid>
        <Grid item container gap={1} justifyContent={"center"}>
          Already have an account? <Link>Sign In</Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreateAccount;
