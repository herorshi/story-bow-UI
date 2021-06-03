import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CoveragePage from "./component/page/CoveragePage";
import pageDetail from "./pageDetail";
import Board from "./component/Board";
import CoverageBoard from "./component/CoverageBoard";
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
          {/* Page */}
          <Route exact path="/Page">
            <CoveragePage data={pageDetail.Coverage}>
              <Board>
                <CoverageBoard />
              </Board>
            </CoveragePage>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
