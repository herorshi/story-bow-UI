import React,{Component} from 'react';
import { Route,Link,withRouter } from 'react-router-dom'
import '../../stylesheet.css'
class LockStoryLine extends Component {
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
                        <h3 className="font-weight-bold font-30">
                            Lock Story Line Pipe Tools
                        </h3>
                    </div>
                </span>
                <div>
                    {/* <button className="text-white btn share-top mr-2 font-weight-bold " style={{"minWidth":"150px"}} >share</button> */}

                    <button className="share-top text-white btn  font-weight-bold mr-2 " style={{"minWidth":"140px"}}>
                        Share
                    </button>                   
                    <button className="text-white btn share-top-right font-weight-bold  mr-2 " style={{"minWidth":"200px"}}>
                        รับชมวิดีโอสอน
                    </button>
                    <button className="text-white btn color-bowl font-weight-bold bg-bow " style={{"minWidth":"200px"}}>
                        สุ่มรายการทั้งหมด
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

            <div class="card bg-card-board  border-0  mb-5 ">
              <div class="card-body">
                <div className="row">
                    <div className="col-md-1 d-flex justify-content-end align-items-center ">
                        <div className="circle_line"></div>
                    </div>
                    <div className="col-md-3">
                        <div className="card mh-120 border-0 bd-8" >
                            <div class="card-body">
                                <div className = "d-flex align-items-center justify-content-between">
                                    <div className="font-20 font-weight-bold"> สถานที่ </div>
                                    <div className="d-inline">
                                        <i  style={{"color":"#cbcbcb"}}  class="fab fa-dropbox  mr-2"></i>
                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card mh-120 border-0 bd-8" >
                            <div class="card-body">
                                <div className = "d-flex align-items-center justify-content-between">
                                    <div className="font-20 font-weight-bold"> ยุคสมัย </div>
                                    <div className="d-inline">
                                        <i  style={{"color":"#cbcbcb"}}  class="fab fa-dropbox  mr-2"></i>
                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div className="col-md-4">
                        <div className="card mh-120 border-0 bd-8" >
                            <div class="card-body">
                                <div className = "d-flex align-items-center justify-content-between">
                                    <div className="font-20 font-weight-bold"> เงื่อนไข </div>
                                    <div className="d-inline">
                                        <i  style={{"color":"#cbcbcb"}}  class="fab fa-dropbox  mr-2"></i>
                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>




                <div className="row mt-4 ">
                    <div className="col-md-1 d-flex justify-content-end align-items-center ">
                        <div className="circle_line"></div>
                    </div>
                    <div className="col-md-11">
                        <div className="  tab_story_map tab_story tl-radius  p-1 font-weight-bold pl-3  d-inline-block  ">
                            <div className="d-flex  pr-2 ">
                                <div className="span mr-auto">
                                    Character's Maps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </div>
                                <div className=" d-inline span ml-3 text-white  ">
                                    <i   class="fas fa-pen a-click"></i>
                                </div>
                            </div>
                        </div>
                        <div className="card mh-120 border-0 bd-8" >
                            <div class="card-body">
                                <div className = "d-flex align-items-center justify-content-between">
                                    <div className="font-20 font-weight-bold"> มี </div>
                                    <div className="d-inline">
                                        <i  style={{"color":"#cbcbcb"}}  class="fab fa-dropbox  mr-2"></i>
                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="row mt-4 ">
                    <div className="col-md-1 d-flex justify-content-end align-items-center ">
                        <div className="circle_line"></div>
                    </div>
                    <div className="col-md-11">
                        <div className="card mh-120 border-0 bd-8" >
                            <div class="card-body">
                                <div className = "d-flex align-items-center justify-content-between">
                                    <div className="font-20 font-weight-bold"> เขาต้อง </div>
                                    <div className="d-inline">
                                        <i  style={{"color":"#cbcbcb"}}  class="fab fa-dropbox  mr-2"></i>
                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 ">
                    <div className="col-md-1 d-flex justify-content-end align-items-center ">
                        <div className="circle_line"></div>
                    </div>
                    <div className="col-md-11">
                        <div className="card mh-120 border-0 bd-8" >
                            <div class="card-body">
                                <div className = "d-flex align-items-center justify-content-between">
                                    <div className="font-20 font-weight-bold"> แต่ </div>
                                    <div className="d-inline">
                                        <i  style={{"color":"#cbcbcb"}}  class="fab fa-dropbox  mr-2"></i>
                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mt-4 ">
                    <div className="col-md-1 d-flex justify-content-end align-items-center ">
                        <div className="circle_line"></div>
                    </div>
                    <div className="col-md-11">
                        <div className="card mh-120 border-0 bd-8" >
                            <div class="card-body">
                                <div className = "d-flex align-items-center justify-content-between">
                                    <div className="font-20 font-weight-bold"> สุดท้ายแล้ว </div>
                                    <div className="d-inline">
                                        <i  style={{"color":"#cbcbcb"}}  class="fab fa-dropbox  mr-2"></i>
                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 ">
                    <div className="col-md-1 d-flex justify-content-end align-items-center ">
                        <div className="circle_line"></div>
                    </div>
                    <div className="col-md-11">
                        <div className="card mh-120 border-0 bd-8  color-blue-light " >
                            <div class="card-body">
                                <div className = "d-flex align-items-center justify-content-between">
                                    <div className="font-20 font-weight-bold"> และเขาได้เรียนรู้ว่า (Final Theme) </div>
                                    <div className="d-inline">
                                        <i  style={{"color":"#cbcbcb"}}  class="fab fa-dropbox  mr-2"></i>
                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div  className = "  mt-3 font-20 font-weight-bold color-header-board pl-3 " >
                                        นักเรียนทุกคนทำตามคำสั่งสองของผู้ปกครอง แต่บางครั้งผู้ปกครองก็ดุด่า และทำร้ายร่างกายนักเรียน อีกทัังงานเยอะและเครียด
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




              </div>
            </div>
            <div className="d-flex mb-5 ">
                <button className="btn mw-150 mr-auto text-white bg-blue ">บันทึกข้อมูล</button>
                <div className="d-inline-block">
                    
                    <button className="btn mw-150  share-top text-white bg-blue mr-2 ">ยืนยันรายการ</button>
                    <button className="btn mw-150  text-white bg-blue  ">บันทึกข้อมูล</button>
                    
                </div>
            </div>
            
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(LockStoryLine)