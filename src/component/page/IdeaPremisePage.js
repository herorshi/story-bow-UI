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
        showvdo={() => {
          alert("showvdo");
        }}
        fn2={() => {
          alert("+ เพิ่มรายการ");
        }}
        fn2txt="+ เพิ่มรายการ"
        fn3={() => {
          alert("แก้ไขรายการ");
        }}
        fn3txt="แก้ไขรายการ"
      >
        <Board></Board>
      </PageHeader>
    </>
  );
}
