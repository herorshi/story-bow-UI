import React,{Component} from 'react';
import { Route,Link,withRouter } from 'react-router-dom'
import { CircularProgressbar } from 'react-circular-progressbar';
import Popup from '../component/popup'
import rn from '../../module-function/module-default'
import 'react-circular-progressbar/dist/styles.css';
import './coverage.css'
import '../../stylesheet.css'

class Coverage extends Component {
  state = {
      value :0.5,
      txt:"",
      title:"",
      value_title:"",
      lock_line:"",
      lock_line_value:"",
      genre:"",
      genre_value:"",
      checkbox:"",
      checkbox_value:"",
      premise:"",
      premise_value:"",
      status_btn_premise:true
};
     value_title = (value)=>{
          this.setState({title:value,value_title:""});
          rn.hide_popup('title');
    }
    value_lock_line = (value)=>{
        this.setState({lock_line:value,lock_line_value:""});
        rn.hide_popup("lock_line")
    }
    value_genre = (value)=>{
          this.setState({genre:value,genre_value:""},()=>{
              console.log(this.state.genre);
          });
          rn.hide_popup("genre")
    }
    value_checkbox = (value)=>{
         this.setState({checkbox:value,checkbox_value:""});
         rn.hide_popup("checkbox")    
    }
    value_premise = (value)=>{
          this.setState({premise:value,premise_value:""});
          rn.hide_popup("premise");
    }

//   const value = 0.66;
  render() {
    return (
      <React.Fragment> 
        <div id="header_blue"></div>
        <Popup id="title" > 
          <div></div>
          <div>
            <h3>Title</h3>
            <div className="mt-3 le-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." value ={this.state.value_title} 
                onChange={(event)=>this.setState({value_title:event.target.value}) }   
                className="p-3  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="8"></textarea>
            </div>
          </div>
          <div>
            <button onClick={()=> rn.hide_popup("title")} style={{"minWidth":"130px"}} className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=> this.value_title(this.state.value_title) } style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ  </button>
          </div>
        </Popup>


        <Popup id="lock_line" > 
          <div></div>
          <div>
            <h3>Lock line</h3>
            <div className="mt-3 le-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-3">
                <textarea  
                placeholder="กรุณาระบุข้อความ..."
                value ={this.state.lock_line_value} 
                onChange={(event)=>this.setState({lock_line_value:event.target.value}) }   
                className="p-3  bd-blue w-100 bd-radius-10" 
                name="" 
                id="" cols="30" rows="8"></textarea>
            </div>
          </div>
          <div>
            <button onClick={()=> rn.hide_popup("lock_line")} style={{"minWidth":"130px"}} className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=> this.value_lock_line(this.state.lock_line_value) } style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ  </button>
          </div>
        </Popup> 


        <Popup id="genre" > 
          <div></div>
          <div>
            <h3>Genre</h3>
            <div className="mt-3 le-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-3">
                <div class="card">
                  <div class="card-body">

                     <div className="d-flex align-items-center mb-2">
                         <input type="radio" id="l_line1"  name="lock_line" 
                          value="Genre 1" onClick={(event)=> this.setState({genre_value:event.target.value})} 
                          className="mr-3 font-weight-bold"  />
                         <label className="form-check-label color-header-board font-weight-bold" for="l_line1"> Genre 1</label>
                     </div>
                     <div className="d-flex align-items-center mb-2">
                         <input 
                            type="radio" 
                            id="l_line2"  
                            name="lock_line"  
                            value="Genre 2" 
                            onClick={(event)=> this.setState({genre_value:event.target.value})}
                            className="mr-3 font-weight-bold"  
                        />
                        <label className="form-check-label color-header-board font-weight-bold" for="l_line2"> Genre 2</label>
                     </div>
                     <div className="d-flex align-items-center mb-2">
                         <input 
                         type="radio" 
                         id="l_line3"  
                         name="lock_line"  
                         value="Genre 3" 
                         onClick={(event)=> this.setState({genre_value:event.target.value})}
                         className="mr-3 font-weight-bold"  
                         />
                        <label className="form-check-label color-header-board font-weight-bold" for="l_line3"> Genre 3</label>
                     </div>

