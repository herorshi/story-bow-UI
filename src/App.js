import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageHeader from "./component/page/PageHeader";
import pageDetail from "./pageDetail";
import Board from "./component/Board";
import CoverageBoard from "./component/CoverageBoard";
import { Container, Button } from "@material-ui/core";
function App() {
  return (
    <Router>
      <div className="Cardheader"> </div>
      <div className="container" style={{ height: "45em" }}>
        <Switch>
          {/* CoveragePage */}
          <Route exact path="/">
            <PageHeader data={pageDetail.Coverage}>
              <Board>
                <CoverageBoard />
              </Board>
            </PageHeader>
          </Route>
          {/* PremiseToolPage */}
          <Route exact path="/PremiseTool">
            <PageHeader data={pageDetail.PremiseTool}></PageHeader>
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
          </Route>
          <Route exact path="/PremiseTool/IdeaPremise">
            <PageHeader data={pageDetail.IdeaPremise}>
              <Board></Board>
            </PageHeader>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
