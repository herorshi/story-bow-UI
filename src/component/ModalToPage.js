import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";


export default function ModalBody(props) {

  return (
    <>
                <h2 id="simple-modal-title">{props.title}</h2>
                <p id="simple-modal-description">
                  {props.description}
                </p>
                <div>
                <Button> confirm</Button>
                </div>
                
    </>
  );
}
