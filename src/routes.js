import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './page/home'
import BoardHome from './page/board/board_home'
import Coverage from './page/Coverage/home_coverage'
import HomePlot from './page/plot/home_plot'
function Routes() {
    return (
        <Router>
            <Switch>
                <Route  path={"/board"}>
                    <BoardHome/>
                </Route>
                <Route  path={"/coverage"}>
                    <Coverage/>
                </Route>
                <Route  path={"/plot"}>
                    <HomePlot/>
                </Route>
            </Switch>
        </Router>
    )
}
export default Routes