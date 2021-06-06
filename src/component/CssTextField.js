import react from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
const MYCssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "var(--primary)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "var(--primary)",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "1em",
      "& fieldset": {
        borderColor: "var(--primary)",
      },
      "&:hover fieldset": {
        borderColor: "var(--primary)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "var(--primary)",
      },
    },
  },
})(TextField);
export default function CssTextField({ edittxt, handleChange }) {
  return (
    <MYCssTextField
      placeholder="กรุณาระบข้อความ..."
      variant="outlined"
      id="custom-css-outlined-input"
      style={{ width: "100%" }}
      multiline={true}
      rows="10"
      value={edittxt}
      onChange={handleChange}
    >
      {" "}
    </MYCssTextField>
  );
}
