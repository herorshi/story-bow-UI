import React,{Component} from 'react';
import { Route,Link,withRouter } from 'react-router-dom'
import rn from '../../module-function/module-default'
import Popup from '../component/popup'
import  '../../stylesheet.css'
import HeaderPage from '../component/header_page'
import { arrow } from '@popperjs/core';
class CharacterProcess extends Component {
  state = {
    profile:"",
    profile_value:"",
    week_point:{show:"",save:"",bg:""},
    work:{show:"",save:"",bg:""},
    bio:{show:"",save:"",bg:""},
    home:{show:"",save:"",bg:""},
    psycho:{show:"",save:"",bg:""},
    play:{show:"",save:"",bg:""},
    social:{show:"",save:"",bg:""},
    hero:{show:"",save:"",bg:"",txt:"hero"},
    drama:{show:"",save:"",bg:"",txt:"drama"},
    poi:{show:"",save:"",bg:"",txt:"poi"},
    kind:{show:"",save:"",bg:"",txt:"kind"},
    summary:{show:"",save:"",bg:"",txt:"Summary Character's Maps"},
    key_popup:"profile",
    pov_data_genre:["1","2","3","4","5"],
    pov_data_ck_genre:[],
    theme_new:"",
    theme_new_value:"",
    status_theme_final:false
  };


  render() {
    return (
      <React.Fragment> 
        {/* <HeaderPage/> */}
        <Popup id="profile" > 
          <div></div>
          <div className="content mx-auto">
            <h3>Name Character</h3>
            <div className="mt-3 pl-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." value ={this.state.profile_value} 
                onChange={(event)=>this.setState({profile_value:event.target.value}) }   
                className="p-3 font-weight-bold color-header-board  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>
            <div className="mt-3 font-weight-bold font-18">
              Image Character
            </div>
            <div className="mt-4 d-flex justify-content-between ">
              <div className="profile-image a-click bd-8"></div>
              <div className="profile-image a-click bd-8"></div>
              <div className="profile-image a-click bd-8"></div>
              <div className="profile-image-add a-click bd-8  d-flex justify-content-center align-items-center">
                <div  className="text-center a-click">
                  <i  style={{"color":"#cbcbcb"}} class="fas fa-plus font-0 "></i>
                  <div style={{"color":"#cbcbcb"}}  className="font-18">
                    เลือกรูปภาพ
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div>
            <button onClick={()=> rn.hide_popup("profile")} style={{"minWidth":"130px"}} className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=>this.setState({profile:this.state.profile_value},()=>{ rn.hide_popup("profile")}) } style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ  </button>
          </div>
        </Popup>


        <Popup id="week_point" > 
          <div></div>
          <div className="content mx-auto">
            <h3>Weak Point</h3>
            <div className="mt-3 pl-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>

            <div className="font-18  mt-18 font-weight-bold">Weak Point - Character</div>
            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." 
                  value = {this.state.week_point.save} 
                  onChange={(event)=>{
                    let token = { ...this.state.week_point }
                    token.save = event.target.value
                    this.setState({week_point:token})
                  }}   
                className="p-3 font-weight-bold color-header-board  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>

            <div className=" mt-3 font-18  mt-18 font-weight-bold">Weak Point - Character</div>
            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." value ={this.state.week_point.bg} 
                onChange={(event)=>{
                  let token = { ...this.state.week_point }
                  token.bg = event.target.value
                  this.setState({week_point:token})
                }}   
                className="p-3 font-weight-bold color-header-board  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>
          </div>
          <div>
            <button onClick={()=>{
              this.setState({week_point:{...this.state.week_point,save:"",bg:""}});
              rn.hide_popup("week_point")
            }} style={{"minWidth":"130px"}} className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=>{
              let token = {...this.state.week_point}
              token.show = this.state.week_point.save
              this.setState({week_point:{show:this.state.week_point.save,save:"",bg:""}},()=>{rn.hide_popup("week_point")});
            } } style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ  </button>
          </div>
        </Popup>



        <Popup id="work" > 
          <div></div>
          <div className="content mx-auto">
            <h3>Work</h3>
            <div className="mt-3 pl-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>

