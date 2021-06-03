import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FaTwitter } from "react-icons/fa";
export default function Board(props) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      marginRight: "1em",
      paddingTop: 0,
      height: `${props.height ? props.height : "10em"}`,
      width: "100%",
      borderRadius: "0.75em",

      "&:hover": {
        border: `1px solid var(--primary)`,
      },
    },
  }));
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <div className="pageHeader">
        <h1 style={{ marginLeft: "1em" }}>{props.title}</h1>
        <h1>
          {/* EditButton */}
          <Button>+</Button>
          {/* AdvanceButton */}
          {props.AdvanceFunction && (
            <Button onClick={() => props.AdvanceFunction()}>
              <FaTwitter />
            </Button>
          )}
        </h1>
      </div>
      <p className={`cardtext ${props.detailclname}`}>{props.detail}</p>
    </Paper>
  );
}
