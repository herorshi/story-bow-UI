import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    backgroundColor: theme.palette.background.paper,
    borderTop: "2em solid var(--primary)",
    borderRadius: "0.75em",
    boxShadow: theme.shadows[5],
    width: "50em",
    padding: theme.spacing(1, 4, 3),
  },
}));

export default function ModalBody(props) {
  const classes = useStyles();
  const modalStyle = {
    top: `${40}%`,
    left: `${50}%`,
    transform: `translate(-${50}%, -${50}%)`,
  };
  return (
    <div style={modalStyle} className={classes.paper}>
      {props.children}
    </div>
  );
}
