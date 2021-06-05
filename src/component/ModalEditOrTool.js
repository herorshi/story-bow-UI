import react, { useState } from "react";
import StyledButton from "./StyledButton";
import { Container } from "@material-ui/core";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import CssTextField from "./CssTextField";
import Button from "@material-ui/core/Button";
import PageHeader from "./page/PageHeader";
import { FaTwitter } from "react-icons/fa";
import { ReactComponent as TickLogo } from "../asset/checked-buttom.svg";
import CustomLink from "./CustomLink";
import FooterButtonForModal from "./FooterButtonForModal";
export default function ModalEditOrTool({
  InputTitle,
  setTxt,
  edittxt,
  handleClose,
  handleChange,
  toolName,
  editfn,
}) {
  const [useTool, setUseTool] = useState(false);
  return (
    <PageHeader data={{ ...InputTitle, title: InputTitle.title + "*" }}>
      <p className="marg1 pageHeader">
        <Button
          variant="outlined"
          style={{ width: "49%", textTransform: "none" }}
          color={useTool ? "" : "primary"}
          onClick={() => setUseTool(false)}
        >
          Text Field
        </Button>

        <Button
          variant="outlined"
          style={{ width: "49%", textTransform: "none" }}
          color={useTool ? "primary" : ""}
          onClick={() => setUseTool(true)}
        >
          {toolName}
        </Button>
      </p>

      {useTool && (
        <>
          <div className="pageHeader">
            <h1>
              {" "}
              <TickLogo
                color="red"
                stroke="var(--primary)"
                fill="blue"
                width="1em"
              />
              {"      "}
              {toolName}
            </h1>
            <h1>
              <Button
                onClick={() => {
                  editfn();
                }}
              >
                <FaTwitter />
              </Button>
            </h1>
          </div>
          <CustomLink to="/PremiseTool">
            <div
              className="centerverhor"
              style={{
                backgroundColor: "#f5f5f5",
                border: `2px solid var(--primary)`,
                borderRadius: "0.5em",
                color: "#A0A0A0",
                height: "7em",
                fontSize: "2em",
                marginTop: "1em",
              }}
            >
              + <br />
              กดเพื่อสร้าง {toolName}
            </div>
          </CustomLink>
          <h1>
            <TickLogo
              color="red"
              stroke="var(--primary)"
              fill="blue"
              width="1em"
            />
            {"      "}
            Rewrite
            {"      "}
            {InputTitle.title}
          </h1>
        </>
      )}

      <CssTextField edittxt={edittxt} handleChange={handleChange} />
      <FooterButtonForModal
        handleClose={handleClose}
        edittxt={edittxt}
        setTxt={setTxt}
      ></FooterButtonForModal>
    </PageHeader>
  );
}
