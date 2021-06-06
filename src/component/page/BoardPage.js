import React from "react";
import PageHeader from "./PageHeader";
import pageDetail from "../../pageDetail";
import Board from "../Board";
import Link from "../CustomLink";
import Grid from "@material-ui/core/Grid";
import PaperCard from "../PaperCard";
import { useHistory } from "react-router-dom";
export default function CoveragePage(props) {
  let history = useHistory();
  const trialtoolsList = [
    "Premise",
    "Theme",
    "Lock Story Line",
    "Character's map",
    "Bowl",
  ];
  const trialtoolsPath = [
    "/PremiseTool",
    "/ThemeTool",
    "/LockStoryLineTool",
    "/CharacterMapTool",
    "/BowlTool",
  ];
  return (
    <PageHeader
      data={pageDetail.BoardPage}
      fn0={() => {
        alert("share");
      }}
      fn0txt="Share"
      showvdo={() => {
        alert("showvdo");
      }}
    >
      <Board>
        <Grid className="board" container spacing={3}>
          {/* 1 line = 12 sm split to 4 and 8 */}
          <Grid item sm={12} md={4}>
            {/* use PaperCard */}
            <PaperCard
              title="Title1"
              detailclname="primary"
              height="10em"
              width="100%"
              h1color="var(--primary)"
              editfn={() => {
                history.push("/CoveragePage");
              }}
            ></PaperCard>
          </Grid>
          <Grid item sm={12} md={4}>
            <PaperCard
              title="Title2"
              detailclname="primary"
              height="10em"
              width="100%"
              h1color="var(--primary)"
            ></PaperCard>
          </Grid>
          <Grid item sm={12} md={4}>
            <PaperCard
              title="Title3"
              detail="Comedy"
              height="10em"
              width="100%"
              h1color="var(--primary)"
            ></PaperCard>
          </Grid>
          {/* empty row */}
          <Grid item xs={12} sm={12} style={{ height: "10em" }}></Grid>
          {/* Tools Trial */}
          <Grid item xs={6} sm={12}>
            <PageHeader data={pageDetail.ToolsTrial}> </PageHeader>
          </Grid>

          {/* use PaperCard */}
          {trialtoolsList.map((c, i) => (
            <Grid item sm={12} md={4}>
              <Link to={trialtoolsPath[i]} style={{ textDecoration: "none" }}>
                <PaperCard title={c} height="10em" width="100%"></PaperCard>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Board>
    </PageHeader>
  );
}
