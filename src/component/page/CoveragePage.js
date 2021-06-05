import React from "react";
import PageHeader from "./PageHeader";
import pageDetail from "../../pageDetail";
import Board from "../Board";
import CoverageBoard from "../CoverageBoard";
import StyledButton from "../StyledButton";

export default function CoveragePage(props) {
  return (
    <PageHeader
      data={pageDetail.Coverage}
      showvdo={() => {
        alert("showvdo");
      }}
    >
      <Board>
        <b>
          คำแนะนำการกรอกข้อมูล Coverage :
          <span className="primarytxt"> Premise*</span> >
          <span className="primarytxt"> Genre*</span> >
          <span className="primarytxt"> Theme*</span> >
          <span className="primarytxt"> Lock Story Line*</span> >
          <span className="primarytxt"> Lock Line*</span> >
          <span className="primarytxt"> Title</span> >
          <span className="primarytxt"> Check Box</span>
        </b>
      </Board>
      <CoverageBoard />

      <div className="pageHeader" style={{ marginTop: "1em" }}>
        <div>
          <StyledButton
            variant="contained"
            style={{ background: "var(--primary)", marginLeft: "0" }}
          >
            บันทึก
          </StyledButton>
          <StyledButton variant="contained" color="secondary">
            ลบข้อมูล
          </StyledButton>
        </div>
        <div className="flexend">
          <StyledButton variant="contained" style={{ background: "#808080" }}>
            ย้อนกลับ
          </StyledButton>
          <StyledButton
            variant="contained"
            style={{ background: "var(--primary)" }}
          >
            ถัดไป
          </StyledButton>
        </div>
      </div>
    </PageHeader>
  );
}
