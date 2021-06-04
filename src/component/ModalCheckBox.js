import react, { useState } from "react";
import StyledButton from "./StyledButton";
import PageHeader from "./page/PageHeader";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import PlainPaperCard from "./PlainPaperCard";
export default function ModalCheckBox({
  InputTitle,
  handleClose,
  Choice,
  setCheckBoxChoice,
  CheckBoxKey,
}) {
  const [modalState, setModalState] = useState(Choice);

  const toggleCheckBox = (Choice) => {
    setModalState((prev) => ({ ...prev, [Choice]: !prev[Choice] }));
  };

  return (
    <PageHeader data={InputTitle}>
      <PlainPaperCard>
        {CheckBoxKey.map((c, n) => (
          <>
            <Radio
              checked={modalState[c]}
              onClick={() => {
                toggleCheckBox(c);
              }}
            />
            {c}
            <br />
          </>
        ))}
      </PlainPaperCard>
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
            setCheckBoxChoice(modalState);
            handleClose();
          }}
        >
          ยืนยันรายการ
        </StyledButton>
      </div>
    </PageHeader>
  );
}
