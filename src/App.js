import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PageHeader from "./component/page/PageHeader";
import pageDetail from "./pageDetail";
import Board from "./component/Board";
import CoveragePage from "./component/page/CoveragePage";
import PremiseToolPage from "./component/page/PremiseToolPage";
import IdeaPremisePage from "./component/page/IdeaPremisePage";
import { Container, Button } from "@material-ui/core";
function App() {
  return (
    <Router>
      <div className="Cardheader"> </div>
      <div className="container" style={{ height: "45em" }}>
        <Switch>
          {/* CoveragePage */}
          <Route exact path="/">
            <CoveragePage />
          </Route>
          {/* PremiseToolPage */}
          <Route exact path="/PremiseTool">
            <PremiseToolPage />
          </Route>
          {/* IdeaPremise Page */}
          <Route exact path="/PremiseTool/IdeaPremise">
            <IdeaPremisePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
