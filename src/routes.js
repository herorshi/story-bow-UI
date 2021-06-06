import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './page/home'
import BoardHome from './page/board/board_home'
import Coverage from './page/Coverage/home_coverage'
import HomePlot from './page/plot/home_plot'
import PlotSuccess from './page/plot/plot_success'
import HomePremise from './page/premise/home_premise'
import HomeTheme from './page/theme/home_theme'
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
                <Route  path={"/plot_success"}>
                    <PlotSuccess/>
                </Route>   
                <Route  path={"/premise"}>
                    <HomePremise/>
                </Route>   
                <Route  path={"/theme"}>
                    <HomeTheme/>
                </Route>                
            </Switch>
        </Router>
    )
}
export default Routes