                     <div className="d-flex align-items-center mb-2">
                         <input 
                         type="radio" 
                         id="l_line4"  
                         name="lock_line"  
                         value="Genre 4" 
                         onClick={(event)=> this.setState({genre_value:event.target.value})}
                         className="mr-3 font-weight-bold"  
                         />
                         <label className="form-check-label color-header-board font-weight-bold" for="l_line4"> Genre 4</label>
                     </div>
                     <div className="d-flex align-items-center mb-2">
                         <input 
                         type="radio" 
                         id="l_line5"  
                         name="lock_line" 
                         value="Genre 5" 
                         onClick={(event)=> this.setState({genre_value:event.target.value})}
                         className="mr-3 font-weight-bold"  
                         />
                         <label className="form-check-label color-header-board font-weight-bold" for="l_line5"> Genre 5</label>
                     </div>


                  </div>
                </div>
            </div>
          </div>
          <div>
            <button onClick={()=> rn.hide_popup("genre")} style={{"minWidth":"130px"}} className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=> this.value_genre(this.state.genre_value) } style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ  </button>
          </div>
        </Popup> 

        <Popup id="checkbox" > 
          <div></div>
          <div>
            <h3>Check Box</h3>
            <div className="mt-3 le-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-3">
                <div class="card">
                  <div class="card-body">

                     <div className="d-flex align-items-center mb-2">
                         <input type="radio" id="l_line1"  name="lock_line" 
                          value="Check Box 1" onClick={(event)=> this.setState({checkbox_value:event.target.value})} 
                          className="mr-3 font-weight-bold"  />
                         <label className="form-check-label color-header-board font-weight-bold" for="l_line1"> Check Box 1</label>
                     </div>
                     <div className="d-flex align-items-center mb-2">
                         <input 
                            type="radio" 
                            id="l_line2"  
                            name="lock_line"  
                            value="Check Box 2" 
                            onClick={(event)=> this.setState({checkbox_value:event.target.value})}
                            className="mr-3 font-weight-bold"  
                        />
                        <label className="form-check-label color-header-board font-weight-bold" for="l_line2"> Check Box 2</label>
                     </div>
                     <div className="d-flex align-items-center mb-2">
                         <input 
                         type="radio" 
                         id="l_line3"  
                         name="lock_line"  
                         value="Check Box 3" 
                         onClick={(event)=> this.setState({checkbox_value:event.target.value})}
                         className="mr-3 font-weight-bold"  
                         />
                        <label className="form-check-label color-header-board font-weight-bold" for="l_line3"> Check Box 3</label>
                     </div>

                     <div className="d-flex align-items-center mb-2">
                         <input 
                         type="radio" 
                         id="l_line4"  
                         name="lock_line"  
                         value="Check Box 4" 
                         onClick={(event)=> this.setState({checkbox_value:event.target.value})}
                         className="mr-3 font-weight-bold"  
                         />
                         <label className="form-check-label color-header-board font-weight-bold" for="l_line4"> Check Box 4</label>
                     </div>
                     <div className="d-flex align-items-center mb-2">
                         <input 
                         type="radio" 
                         id="l_line5"  
                         name="lock_line" 
                         value="Check Box 5" 
                         onClick={(event)=> this.setState({checkbox_value:event.target.value})}
                         className="mr-3 font-weight-bold"  
                         />
                         <label className="form-check-label color-header-board font-weight-bold" for="l_line5"> Check Box 5</label>
                     </div>


                  </div>
                </div>
            </div>
          </div>
          <div>
            <button onClick={()=> rn.hide_popup("checkbox")} style={{"minWidth":"130px"}} className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=> this.value_checkbox(this.state.checkbox_value) } style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ  </button>
          </div>
        </Popup> 


        <Popup id="premise" > 
          <div></div>
          <div>
            <h3>Premise</h3>
            <div className="mt-3 le-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
                <div className="row my-3 ">
                    <div className="col pr-1">
                     <button  
                     onClick={()=> this.setState({status_btn_premise:true})} 
                     className= {" btn font-weight-bold bg-white   w-100  " + (this.state.status_btn_premise == true ? " active-premise " : "bd-gray"  ) }> Text Filed </button>
                    </div>
                    <div className="col pl-1">
                        <button 
                        onClick={()=> this.setState({status_btn_premise:false})}
                        className= {" btn font-weight-bold bg-white   w-100 p " + (this.state.status_btn_premise == false ? " active-premise " : "bd-gray"  )  }> Idea Premise Tools </button>
                    </div>
                </div>
            
            
            <div className="mt-3">
            {
                this.state.status_btn_premise ?             
                <textarea  
                    placeholder="กรุณาระบุข้อความ..."
                    value ={this.state.premise_value} 
                    onChange={(event)=>this.setState({premise_value:event.target.value}) }   
                    className="  color-header-board font-weight-bold p-3  bd-blue w-100 bd-radius-10" 
                    name="" 
                    id="" cols="30" rows="8">
                </textarea> :
                <div>
                    <div className="d-flex align-items-center ">
                        <div className="valid_premise d-flex align-items-center justify-content-center mr-3 ">
                            <i class="fas fa-check text-white "></i>
                        </div>
                        <div className="font-weight-bold font-18 ">  Premise (Idea Premise Tools) </div>
                    </div>

                    <div className=" a-click text-center  bd-8 mt-3 w-100 idea-premise card-idea-premise active-premise">
                        <div  className="mt-5">
                            <i class="fas fa-plus "  style={{fontSize:"60px",color:"#d1d1d1"}} ></i>
                        </div>
                        <span style={{color:"#d1d1d1"}}  className="font-20 font-weight-bold   mt-4 " > 
                            กดเพื่อสร้าง idea Premise Tools  
                        </span>
                    </div>

                    <div className="d-flex align-items-center mt-4 mb-3 ">
                        <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                            <i class="fas fa-check text-white "></i>
                        </div>
                        <div className="font-weight-bold font-18 ">  Rewrite Premise </div>
                    </div>
                    <textarea  
                    placeholder="กรุณาระบุข้อความ..." 
                    value = {this.state.premise_value} 
                    onChange={(event)=>this.setState({premise_value:event.target.value}) }   
                    className="p-3  bd-blue w-100 bd-radius-10" 
                    name="" id="" cols="30" rows="8">
                    </textarea>
                </div>

            }

            </div>
          </div>
          <div>
            <button onClick={()=> rn.hide_popup("premise")} style={{"minWidth":"130px"}}
             className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=> this.value_premise(this.state.premise_value) } 
            style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ </button>
          </div>
        </Popup> 


        

        <div className="content mx-auto mt-5 ">
            {/* <button onClick={()=>rn.show_popup("t1")} className="btn btn-primary">T1</button>
            <button onClick={()=>rn.show_popup("t2")} className="btn btn-primary">T2</button> */}
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
                    <div  onClick={()=>rn.show_popup('title')}  className=" a-click col-md-4">
                        <div class="card card-project  shasow_card">
                            <div class="card-body ">
                                <div className="d-flex">
                                    <span className="font-25 font-weight-bold mr-auto">Title*</span>
                                    <i  style={{"color":"#cbcbcb"}} class="fas fa-pen"></i>
                                </div>
                                { rn.ckvalue(this.state.title) ? 
                                    <div className="mt-2 ml-2 color-header-board font-25 font-weight-bold">
                                        {this.state.title}
                                    </div>:

                                    <div className="mt-2 ml-2 color-header-board font-25 font-weight-bold op-harf">
                                        กรุณาระบุเนื้อหา...
                                    </div>
                                }

                            </div>
                        </div>        
                    </div>
                    <div onClick={()=>rn.show_popup("premise")}  className=" a-click col-md-8">
                        <div class="card card-project  shasow_card">
                            <div class="card-body">
                            <div className="d-flex">
                                <span className="font-25 font-weight-bold mr-auto">Premise*</span>
                                <i  style={{"color":"#cbcbcb"}} class="fas fa-pen"></i>
                                </div>
                                {
                                    rn.ckvalue(this.state.premise) ? 
                                    <div className="mt-2 ml-2 color-header-board font-18 font-weight-bold ">
                                        {this.state.premise}
                                    </div>
                                    :
                                    <div className="mt-2 ml-2 color-header-board font-18 font-weight-bold op-harf">
                                        กรุณาระบุเนื้อหา...
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>



                {/* genre */}
                <div className="row mt-4 ">
                    <div  onClick={()=>rn.show_popup("genre")} className="col-md-4  a-click ">
                        <div class="card card-project  shasow_card">
                            <div class="card-body ">
                                <div className="d-flex">
                                    <span className="font-25 font-weight-bold mr-auto">Genre*</span>
                                    <i  style={{"color":"#cbcbcb"}} class="fas fa-pen"></i>
                                </div>
                                {
                                    rn.ckvalue(this.state.genre) ? 
                                    <div className="mt-2 ml-2 color-header-board font-25 font-weight-bold ">
                                        {this.state.genre}
                                    </div> :
                                    <div className="mt-2 ml-2 color-header-board font-25 font-weight-bold op-harf">
                                        กรุณาระบุเนื้อหา...
                                    </div>
                                }

                            </div>
                        </div>        
                    </div>
                    
                    <div className="col-md-8">
                        <Link id="tag-a" to="/theme" replace >
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
                        </Link>
                    </div>
                    
                </div>

                <Link id="tag-a" to="/lock_story_line" replace >
                <div className="row mt-4 ">
                    <div className="col-md-12 a-click ">
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
                </Link>


                <div className="row mt-4 ">
                    <div  onClick={()=>rn.show_popup("checkbox")} className="col-md-4 a-click">
                        <div className="card card-project  shasow_card">
                            <div className="card-body ">
                                <div className="d-flex">
                                    <span className="font-25 font-weight-bold mr-auto">Check Box</span>
                                    <i  style={{"color":"#cbcbcb"}} class="fas fa-pen"></i>
                                </div>
                                {
                                    rn.ckvalue(this.state.checkbox) ?
                                    <div className="mt-2 ml-2 color-header-board font-25 font-weight-bold ">
                                        {this.state.checkbox}
                                    </div>
                                    : 
                                    <div className="mt-2 ml-2 color-header-board font-25 font-weight-bold op-harf">
                                        กรุณาระบุเนื้อหา...
                                    </div>
                                }

                            </div>
                        </div>        
                    </div>
                    <div className="col-md-8 a-click " onClick={()=>rn.show_popup("lock_line")} >
                        <div class="card card-project  shasow_card">
                            <div class="card-body">
                            <div className="d-flex">
                                <span className="font-25 font-weight-bold mr-auto">Lock Line*</span>
                                <i  style={{"color":"#cbcbcb"}} class="fas fa-pen"></i>
                                </div>
                                {
                                    rn.ckvalue(this.state.lock_line) ?  
                                        <div className="mt-2 ml-2 color-header-board font-18 font-weight-bold ">
                                            {this.state.lock_line}
                                        </div>: 
                                        <div className="mt-2 ml-2 color-header-board font-18 font-weight-bold op-harf">
                                            กรุณาระบุเนื้อหา...
                                        </div>
                                }
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
                        <Link to="/board">
                            <button className="btn share-top mw-180 text-white font-weight-bold  mr-2 ">
                                ย้อนกลับ
                            </button>
                        </Link>
                        <Link to="/plot">
                            <button className="btn  bg-blue mw-180 text-white font-weight-bold  mr-2 ">
                                ถัดไป
                            </button>
                        </Link>
                    </div>
                

            </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(Coverage)