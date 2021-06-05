import react, { useState } from "react";
import StyledButton from "./StyledButton";
export default function FooterButtonForModal({ setTxt, edittxt, handleClose }) {
  const [useTool, setUseTool] = useState(false);
  return (
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
  );
}