            <div className="font-18  mt-18 font-weight-bold">Weak Point - Character</div>
            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." 
                  value = {this.state.work.save} 
                  onChange={(event)=>{
                    let token = { ...this.state.work }
                    token.save = event.target.value
                    this.setState({work:token})
                  }}   
                className="p-3 font-weight-bold color-header-board  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>

            <div className=" mt-3 font-18  mt-18 font-weight-bold">Weak Point - Character</div>
            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." value ={this.state.work.bg} 
                onChange={(event)=>{
                  let token = { ...this.state.work }
                  token.bg = event.target.value
                  this.setState({work:token})
                }}   
                className="p-3 font-weight-bold color-header-board  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>
          </div>
          <div>
            <button onClick={()=>{
              this.setState({work:{...this.state.work,save:"",bg:""}});
              rn.hide_popup("work")
            }} style={{"minWidth":"130px"}} className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=>{
              let token = {...this.state.work}
              token.show = this.state.work.save
              this.setState({work:{show:this.state.work.save,save:"",bg:""}},()=>{rn.hide_popup("work")});
            } } style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ  </button>
          </div>
        </Popup>




        <Popup id="bio" > 
          <div></div>
          <div className="content mx-auto">
            <h3>bio</h3>
            <div className="mt-3 pl-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>

            <div className="font-18  mt-18 font-weight-bold">Weak Point - Character</div>
            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." 
                  value = {this.state.bio.save} 
                  onChange={(event)=>{
                    let token = { ...this.state.bio }
                    token.save = event.target.value
                    this.setState({bio:token})
                  }}   
                className="p-3 font-weight-bold color-header-board  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>

            <div className=" mt-3 font-18  mt-18 font-weight-bold">Weak Point - Character</div>
            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." value ={this.state.bio.bg} 
                onChange={(event)=>{
                  let token = { ...this.state.bio }
                  token.bg = event.target.value
                  this.setState({bio:token})
                }}   
                className="p-3 font-weight-bold color-header-board  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>
          </div>
          <div>
            <button onClick={()=>{
              this.setState({bio:{...this.state.bio,save:"",bg:""}});
              rn.hide_popup("bio")
            }} style={{"minWidth":"130px"}} className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=>{
              let token = {...this.state.bio}
              token.show = this.state.bio.save
              this.setState({bio:{show:this.state.bio.save,save:"",bg:""}},()=>{rn.hide_popup("bio")});
            } } style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ  </button>
          </div>
        </Popup>


        <Popup id="home" > 
          <div></div>
          <div className="content mx-auto">
            <h3>home</h3>
            <div className="mt-3 pl-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>

            <div className="font-18  mt-18 font-weight-bold">Weak Point - Character</div>
            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." 
                  value = {this.state.home.save} 
                  onChange={(event)=>{
                    let token = { ...this.state.home }
                    token.save = event.target.value
                    this.setState({home:token})
                  }}   
                className="p-3 font-weight-bold color-header-board  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>

            <div className=" mt-3 font-18  mt-18 font-weight-bold">Weak Point - Character</div>
            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." value ={this.state.home.bg} 
                onChange={(event)=>{
                  let token = { ...this.state.home }
                  token.bg = event.target.value
                  this.setState({home:token})
                }}   
                className="p-3 font-weight-bold color-header-board  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>
          </div>
          <div>
            <button onClick={()=>{
              this.setState({home:{...this.state.home,save:"",bg:""}});
              rn.hide_popup("home")
            }} style={{"minWidth":"130px"}} className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=>{
              let token = {...this.state.home}
              token.show = this.state.home.save
              this.setState({home:{show:this.state.home.save,save:"",bg:""}},()=>{rn.hide_popup("home")});
            } } style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ  </button>
          </div>
        </Popup>


        <Popup id="psycho" > 
          <div></div>
          <div className="content mx-auto">
            <h3>psycho</h3>
            <div className="mt-3 pl-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>

            <div className="font-18  mt-18 font-weight-bold">Weak Point - Character</div>
            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." 
                  value = {this.state.psycho.save} 
                  onChange={(event)=>{
                    let token = { ...this.state.psycho }
                    token.save = event.target.value
                    this.setState({psycho:token})
                  }}   
                className="p-3 font-weight-bold color-header-board  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>

            <div className=" mt-3 font-18  mt-18 font-weight-bold">Weak Point - Character</div>
            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." value ={this.state.psycho.bg} 
                onChange={(event)=>{
                  let token = { ...this.state.psycho }
                  token.bg = event.target.value
                  this.setState({psycho:token})
                }}   
                className="p-3 font-weight-bold color-header-board  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>
          </div>
          <div>
            <button onClick={()=>{
              this.setState({psycho:{...this.state.psycho,save:"",bg:""}});
              rn.hide_popup("psycho")
            }} style={{"minWidth":"130px"}} className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=>{
              let token = {...this.state.psycho}
              token.show = this.state.psycho.save
              this.setState({psycho:{show:this.state.psycho.save,save:"",bg:""}},()=>{rn.hide_popup("psycho")});
            } } style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ  </button>
          </div>
        </Popup>




        <Popup id="play" > 
          <div></div>
          <div className="content mx-auto">
            <h3>play</h3>
            <div className="mt-3 pl-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>

            <div className="font-18  mt-18 font-weight-bold">Weak Point - Character</div>
            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." 
                  value = {this.state.play.save} 
                  onChange={(event)=>{
                    let token = { ...this.state.play }
                    token.save = event.target.value
                    this.setState({play:token})
                  }}   
                className="p-3 font-weight-bold color-header-board  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>

            <div className=" mt-3 font-18  mt-18 font-weight-bold">Weak Point - Character</div>
            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." value ={this.state.play.bg} 
                onChange={(event)=>{
                  let token = { ...this.state.play }
                  token.bg = event.target.value
                  this.setState({play:token})
                }}   
                className="p-3 font-weight-bold color-header-board  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>
          </div>
          <div>
            <button onClick={()=>{
              this.setState({play:{...this.state.play,save:"",bg:""}});
              rn.hide_popup("play")
            }} style={{"minWidth":"130px"}} className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=>{
              let token = {...this.state.play}
              token.show = this.state.play.save
              this.setState({play:{show:this.state.play.save,save:"",bg:""}},()=>{rn.hide_popup("play")});
            } } style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ  </button>
          </div>
        </Popup>
        


        <Popup id="social" > 
          <div></div>
          <div className="content mx-auto">
            <h3>social</h3>
            <div className="mt-3 pl-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>

            <div className="font-18  mt-18 font-weight-bold">Weak Point - Character</div>
            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." 
                  value = {this.state.social.save} 
                  onChange={(event)=>{
                    let token = { ...this.state.social }
                    token.save = event.target.value
                    this.setState({social:token})
                  }}   
                className="p-3 font-weight-bold color-header-board  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>

            <div className=" mt-3 font-18  mt-18 font-weight-bold">Weak Point - Character</div>
            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." value ={this.state.social.bg} 
                onChange={(event)=>{
                  let token = { ...this.state.social }
                  token.bg = event.target.value
                  this.setState({social:token})
                }}   
                className="p-3 font-weight-bold color-header-board  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>
          </div>
          <div>
            <button onClick={()=>{
              this.setState({social:{...this.state.social,save:"",bg:""}});
              rn.hide_popup("social")
            }} style={{"minWidth":"130px"}} className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=>{
              let token = {...this.state.social}
              token.show = this.state.social.save
              this.setState({social:{show:this.state.social.save,save:"",bg:""}},()=>{rn.hide_popup("social")});
            } } style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ  </button>
          </div>
        </Popup>



        <Popup id={this.state.key_popup} > 
          <div></div>
          <div className="content mx-auto">
            <h3>{this.state[this.state.key_popup]["txt"]}</h3>
            <div className="mt-3 pl-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>

            <div className="font-18  mt-18 font-weight-bold">Weak Point - Character</div>
            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." 
                  value = {this.state[this.state.key_popup] .save} 
                  onChange={(event)=>{
                    let token = { ...this.state[this.state.key_popup] }
                    token.save = event.target.value
                    this.setState({[this.state.key_popup]:token})
                  }}   
                className="p-3 font-weight-bold color-header-board  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>

            <div className=" mt-3 font-18  mt-18 font-weight-bold">Weak Point - Character</div>
            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." value ={this.state[this.state.key_popup].bg} 
                onChange={(event)=>{
                  let token = { ...this.state[this.state.key_popup] }
                  token.bg = event.target.value
                  this.setState({[this.state.key_popup]:token})
                }}   
                className="p-3 font-weight-bold color-header-board  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>
          </div>
          <div>
            <button onClick={()=>{
              this.setState({[this.state.key_popup]:{...this.state[this.state.key_popup],save:"",bg:""}});
              rn.hide_popup(this.state.key_popup)
            }} style={{"minWidth":"130px"}} className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=>{
              let token = {...this.state[this.state.key_popup]}
              token.show = this.state[this.state.key_popup].save
              this.setState({[this.state.key_popup]:{show:this.state[this.state.key_popup].save,save:"",bg:""}},()=>{rn.hide_popup(this.state.key_popup)});
            } } style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ  </button>
          </div>
        </Popup>



        <Popup id="type_pov" > 
          <div></div>
          <div>
            <h3>Genre</h3>
            <div className="mt-3 pl-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-3">
                <div class="card">
                  <div class="card-body">
                {
                    this.state.pov_data_genre.map((content,index)=>{
                        return(
                            <div className="d-flex align-items-center mb-4">
                                <div onClick={()=>{}} className="  px-0 a-click ">
                                    <div 
                                    onClick={()=>{
                                      rn.set_uni_array(this,"pov_data_ck_genre",(index+1).toString())  
                                    }}
                                    className={ 
                                        (this.state.pov_data_ck_genre.indexOf((index+1).toString()) >=0  ? " valid_premise_small " : "color_uncheck_small_high" )
                                        +" font-10  mr-3 ml-auto d-flex align-items-center justify-content-center " 
                                    }
                                    >
                                        <i class="fas fa-check text-white "></i>
                                    </div>
                                </div>
                                <label className="form-check-label color-header-board font-weight-bold" for="l_line2"> Type / POV {index+1}</label>
                            </div>
                        )
                    })   
                  }   
                  </div>
                </div>
            </div>
          </div>
          <div>
            <button onClick={()=> rn.hide_popup("type_pov")} style={{"minWidth":"130px"}} className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=> rn.hide_popup("type_pov") } style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ  </button>
          </div>
        </Popup>

        <Popup id="theme-final" > 
          <div></div>
          <div className="content mx-auto">
            
            <h3>Theme (Final)</h3>
            <div className="mt-3 pl-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>

            <div className=" d-flex align-items-center mt-3 font-weight-bold font-18"> 
              <div  onClick={()=>this.setState({status_theme_final:false})}  className="  px-0 a-click  mr-2 ">
                <div className={  (this.state.status_theme_final == false ? "valid_premise" : "color_uncheck_small") +" valid_premise  ml-auto   d-flex align-items-center justify-content-center mr-3  "}>
                <i class="fas fa-check text-white "></i>
                </div>
              </div>
              Final Theme (Original)
            </div>

            <div className=" p-3 bd-lock-line-active mt-3 mh-150 color-popup-gray w-100 font-weight-bold color-header-board bd-8">
              มีความรักต้องทำตามพ่อแม่สั่ง โดนดุโดนตีงานเยอะ เครียด
            </div>
                
            <div className=" d-flex align-items-center mt-3 font-weight-bold font-18"> 
              <div  onClick={()=>this.setState({status_theme_final:true})} className="  px-0 a-click  mr-2 ">
                <div className={  (this.state.status_theme_final == true ? "valid_premise" : "color_uncheck_small") +"  ml-auto   d-flex align-items-center justify-content-center mr-3  "}>
                  <i class="fas fa-check text-white "></i>
                </div>
              </div>
              Final Theme (New)
            </div>
            

            <div className="mt-3">
                <textarea  placeholder="กรุณาระบุข้อความ..." value ={this.state.theme_new_value} 
                onChange={(event)=>this.setState({ theme_new_value:event.target.value}) }   
                className="p-3   font-weight-bold color-header-board  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>
          </div>
          <div>
            <button onClick={()=> {
                this.setState({theme_new_value:""},()=>{
                  rn.hide_popup("theme-final")
                })
               }
            } style={{"minWidth":"130px"}} className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=>  {
               this.setState({theme_new:this.state.theme_new_value,theme_new_value:""});  
              rn.hide_popup("theme-final")
            } } style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ  </button>
          </div>
        </Popup>





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
                    <div onClick={()=>rn.show_popup("profile")} class=" a-click card  mt-5  test"  style={{borderRadius:"10px", zIndex:200 }}>
                      <div class="card-body">   
                        <div className="d-flex align-items-center ">
                          <span className="font-20 font-weight-bold mr-auto">
                            Name Character 
                          </span>
                          <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                        </div>
                        {
                          rn.ckvalue(this.state.profile) ?
                          <div className="  pl-2 font-weight-bold font-18 color-header-board ">
                            {this.state.profile}
                          </div>
                          :
                          <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                            กรุณาระบุข้อความ
                          </div>
                        }

                      </div>
                    </div>
                  </div>


                  <div className="col-md-4 a-click" >
                    <div className="row">
                      <div className="col-md-12 position-relative mb-3" onClick={()=>rn.show_popup("work")}>
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
                            {
                              rn.ckvalue(this.state.work.show) ? 
                              <div className="  pl-2 font-weight-bold font-18 color-header-board ">
                                {this.state.work.show}
                              </div>
                              :
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                            }

                              {/* <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div> */}
                          </div>
                        </div>
                      </div>



                      <div className="col-md-12 position-relative mb-3 a-click " onClick={()=>rn.show_popup("home")}
                       >
                        <div class="card"  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                Home
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                              {/* <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div> */}
                            {
                              rn.ckvalue(this.state.home.show) ? 
                              <div className="  pl-2 font-weight-bold font-18 color-header-board ">
                                {this.state.home.show}
                              </div>
                              :
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                            }
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 position-relative  a-click" onClick={()=>rn.show_popup("play")}>
                        <div class="card   "  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                play
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>

                            {
                              rn.ckvalue(this.state.play.show) ? 
                              <div className="  pl-2 font-weight-bold font-18 color-header-board ">
                                {this.state.play.show}
                              </div>
                              :
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                            }

                              {/* <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>




                  <div className="col-md-4 a-click" >
                    <div className="row">
                      <div className="col-md-12 position-relative mb-3" onClick={()=>rn.show_popup("bio")}>
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

                            {
                              rn.ckvalue(this.state.bio.show) ? 
                              <div className="  pl-2 font-weight-bold font-18 color-header-board ">
                                {this.state.bio.show}
                              </div>
                              :
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                            }

                              {/* <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div> */}
                          </div>
                        </div>
                      </div>



                      <div className="col-md-12 position-relative mb-3 a-click" onClick={()=>rn.show_popup("psycho")} >
                        <div class="card  m "  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                Psycho
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                            {
                              rn.ckvalue(this.state.psycho.show) ? 
                              <div className="  pl-2 font-weight-bold font-18 color-header-board ">
                                {this.state.psycho.show}
                              </div>
                              :
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                            }
                              {/* <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div> */}
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12 position-relative " onClick={()=>rn.show_popup("social")} >
                        <div class="card   "  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                Social
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                            {
                              rn.ckvalue(this.state.social.show) ? 
                              <div className="  pl-2 font-weight-bold font-18 color-header-board ">
                                {this.state.social.show}
                              </div>
                              :
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                            }
                              {/* <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  



          


                </div>
                
                  <div className="row mt-60">
                    <div className="col-md-6 position-relative a-click " >
                        <div    className=" t-37 top_menu position-absolute  bg-blue text-white tl-radius  p-2 pl-4  font-weight-bold mh-80  " style={{top:"-33px!important"}}>
                          Skill
                        </div>
                        <div onClick={()=>{this.setState({key_popup:"hero"},()=>{rn.show_popup(this.state.key_popup);})} 
                           

                         } class="card"  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                Hero Point
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                            {
                              rn.ckvalue(this.state.hero.show) ? 
                              <div className="  pl-2 font-weight-bold font-18 color-header-board ">
                                {this.state.hero.show}
                              </div>
                              :
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                            }

                              {/* <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div> */}
                          </div>
                        </div>
                    </div>                    
                    <div onClick={()=>rn.show_popup("week_point")} className="col-md-6 position-relative  a-click">
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
                            {
                              rn.ckvalue(this.state.week_point.show) ? 
                              <div className="  pl-2 font-weight-bold font-18 color-header-board ">
                                {this.state.week_point.show}
                              </div>
                              :
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                            }

                          </div>
                        </div>
                    </div>
                  </div>






                  <div className="row mt-60">
                    <div className="col-md-6 position-relative a-click">
                        <div    className=" t-37 top_menu position-absolute  bg-blue text-white tl-radius  p-2 pl-4  font-weight-bold mh-80  " style={{top:"-33px!important"}}>
                          Skill
                        </div>
                        <div  onClick={()=>rn.show_popup('type_pov')} class="card"  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                Type / POV
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                          </div>
                        </div>
                    </div>                    
                    <div className="col-md-6 position-relative a-click " 
                          onClick={()=>{this.setState({key_popup:"drama"},()=>{rn.show_popup(this.state.key_popup);})}}
                    >
                        <div    className=" t-37 top_menu position-absolute  bg-blue text-white tl-radius  p-2 pl-4  font-weight-bold mh-80  " style={{top:"-33px!important"}}>
                          Skill
                        </div>
                        <div class="card"  style={{borderRadius:"10px", zIndex:200 }}>
                          <div class="card-body">   
                            <div className="d-flex align-items-center ">
                              <span className="font-20 font-weight-bold mr-auto">
                                Dramatic Need
                              </span>
                              <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                            </div>
                            {
                              rn.ckvalue(this.state.drama.show) ? 
                              <div className="  pl-2 font-weight-bold font-18 color-header-board ">
                                {this.state.drama.show}
                              </div>
                              :
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                            }
                              {/* <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div> */}
                          </div>
                        </div>
                    </div>
                  </div>






                  <div className="row mt-60">
                    <div className="col-md-4 position-relative  a-click " 
                      onClick={()=>{this.setState({key_popup:"poi"},()=>{rn.show_popup(this.state.key_popup);})}}
                    >
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
                            {
                              rn.ckvalue(this.state.poi.show) ? 
                              <div className="  pl-2 font-weight-bold font-18 color-header-board ">
                                {this.state.poi.show}
                              </div>
                              :
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                            }
                              {/* <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div> */}
                          </div>
                        </div>
                    </div> 


                    <div onClick={()=>rn.show_popup("theme-final")} className="col-md-4 position-relative  a-click">
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
                            {
                              rn.ckvalue(this.state.theme_new) && this.state.status_theme_final == true ? 
                              <div className="  pl-2 font-weight-bold font-18 color-header-board  mh-150 " >
                                {this.state.theme_new}
                              </div>
                              :
                              <div className="  pl-2 font-weight-bold font-18 color-header-board  mh-150 " >
                                นักเรียนทุกคนต้องทำตามคำสั่งสอนของผู้ปกครอง แต่บางครั้งผู้ใหญ่ก็ดุด่าเราทำร้ายร่างกายนักเรียน อีกทั้งงานเยอะเลอะเครียด
                              </div>
                            }

                          </div>
                        </div>
                    </div>


                    <div className="col-md-4 position-relative  a-click"
                    onClick={()=>{this.setState({key_popup:"kind"},()=>{rn.show_popup(this.state.key_popup);})}}
                    >
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
                            {
                              rn.ckvalue(this.state.kind.show) ? 
                              <div className="  pl-2 font-weight-bold font-18 color-header-board ">
                                {this.state.kind.show}
                              </div>
                              :
                              <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div>
                            }
                              {/* <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                กรุณาระบุข้อความ
                              </div> */}
                          </div>
                        </div>
                    </div>


                  </div>



              </div>
              
            </div>

            <div  className=" pt_summary card color-blue-light border-0 mb-4" style={{borderRadius:"7px"}}>
              <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 position-relative a-click " onClick={()=>{this.setState({key_popup:"summary"},()=>{rn.show_popup(this.state.key_popup);})}} > 
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
                              {
                                rn.ckvalue(this.state.summary.show) ? 
                                <div className="  pl-2 font-weight-bold font-18 color-header-board ">
                                  {this.state.summary.show}
                                </div>
                                :
                                <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                  กรุณาระบุข้อความ
                                </div>
                              }
                                {/* <div className="  pl-2 font-weight-bold font-18 color-header-board op-harf">
                                  กรุณาระบุข้อความ
                                </div> */}
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
                  <Link to="/character">
                    <button className="btn mw-150 text-white share-top mr-2">ย้อนกลับ</button>
                  </Link>
                  <Link to="/lock_story_line">
                    <button className="btn mw-150 text-white share-top-right mr-2">ยืนยันรายการ</button>  
                  </Link>
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