import React from "react";
import PageHeader from "./PageHeader";
import pageDetail from "../../pageDetail";
import Board from "../Board";
import { Container, Button } from "@material-ui/core";
import Link from "../CustomLink";
import StyledButton from "../StyledButton";
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
        style={{ display: "flex", marginTop: "1em", padding: "0" }}
      >
        <Link to="/">
          <StyledButton
            variant="contained"
            color="gray"
            style={{ marginRight: "1em" }}
          >
            Back
          </StyledButton>
        </Link>
        <Link to="/PremiseTool/IdeaPremise">
          <StyledButton variant="contained" color="primary">
            Next
          </StyledButton>
        </Link>
      </Container>
    </>
  );
}
