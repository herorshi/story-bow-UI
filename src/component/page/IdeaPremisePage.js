import React from "react";
import PageHeader from "./PageHeader";
import pageDetail from "../../pageDetail";
import Board from "../Board";
import { ReactComponent as TickLogo } from "../../asset/checked-buttom.svg";
import SmallPaperCard from "../SmallPaperCard";
import FooterButtonForModal from "../FooterButtonForModal";
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
        <Board>
          <div className="row" style={{ margin: "1em" }}>
            <div className="col-1 centerverhor nopaddRight">
              <TickLogo width="5em"></TickLogo>
            </div>
            <div className="col-3 nopaddRight">
              <SmallPaperCard
                width="100%"
                title="จะเกิดอะไรขึ้น... ถ้า"
                detail=""
                editfn={() => {
                  alert("test");
                }}
              ></SmallPaperCard>
            </div>
            <div className="col-3 nopaddRight">
              <SmallPaperCard
                width="100%"
                title=""
                detail=""
                editfn={() => {
                  alert("test");
                }}
              ></SmallPaperCard>
            </div>
            <div className="col-5 nopaddRight">
              <SmallPaperCard
                width="100%"
                title=""
                detail=""
                editfn={() => {
                  alert("test");
                }}
              ></SmallPaperCard>
            </div>
          </div>
          <div
            className="row"
            style={{
              margin: "1em",
              borderTop: "3px solid #bbb",
              paddingTop: "1em",
            }}
          >
            <div className="col-1 centerverhor nopaddRight">
              <TickLogo width="5em"></TickLogo>
            </div>
            <div className="col-3 nopaddRight">
              <SmallPaperCard
                width="100%"
                title="จะเกิดอะไรขึ้น... ถ้า"
                detail=""
                editfn={() => {
                  alert("test");
                }}
              ></SmallPaperCard>
            </div>
            <div className="col-3 nopaddRight">
              <SmallPaperCard
                width="100%"
                title=""
                detail=""
                editfn={() => {
                  alert("test");
                }}
              ></SmallPaperCard>
            </div>
            <div className="col-5 nopaddRight">
              <SmallPaperCard
                width="100%"
                title=""
                detail=""
                editfn={() => {
                  alert("test");
                }}
              ></SmallPaperCard>
            </div>
          </div>
          <div
            className="row"
            style={{
              margin: "1em",
              borderTop: "3px solid #bbb",
              paddingTop: "1em",
            }}
          >
            <div className="col-1 centerverhor nopaddRight">
              <TickLogo width="5em"></TickLogo>
            </div>
            <div className="col-3 nopaddRight">
              <SmallPaperCard
                width="100%"
                title="จะเกิดอะไรขึ้น... ถ้า"
                detail=""
                editfn={() => {
                  alert("test");
                }}
              ></SmallPaperCard>
            </div>
            <div className="col-3 nopaddRight">
              <SmallPaperCard
                width="100%"
                title=""
                detail=""
                editfn={() => {
                  alert("test");
                }}
              ></SmallPaperCard>
            </div>
            <div className="col-5 nopaddRight">
              <SmallPaperCard
                width="100%"
                title=""
                detail=""
                editfn={() => {
                  alert("test");
                }}
              ></SmallPaperCard>
            </div>
          </div>
        </Board>

        <h1 style={{ margin: "1em 0 1em 0" }}>Final Premise</h1>
        <div style={{ backgroundColor: "#E1EFFA", padding: "1em" }}>
          <div
            style={{
              margin: "1em",
              backgroundColor: "#f5f5f5",
              padding: "1em",
            }}
          >
            <h2>Final Premise</h2>
            <p className="subtxt primary"> abcdefghijklmnop</p>
          </div>
        </div>
        <FooterButtonForModal></FooterButtonForModal>
      </PageHeader>
    </>
  );
}
