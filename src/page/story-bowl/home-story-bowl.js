import React,{Component} from 'react';
import { Route,Link,withRouter } from 'react-router-dom'
import '../../stylesheet.css'
import HeaderPage from '../component/header_page'

import bow from '../../194838690_203906581589399_7624581275585944002_n.png'

class HomeStoryBowL extends Component {
  state = {};
  render() {
    return (
      <React.Fragment> 
        <HeaderPage/>
        <div className="content mx-auto mt-5 ">
            <div className="d-flex">
              <span className="mr-auto d-flex">
                  {/* <div className="circle-progress mr-3 text-center pt-2 position-relative "></div> */}
                  <div class="row d-flex justify-content-center align-items-center ">
                      <h3 className="font-weight-bold font-30">
                          Story Bowl
                      </h3>
                  </div>
              </span>
              <div>
                  {/* <button className="text-white btn share-top mr-2 font-weight-bold " style={{"minWidth":"150px"}} >share</button> */}                 
                  <button className="text-white btn share-top mr-2 font-weight-bold " style={{"minWidth":"150px"}} >share</button>
                  <button className="text-white btn share-top-right font-weight-bold  mr-2 " style={{"minWidth":"200px"}}>
                  <i class="fab fa-dropbox  mr-2"></i>
                      รับชมวิดีโอสอน
                  </button>
              </div>
            </div>

            <p className="my-4 font-weight-bold">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Molestias, cupiditate quas distinctio eveniet error amet repellendus,
                expedita illum cumque rerum sint soluta, temporibus voluptatibus? 
                Harum ullam ea ad ipsum eligendi!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Molestias, cupiditate quas distinctio eveniet error amet repellendus,
                expedita illum cumque rerum sint soluta, temporibus voluptatibus? 
                Harum ullam ea ad ipsum eligendi!
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>


                    <div className="col-md-12 position-relative mb-3">
                        <div  style={{top:"-40px!important",zIndex:200 }} 
                         className=" t-0 top_menu position-absolute  bg-blue text-white tl-radius  p-2 pl-4  font-weight-bold mh-25  ">
                          View Detail
                        </div>
                        <div class=" card  mt-4 "  style={{borderRadius:"10px", zIndex:1 }}>
                            <div class="card-body pt-60 ">
                                <div className=" d-flex justify-content-between align-itmes-center">
                                    
                                    <div className="d-inline d-flex align-items-center " >
                                        <div className="valid_story_bow d-flex align-items-center justify-content-center mr-3 ">
                                            <i class="fas fa-check text-white " style={{fontSize:"10px"}} ></i>
                                        </div>
                                        <span className="font-weight-bold">
                                            Title Bowl
                                        </span>
                                    </div>


                                    <div className="d-inline d-flex align-items-center">
                                        <div className="valid_story_bow d-flex align-items-center justify-content-center mr-3 ">
                                            <i class="fas fa-check text-white " style={{fontSize:"10px"}} ></i>
                                        </div>
                                        <span className="font-weight-bold">
                                            Title Bowl
                                        </span>
                                    </div>


                                    <div className="d-inline d-flex align-items-center">
                                        <div className="valid_story_bow d-flex align-items-center justify-content-center mr-3 ">
                                            <i class="fas fa-check text-white " style={{fontSize:"10px"}} ></i>
                                        </div>
                                        <span className="font-weight-bold">
                                            Title Bowl
                                        </span>
                                    </div>
                                    
                                    <div className="d-flex align-items-center">
                                        <button className="btn mw-150 text-white share-top-right font-weight-bold mr-2 ">รับชมวีดีโอสอน</button>
                                        <button className="btn mw-150 text-white bg-bow font-weight-bold">รับชมวีดีโอสอน</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                      </div>
                <div className="text-center mb-4 position-relative">
                    <div className="">
                        <div className="position-absolute font-30 txt-color-bow bow1">1</div>
                        <div className="position-absolute font-30 txt-color-bow bow2">2</div>
                        <div className="position-absolute font-30 txt-color-bow bow3">3</div>
                        <div className="position-absolute font-30 txt-color-bow bow4">4</div>
                        <div className="position-absolute font-30 txt-color-bow bow5">5</div>
                        <div className="position-absolute font-30 txt-color-bow bow6">6</div>
                        <div className="position-absolute font-30 txt-color-bow bow7">7</div>
                        <div className="position-absolute font-30 txt-color-bow bow8">8</div>
                        <div className="position-absolute font-30 txt-color-bow bow9">9</div>
                    </div>
                    <img src={bow} alt="" />
                </div>

                <div className="d-flex justify-content-between mb-5">
                    <button className="btn bg-blue text-white font-weight-bold mw-150  bg-blue ">บันทึก</button>
                    <div className="d-inline">
                        <button className="btn bg-blue text-white font-weight-bold mw-150 bg-blue  mr-2 ">ย้อนกลับ</button>
                        <button className="btn share-top text-white font-weight-bold mw-150">ยืนยันรายการ</button>
                    </div>
                </div>


                

        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(HomeStoryBowL)