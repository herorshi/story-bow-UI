import React from "react";
import { Container, Button } from "@material-ui/core";
export default function PageHeader(props) {
  return (
    <Container className="page">
      <div className="pageHeader">
        <h1>{props.data.title}</h1>
        <h1>
          <Button variant="contained" color="secondary">
            รับชมวีดีโอสอน
          </Button>
          {props.fn2 && (
            <Button variant="contained" color="orange">
              {props.fn2txt}
            </Button>
          )}
          {props.fn3 && (
            <Button variant="contained" color="orange">
              {props.fn3txt}
            </Button>
          )}
        </h1>
      </div>
      <p className="subtxt">{props.data.detail}</p>
      {props.children}
    </Container>
  );
}
