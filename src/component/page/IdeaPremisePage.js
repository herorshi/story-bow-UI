import React from "react";
import PageHeader from "./PageHeader";
import pageDetail from "../../pageDetail";
import Board from "../Board";
import { Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function IdeaPremisePage(props) {
  return (
    <>
      <PageHeader
        data={pageDetail.IdeaPremise}
        fn2={() => {
          alert("click");
        }}
        fn2txt=""
        fn3
        fn3txt
        showvdo={() => {
          alert("showvdo");
        }}
      >
        <Board></Board>
      </PageHeader>
    </>
  );
}
