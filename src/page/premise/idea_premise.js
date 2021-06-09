import React,{Component} from 'react';
import rn from '../../module-function/module-default'
import CONS from '../../global-variable'
import   '../../stylesheet.css'
import Popup from '../component/popup'
import Header from '../component/header_page'
import { Route,Link,withRouter } from 'react-router-dom'
// import { HexGrid, Layout, Hexagon, Text, Pattern, Path, Hex } from 'react-hexgrid';
class IdeaPremise extends Component {
  state = {};
  
  render() {
    console.log(React.version);
    return (
      <React.Fragment> 
        <Header/>
        <div className="content mx-auto ">
            <div className="content mx-auto mt-5 ">
                <div className="d-flex">
                    <span className="mr-auto">
                        <h3 className="font-weight-bold">Idea Premise</h3>
                    </span>
                    
                    <div>
                        <button style={{"minWidth":"150px"}} className="text-white btn share-top mr-2">share</button>
                        <button style={{"minWidth":"200px"}} className="text-white btn share-top-right">รับชมวิดีโอสอน</button>
                    </div>
                </div>
                <div className=" my-4 font-weight-bold ">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                    quos alias qui magnam recusandae ducimus, soluta tempora aut neque sapiente. 
                    Maxime, natus. Tempore, dolore quas magnam commodi cupiditate expedita aliquid.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                    quos alias qui magnam recusandae ducimus, soluta tempora aut neque sapiente. 
                    Maxime, natus. Tempore, dolore quas magnam commodi cupiditate expedita aliquid.
                </div>

               
            </div>
        </div>
        <div className="bg-premise-txt  mh-200 "></div>
      </React.Fragment>
    );
  }
}
export default withRouter(IdeaPremise);