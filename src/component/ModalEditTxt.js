import react from "react";
import StyledButton from "./StyledButton";
import TextField from "@material-ui/core/TextField";
import PageHeader from "./page/PageHeader";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import CssTextField from "./CssTextField";
import FooterButtonForModal from "./FooterButtonForModal";
export default function ModalEditTxt({
  InputTitle,
  setTxt,
  edittxt,
  handleClose,
  handleChange,
}) {
  return (
    <PageHeader data={InputTitle}>
      <CssTextField edittxt={edittxt} handleChange={handleChange} />

      <FooterButtonForModal
        handleClose={handleClose}
        edittxt={edittxt}
        setTxt={setTxt}
      ></FooterButtonForModal>
    </PageHeader>
  );
}
