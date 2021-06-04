import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { FaTwitter } from "react-icons/fa";
export default function PaperCard(props) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(1),
      paddingRight: "0",
      marginRight: "1em",
      paddingTop: 0,
      height: `${props.height ? props.height : "10em"}`,
      width: `${props.width ? props.width : "auto"}`,
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
        <h1 style={{ marginLeft: "1em", color: `${props.h1color}` }}>
          {props.title}
        </h1>
        <h1>
          {/* EditButton */}
          {props.editfn && (
            <Button
              onClick={() => {
                props.editfn();
              }}
            >
              edit
            </Button>
          )}
          {/* AdvanceButton */}
          {props.AdvanceFunction && (
            <Button onClick={() => props.AdvanceFunction()}>
              <FaTwitter />
            </Button>
          )}
        </h1>
      </div>
      <p className={`cardtext ${props.detailclname}`}>
        {props.detail}
        {props.children}
      </p>
    </Paper>
  );
}
