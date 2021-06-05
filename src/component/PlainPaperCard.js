import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FaTwitter } from "react-icons/fa";
export default function PlainPaperCard(props) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: "1em",
      paddingRight: "0",
      marginRight: "1em",
      height: `${props.height ? props.height : "10em"}`,
      width: `${props.width ? props.width : "auto"}`,
      borderRadius: "0.75em",
    },
  }));
  const classes = useStyles();
  return <Paper className={classes.paper}>{props.children}</Paper>;
}
