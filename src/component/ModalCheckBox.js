import react, { useState } from "react";
import StyledButton from "./StyledButton";
import PageHeader from "./page/PageHeader";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import PlainPaperCard from "./PlainPaperCard";
import FooterButtonForModal from "./FooterButtonForModal";
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
      <FooterButtonForModal
        handleClose={handleClose}
        edittxt={modalState}
        setTxt={setCheckBoxChoice}
      ></FooterButtonForModal>
    </PageHeader>
  );
}
