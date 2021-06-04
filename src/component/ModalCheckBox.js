import react from "react";
import StyledButton from "./StyledButton";
import PageHeader from "./page/PageHeader";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
export default function ModalCheckBox({
  InputTitle,
  handleClose,
  Choice,
  toggleCheckBox,
  CheckBoxKey,
}) {
  return (
    <PageHeader data={InputTitle}>
      <div>
        {CheckBoxKey.map((c, n) => (
          <input
            type="radio"
            checked={Choice[c]}
            onClick={() => {
              toggleCheckBox(c);
            }}
          />
        ))}
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
            handleClose();
          }}
        >
          ยืนยันรายการ
        </StyledButton>
      </div>
    </PageHeader>
  );
}
