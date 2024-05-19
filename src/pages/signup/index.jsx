import React from "react";
import { Grid } from "@mui/material";
import CreateAccount from "../../components/signup/createAccount";
import Templates from "../../components/signup/templates";

const SignUp = () => {
  return (
    <Grid container justifyContent={"space-between"} alignItems={"center"}>
      <Grid item md={6} xs={12} alignItems={"center"}>
        <CreateAccount />
      </Grid>
      <Grid item md={6} xs={12} alignItems={"center"} justifyContent={"center"}>
        <Templates />
      </Grid>
    </Grid>
  );
};
export default SignUp;
