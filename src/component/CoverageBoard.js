import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import PaperCard from "./PaperCard";
import ModalPaper from "./ModalPaper";
import ModalToPage from "./ModalToPage";
import pageDetail from "../pageDetail";
import ModalEditTxt from "./ModalEditTxt";
import ModalCheckBox from "./ModalCheckBox";
import ModalEditOrTool from "./ModalEditOrTool";
export default function CoverageBoard(props) {
  const [open, setOpen] = useState(false);
  const [modalChoice, setModalChoice] = useState("");
  const [edittxt, setEditTxt] = useState("");
  const [coverage, setCoverage] = useState({
    title: "",
    Premise: "",
    Genre: "",
    Theme: "",
    LockStoryLine: "",
    CheckBox: "",
    LockLine: "",
  });
  const [CheckBoxChoice, setCheckBoxChoice] = useState({
    Choice1: false,
    Choice2: false,
    Choice2: false,
  });
  const CheckBoxKey = ["Choice1", "Choice2", "Choice3"];

  const [GenreChoice, setGenreChoice] = useState({
    Scifi: false,
    Adventure: false,
    Horror: false,
    Drama: false,
  });
  const GenreKey = ["Scifi", "Adventure", "Horror", "Drama"];

  const toggleCheckBox = (Choice) => {
    setCheckBoxChoice((prev) => ({ ...prev, [Choice]: !prev[Choice] }));
  };

  const setTitle = (title) => {
    setCoverage({ ...coverage, title });
  };
  const setLockLine = (LockLine) => {
    setCoverage({ ...coverage, LockLine });
  };
  const setPremise = (Premise) => {
    setCoverage({ ...coverage, Premise });
  };
  const setTheme = (Theme) => {
    setCoverage({ ...coverage, Theme });
  };

  const setLockStoryLine = (LockStoryLine) => {
    setCoverage({ ...coverage, LockStoryLine });
  };

  const handleModalTitle = () => {
    setModalChoice("Edit Title");
    handleOpen();
  };

  const handleModalCheckBox = () => {
    setModalChoice("CheckBox");
    handleOpen();
  };
  const handleGenreCheckBox = () => {
    setModalChoice("Genre");
    handleOpen();
  };

  const handlePremise = () => {
    setModalChoice("Premise");
    handleOpen();
  };
  const handleTheme = () => {
    setModalChoice("Theme");
    handleOpen();
  };
  const handleLockLine = () => {
    setModalChoice("LockLine");
    handleOpen();
  };

  const GenerateCheckBoxDetail = (obj) => {
    let keys = Object.keys(obj);
    return keys.filter((c) => obj[c]).join();
  };

  const handlePremiseTool = () => {
    setModalChoice("Use Premise Tool");
    handleOpen();
  };
  const handleLockStoryLineTool = () => {
    setModalChoice("Lock Story Line");
    handleOpen();
  };
  const handleChange = (event) => {
    setEditTxt(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // function ที่เปิด modal โดยที่ก่อนเปิดทำการสร้าง modal นั้นทันที
  // วิธีการใช้งาน ส่ง function ที่สร้าง modal พร้อมเปิด modal ให้ในปุ่ม edit ของสมาชิกแต่ละ coverage โดยเฉพาะ
  // โดยทำข้างใน modal จะเปลี่ยน title เนื้อหา และ function เมื่อกดปุ่ม confirm และ handleclose เมื่อกดปุ่ม cancle

  let editTxtProps = { handleClose, handleChange, edittxt };

  return (
    <Grid
      className="board"
      container
      spacing={3}
      style={{ margin: "2em 0 0 0", width: "auto" }}
    >
      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <ModalPaper>
          {/* modalChoice */}
          {modalChoice == "Use Premise Tool" && (
            <ModalToPage
              title="Use Premise Tool"
              description="ต้องการที่จะใช้ Premise Tool หรือไม่"
              to="PremiseTool"
            ></ModalToPage>
          )}
          {/* EditTitle */}
          {modalChoice == "Edit Title" && (
            <ModalEditTxt
              InputTitle={pageDetail.InputTitle}
              setTxt={setTitle}
              {...editTxtProps}
            ></ModalEditTxt>
          )}
          {/* LockLine */}
          {modalChoice == "LockLine" && (
            <ModalEditTxt
              InputTitle={pageDetail.LockLine}
              setTxt={setLockLine}
              {...editTxtProps}
            ></ModalEditTxt>
          )}
          {/* CheckBox */}
          {modalChoice == "CheckBox" && (
            <ModalCheckBox
              InputTitle={pageDetail.CheckBoxModal}
              Choice={CheckBoxChoice}
              setCheckBoxChoice={setCheckBoxChoice}
              handleClose={handleClose}
              CheckBoxKey={CheckBoxKey}
            ></ModalCheckBox>
          )}
          {/* Genre */}
          {modalChoice == "Genre" && (
            <ModalCheckBox
              InputTitle={pageDetail.GenreModal}
              Choice={GenreChoice}
              setCheckBoxChoice={setGenreChoice}
              handleClose={handleClose}
              CheckBoxKey={GenreKey}
            ></ModalCheckBox>
          )}
          {/* Premise */}
          {modalChoice == "Premise" && (
            <ModalEditOrTool
              InputTitle={pageDetail.PremiseModal}
              setTxt={setPremise}
              toolName="Idea Premise Tool"
              {...editTxtProps}
            ></ModalEditOrTool>
          )}
          {/* Theme */}
          {modalChoice == "Theme" && (
            <ModalEditOrTool
              InputTitle={pageDetail.ThemeModal}
              setTxt={setTheme}
              toolName="Idea Theme Tool"
              {...editTxtProps}
            ></ModalEditOrTool>
          )}
          {/* Lock Story Line */}
          {modalChoice == "Lock Story Line" && (
            <ModalEditOrTool
              InputTitle={pageDetail.LockStoryLineModal}
              setTxt={setLockStoryLine}
              toolName="Lock Story Line Tool"
              {...editTxtProps}
            ></ModalEditOrTool>
          )}
        </ModalPaper>
      </Modal>
      {/* 1 line = 12 sm split to 4 and 8 */}
      <Grid item sm={12} md={4}>
        {/* use PaperCard */}
        <PaperCard
          title="Title"
          detail={coverage.title}
          detailclname="primary"
          height="10em"
          width="100%"
          editfn={handleModalTitle}
        ></PaperCard>
      </Grid>
      <Grid item sm={12} md={8}>
        {/* ต้องใส่ modal ให้ปุ่มใน PaperCard ยังไงดี ต้องส่ง chidren ไม่ได้ มี2ปุ่ม 2 modal*/}
        <PaperCard
          title="Premise"
          detail={coverage.Premise}
          detailclname="primary"
          height="10em"
          width="100%"
          editfn={handlePremise}
          closeModal={handleClose}
        ></PaperCard>
      </Grid>
      <Grid item sm={12} md={8}>
        <PaperCard
          title="Theme"
          detail={coverage.Theme}
          detailclname="primary"
          height="10em"
          width="100%"
          editfn={handleTheme}
          closeModal={handleClose}
        ></PaperCard>
      </Grid>
      <Grid item sm={12} md={4}>
        <PaperCard
          title="Genre"
          detail={GenerateCheckBoxDetail(GenreChoice)}
          detailclname="primary"
          height="10em"
          width="100%"
          editfn={handleGenreCheckBox}
        ></PaperCard>
      </Grid>
      <Grid item sm={12} md={12}>
        <PaperCard
          title="Lock Story Line"
          detail={coverage.LockStoryLine}
          detailclname="primary"
          height="15em"
          width="100%"
          editfn={handleLockStoryLineTool}
          closeModal={handleClose}
        ></PaperCard>
      </Grid>
      <Grid item sm={12} md={8}>
        <PaperCard
          title="Lock Line"
          detail={coverage.LockLine}
          detailclname="primary"
          height="10em"
          width="100%"
          editfn={handleLockLine}
        ></PaperCard>
      </Grid>
      <Grid item sm={12} md={4}>
        <PaperCard
          title="Check Box"
          detail={GenerateCheckBoxDetail(CheckBoxChoice)}
          detailclname="primary"
          height="10em"
          width="100%"
          editfn={handleModalCheckBox}
        ></PaperCard>
      </Grid>
    </Grid>
  );
}
