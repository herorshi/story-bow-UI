import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import PageHeader from "./component/page/PageHeader";
import pageDetail from "./pageDetail";
import Board from "./component/Board";
import CoveragePage from "./component/page/CoveragePage";
import PremiseToolPage from "./component/page/PremiseToolPage";
import IdeaPremisePage from "./component/page/IdeaPremisePage";
import BoardPage from "./component/page/BoardPage";
import { Container, Button } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#2196f3",
    },
  },
});
function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div className="Cardheader"> </div>
        <div className="container" style={{ height: "45em" }}>
          <Switch>
            {/* BoardPage */}
            <Route exact path="/">
              <BoardPage />
            </Route>
            {/* CoveragePage */}
            <Route exact path="/CoveragePage">
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
      </ThemeProvider>
    </Router>
  );
}

export default App;
