import React from "react";
import PageHeader from "./PageHeader";
import pageDetail from "../../pageDetail";
import Board from "../Board";
import CoverageBoard from "../CoverageBoard";
export default function CoveragePage(props) {
  return (
    <PageHeader data={pageDetail.Coverage}>
      <Board>
        <CoverageBoard />
      </Board>
    </PageHeader>
  );
}
