import react from "react";
import StyledButton from "./StyledButton";
import TextField from "@material-ui/core/TextField";
import PageHeader from "./page/PageHeader";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import CssTextField from "./CssTextField";
export default function ModalEditTxt({
  InputTitle,
  setTxt,
  edittxt,
  handleClose,
  handleChange,
}) {
  return (
    <PageHeader data={InputTitle}>
      <CssTextField edittxt={edittxt} handleChange={handleChange}/>

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
