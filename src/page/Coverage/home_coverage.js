import React,{Component} from 'react';
import { Route,Link,withRouter } from 'react-router-dom'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './coverage.css'
import '../../stylesheet.css'
class Coverage extends Component {
  state = {
      value :0.5,
      txt:"     "
};
//   const value = 0.66;
  render() {
    return (
      <React.Fragment> 
        <div id="header_blue"></div>
        <div className="content mx-auto mt-5 ">
            <div className="d-flex">
                <span className="mr-auto d-flex">
                    {/* <div className="circle-progress mr-3 text-center pt-2 position-relative "></div> */}
                    <div class="row d-flex justify-content-center align-items-center ">
                    <div  className=" position-relative mr-2" style={{ width: 50, height: 50, fontSize: "20px;" }}> 
                        <h5 className="font-weight-bold position-absolute text-circle">1/2</h5>
                        <CircularProgressbar 
                        styles={{
                            text: {
                              fill: '#4b9cdc',
                              fontSize: '20px',
                            },
                        }}                        
                        value={this.state.value} maxValue={1}  />
                    </div>
                        <h3 className="font-weight-bold">Coverage</h3>
                    </div>
                   
                </span>
                <div>
                    <button className="text-white btn share-top mr-2" style={{"minWidth":"150px"}} >share</button>
                    <button className="text-white btn share-top-right" style={{"minWidth":"200px"}}>รับชมวิดีโอสอน</button>
                </div>
            </div>
            <p className="mt-4 font-weight-bold">
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
            

            <div class="card bg-card-board mb-4 border-0 ">
              <div class="card-body pl-5  ">
                        <div className="d-flex align-items-center">
                            <span className="font-weight-bold font-18">
                                คำแนะนำการกรอกข้อมูล Coverage : &nbsp;&nbsp; 
                            </span>
                            <span className="font-weight-bold font-18 a-click color-header-board mr-1">
                                Promise*
                            </span>
                            
                            <span className="font-weight-bold font-20 mr-1"> > </span>
                            
                            <span className="font-weight-bold font-18 a-click color-header-board mr-1">
                                Genre*
                            </span>

                            <span className="font-weight-bold font-20 mr-1"> > </span>

                            <span className="font-weight-bold font-18 a-click color-header-board mr-1">
                                Theme*
                            </span>

                            <span className="font-weight-bold font-20 mr-1"> > </span>

                            <span className="font-weight-bold font-18 a-click color-header-board mr-1">
                                Lock Story Line*
                            </span>

                            <span className="font-weight-bold font-20 mr-1"> > </span>

                            <span className="font-weight-bold font-18 a-click color-header-board mr-1">
                                Lock  Line*
                            </span>

                            <span className="font-weight-bold font-20 mr-1"> > </span>

                            <span className="font-weight-bold font-18 a-click color-header-board mr-1">
                                Title*
                            </span>

                            <span className="font-weight-bold font-20 mr-1"> > </span>

                            <span className="font-weight-bold font-18 a-click color-header-board mr-1">
                                Check Box
                            </span>

                        </div>
              </div>
            </div>


            <div className="card bg-card-board mb-5  border-0 ">
              <div className="card-body ">
                
              <div className="row">
                    <div className="col-md-4">
                        <div class="card card-project  shasow_card">
                            <div class="card-body ">
                                <div className="d-flex">
                                    <span className="font-25 font-weight-bold mr-auto">Title*</span>
                                    <i  style={{"color":"#cbcbcb"}} class="fas fa-pen"></i>
                                </div>
                                <div className="mt-2 ml-2 color-header-board font-25 font-weight-bold op-harf">
                                    กรุณาระบุเนื้อหา...
                                </div>
                            </div>
                        </div>        
                    </div>
                    <div className="col-md-8">
                        <div class="card card-project  shasow_card">
                            <div class="card-body">
                            <div className="d-flex">
                                <span className="font-25 font-weight-bold mr-auto">Premise*</span>
                                <i  style={{"color":"#cbcbcb"}} class="fas fa-pen"></i>
                                </div>
                                <div className="mt-2 ml-2 color-header-board font-18 font-weight-bold op-harf">
                                    กรุณาระบุเนื้อหา...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




                <div className="row mt-4 ">
                    <div className="col-md-4">
                        <div class="card card-project  shasow_card">
                            <div class="card-body ">
                                <div className="d-flex">
                                    <span className="font-25 font-weight-bold mr-auto">Genre*</span>
                                    <i  style={{"color":"#cbcbcb"}} class="fas fa-pen"></i>
                                </div>
                                <div className="mt-2 ml-2 color-header-board font-25 font-weight-bold op-harf">
                                    กรุณาระบุเนื้อหา...
                                </div>
                            </div>
                        </div>        
                    </div>
                    <div className="col-md-8">
                        <div class="card card-project  shasow_card">
                            <div class="card-body">
                            <div className="d-flex">
                                <span className="font-25 font-weight-bold mr-auto">Theme*</span>
                                <i  style={{"color":"#cbcbcb"}} class="fas fa-pen"></i>
                                </div>
                                <div className="mt-2 ml-2 color-header-board font-18 font-weight-bold op-harf">
                                    กรุณาระบุเนื้อหา...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mt-4 ">
                    <div className="col-md-12">
                        <div class="card card-project-long  shasow_card">
                            <div class="card-body ">
                                <div className="d-flex">
                                    <span className="font-218 font-weight-bold mr-auto">Lock Story Line*</span>
                                    <i  style={{"color":"#cbcbcb"}} class="fas fa-pen"></i>
                                </div>
                                <div className="mt-2 ml-2 color-header-board font-18 font-weight-bold op-harf">
                                    กรุณาระบุเนื้อหา...
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>


                <div className="row mt-4 ">
                    <div className="col-md-4">
                        <div class="card card-project  shasow_card">
                            <div class="card-body ">
                                <div className="d-flex">
                                    <span className="font-25 font-weight-bold mr-auto">Check Box</span>
                                    <i  style={{"color":"#cbcbcb"}} class="fas fa-pen"></i>
                                </div>
                                <div className="mt-2 ml-2 color-header-board font-25 font-weight-bold op-harf">
                                    กรุณาระบุเนื้อหา...
                                </div>
                            </div>
                        </div>        
                    </div>
                    <div className="col-md-8">
                        <div class="card card-project  shasow_card">
                            <div class="card-body">
                            <div className="d-flex">
                                <span className="font-25 font-weight-bold mr-auto">Lock Line*</span>
                                <i  style={{"color":"#cbcbcb"}} class="fas fa-pen"></i>
                                </div>
                                <div className="mt-2 ml-2 color-header-board font-18 font-weight-bold op-harf">
                                    กรุณาระบุเนื้อหา...
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



              </div>
            </div>

            <div className="d-flex justify-content-between mb-4">
                <div className="d-inline">
                    <button className="btn bg-blue mw-180 text-white font-weight-bold  mr-2 ">
                        บันทึก
                    </button>
                    <button className="btn share-top-right mw-180 text-white font-weight-bold  mr-2 ">
                        ลบข้อมูล
                    </button>
                </div>
                <div className="d-inline">
                    <button className="btn share-top mw-180 text-white font-weight-bold  mr-2 ">
                        ย้อนกลับ
                    </button>
                    <button className="btn  bg-blue mw-180 text-white font-weight-bold  mr-2 ">
                        ถัดไป
                    </button>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(Coverage)