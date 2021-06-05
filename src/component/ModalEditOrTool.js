import react, { useState } from "react";
import StyledButton from "./StyledButton";
import PageHeader from "./page/PageHeader";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import CssTextField from "./CssTextField";
import Button from "@material-ui/core/Button";
import CheckIcon from "../asset/checked-buttom.svg";
export default function ModalEditOrTool({
  InputTitle,
  setTxt,
  edittxt,
  handleClose,
  handleChange,
  toolName,
}) {
  const [useTool, setUseTool] = useState(false);
  return (
    <PageHeader data={InputTitle}>
      <p className="marg1 pageHeader">
        <Button
          variant="outlined"
          style={{ width: "49%", textTransform: "none" }}
          color={useTool ? "" : "primary"}
          onClick={() => setUseTool(false)}
        >
          Text Field
        </Button>

        <Button
          variant="outlined"
          style={{ width: "49%", textTransform: "none" }}
          color={useTool ? "primary" : ""}
          onClick={() => setUseTool(true)}
        >
          {toolName}
        </Button>
      </p>
      {!useTool && (
        <CssTextField edittxt={edittxt} handleChange={handleChange} />
      )}
      <img src={require("../asset/checked-buttom.svg")} />

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
