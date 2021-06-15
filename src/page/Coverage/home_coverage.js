import React,{Component} from 'react';
import { Route,Link,withRouter } from 'react-router-dom'
import { CircularProgressbar } from 'react-circular-progressbar';
import Popup from '../component/popup'
import rn from '../../module-function/module-default'
import CONS from '../../global-variable/'
import 'react-circular-progressbar/dist/styles.css';
import './coverage.css'
import '../../stylesheet.css'
// (index == this.state.final.target ? " valid_premise_normal " : "color_uncheck_small_normal" )
class Coverage extends Component {
  state = {
      value :0.5,
      txt:"",
      title:"",
      value_title:"",
      lock_line:"",
      lock_line_value:"",
      lock_story_line:"",
      genre:"",
      genre_value:"",
      checkbox:"",
      checkbox_value:"",
      premise:"",
      premise_value:"",
      status_btn_premise:true,
      data_checkbox:["1","2","3","4","5"],
      data_ck_select:[],
      data_genre:["1","2","3","4","5"],
      data_ck_genre:[],
      theme_name:"",
      checkbox:""
};

    load_coverage = ()=>{
        // setTimeout(() => {
            if(localStorage.getItem('status_project')!="-1"){
                rn.PostData(CONS.URL_PROJECT+"/list",{id:localStorage.getItem('status_project')},"POST",200,"",false,true).then((value)=>{
                    console.log(value);
                    function empty_check (value){
                        if(rn.ckvalue(value))  return value 
                        else return ""
                    }

                     this.setState({
                         title:empty_check(value.data.data[0]['name_project']),
                         value_title : empty_check(value.data.data[0]['name_project']),
                         premise:empty_check(value.data.data[0]['premise_name']),
                         genre:empty_check(value.data.data[0]['genre']),
                         theme_name:empty_check(value.data.data[0]['theme_name']),
                         lock_story_line:empty_check(value.data.data[0]['lock_story_line_name']),
                         checkbox:empty_check(value.data.data[0]['check_box']),
                         lock_line:empty_check(value.data.data[0]['lock_line'])

                    });
                })  
            }
        // }, 1000);
    }

    value_title = (value)=>{
        let title_send = {
            title:this.state.value_title,
            status:localStorage.getItem('status_project'),
            id_member:localStorage.getItem('id_member')
        }
          rn.PostData(CONS.URL_PROJECT+"/title",title_send,"POST",200,"",false,true).then((value_data)=>{
            console.log(value_data.data.id_project,'value');
            if(localStorage.getItem('status_project') == "-1" ){
                console.log(value_data.data);
                localStorage.setItem('status_project',value_data.data.id_project);
            }
            if(value_data.status == 200){
                this.setState({title:value,value_title:""});
                rn.hide_popup('title');
            }
          }).catch((err)=>{
              console.log(err.message,'error');
          })
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

     componentDidMount(){
        this.load_coverage();
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
            <div className="mt-3 pl-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
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
            <div className="mt-3 pl-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
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
            <div className="mt-3 pl-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-3">
                <div class="card">
                  <div class="card-body">

                     {/* <div className="d-flex align-items-center mb-2">
                         <input type="radio" id="l_line1"  name="lock_line" 
                          value="Genre 1" onClick={(event)=> this.setState({genre_value:event.target.value})} 
                          className="mr-3 font-weight-bold"  />
                         <label className="form-check-label color-header-board font-weight-bold" for="l_line1"> Genre 1</label>
                     </div> */}
                {
                    this.state.data_genre.map((content,index)=>{
                        return(
                            <div className="d-flex align-items-center mb-4">
                                <div onClick={()=>{}} className="  px-0 a-click ">
                                    <div 
                                    onClick={()=>{
                                      rn.set_uni_array(this,"data_ck_genre",(index+1).toString())  
                                    }}
                                    className={ 
                                        (this.state.data_ck_genre.indexOf((index+1).toString()) >=0  ? " valid_premise_small " : "color_uncheck_small_high" )
                                        +" font-10  mr-3 ml-auto d-flex align-items-center justify-content-center " 
                                    }
                                    >
                                        <i class="fas fa-check text-white "></i>
                                    </div>
                                </div>
                                <label className="form-check-label color-header-board font-weight-bold" for="l_line2"> Genre {index+1}</label>
                            </div>
                        )
                    })   
                  }   
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
            <div className="mt-3 pl-3">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-3">

                <div class="card">
                  <div class="card-body">
                  {
                    this.state.data_checkbox.map((content,index)=>{
                        return(
                            <div className="d-flex align-items-center mb-4">
                                <div onClick={()=>{}} className="  px-0 a-click ">
                                    <div 
                                    onClick={()=>{
                                      rn.set_uni_array(this,"data_ck_select",(index+1).toString())  
                                    }}
                                    className={ 
                                        (this.state.data_ck_select.indexOf((index+1).toString()) >=0  ? " valid_premise_small " : "color_uncheck_small_high" )
                                        +" font-10  mr-3 ml-auto d-flex align-items-center justify-content-center " 
                                    }
                                    >
                                        <i class="fas fa-check text-white "></i>
                                    </div>
                                </div>
                                <label className="form-check-label color-header-board font-weight-bold" for="l_line2"> Check Box {index+1}</label>
                            </div>
                        )
                    })   
                  }   

                            <div className="d-flex align-items-center mb-4">
                                <div onClick={()=>{}} className="  px-0 a-click ">
                                    <div 
                                    onClick={()=>{
                                      rn.set_uni_array(this,"data_ck_select",("x").toString())  
                                    }}
                                    className={ 
                                        (this.state.data_ck_select.indexOf("x") >=0  ? " valid_premise_small " : "color_uncheck_small_high" )
                                        +" font-10  mr-3 ml-auto   d-flex align-items-center justify-content-center " 
                                    }
                                    >
                                        <i class="fas fa-check text-white "></i>
                                    </div>
                                </div>
                                <div className=" w-100 d-flex align-items-center form-check-label color-header-board font-weight-bold" for="l_line2">
                                    <span className="mr-3">อื่นๆ </span>
                                    <input id="other_checkbox" type="text" placeholder="กรุณาระบุ" 
                                    className=" border-right-0 border-left-0  border-top-0  color-header-board font-weight-bold form-control w-75" />
                                </div>
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
            <div className="mt-3 pl-3">
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
                    
                    <Link to="/idea-premise">
                        <div  onClick={()=>{
                             document.getElementsByTagName("BODY")[0].style.overflow = "scroll"
                        }} className=" a-click text-center  bd-8 mt-3 w-100 idea-premise card-idea-premise active-premise">
                            <div  className="mt-5">
                                <i class="fas fa-plus "  style={{fontSize:"60px",color:"#d1d1d1"}} ></i>
                            </div>
                            <span style={{color:"#d1d1d1"}}  className="font-20 font-weight-bold   mt-4 " > 
                                กดเพื่อสร้าง idea Premise Tools  
                            </span>
                        </div>
                    </Link>

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