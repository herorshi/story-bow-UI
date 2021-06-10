import React,{Component} from 'react';
import { Route,Link,withRouter } from 'react-router-dom'
import { CircularProgressbar } from 'react-circular-progressbar';
import rn from '../../module-function/module-default'
import Popup from '../component/popup'
import 'react-circular-progressbar/dist/styles.css';
import '../../stylesheet.css'
import './plot.css'
class HomePlot extends Component {
  state = {
    status_btn_plot:true,
    act1:"",
    act1_value:"",
    act2:"",
    act2_value:"",
    act3:"",
    act3_value:"",
    key_show:"",
    key_value:"",
    status_rewrite:true
  };

  txt_switch = ()=>{
       if(this.state.key_show=="act1"){
           return "Act 1 (Rewrite)"
       }
       else if(this.state.key_show=="act2"){
        return "Act 2 (Rewrite)"
       } 
       else if(this.state.key_show=="act3"){
        return "Act 3 (Rewrite)"
       } 
  }

  show_text = ()=>{
       if(this.state.status_btn_plot == true){
        if(this.state.key_show=="act1"){
            return this.state.act1
        }   
        else if(this.state.key_show=="act2"){
            return this.state.act2
        }
        else if(this.state.key_show=="act3"){
            return this.state.act3
        }
       }
       else {
           if(this.state.status_rewrite==true){
               
            if(this.state.key_show=="act1"){
                this.setState({act1:"bowl"});
            }   
            else if(this.state.key_show=="act2"){
                this.setState({act2:"bowl"});
            }
            else if(this.state.key_show=="act3"){
                this.setState({act3:"bowl"});
            }

            return "bowl"

           }
           else{
            if(this.state.key_show=="act1"){
                return this.state.act1
            }   
            else if(this.state.key_show=="act2"){
                return this.state.act2
            }
            else if(this.state.key_show=="act3"){
                return this.state.act3
            }
           }
       }
  }

