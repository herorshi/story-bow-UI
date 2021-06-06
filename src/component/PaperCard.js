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
      overflow: "auto",

      // "&:hover": {
      //   border: `1px solid var(--primary)`,
      // },
    },
    header2: {
      paddingLeft: "1em",
      color: `${props.h1color}`,
    },
    cardtxt: {
      overflow: "auto",
      wordBreak: "break-all",
      wordWrap: "break-word",
      paddingLeft: "3em",
    },
  }));
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <div className="pageHeader">
        <h2 className={classes.header2}>{props.title}</h2>
        <h2>
          {/* EditButton */}
          {props.editfn && (
            <Button
              onClick={() => {
                props.editfn();
              }}
            >
              <FaTwitter />
            </Button>
          )}
          {/* AdvanceButton */}
          {props.AdvanceFunction && (
            <Button onClick={() => props.AdvanceFunction()}>fn</Button>
          )}
        </h2>
      </div>
      <p
        className={`${classes.cardtxt} ${props.detailclname} ${
          props.detail == "" ? "placeholdertxt" : ""
        }`}
      >
        {props.detail == "" ? "กรุณาระบุข้อความ" : props.detail}
        {props.children}
      </p>
    </Paper>
  );
}
//  {props.title} props.editfn props.AdvanceFunction ${props.detailclname}{props.detail} {props.children}
