import React,{Component} from 'react';
import { Route,Link,withRouter } from 'react-router-dom'
import '../../stylesheet.css'
import { CircularProgressbar } from 'react-circular-progressbar';
class HomeTheme extends Component {
  state = {};
  render() {
    return (
      <React.Fragment> 
        <div id="header_blue"></div>
        <div className="content mx-auto mt-5 ">
            <div className="d-flex">
                <span className="mr-auto d-flex">
                    {/* <div className="circle-progress mr-3 text-center pt-2 position-relative "></div> */}
                    <div class="row d-flex justify-content-center align-items-center ">
                        <h3 className="font-weight-bold font-30">Theme</h3>
                    </div>
                </span>
                <div>
                    {/* <button className="text-white btn share-top mr-2 font-weight-bold " style={{"minWidth":"150px"}} >share</button> */}
                    <button className="text-white btn share-top-right font-weight-bold " style={{"minWidth":"200px"}}>
                    {/* <i class="fab fa-dropbox  mr-2"></i> */}
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
                <div class="card bg-card-board border-0  mb-5 ">
                  <div class="card-body px-0">
                  <div class="px-3">
                    <div className="row">
                        <div className="col-md-4 ">
                            <div class="card border-0 ">
                              <div class="card-body p-2">
                              <p className="  font-20 text-center mb-0 font-weight-bold color_text_theme">
                                + เพิ่ม position POV
                                </p>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div class="card border-0 ">
                              <div class="card-body p-2">
                              <p className="  font-20 text-center mb-0 font-weight-bold color_text_theme">
                                + เพิ่ม position POV
                                </p>
                              </div>
                            </div>
                        </div>
                        <div className="col-md-4 ">
                            <div class="card border-0 ">
                              <div class="card-body p-2">
                              <p className="  font-20 text-center mb-0 font-weight-bold color_text_theme">
                                + เพิ่ม position POV
                                </p>
                              </div>
                            </div>
                        </div>
                    </div>
                  </div>

                    <div className="w-100 box-positive my-3 border-0 pl-3  ">
                        <div className="row">
                            <div className="col-md-4 ">
                                <div class="card mh-120 border-0 bd-8" >
                                    <div class="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="font-20 font-weight-bold"> Positive Pov</div>
                                            </div>
                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="mt-3 font-20 font-weight-bold text_pov_plus">  กรุณาระบุข้อความ...</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 ">
                                <div class="card mh-120 border-0  bd-8" >
                                    <div class="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="font-20 font-weight-bold"> Positive Pov</div>
                                            </div>
                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="mt-3 font-20 font-weight-bold text_pov_plus"> กรุณาระบุข้อความ...</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 ">
                                <div class="card mh-120 border-0  bd-8" >
                                    <div class="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="font-20 font-weight-bold"> Positive Pov</div>
                                            </div>
                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="mt-3 font-20 font-weight-bold text_pov_plus">  กรุณาระบุข้อความ</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4  mt-3 ">
                                <div class="card mh-120 border-0  bd-8" >
                                    <div class="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="font-20 font-weight-bold"> Positive Pov</div>
                                            </div>
                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="mt-3 font-20 font-weight-bold text_pov_plus">  กรุณาระบุข้อความ</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 mt-3">
                                <div class="card mh-120 border-0 bd-8" >
                                    <div class="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="font-20 font-weight-bold"> Positive Pov</div>
                                            </div>
                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="mt-3 font-20 font-weight-bold text_pov_plus">  กรุณาระบุข้อความ</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4  mt-3">
                                <div class="card mh-120 border-0  bd-8" >
                                    <div class="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="font-20 font-weight-bold"> Positive Pov</div>
                                            </div>
                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="mt-3 font-20 font-weight-bold text_pov_plus">  กรุณาระบุข้อความ</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>







                    <div className="  my-box my-3 border-0   ">
                        <div className=" d-flex   flex-wrap ">
                            <div className="col-md-4 my-3 ">
                                <div class="card mh-120 border-0 bd-8" >
                                    <div class="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="font-20 font-weight-bold"> Element </div>
                                            </div>
                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="mt-3 font-20 font-weight-bold color-header-board">  นักเรียน</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 my-3 ">
                                <div class="card mh-120 border-0  bd-8" >
                                    <div class="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="font-20 font-weight-bold"> Element </div>
                                            </div>
                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="mt-3 font-20 font-weight-bold color-header-board"> มีความรัก </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 my-3 ">
                                <div class="card mh-120 border-0  bd-8" >
                                    <div class="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="font-20 font-weight-bold"> Element </div>
                                            </div>
                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="mt-3 font-20 font-weight-bold color-header-board">  คุณครู </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className=" d-flex   flex-wrap ">
                            <div className="col-md-4 my-3 ">
                                <div class="card mh-120 border-0 bd-8" >
                                    <div class="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="font-20 font-weight-bold"> Element </div>
                                            </div>
                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="mt-3 font-20 font-weight-bold color-header-board">  นักเรียน</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 my-3 ">
                                <div class="card mh-120 border-0  bd-8" >
                                    <div class="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="font-20 font-weight-bold"> Element </div>
                                            </div>
                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="mt-3 font-20 font-weight-bold color-header-board"> มีความรัก </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 my-3 ">
                                <div class="card mh-120 border-0  bd-8" >
                                    <div class="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="font-20 font-weight-bold"> Element </div>
                                            </div>
                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="mt-3 font-20 font-weight-bold color-header-board">  คุณครู </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4 my-3 ">
                                <div class="card mh-120 border-0  bd-8" >
                                    <div class="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="font-20 font-weight-bold"> Element </div>
                                            </div>
                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="mt-3 font-20 font-weight-bold color-header-board">  คุณครู </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-4 my-3 ">
                                <div class="card mh-120 border-0  bd-8" >
                                    <div class="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="font-20 font-weight-bold"> Element </div>
                                            </div>
                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="mt-3 font-20 font-weight-bold color-header-board">  คุณครู </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-4 my-3 ">
                                <div class="card mh-120 border-0  bd-8" >
                                    <div class="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="font-20 font-weight-bold"> Element </div>
                                            </div>
                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="mt-3 font-20 font-weight-bold color-header-board">  คุณครู </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="w-100">
                                <div class="px-3">
                                    <div className="row">
                                        <div className="col-md-4 ">
                                            <div class="card border-0 ">
                                            <div class="card-body p-2">
                                            <p className="  font-20 text-center mb-0 font-weight-bold color_text_theme">
                                                + เพิ่ม Negative POV
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 ">
                                            <div class="card border-0 ">
                                            <div class="card-body p-2">
                                            <p className="  font-20 text-center mb-0 font-weight-bold color_text_theme">
                                                + เพิ่ม Negative POV
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 ">
                                            <div class="card border-0 ">
                                            <div class="card-body p-2">
                                            <p className="  font-20 text-center mb-0 font-weight-bold color_text_theme">
                                                + เพิ่ม Negative POV
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
                </div>
                
            <div className="font-30 font-weight-bold mt-5 mb-2">Final Theme</div>
            <div className=" color-blue-light mb-3 p-3 ">
                <div class="card bg-card-board border-0" style={{borderRadius:"10px"}}>
                  <div class="card-body">
                    <div className=" font-20 font-weight-bold mb-2">Generate Theme</div>
                    <div className=" pl-5 font-20 font-weight-bold mb-2 color_define_theme ">กรุณาระบุข้อมูล Theme...</div>
                  </div>
                </div>

                <div class=" mt-4 card  border-0" style={{borderRadius:"10px"}}>
                  <div class="card-body">
                    <div className=" font-20 font-weight-bold mb-2">Final Theme</div>
                    <div className=" pl-5 font-20 font-weight-bold mb-2 color-header-board op-harf ">กรุณาระบุข้อมูล Theme...</div>
                  </div>
                </div>
            </div>
            {/* color-header-board op-harf */}
            <div className="text-right mb-5">
                <button className="btn text-white share-top mw-150 font-weight-bold  mr-2 ">
                    ย้อนกลับ
                </button>
                <button className="btn text-white   bg-blue mw-150 font-weight-bold">
                    ยืนยันรายการ
                </button>
            </div>



        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(HomeTheme)