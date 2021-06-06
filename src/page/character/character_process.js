import React,{Component} from 'react';
import { Route,Link,withRouter } from 'react-router-dom'
import  '../../stylesheet.css'
import HeaderPage from '../component/header_page'
class CharacterProcess extends Component {
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

            <div class="card bg-card-board border-0 mb-3 ">
              <div class="card-body ">
                <div className="row">
                  <div className="col-md-4 position-relative">
                    <div  className=" top_menu position-absolute  bg-blue
                     text-white tl-radius  p-2 pl-4  font-weight-bold mh-80  ">
                      Character
                    </div>
                    <div class="card  mt-5  test"  style={{borderRadius:"10px", zIndex:200 }}>
                      <div class="card-body">   
                        <div className="d-flex align-items-center ">
                          <span className="font-20 font-weight-bold mr-auto">
                            Name Character 
                          </span>
                          <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                        </div>
                          <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                            กรุณาระบุข้อความ
                          </div>
                      </div>
                    </div>
                  </div>


                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-12 position-relative mb-3">
                        <div  className=" top_menu position-absolute  bg-blue text-white tl-radius  p-2 pl-4  font-weight-bold mh-80  ">
                          Role
                        </div>
                        <div class="card  mt-5 "  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                Work
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                          </div>
                        </div>
                      </div>



                      <div className="col-md-12 position-relative mb-3">
                        <div class="card  m "  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                Home
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 position-relative ">
                        <div class="card  m "  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                play
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>




                  <div className="col-md-4">
                    <div className="row">
                      <div className="col-md-12 position-relative mb-3">
                        <div  className=" top_menu position-absolute  bg-blue text-white tl-radius  p-2 pl-4  font-weight-bold mh-80  ">
                          condition
                        </div>
                        <div class="card  mt-5 "  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                Bio
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                          </div>
                        </div>
                      </div>



                      <div className="col-md-12 position-relative mb-3">
                        <div class="card  m "  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                Psycho
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 position-relative ">
                        <div class="card   "  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                Social
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  



          


                </div>
                
                  <div className="row mt-60">
                    <div className="col-md-6 position-relative ">
                        <div    className=" t-37 top_menu position-absolute  bg-blue text-white tl-radius  p-2 pl-4  font-weight-bold mh-80  " style={{top:"-33px!important"}}>
                          Skill
                        </div>
                        <div class="card"  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                Hero Point
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                          </div>
                        </div>
                    </div>                    
                    <div className="col-md-6 position-relative ">
                        <div    className=" t-37 top_menu position-absolute  bg-blue text-white tl-radius  p-2 pl-4  font-weight-bold mh-80  " style={{top:"-33px!important"}}>
                          Skill
                        </div>
                        <div class="card"  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                Weak Point
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>






                  <div className="row mt-60">
                    <div className="col-md-6 position-relative ">
                        <div    className=" t-37 top_menu position-absolute  bg-blue text-white tl-radius  p-2 pl-4  font-weight-bold mh-80  " style={{top:"-33px!important"}}>
                          Skill
                        </div>
                        <div class="card"  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                Hero Point
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                          </div>
                        </div>
                    </div>                    
                    <div className="col-md-6 position-relative ">
                        <div    className=" t-37 top_menu position-absolute  bg-blue text-white tl-radius  p-2 pl-4  font-weight-bold mh-80  " style={{top:"-33px!important"}}>
                          Skill
                        </div>
                        <div class="card"  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                Weak Point
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                          </div>
                        </div>
                    </div>
                  </div>






                  <div className="row mt-60">
                    <div className="col-md-4 position-relative ">
                        <div    className=" t-37 top_menu position-absolute  bg-blue text-white tl-radius  p-2 pl-4  font-weight-bold mh-80  " style={{top:"-33px!important"}}>
                          POI
                        </div>
                        <div class="card"  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                POI
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                          </div>
                        </div>
                    </div> 


                    <div className="col-md-4 position-relative ">
                        <div    className=" t-37 top_menu position-absolute  bg-blue text-white tl-radius  p-2 pl-4  font-weight-bold mh-80  " style={{top:"-33px!important"}}>
                          Them
                        </div>
                        <div class="card"  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                Final Theme
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                              <div className="  pl-2 font-weight-bold font-18 color-header-board  mh-150 " >
                                นักเรียนทุกคนต้องทำตามคำสั่งสอนของผู้ปกครอง แต่บางครั้งผู้ใหญ่ก็ดุด่าเราทำร้ายร่างกายนักเรียน อีกทั้งงานเยอะเลอะเครียด
                              </div>
                          </div>
                        </div>
                    </div>


                    <div className="col-md-4 position-relative ">
                        <div    className=" t-37 top_menu position-absolute  bg-blue text-white tl-radius  p-2 pl-4  font-weight-bold mh-80  " style={{top:"-33px!important"}}>
                          kind
                        </div>
                        <div class="card"  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                kind
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                          </div>
                        </div>
                    </div>


                  </div>



              </div>
              
            </div>

            <div  className=" pt_summary card color-blue-light border-0 mb-4" style={{borderRadius:"7px"}}>
              <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 position-relative ">
                          <div    className=" t-37 top_menu position-absolute  bg-blue text-white tl-radius  p-2 pl-4  font-weight-bold mh-80  " style={{top:"-33px!important"}}>
                            Summary
                          </div>
                          <div class="card"  style={{borderRadius:"10px", zIndex:200 }}>
                            <div class="card-body">   
                              <div className="d-flex align-items-center ">
                                <span className="font-20 font-weight-bold mr-auto">
                                  Summary Character's Maps
                                </span>
                                <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                              </div>
                                <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                  กรุณาระบุข้อความ
                                </div>
                            </div>
                          </div>
                      </div>  
                  </div>
              </div>
            </div>

            <div className="mt-4 mb-5">
              <div className="d-flex justify-content-between">
                <div className="d-inline">
                  <button className="btn mw-150 text-white bg-blue mr-2">บันทึกข้อมูล</button>
                  <button className="btn mw-150 text-white share-top-right mr-2">บันทึกข้อมูล</button>
                </div>

                <div className="d-inline">
                  <button className="btn mw-150 text-white share-top mr-2">ย้อนกลับ</button>
                  <button className="btn mw-150 text-white share-top-right mr-2">ยืนยันรายการ</button>
                </div>

              </div>
            </div>

            {/* <div class="container">
              <div class="row">
                <div class="col-lg-5" style={{backgroundColor:"red"}}>Span 5</div>
                <div class="col-lg-3" style={{backgroundColor:"red"}}>Span 3</div>
                <div class="col-lg-2 " style={{paddin:"0"}}>
                  <div class="short-div" style={{backgroundColor:"green"}}>Span 2</div>
                  <div class="short-div" style={{backgroundColor:"purple"}}>Span 2</div>
                  <div class="short-div" style={{backgroundColor:"purple"}}>Span 2</div>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-3 col-xs-2" style={{backgroundColor:"yellow"}}>Span 2</div>
              </div>
            </div> */}




            

        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(CharacterProcess)