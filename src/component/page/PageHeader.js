import React from "react";
import { Container, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
const StyledButton = withStyles({
  root: {
    color: "white",
    marginLeft: "0.75em",
    textTransform: "none",
    padding: "6px 30px",
  },
})(Button);
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
          <StyledButton variant="contained" color="secondary">
            รับชมวีดีโอสอน
          </StyledButton>
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
      <p className="subtxt">{props.data.detail}</p>
      {props.children}
    </Container>
  );
}
