import React ,{useState} from 'react'
import {    BrowserRouter as Router, Switch, Route   } from "react-router-dom"
import { useHistory } from 'react-router-dom'
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
import Login from './page/login/login_home'
import RegisterHome from './page/register/register_home'
import rn from './module-function/module-default'
import CONS from './global-variable/'
function Routes() {
    const [status,setstatus] = useState(false);
    const [status_load,set_status_load] = useState(false);
    // console.log(useHistory(),'useHistory');
    // console.log(history,'history');
    // let history = useHistory();
    
    if(
        rn.get_last_parameter(true) != "register" &&
        rn.get_last_parameter(true) != ""
    )
    {
        rn.PostData(CONS.URL_OTHER+"/api/protected",{},"POST",200,"",false,true).then((value)=>{
            if(value.data.text == "Error") {
                window.location.href = CONS.URL_LINK+"/";
            }
            else {
                setstatus(true)
                set_status_load(true)
            }
        })
        .catch((err)=>{
            set_status_load(true)
            console.log(err.message);
            console.log('catch');
        })
    }
    else {
        if(rn.get_last_parameter(true) == ""){
            console.log('SUCCESS');
            if(status_load!= true) {
                set_status_load(true)
            }
        }
    }
    return (
        <Router>
            <Switch>
                <Route  path={"/register"}>
                    <RegisterHome/>
                </Route>
                {
                    status &&
                    <React.Fragment> 
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
                    </React.Fragment>
                }
                {
                    status_load &&
                    <Route  path={"/"}>
                        <Login/>
                    </Route>
                }


            </Switch>
        </Router>
    )
}
export default Routes