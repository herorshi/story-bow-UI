import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './page/home'
import BoardHome from './page/board/board_home'
import Coverage from './page/Coverage/home_coverage'
import HomePlot from './page/plot/home_plot'
import PlotSuccess from './page/plot/plot_success'
import HomePremise from './page/premise/home_premise'
import HomeTheme from './page/theme/home_theme'
import LockStoryLine from './page/lock_story_line/lock_story_line'
import Character from './page/character/home_character'
import CharacterProcess from './page/character/character_process'
import HomeStoryBowL from './page/story-bowl/home-story-bowl'
import IdeaPremise from './page/premise/idea_premise'
import DeletePremise from './page/premise/delete-premise'
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
                <Route  path={"/idea-premise"}>
                    <IdeaPremise/>
                </Route>   
                <Route  path={"/delete-premise"}>
                    <DeletePremise/>
                </Route>   
                <Route  path={"/theme"}>
                    <HomeTheme/>
                </Route>
                <Route  path={"/lock_story_line"}>
                    <LockStoryLine/>
                </Route>
                <Route  path={"/character"}>
                    <Character/>
                </Route>
                <Route  path={"/character_process"}>
                    <CharacterProcess/>
                </Route>
                <Route  path={"/story_bowl"}>
                    <HomeStoryBowL/>
                </Route>                
            </Switch>
        </Router>
    )
}
export default Routes