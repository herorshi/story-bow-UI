import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import PaperCard from "./PaperCard";
import ModalPaper from "./ModalPaper";
import ModalToPage from "./ModalToPage";
import pageDetail from "../pageDetail";
import ModalEditTxt from "./ModalEditTxt";
import ModalCheckBox from "./ModalCheckBox";
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

  const GenerateCheckBoxDetail = (obj) => {
    let keys = Object.keys(obj);
    return keys.filter((c) => obj[c]).join();
  };

  const handlePremiseTool = () => {
    setModalChoice("Use Premise Tool");
    handleOpen();
  };
  const handleChange = (event) => {
    console.log(event.target.value);
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
    <Grid className="board" container spacing={3}>
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
        </ModalPaper>
      </Modal>
      {/* 1 line = 12 sm split to 4 and 8 */}
      <Grid item xs={12} sm={4}>
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
      <Grid item xs={12} sm={8}>
        {/* ต้องใส่ modal ให้ปุ่มใน PaperCard ยังไงดี ต้องส่ง chidren ไม่ได้ มี2ปุ่ม 2 modal*/}
        <PaperCard
          title="Premise"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, venenatis vitae nunc in"
          detailclname="primary"
          height="10em"
          width="100%"
          AdvanceFunction={handlePremiseTool}
          closeModal={handleClose}
        ></PaperCard>
      </Grid>
      <Grid item xs={6} sm={8}>
        <PaperCard
          title="Theme"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, venenatis vitae nunc in"
          detailclname="primary"
          height="10em"
          width="100%"
        ></PaperCard>
      </Grid>
      <Grid item xs={6} sm={4}>
        <PaperCard
          title="Genre"
          detail={GenerateCheckBoxDetail(GenreChoice)}
          detailclname="primary"
          height="10em"
          width="100%"
          editfn={handleGenreCheckBox}
        ></PaperCard>
      </Grid>
      <Grid item xs={6} sm={12}>
        <PaperCard
          title="Lock Story Line"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, venenatis vitae nunc in"
          detailclname="primary"
          height="15em"
          width="100%"
        ></PaperCard>
      </Grid>
      <Grid item xs={6} sm={8}>
        <PaperCard
          title="Lock Line"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, venenatis vitae nunc in"
          detailclname="primary"
          height="10em"
          width="100%"
        ></PaperCard>
      </Grid>
      <Grid item xs={6} sm={4}>
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
