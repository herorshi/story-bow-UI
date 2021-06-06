import React,{Component} from 'react';
import { Route,Link,withRouter } from 'react-router-dom'
import '../../stylesheet.css'
class HomePremise extends Component {
  state = {};
  render() {
    return (
      <React.Fragment> 
        <div id="header_blue"></div>

        <div className="content mx-auto ">
            <div className="d-flex my-4  justify-content-between">
                <div className=" d-inline font-30 font-weight-bold mr-auto">
                    Idea Premise
                </div>
                <div className="d-inline">
                    <button className=" mr-2 btn mw-180 share-top-right text-white font-weight-bold">
                        รับชื่อวีดีโอสอน
                    </button>
                    <button className=" mr-2 btn mw-180 bg-blue text-white font-weight-bold">
                        + เพิ่มรายการ
                    </button>
                    <button className="  btn mw-180 bg-bow text-white font-weight-bold">
                        แก้ไขรายการ
                    </button>
                </div>
            </div>
            <div class="card bg-card-board  mb-4 ">
              <div class="card-body">
                <div className="row">
                    <div className="col-md-1 text-center d-flex justify-content-end align-items-center a-click ">
                        <div className="valid_premise d-flex align-items-center justify-content-center ">
                            <i class="fas fa-check text-white "></i>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card mh-120 shasow_card bd-8" >
                          <div class="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="font-20 font-weight-bold"> จะเกิดอะไรขึ้น ถ้า</div>
                                <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                            <div className=" mt-3 font-20 font-weight-bold color-header-board op-harf">
                                กรุณาระบุเนื้อหา
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card mh-120 shasow_card bd-8" >
                          <div class="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="font-20 font-weight-bold color_text_pm "> กรุณาระบุหัวข้อ</div>
                                <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                            <div className=" mt-3 font-20 font-weight-bold color-header-board op-harf">
                                กรุณาระบุเนื้อหา
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div class="card mh-120 shasow_card bd-8" >
                          <div class="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="font-20 font-weight-bold color_text_pm "> จะเกิดอะไรขึ้น ถ้า</div>
                                <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                            <div className=" mt-3 font-20 font-weight-bold color-header-board op-harf">
                                กรุณาระบุเนื้อหา
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 line_gray my-4 "></div>

                <div className="row">
                    <div className="col-md-1 text-center d-flex justify-content-end align-items-center a-click">
                        <div className="color_uncheck d-flex align-items-center justify-content-center">
                            <i class="fas fa-check text-white "></i>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card mh-120 shasow_card bd-8" >
                          <div class="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="font-20 font-weight-bold"> จะเกิดอะไรขึ้น ถ้า</div>
                                <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                            <div className=" mt-3 font-20 font-weight-bold color-header-board op-harf">
                                กรุณาระบุเนื้อหา
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card mh-120 shasow_card bd-8" >
                          <div class="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="font-20 font-weight-bold color_text_pm "> กรุณาระบุหัวข้อ</div>
                                <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                            <div className=" mt-3 font-20 font-weight-bold color-header-board op-harf">
                                กรุณาระบุเนื้อหา
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div class="card mh-120 shasow_card bd-8" >
                          <div class="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="font-20 font-weight-bold color_text_pm "> จะเกิดอะไรขึ้น ถ้า</div>
                                <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                            <div className=" mt-3 font-20 font-weight-bold color-header-board op-harf">
                                กรุณาระบุเนื้อหา
                            </div>
                          </div>
                        </div>
                    </div>
                </div>

                <div className="w-100 line_gray my-4 "></div>

                <div className="row">
                    <div className="col-md-1 text-center d-flex justify-content-end align-items-center a-click">
                        <div className="color_uncheck d-flex align-items-center justify-content-center">
                            <i class="fas fa-check text-white "></i>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card mh-120 shasow_card bd-8" >
                          <div class="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="font-20 font-weight-bold"> จะเกิดอะไรขึ้น ถ้า</div>
                                <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                            <div className=" mt-3 font-20 font-weight-bold color-header-board op-harf">
                                กรุณาระบุเนื้อหา
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card mh-120 shasow_card bd-8" >
                          <div class="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="font-20 font-weight-bold color_text_pm "> กรุณาระบุหัวข้อ</div>
                                <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                            <div className=" mt-3 font-20 font-weight-bold color-header-board op-harf">
                                กรุณาระบุเนื้อหา
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div class="card mh-120 shasow_card bd-8" >
                          <div class="card-body">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="font-20 font-weight-bold color_text_pm "> จะเกิดอะไรขึ้น ถ้า</div>
                                <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                            <div className=" mt-3 font-20 font-weight-bold color-header-board op-harf">
                                กรุณาระบุเนื้อหา
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="font-30 font-weight-bold mt-5 mb-2">Final Premise</div>
            <div className=" color-blue-light mb-3 p-3 ">
                <div class="card bg-card-board">
                  <div class="card-body">
                    <div className=" font-20 font-weight-bold mb-2">จะเกิดอะไรขึ้น... ถ้า</div>
                    <div className=" pl-5 font-20 font-weight-bold mb-2 color-header-board op-harf">จะเกิดอะไรขึ้น... ถ้า</div>
                  </div>
                </div>
            </div>
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
export default withRouter(HomePremise);