import React from "react";
import PageHeader from "./PageHeader";
import pageDetail from "../../pageDetail";
import Board from "../Board";

import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import PaperCard from "../PaperCard";
import ModalPaper from "../ModalPaper";
import ModalToPage from "../ModalToPage";
export default function CoveragePage(props) {
  return (
    <PageHeader
      data={pageDetail.BoardPage}
      fn0={() => {
        alert("share");
      }}
      fn0txt="Share"
    >
      <Board>
        <Grid className="board" container spacing={3}>
          {/* 1 line = 12 sm split to 4 and 8 */}
          <Grid item xs={12} sm={4}>
            {/* use PaperCard */}
            <PaperCard
              title="Title1"
              detailclname="primary"
              height="10em"
              width="100%"
              h1color="var(--primary)"
            ></PaperCard>
          </Grid>
          <Grid item xs={6} sm={4}>
            <PaperCard
              title="Title2"
              detailclname="primary"
              height="10em"
              width="100%"
              h1color="var(--primary)"
            ></PaperCard>
          </Grid>
          <Grid item xs={6} sm={4}>
            <PaperCard
              title="Title3"
              detail="Comedy"
              height="10em"
              width="100%"
              h1color="var(--primary)"
              
            ></PaperCard>
          </Grid>
        </Grid>
      </Board>
    </PageHeader>
  );
}
