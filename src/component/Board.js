import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "3em",
    backgroundColor: "#f5f5f5",
    height: "100%",
  },
}));

export default function Board(props) {
  const classes = useStyles();
  return <div className={classes.root}>{props.children}</div>;
}
