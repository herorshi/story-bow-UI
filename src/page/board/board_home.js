import React,{Component} from 'react';
import { Route,Link,withRouter } from 'react-router-dom'
import rn from '../../module-function/module-default'
// import Popup from '../component/popup'
import './board.css'
class BoardHome extends Component {
  state = {
      txt:""
  };

  
  render() {
    return (
      <React.Fragment> 
        <div id="header_blue"></div>
        <div className="content mx-auto mt-5 ">
            <div className="d-flex">
            {/* <button onClick={()=>rn.show_popup()}  className="btn btn-primary">OK</button> */}
            {/* <button onClick={()=>rn.start_module()} className="btn btn-primary">TEST</button> */}

                <span className="mr-auto">
                    <h3 className="font-weight-bold">Board</h3>
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
            
            <div className="card bg-card-board mb-5 border-0 ">
              <div className="card-body ">                
                <div className="row mt-4">
                    <div className="col">
                        <div class="card card-project border-0 ">
                            <div class="card-body">
                                <div className="d-flex a-click ">
                                    <span className=" color-header-board font-weight-bold mr-auto font-20">
                                        โรงเรียนลูกผู้ชาย
                                    </span>
                                    <span>
                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="col">
                        <Link to="/Coverage" replace >
                          <div class="card card-project border-0">
                              <div class="card-body a-click">
                                  <p className=" text-center mt-2 color-gray">
                                      <i class="fas fa-plus font-40"></i>
                                  </p>
                                  <div className="font-weight-bold font-20  color-gray text-center">
                                      สร้าง Project ใหม่
                                  </div>
                              </div>
                          </div>
                        </Link>
                    </div>
                    <div className="col"></div>
                </div>

                <div className="mt-100"></div>

                    <p className="font-weight-bold font-30">
                        Toole Trial
                    </p>
                    <p className="font-weight-bold">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Asperiores sint hic provident nobis dignissimos ipsa dolore, pariatur, 
                        aliquam voluptate earum eaque officia error consequatur repudiandae quasi 
                        sapiente excepturi amet mollitia!
                        aliquam voluptate earum eaque officia error consequatur repudiandae quasi 
                        sapiente excepturi amet mollitia!
                        sapiente excepturi amet mollitia!
                    </p>
                    <div className="row form-group">
                        <div className="col-md-4 a-click ">
                            <div class="card card-project border-0">
                              <div class="card-body">
                                <p className="font-20 font-weight-bold">Primise</p>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-4 a-click ">
                            <div class="card card-project border-0">
                              <div class="card-body">
                                <p className="font-20 font-weight-bold">Theme</p>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-4 a-click ">
                            <div class="card card-project border-0">
                              <div class="card-body">
                                <p className="font-20 font-weight-bold">Lock Story Line</p>
                              </div>
                            </div>
                        </div>
                    </div>

                    <div className="row form-group">
                        <div className="col-md-4 a-click ">
                            <div class="card card-project border-0">
                              <div class="card-body">
                                <p className="font-20 font-weight-bold">Character's</p>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-4 a-click ">
                            <div class="card card-project border-0">
                              <div class="card-body">
                                <p className="font-20 font-weight-bold">Bowl</p>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-4 a-click ">
                        </div>
                    </div>
              </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default withRouter(BoardHome)