  render() {
    return (
      <React.Fragment> 
        <div id="header_blue"></div>
        <Popup id="plot" > 
          <div></div>
          <div>
            <h3>Plot</h3>
            <div className="mt-3 pl-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
                <div className="row my-3 ">
                    <div className="col pr-1">
                     <button  
                     onClick={()=> this.setState({status_btn_plot:true})} 
                     className= {" btn font-weight-bold bg-white   w-100  " + (this.state.status_btn_plot == true ? " active-premise " : "bd-gray"  ) }> Text Filed </button>
                    </div>
                    <div className="col pl-1">
                        <button 
                        onClick={()=> this.setState({status_btn_plot:false})}
                        className= {" btn font-weight-bold bg-white   w-100 p " + (this.state.status_btn_plot == false ? " active-premise " : "bd-gray"  )  }> Idea Premise Tools </button>
                    </div>
                </div>
            <div className="mt-3">
            {
                this.state.status_btn_plot ?             
                <textarea  
                    placeholder="กรุณาระบุข้อความ..."
                    value ={this.state[this.state.key_value]} 
                    onChange={(event)=>this.setState({[this.state.key_value]:event.target.value}) }   
                    className="  color-header-board font-weight-bold p-3  bd-blue w-100 bd-radius-10" 
                    name="" 
                    id="" cols="30" rows="8">
                </textarea> :
                <div>
                    <div className="d-flex align-items-center ">
                        <div 
                        onClick={()=>{this.setState({status_rewrite:true});}} 
                        className=  {   (this.state.status_rewrite == true ? " valid_premise " : " color_uncheck_small " )+"  a-click  d-flex align-items-center justify-content-center mr-3 "}>
                            <i class="fas fa-check text-white "></i>
                        </div>
                        <div className="font-weight-bold font-18 ">  Premise (Idea Premise Tools) </div>
                    </div>
                    
                    <Link to="/story_bowl">
                        <div  onClick={()=>{
                             document.getElementsByTagName("BODY")[0].style.overflow = "scroll"
                        }} className="   a-click text-center  bd-8 mt-3 w-100 idea-premise card-idea-premise active-premise">
                            <div  className="mt-5 ">
                                <i class="fas fa-plus "   ></i>
                            </div>
                            <span style={{color:"#d1d1d1"}}  className="font-20 font-weight-bold   mt-4 " > 
                                กดเพื่อสร้าง idea bowl Tools  
                            </span>
                        </div>
                    </Link>

                    <div 
                   
                    className="d-flex align-items-center mt-4 mb-3 ">
                        <div 
                            onClick={()=>{
                                console.log('TEST');
                                this.setState({status_rewrite:false});
                            }}
                            className={   
                            (this.state.status_rewrite == false ? " valid_premise " : " color_uncheck_small " )
                            +" a-click mr-3  d-flex align-items-center justify-content-center"}>
                            <i class="fas fa-check text-white "></i>
                        </div>
                        <div className="font-weight-bold font-18 ">  {this.txt_switch()} </div>
                    </div>
                    <textarea  
                    placeholder="กรุณาระบุข้อความ..." 
                    value ={this.state[this.state.key_value]} 
                    onChange={(event)=>this.setState({[this.state.key_value]:event.target.value}) }    
                    className="p-3  font-weight-bold color-header-board bd-blue w-100 bd-radius-10" 
                    name="" id="" cols="30" rows="8">
                    </textarea>

                </div>

            }

            </div>
          </div>
          <div>
            <button onClick={()=> {
                 this.setState({status_rewrite:true,status_btn_plot:true});
                 rn.hide_popup("plot")
            }} 
                style={{"minWidth":"130px"}}
                className="text-white btn share-top mr-2">ปิด</button>

            <button onClick={()=> {
                // this.value_premise(this.state.premise_value)
                console.log(this.state,'state');
                if(this.state.status_btn_plot==true) {
                    this.setState({status_rewrite:true,status_btn_plot:true,[this.state.key_show]:this.state[this.state.key_value]});
                }
                else {
                    if(this.state.status_rewrite == true){
                        this.setState({
                            status_rewrite:true,
                            status_btn_plot:true,
                            [this.state.key_show]:"bowl",
                            [this.state.key_value]:"",
                            key_show:"",
                            key_value:""
                        });
                    }
                    else {
                        this.setState({
                            status_rewrite:true,
                            status_btn_plot:true,
                            [this.state.key_show]:this.state[this.state.key_value],
                            [this.state.key_value]:"",
                            key_show:"",
                            key_value:""
                        });
                    }
                }
                
                rn.hide_popup("plot")
            } } 
            style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ </button>
          </div>
        </Popup> 

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
                              fill: '#0000ff',
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
                    
                    <div className="act font-weight-bold text-white bg-blue p-1 pl-3">
                        Act 1
                    </div>
                    <div  onClick={()=>{
                        this.setState({key_show:"act1",key_value:"act1_value"},()=>{
                            rn.show_popup('plot')
                        });
                    }} class="card a-click mh-100 ">
                      <div class="card-body pt-2">
                          <div className="d-flex font-15 ">
                                {
                                    rn.ckvalue(this.state.act1) ? 
                                    <span className="font-15 font-weight-bold mr-auto text-dark">{this.state.act1}</span>
                                    :
                                    <span className="font-15 font-weight-bold mr-auto color-gray">กรุณาระบุเนื้อหา...</span>
                                }
                                <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click "></i>
                          </div>
                      </div>
                    </div>
                    {/* <textarea   name="" id="" cols="30" rows="5" className="form-control card-main" placeholder="กรุณาระบุ..."  ></textarea> */}
                  </div>

                  <div className="mb-5 position-relative ">
                    <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click position-absolute position-icon"></i>
                    <div className="act font-weight-bold text-white bg-blue p-1 pl-3">
                        Act 2
                    </div>
                    <div 
                    onClick={()=>{
                        this.setState({key_show:"act2",key_value:"act2_value"},()=>{
                            rn.show_popup('plot')
                        });
                    }}
                    class="card a-click mh-250 ">
                      <div class="card-body pt-2">
                          <div className="d-flex  font-15">
                                {
                                    rn.ckvalue(this.state.act2) ? 
                                    <span className="font-15 font-weight-bold mr-auto text-dark">{this.state.act2}</span>
                                    :
                                    <span className="font-15 font-weight-bold mr-auto color-gray">กรุณาระบุเนื้อหา...</span>
                                }
                                {/* <span className="font-15 font-weight-bold mr-auto color-gray">กรุณาระบุเนื้อหา...</span> */}
                                <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click "></i>
                          </div>
                      </div>
                    </div>
                    {/* <textarea name="" id="" cols="30" rows="10" className="form-control card-main" placeholder="กรุณาระบุ..." ></textarea> */}
                  </div>

                  <div className="mb-5 position-relative">
                    <i style={{"color":"#cbcbcb"}} class="fas fa-pen a-click position-absolute position-icon"></i>
                    <div className="act font-weight-bold text-white bg-blue p-1 pl-3">
                        Act 3
                    </div>
                    <div 
                        onClick={()=>{
                            this.setState({key_show:"act3",key_value:"act3_value"},()=>{
                                rn.show_popup('plot')
                            });
                        }}
                    class="card a-click mh-180 ">
                      <div class="card-body pt-2">
                          <div className="d-flex ">
                                {/* <span className="font-15 font-weight-bold mr-auto color-gray">กรุณาระบุเนื้อหา...</span> */}
                                {
                                    rn.ckvalue(this.state.act3) ? 
                                    <span className="font-15 font-weight-bold mr-auto text-dark">{this.state.act3}</span>
                                    :
                                    <span className="font-15 font-weight-bold mr-auto color-gray">กรุณาระบุเนื้อหา...</span>
                                }
                                <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click "></i>
                          </div>
                      </div>
                    </div>
                    {/* <textarea name="" id="" cols="30" rows="8" className="form-control card-main" placeholder="กรุณาระบุ..." ></textarea> */}
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
                    <Link to="/coverage">
                        <button className="btn share-top mw-180 text-white font-weight-bold  mr-2 ">
                            ย้อนกลับ
                        </button>
                    </Link>
                    <Link to="/plot_success">
                        <button className="btn  bg-blue mw-180 text-white font-weight-bold  mr-2 ">
                            เสร็จสิ้น
                        </button>                      
                    </Link>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
export default  withRouter(HomePlot)