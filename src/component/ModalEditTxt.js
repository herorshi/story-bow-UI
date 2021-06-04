import react from "react";
import StyledButton from "./StyledButton";
import TextField from "@material-ui/core/TextField";
import PageHeader from "./page/PageHeader";
import { withStyles, makeStyles } from "@material-ui/core/styles";
const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "var(--primary)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "var(--primary)",
    },
    "& .MuiOutlinedInput-root": {
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
export default function ModalEditTxt({
  InputTitle,
  setTxt,
  edittxt,
  handleClose,
  handleChange,
}) {
  return (
    <PageHeader data={InputTitle}>
      <div className="flexend">
        <CssTextField
          placeholder="กรุณาระบข้อความ..."
          variant="outlined"
          id="custom-css-outlined-input"
          style={{ width: "95%" }}
          multiline={true}
          rows="10"
          value={edittxt}
          onChange={handleChange}
        />
      </div>
      <div className="flexend" style={{ marginTop: "1em" }}>
        <StyledButton
          variant="contained"
          style={{ background: "#808080", width: "10em" }}
          onClick={() => {
            handleClose();
          }}
        >
          ปิด
        </StyledButton>
        <StyledButton
          variant="contained"
          style={{ background: "var(--primary)" }}
          onClick={() => {
            setTxt(edittxt);
            handleClose();
          }}
        >
          ยืนยันรายการ
        </StyledButton>
      </div>
    </PageHeader>
  );
}
