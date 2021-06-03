import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import PaperCard from "./PaperCard";
import ModalPaper from "./ModalPaper";
import ModalToPage from "./ModalToPage";
export default function CoverageBoard(props) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid className="board" container spacing={3}>
      {/* 1 line = 12 sm split to 4 and 8 */}
      <Grid item xs={12} sm={4}>
        {/* use PaperCard */}
        <PaperCard
          title="Title"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, venenatis vitae nunc in"
          detailclname="primary"
          height="10em"
        ></PaperCard>
      </Grid>
      <Grid item xs={12} sm={8}>
        {/* ต้องใส่ modal ให้ปุ่มใน PaperCard ยังไงดี ต้องส่ง chidren ไม่ได้ มี2ปุ่ม 2 modal*/}
        <PaperCard
          title="Premise"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, venenatis vitae nunc in"
          detailclname="primary"
          height="10em"
          AdvanceFunction={handleOpen}
          closeModal={handleClose}
        ></PaperCard>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {
            <ModalPaper>
              <ModalToPage
                title="Use Premise Tool"
                description="ต้องการที่จะใช้ Premise Tool หรือไม่"
              ></ModalToPage>
            </ModalPaper>
          }
        </Modal>
      </Grid>
      <Grid item xs={6} sm={8}>
        <PaperCard
          title="Theme"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, venenatis vitae nunc in"
          detailclname="primary"
          height="10em"
        ></PaperCard>
      </Grid>
      <Grid item xs={6} sm={4}>
        <PaperCard
          title="Genre"
          detail="Comedy"
          detailclname="primary"
          height="10em"
        ></PaperCard>
      </Grid>
      <Grid item xs={6} sm={12}>
        <PaperCard
          title="Lock Story Line"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, venenatis vitae nunc in"
          detailclname="primary"
          height="15em"
        ></PaperCard>
      </Grid>
      <Grid item xs={6} sm={8}>
        <PaperCard
          title="Lock Line"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, venenatis vitae nunc in"
          detailclname="primary"
          height="10em"
        ></PaperCard>
      </Grid>
      <Grid item xs={6} sm={4}>
        <PaperCard
          title="Check Box"
          detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed metus ante, venenatis vitae nunc in"
          detailclname="primary"
          height="10em"
        ></PaperCard>
      </Grid>
    </Grid>
  );
}
