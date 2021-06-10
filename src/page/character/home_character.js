import React,{Component} from 'react';
import { Route,Link,withRouter } from 'react-router-dom';
import '../../stylesheet.css'
import HeaderPage from '../component/header_page'

class Character extends Component {
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
                            Character's Map
                        </h3>
                    </div>
                </span>
                <div>
                    {/* <button className="text-white btn share-top mr-2 font-weight-bold " style={{"minWidth":"150px"}} >share</button> */}                 
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
            <div class="card card bg-card-board border-0 " style={{"minHeight":"600px"}}>
              <div class="card-body">
                <div className="row">
                    <div className="col-md-4 a-click">
                        <div class="card mh-180 border-0 bd-8" >
                            <div class="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                            <i class="fas fa-check text-white "></i>
                                        </div>
                                        <div className="font-20 font-weight-bold"> Name Character </div>
                                    </div>
                                    <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                            <i class="fas fa-check text-white "></i>
                                        </div>
                                        <div className="mt-3 font-18 font-weight-bold color-header-board op-harf ">  กรุณาระบุเนื้อหา...  </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4 a-click">
                        <div class="card mh-180 border-0 bd-8"   >
                            <div class="card-body">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                            <i class="fas fa-check text-white "></i>
                                        </div>
                                        <div className="font-20 font-weight-bold"> Name Character </div>
                                    </div>
                                    <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                            <i class="fas fa-check text-white "></i>
                                        </div>
                                        <div className="mt-3 font-18 font-weight-bold color-header-board op-harf ">  กรุณาระบุเนื้อหา...  </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        
                        <div class="card mh-180 border-0 bd-8" >
                            <Link to="/character_process">
                                <div class="card-body">
                                    <div className="text-center mt-2">
                                        <i class="fas fa-plus color-plus" style={{fontSize:"50px"}}></i>
                                    </div>
                                    <div className=" mt-3 text-center font-30 color-plus font-weight-bold ">
                                        สร้าง Character ใหม่
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="mt-4 mb-3 d-flex justify-content-end ">
                <Link to="/lock_story_line">
                    <button className=" mw-150  btn share-top font-weight-bold text-white mr-2 font-18">ย้อนกลับ</button>
                </Link>
                <button className=" mw-150 btn bg-blue font-weight-bold text-white mr-2 font-18">ยืนยันรายการ</button>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(Character)