import React from "react";
import { Container, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export default withStyles({
  root: {
    color: "white",
    marginLeft: "0.75em",
    textTransform: "none",
    padding: "6px 30px",
    width: "12em",
  },
})(Button);
