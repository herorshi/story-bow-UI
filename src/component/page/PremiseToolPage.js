import React from "react";
import PageHeader from "./PageHeader";
import pageDetail from "../../pageDetail";
import Board from "../Board";
import { Container, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
export default function CoveragePage(props) {
  return (
    <>
      <PageHeader
        data={pageDetail.PremiseTool}
        showvdo={() => {
          alert("showvdo");
        }}
      ></PageHeader>
      <Board></Board>
      <Container
        className="flexend"
        style={{ display: "flex", marginTop: "1em" }}
      >
        <Link to="/">
          <Button
            variant="contained"
            color="gray"
            style={{ marginRight: "1em" }}
          >
            Back
          </Button>
        </Link>
        <Link to="/PremiseTool/IdeaPremise">
          <Button variant="contained" color="primary">
            Next
          </Button>
        </Link>
      </Container>
    </>
  );
}
