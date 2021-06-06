import React,{Component} from 'react';
import { Route,Link,withRouter } from 'react-router-dom'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../../stylesheet.css'
import './plot.css'
class HomePlot extends Component {
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
                    <div  className=" position-relative mr-2" style={{ width: 50, height: 50, fontSize: "20px;" }}> 
                        <h5 className="font-weight-bold position-absolute text-circle">2/2</h5>
                        <CircularProgressbar 
                        styles={{
                            text: {
                              fill: '#4b9cdc',
                              fontSize: '20px',
                            },
                        }}                        
                        value={this.state.value} maxValue={1}/>
                    </div>
                        <h3 className="font-weight-bold">Plot</h3>
                    </div>
                   
                </span>
                <div>
                    <button className="text-white btn share-top mr-2 font-weight-bold " style={{"minWidth":"150px"}} >share</button>
                    <button className="text-white btn share-top-right font-weight-bold " style={{"minWidth":"200px"}}>
                    <i class="fab fa-dropbox  mr-2"></i>
                        รับชมวิดีโอสอน
                    </button>
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
                            <span className="font-weight-bold font-18 mr-2">
                                Bowl Tools : 
                            </span>
                            <span className="font-weight-bold font-18 color-header-board">
                                 <span className="a-click mr-5 ">
                                     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sapiente, corporis impedit 
                                 </span>
                                 <button className="btn bg-bow text-white font-weight-bold mw-150 ml-3 ">
                                        สร้าง Bowl
                                 </button>
                            </span>

                        </div>
              </div>
            </div>


            <div className="card bg-card-board mb-5  border-0 ">
              <div className="card-body ">
                  
                  <div className="mb-5 position-relative">
                    <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click position-absolute position-icon"></i>
                    <div className="act font-weight-bold text-white bg-blue p-1 pl-3">
                        Act 1
                    </div>
                    <textarea   name="" id="" cols="30" rows="5" className="form-control card-main" placeholder="กรุณาระบุ..."  ></textarea>
                  </div>

                  <div className="mb-5 position-relative ">
                    <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click position-absolute position-icon"></i>
                    <div className="act font-weight-bold text-white bg-blue p-1 pl-3">
                        Act 2
                    </div>
                    <textarea name="" id="" cols="30" rows="10" className="form-control card-main" placeholder="กรุณาระบุ..." ></textarea>
                  </div>

                  <div className="mb-5 position-relative">
                    <i style={{"color":"#cbcbcb"}} class="fas fa-pen a-click position-absolute position-icon"></i>
                    <div className="act font-weight-bold text-white bg-blue p-1 pl-3">
                        Act 3
                    </div>
                    <textarea name="" id="" cols="30" rows="8" className="form-control card-main" placeholder="กรุณาระบุ..." ></textarea>
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
                        เสร็จสิ้น
                    </button>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
export default  withRouter(HomePlot)