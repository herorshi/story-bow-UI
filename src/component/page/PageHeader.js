import React from "react";
import { Container } from "@material-ui/core";

import StyledButton from "../StyledButton";

export default function PageHeader(props) {
  return (
    <Container className="page">
      <div className="pageHeader">
        <h1>{props.data.title}</h1>
        <h1>
          {props.fn0 && (
            <StyledButton
              variant="contained"
              style={{ background: "#808080" }}
              onClick={() => {
                props.fn0();
              }}
            >
              {props.fn0txt}
            </StyledButton>
          )}
          {props.showvdo && (
            <StyledButton
              variant="contained"
              color="secondary"
              onClick={() => {
                props.showvdo();
              }}
            >
              รับชมวีดีโอสอน
            </StyledButton>
          )}
          {props.fn2 && (
            <StyledButton
              variant="contained"
              style={{ background: "#FFA500" }}
              onClick={() => {
                props.fn2();
              }}
            >
              {props.fn2txt}
            </StyledButton>
          )}
          {props.fn3 && (
            <StyledButton
              variant="contained"
              color="primary"
              onClick={() => {
                props.fn3();
              }}
            >
              {props.fn3txt}
            </StyledButton>
          )}
        </h1>
      </div>
      <p className="subtxt padL1">{props.data.detail}</p>
      {props.children}
    </Container>
  );
}
