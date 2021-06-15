import React,{Component} from 'react';
import { Route,Link,withRouter } from 'react-router-dom'
import '../../stylesheet.css'
import HeaderPage from '../component/header_page'
import rn from '../../module-function/module-default'
import Popup from '../component/popup'
import CardBow from './card-bowl'

import bow from '../../194838690_203906581589399_7624581275585944002_n.png'

class HomeStoryBowL extends Component {
  state = {
      status_show:true,
      status_act:true,
      status_card:true,
      status_confirm_card:false,
      detail_story:"",
      detail_story_value:"",
      title_story:"",
      title_story_value:"",
      select_story:"",
      status_rewrite:true,
      number_udpate:0,
      store:[
        {status:false,txt:"",title:"Event Point Point",number:"1",color:""},//0
        {status:false,txt:"",title:"Debete",number:"2",color:"2"},//1
        {status:true,txt:"ข้อมูลจาก:เขาต้อง",title:"Set Goal",number:"3",color:""},//2
        {status:true,txt:"ข้อมูลจาก:สถานที่",title:"Setting",number:"4",color:""},//3
        {status:false,txt:"",title:"First Seq",number:"5",color:""},//4
        {status:true,txt:"ข้อมูลจาก:มี",title:"Character",number:"6",color:""},//5
        {status:false,txt:"",title:"Theme State",number:"7",color:""},//6
        {status:false,txt:"",title:"Get Target",number:"8",color:""},//7
        {status:false,txt:"",title:"Rise Climax",number:"9",color:""},//8
        {status:false,txt:"",title:"Falling Climax",number:"10",color:""},//9
        {status:false,txt:"",title:"Approve Lesson",number:"11",color:""},//10
        {status:false,txt:"",title:"True Climax",number:"12",color:""},//11
        {status:true,txt:"ข้อมูลจาก:สุดท้ายแล้ว",title:"Solution",number:"13",color:""},//12
        {status:false,txt:"",title:"Change",number:"14",color:""},//13
        {status:false,txt:"",title:"Final SEQ",number:"15",color:""},//14
        {status:false,txt:"",title:"Mission 1",number:"16",color:""},//15
        {status:false,txt:"",title:"Mission 2",number:"17",color:""},//16
        {status:false,txt:"",title:"Mission 3",number:"18",color:""},//17
        {status:false,txt:"",title:"Falling Down",number:"19",color:""},//18
        {status:false,txt:"",title:"Alone",number:"20",color:""},//19
        {status:false,txt:"",title:"Find The Way",number:"21",color:""},//20
        {status:true,txt:"ข้อมูลจาก:และเขาได้เรียนรู้ว่า",title:"Learn Lesson",number:"22",color:""},//21
        {status:false,txt:"",title:"Obstacle 2",number:"23",color:""},//22
        {status:true,txt:"ข้อมูลจาก:แต่",title:"Obstacle 1",number:"24",color:""},//23
        {status:false,txt:"",title:"Turning Point",number:"25",color:""},//24
        {status:false,txt:"",title:"Bad Coming",number:"26",color:""}, //25
        {status:false,txt:"",title:"Stake Rise",number:"27",color:""}, //26
    ],
  };
  render() {
    return (
      <React.Fragment> 
        <HeaderPage/>
        <Popup id="new_card" > 
          <div></div>
          {
              this.state.status_confirm_card == false ?
                <div className="content mx-auto">
                    <h3>Story Bowl - Card</h3>
                    <div className="mt-3">
                        <select value={this.state.select_story} onChange={(event)=>  this.setState({select_story:event.target.value}) }  name="" id="" className="form-control bd-lock-line-active color-header-board">
                            <option value=""  className="font-weight-bold color-header-board " >กรุณาเลือกหัวข้อ...</option>
                            {
                                this.state.store.map((content,index)=>{
                                    return (
                                        <option value={index}>
                                            {content.title}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="mt-3 pl-3">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
                    </div>
                    <div className="mt-3">
                        <textarea  
                        placeholder="กรุณาระบุข้อความ..." 
                        value = { this.state.detail_story_value } 
                        onChange={(event)=>this.setState({detail_story_value:event.target.value}) }   
                        className=" color-header-board font-weight-bold p-3  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
                    </div>
                </div>              
              :               
                <div  className="content mx-auto">
                    <h3>Story Bowl - Card</h3>
                    <div className="mt-3">
                        <select  
                        value={this.state.select_story} onChange={(event)=>  this.setState({select_story:event.target.value}) } 
                        name="" 
                        id="" 
                        className="form-control bd-lock-line-active color-header-board">
                            <option value=""  className="font-weight-bold color-header-board " >กรุณาเลือกหัวข้อ...</option>
                            {
                                this.state.store.map((content,index)=>{
                                    return (
                                        <option value={index}>
                                            {content.title}
                                        </option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="mt-3 pl-3">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
                    </div>

                    <div className=" d-flex mt-3 font-weight-bold font-20 mb-2">
                        <div className="d-inline d-flex align-items-center " >
                            <div 
                                onClick={()=> this.setState({status_rewrite:true})} 
                                className={(this.state.status_rewrite  ? "valid_premise" : "color_uncheck_small" )+" a-click  d-flex align-items-center justify-content-center mr-3 "}>
                                <i class="fas fa-check text-white " style={{fontSize:"10px"}} ></i>
                            </div>
                        </div>                        
                        Character (Lock Story Line Pipe Tools)
                    </div>  
                    <div className=" p-3 mh-150 font-weigh-bold bd-8 bd-lock-line-active color-header-board">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis alias inventore exercitationem accusantium. Alias sequi similique sed tempora repudiandae velit fugit suscipit, optio neque sunt illum eveniet aut provident nesciunt?
                    </div>

                    <div className="d-flex">
                        <div className="d-inline d-flex align-items-center " >
                            <div 
                                onClick={()=> this.setState({status_rewrite:false})} 
                                className={(this.state.status_rewrite==false  ? "valid_premise" : "color_uncheck_small" )+" a-click  d-flex align-items-center justify-content-center mr-3 "}>
                                <i class="fas fa-check text-white " style={{fontSize:"10px"}} ></i>
                            </div>
                        </div>
                        <div className=" d-flex mt-3 font-weight-bold font-20 mb-2">Character (Rewrite)</div>
                    </div>
                    
                    <div className="">
                        <textarea  
                        placeholder="กรุณาระบุข้อความ..." 
                        value = { this.state.detail_story_value } 
                        onChange={(event)=>this.setState({detail_story_value:event.target.value}) }   
                        className=" color-header-board font-weight-bold p-3  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
                    </div>
                </div>  


          }

          <div className="content mx-auto">
              {
                  this.state.status_confirm_card == false  ? 
                        <React.Fragment> 
                            <button onClick={()=>{
                                rn.hide_popup("new_card")
                                this.setState({
                                    detail_story_value:"",
                                    status_confirm_card:false,
                                    status_rewrite:true,
                                    select_story:""
                                });
                            }} style={{"minWidth":"130px"}} 
                            className="text-white btn share-top mr-2">
                                ปิด
                            </button>
                            <button 
                            onClick={()=> {
                                 this.setState({status_confirm_card:true});
                            }} 
                            style={{"minWidth":"130px"}} 
                            className="text-white bg-blue btn ">  
                                ยืนยันรายการ  
                            </button>
                        </React.Fragment>   

                  : 

                  <React.Fragment> 
                  <button onClick={()=>{
                      this.setState({
                          status_rewrite:true,
                          select_story:"",
                          detail_story_value:"",
                          status_confirm_card:false});
                      rn.hide_popup("new_card")
                  }} style={{"minWidth":"130px"}} 
                  className="text-white btn share-top mr-2">
                      ปิด
                  </button>
                  <button 
                  onClick={()=> {
                        let token = {...this.state.store};
                        
                        token[this.state.select_story].status = true 
                        token[this.state.select_story].txt =  (this.state.status_rewrite == false  ? this.state.detail_story_value : "bolw" )   
                        console.log(token,'token');

                        this.setState({
                            story:  token  , 
                            select_story:"",
                            detail_story: this.state.detail_story_value, 
                            status_confirm_card:false,
                            status_rewrite:true,
                            detail_story_value:""},()=>{
                                rn.hide_popup("new_card")
                            });
                  }} 
                  style={{"minWidth":"130px"}} 
                  className="text-white bg-blue btn ">  
                      ยืนยันรายการ  
                  </button>
              </React.Fragment>                 
              }
          </div>
        </Popup>



        <Popup id="update_card" > 
          <div></div>
            <div  className="content mx-auto">
                <h3>Story Bowl - Card</h3>
                <div className="mt-3">
                    <select  
                    disabled={true}
                    value={this.state.select_story} onChange={(event)=>  this.setState({select_story:event.target.value}) } 
                    name="" 
                    id="" 
                    className="form-control bd-lock-line-active color-header-board">
                        <option value=""  className="font-weight-bold color-header-board " >กรุณาเลือกหัวข้อ...</option>
                        {
                            this.state.store.map((content,index)=>{
                                return (
                                    <option value={index}>
                                        {content.title}
                                    </option>
                                )
                            })
                        }
                    </select>
                </div>
                <div className="mt-3 pl-3">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
                </div>

                <div className=" d-flex mt-3 font-weight-bold font-20 mb-2">
                    <div className="d-inline d-flex align-items-center " >
                        <div 
                            onClick={()=> this.setState({status_rewrite:true})} 
                            className={(this.state.status_rewrite  ? "valid_premise" : "color_uncheck_small" )+" a-click  d-flex align-items-center justify-content-center mr-3 "}>
                            <i class="fas fa-check text-white " style={{fontSize:"10px"}} ></i>
                        </div>
                    </div>                        
                    Character (Lock Story Line Pipe Tools)
                </div>  
                <div className=" p-3 mh-150 font-weigh-bold bd-8 bd-lock-line-active color-header-board">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis alias inventore exercitationem accusantium. Alias sequi similique sed tempora repudiandae velit fugit suscipit, optio neque sunt illum eveniet aut provident nesciunt?
                </div>

                <div className="d-flex">
                    <div className="d-inline d-flex align-items-center " >
                        <div 
                            onClick={()=> this.setState({status_rewrite:false})} 
                            className={(this.state.status_rewrite==false  ? "valid_premise" : "color_uncheck_small" )+" a-click  d-flex align-items-center justify-content-center mr-3 "}>
                            <i class="fas fa-check text-white " style={{fontSize:"10px"}} ></i>
                        </div>
                    </div>
                    <div className=" d-flex mt-3 font-weight-bold font-20 mb-2">Character (Rewrite)</div>
                </div>
                
                <div className="">
                    <textarea  
                    placeholder="กรุณาระบุข้อความ..." 
                    value = { this.state.detail_story_value } 
                    onChange={(event)=>this.setState({detail_story_value:event.target.value}) }   
                    className=" color-header-board font-weight-bold p-3  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
                </div>
            </div>  
          <div className="content mx-auto">
            <div className="d-flex">
                <button 
                onClick={()=>{
                    let token = {...this.state.store};
                    // console.log(this.state.select_story,'this.state.select_story');
                    token[this.state.select_story].status = false    
                    this.setState({
                        story:  token  , 
                        select_story:"",
                        detail_story: this.state.detail_story_value, 
                        status_confirm_card:false,
                        status_rewrite:true,
                        detail_story_value:""},()=>{
                            rn.hide_popup("update_card")
                        });
                }}
                style={{"minWidth":"130px"}}
                className=" share-top-right btn font-weight-bold text-white mr-auto "> ลบการ์ด </button>
                <div className="d-inline">
                    <button onClick={()=>{
                        this.setState({
                            status_rewrite:true,
                            select_story:"",
                            detail_story_value:"",
                            status_confirm_card:false});
                        rn.hide_popup("update_card")
                    }} 
                    style={{"minWidth":"130px"}} 
                    className="text-white btn share-top mr-2">
                        ปิด
                    </button>
                    <button 
                    onClick={()=> {
                        let token = {...this.state.store};
                        token[this.state.select_story].status = true 
                        token[this.state.select_story].txt =  (this.state.status_rewrite == false  ? this.state.detail_story_value : "bolw" )   
                        this.setState({
                            story:  token  , 
                            select_story:"",
                            detail_story: this.state.detail_story_value, 
                            status_confirm_card:false,
                            status_rewrite:true,
                            detail_story_value:""},()=>{
                                rn.hide_popup("update_card")
                            });
                    }} 
                    style={{"minWidth":"130px"}} 
                    className="text-white bg-blue btn ">  
                        ยืนยันรายการ  
                    </button>    
                </div>
            </div>             
          </div>
        </Popup>



        <div className="content mx-auto mt-5 ">
            <div className="d-flex">
              <span className="mr-auto d-flex">
                  {/* <div className="circle-progress mr-3 text-center pt-2 position-relative "></div> */}
                  <div class="row d-flex justify-content-center align-items-center ">
                      <h3 className="font-weight-bold font-30">
                          Story Bowl
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


                    <div className="col-md-12 position-relative mb-3">
                        <div  style={{top:"-40px!important",zIndex:200 }} 
                         className=" t-0 top_menu position-absolute  bg-blue text-white tl-radius  p-2 pl-4  font-weight-bold mh-25  ">
                          View Detail
                        </div>
                        <div class=" card  mt-4 "  style={{borderRadius:"10px", zIndex:1 }}>
                            <div class="card-body pt-60 ">
                                <div className=" d-flex justify-content-between align-itmes-center">
                                    
                                    <div className="d-inline d-flex align-items-center " >
                                        <div 
                                        onClick={()=> {
                                            this.setState({status_show:!this.state.status_show},()=>{
                                                let txt_bowl = document.querySelectorAll('.txt-bowl');
                                                // if(this.state.status_show){
                                                //     txt_bowl.forEach(element => {
                                                //         rn.remove_class(element,'d-none')
                                                //     });
                                                // }
                                                // else {
                                                //     txt_bowl.forEach(element => {
                                                //         rn.add_class(element,'d-none')
                                                //     });
                                                // }
                                            })
                                            
                                        }} 
                                        className={
                                            (this.state.status_show ? "valid_story_bow" : "color_uncheck_small_high" )+" a-click  d-flex align-items-center justify-content-center mr-3 "
                                        }>
                                            <i class="fas fa-check text-white " style={{fontSize:"10px"}} ></i>
                                        </div>
                                        <span className="font-weight-bold">
                                            Title Bowl
                                        </span>
                                    </div>


                                    <div className="d-inline d-flex align-items-center " >
                                        <div 
                                        onClick={()=> 
                                            this.setState({status_act:!this.state.status_act},()=>{
                                                if(this.state.status_act){
                                                    let act_all = document.querySelector('.act_all');
                                                    console.log(act_all,'act_all');
                                                    rn.remove_class(act_all,'d-none')
                                                }
                                                else{
                                                    let act_all = document.querySelector('.act_all');
                                                    console.log(act_all,'act_all');
                                                    rn.add_class(act_all,'d-none')
                                                }
                                            })
                                    } 
                                        className={
                                            (this.state.status_act ? "valid_story_bow" : "color_uncheck_small_high" )+" a-click  d-flex align-items-center justify-content-center mr-3 "
                                        }>
                                            <i class="fas fa-check text-white " style={{fontSize:"10px"}} ></i>
                                        </div>
                                        <span className="font-weight-bold">
                                            Act Number
                                        </span>
                                    </div>


                                    <div className="d-inline d-flex align-items-center " >
                                        <div 
                                        onClick={()=> {
                                            this.setState({status_card: !this.state.status_card },()=>{
                                                  let card =  document.querySelectorAll('.card-box-show');
                                                 card.forEach(element => {
                                                    if(this.state.status_card == false ) {
                                                        rn.add_class(element,'d-none')
                                                    }
                                                    else {
                                                        rn.remove_class(element,'d-none')
                                                    }
                                                 });
                                                })
                                        } } 
                                        className={
                                            (this.state.status_card  ? "valid_story_bow" : "color_uncheck_small_high" )+" a-click  d-flex align-items-center justify-content-center mr-3 "
                                        }>
                                            <i class="fas fa-check text-white " style={{fontSize:"10px"}} ></i>
                                        </div>
                                        <span className="font-weight-bold">
                                            Card in Bowl
                                        </span>
                                    </div>
                                    
                                    <div className="d-flex align-items-center">
                                        <button className="btn mw-150 text-white share-top-right font-weight-bold mr-2 ">รับชมวีดีโอสอน</button>
                                        <button 
                                        onClick={(event)=>{
                                            rn.show_popup("new_card");
                                        }}
                                        className="btn mw-150 text-white bg-bow font-weight-bold">สร้าง Card ใหม่</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                      </div>
                <div className="text-center mb-4 position-relative  ">
                    <div className="act_all">
                        <div className="position-absolute font-30 txt-color-bow bow1">1</div>
                        <div className="position-absolute font-30 txt-color-bow bow2">2</div>
                        <div className="position-absolute font-30 txt-color-bow bow3">3</div>
                        <div className="position-absolute font-30 txt-color-bow bow4">4</div>
                        <div className="position-absolute font-30 txt-color-bow bow5">5</div>
                        <div className="position-absolute font-30 txt-color-bow bow6">6</div>
                        <div className="position-absolute font-30 txt-color-bow bow7">7</div>
                        <div className="position-absolute font-30 txt-color-bow bow8">8</div>
                        <div className="position-absolute font-30 txt-color-bow bow9">9</div>
                    </div>

                    <div className="position-relative txt-bowl">
                    
                    <div className="font-weight-bold font-25 color-og position-absolute txt-bowl debate">
                        {this.state.status_show ? "debate" : ""}
                        <CardBow myreact={this} store={this.state.store[1]}  />
                    </div>




                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl event_point_point">
                            {this.state.status_show ? "Event_point_point" : ""}
                            <CardBow myreact={this} store={this.state.store[0]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl Set_goal">
                            {this.state.status_show ? "Set_goal" : ""}
                            <CardBow myreact={this} store={this.state.store[2]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl Setting">
                            {this.state.status_show ? "Setting" : ""}
                            <CardBow myreact={this} store={this.state.store[3]}  />
                        </div>
                        
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl First_Seq">
                            First_Seq
                            <CardBow myreact={this} store={this.state.store[4]}  />
                        </div>

                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl Character">
                            {this.state.status_show ? "Character" : ""}
                            <CardBow myreact={this} store={this.state.store[5]}  />
                        </div>
                        {/* {this.state.status_show ? "Character" : ""} */}
                        <div  className= {" z2 font-20 color-og position-absolute Appearance "+(this.state.status_show ? "" : "d-none")}>
                           <div className="mb-2">
                            Appearance
                           </div>
                           <div className="">
                            Role
                           </div>
                           <div className="">
                            POI
                           </div>
                           <div className="">
                            Dramatic Need
                           </div>
                           <div className="">
                            Hero Point
                           </div>                            
                           <div className="">
                            Weak Point
                           </div>
                           <div className="">
                            Condition
                           </div>
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl theme_state">
                            {this.state.status_show ? "Theme State" : ""}
                            <CardBow myreact={this} store={this.state.store[6]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl get_target">
                            {this.state.status_show ? "Get Target" : ""}
                            <CardBow myreact={this} store={this.state.store[7]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl rise_climax">
                            {this.state.status_show ? "Rise Climax" : ""}
                            <CardBow myreact={this} store={this.state.store[8]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl falling_climax">
                            {this.state.status_show ? "Falling Climax" : ""}
                            <CardBow myreact={this} store={this.state.store[9]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl apprve_lesson">
                            {this.state.status_show ? "Approve Lesson" : ""}
                            <CardBow myreact={this} store={this.state.store[10]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl true_climax">
                            {this.state.status_show ? "True Climax" : ""}
                            <CardBow myreact={this} store={this.state.store[11]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl solution">
                            {this.state.status_show ? "Solution" : ""}
                            <CardBow myreact={this} store={this.state.store[12]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl change">
                            {this.state.status_show ? "Change" : ""}
                            <CardBow myreact={this} store={this.state.store[13]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl final_seq">
                            {this.state.status_show ? "Final SEQ" : ""}
                            <CardBow myreact={this} store={this.state.store[14]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl mission_1">
                            {this.state.status_show ? "Mission 1" : ""}
                            <CardBow myreact={this} store={this.state.store[15]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl mission_2">
                            {this.state.status_show ? "Mission 2" : ""}
                            <CardBow myreact={this} store={this.state.store[16]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl mission_3">
                            {this.state.status_show ? "Mission 3" : ""}
                            <CardBow myreact={this} store={this.state.store[17]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl falling_dow">
                            <div className={ (this.state.status_show  ? "" :"d-none") } >
                                <div>Falling</div>
                                <div>Down</div>
                            </div>
                            <CardBow myreact={this} store={this.state.store[18]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl alone">
                            {this.state.status_show ? "Alone" : ""}
                            <CardBow myreact={this} store={this.state.store[19]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl find_the_way">
                            {this.state.status_show ? "Find The Way" : ""}
                            <CardBow myreact={this} store={this.state.store[20]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl learn_lesson">
                            <div className={(this.state.status_show ? "" : "d-none")}>
                                <div>Learn</div>
                                <div>Lesson</div>
                            </div>
                            <CardBow myreact={this} store={this.state.store[21]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl obstacle_2">
                            {this.state.status_show ? "Obstacle 2" : ""}
                            <CardBow myreact={this} store={this.state.store[22]}  />
                        </div>
                        <div className="font-weight-bold font-25 color-og position-absolute txt-bowl obstacle_1">
                            {this.state.status_show ? "Obstacle 1" : ""}
                            <CardBow myreact={this} store={this.state.store[23]}  />
                        </div>
                        <div className={" font-weight-bold font-25 color-og position-absolute txt-bowl turning_poin "+(this.state.status_show ? "" : "d-none") }>
                            <div className="mb-5">Turning Poin</div>
                            <CardBow myreact={this} store={this.state.store[24]}  />
                        </div>

                        <div className={" font-weight-bold font-25 color-og position-absolute txt-bowl bad_comming "+(this.state.status_show ? "" : "d-none") }>
                            <div className="mb-5">Bad Comming</div>
                            <CardBow myreact={this} store={this.state.store[25]}  />
                        </div>
                        <div className={" font-weight-bold font-25 color-og position-absolute txt-bowl stake_rise "+(this.state.status_show ? "" : "d-none") }>
                            <div className="mb-5">Stake Rise</div>
                            <CardBow myreact={this} store={this.state.store[26]}  />
                        </div>
                        {/* <div className=" font-25 color-og position-absolute Role">Role</div> */}
                    </div>
                    <img src={bow} alt="" />
                </div>

                <div className="d-flex justify-content-between mb-5">
                    <button className="btn bg-blue text-white font-weight-bold mw-150  bg-blue ">บันทึก</button>
                    <div className="d-inline">
                        <Link to="/plot">
                            <button className="btn bg-blue text-white font-weight-bold mw-150 bg-blue  mr-2 ">ย้อนกลับ</button>
                        </Link>
                        <Link to="/plot">
                            <button className="btn share-top text-white font-weight-bold mw-150">ยืนยันรายการ</button>
                        </Link>
                    </div>
                </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(HomeStoryBowL)