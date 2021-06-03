import React from "react";
import { Container, Button } from "@material-ui/core";
import "./CoveragePage.css";
export default function CoveragePage(props) {
  return (
    <Container className="page">
      <div className="pageHeader">
        <h1>{props.data.title}</h1>
        <h1>
          <Button variant="contained" color="secondary">
            รับชมวีดีโอสอน
          </Button>
        </h1>
      </div>
      <p className="subtxt">{props.data.detail}</p>
      {props.children}
    </Container>
  );
}
