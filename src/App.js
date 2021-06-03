import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CoveragePage from "./component/page/CoveragePage";
import pageDetail from "./pageDetail";
import Board from "./component/Board";
import CoverageBoard from "./component/CoverageBoard";
import { Container, Button } from "@material-ui/core";
function App() {
  return (
    <Router>
      <div className="Cardheader"> </div>
      <div className="container">
        <Switch>
          {/* CoveragePage */}
          <Route exact path="/">
            <CoveragePage data={pageDetail.Coverage}>
              <Board>
                <CoverageBoard />
              </Board>
            </CoveragePage>
          </Route>
          {/* PremiseToolPage */}
          <Route exact path="/PremiseTool">
            <CoveragePage data={pageDetail.PremiseTool}></CoveragePage>
            <Board style={{ width: "100%" }}>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </Board>
            <Container className="flexend" style={{ display: "flex" }}>
              <Link to="/PremiseTool/IdeaPremise">
                <Button variant="contained" color="primary">
                  Next
                </Button>
              </Link>
            </Container>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
