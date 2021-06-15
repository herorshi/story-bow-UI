import React,{Component} from 'react';
import rn from '../../module-function/module-default'
// import CONS  from '../../global-variable/'
import '../../stylesheet.css'
import { Route,Link,withRouter } from 'react-router-dom'
import HeaderPage from '../component/header_page'
import CONS from '../../global-variable/'
import axios from 'axios'
import './login.css'
import Swal from 'sweetalert2'
const HTTP = axios.create({
    withCredentials: true
  })
class LoginTemplate extends Component {
  state = {
      status:"login",
      register:{
          email:"",
          email_cf:"",
          name:"",
          surname:"",
          username:"",
          password:"",
          password_cf:""
      },
      login:{
          username:"",
          password:""
      }
  };

  save_member = ()=>{
    console.log(this.state.register,'register');    
    rn.PostData(CONS.URL_OTHER+"/register",this.state.register,"POST",200,"",false,true).then((value)=>{
        console.log(value,'value');
        if(value.status==200){
            Swal.fire({
                title: 'Success!',
                text: 'สมัครสมาชิกสำเร็จ',
                icon: 'success',
                confirmButtonText: 'Cool'
              }).then((value)=>{
                //   console.log('value');
                   this.setState({status:"login_into"});
              })
        }
    })
  }

  login_into = ()=>{
    rn.PostData(CONS.URL_OTHER+"/api/login",this.state.login,"POST",200,"",false,false).then((value)=>{
        console.log(value,'value');
      if(value.status===200){
          console.log(value.data.token,'data');
          localStorage.setItem('token',value.data.token);
          localStorage.setItem('id_member',value.data.data[0]['id_member']);

          window.location.href =  CONS.URL_LINK+"/board";
      }  
    })
    .catch((err)=>{
        console.log(err.message);
    })
  }

  
  set_value = (key,value,key_value)=>{
    let token = {...this.state[key]};
    token[key_value] = value;
    this.setState({[key]:token});
  } 

  set_status = (str)=>{
        this.setState({status:str});
  }

   componentDidMount(){

   }

  render() {
    return (
      <React.Fragment>
        <div className="bg_login position-relative">
            <div className="position_card">
                <div class=" mt-5">
                    <div class="card text-center card_login pt-0 border-top-0 border-right-0 border-left-0  ">
  
                        {
                            this.state.status == "login" &&
                            <React.Fragment> 
                                <div class="card-header p-0 border-bottom-0">
                                    <div className="d-flex menu_top border-bottom-0">
                                        <div    
                                        className=
                                        {
                                            
                                            (this.state.status == "login" ? "  bg-active text-white " : "bg-white text-dark")  +
                                            " a-click w-50    border-bottom-0 font-weight-bold  d-flex  justify-content-center align-items-center  "}> Login </div>
                                        
                                        <div  
                                        onClick={()=> this.setState({status:"register"})} 
                                        className= {   
                                            "  a-click w-50  border-bottom-0 font-weight-bold  d-flex  justify-content-center align-items-center "
                                            }> Register </div>
                                    </div>
                                </div>
                                <div className="card-body px-5" style={{minWidth:"400px",maxWidth:"400px",}} >
                                    <button className=" a-click w-100 mt-4 font-15 bg-button text-white font-weight-bold  border-0  p-2"  >
                                        สมัครบัญชีผู้ใช้ด้วยอีเมล
                                    </button>

                                    <div className=" w-100 my-4 d-flex align-items-center  justify-content-center ">
                                        <div className="line_or "></div>
                                            <div className="mx-2 font-10" >หรือ</div>
                                        <div className="line_or "></div>
                                    </div>

                                    <button className=" a-click mb-4 w-100 mt-4 font-15 bg-button text-white font-weight-bold  border-0  p-2"  >
                                        ดำเนินการต่อด้วย Facebook
                                    </button>

                                    <button className=" a-click mb-4 w-100 mt-4 font-15 bg-button text-white font-weight-bold  border-0  p-2"  >
                                        ดำเนินการต่อด้วย Line
                                    </button>

                                    <button onClick={()=>{
                                         this.setState({status:"login_into"});
                                    }} className=" a-click mb-4 w-100 mt-4 font-15 bg-button text-white font-weight-bold  border-0  p-2"  >
                                        ดำเนินการต่อด้วย Email
                                    </button>

                                    <div className="mb-4 font-10">
                                        <span className="mr-2">หากเป็นสมาชิกอยู่แล้ว</span> 
                                        <span className="font-10 a-click " style={{color:"#7AA4F7"}} >คลิกเพื่อเข้าสู่ระบบ</span>
                                    </div>
                                </div>                          
                            </React.Fragment>
                        }

{
                            this.state.status == "login_into" &&
                            <React.Fragment> 
                                <div class="card-header p-0 border-bottom-0">
                                    <div className="d-flex menu_top border-bottom-0">
                                        <div    
                                        className=
                                        {
                                            (this.state.status == "login_into" ? "  bg-active text-white " : "bg-white text-dark")  +
                                            " a-click w-50    border-bottom-0 font-weight-bold  d-flex  justify-content-center align-items-center  "}> Login </div>
                                        <div  
                                        onClick={()=>this.setState({status:"register"})} 
                                        className = 
                                            {   
                                                "a-click w-50  border-bottom-0 font-weight-bold  d-flex  justify-content-center align-items-center "
                                            }
                                        > Register </div>
                                    </div>
                                </div>


                                <div className="card-body d-flex flex-column px-5 justify-content-center " style={{minWidth:"400px",maxWidth:"400px",}} >
                                    <div className="">
                                        <input 
                                        value={this.state.login.username}
                                        onChange={(event)=>this.set_value("login",event.target.value,"username")}
                                        type="text" placeholder="Username" className=" px-2 w-100 border-left-0 border-top-0 border-right-0" />
                                    </div>

                                    <div className="mt-5">
                                        <input 
                                        value={this.state.login.password}
                                        onChange={(event)=>this.set_value("login",event.target.value,"password")}
                                        type="password" placeholder="Password" className=" px-2 w-100 border-left-0 border-top-0 border-right-0" />
                                    </div>

                                    <div className="mt-4 font-13 font-weight-bold text-left">
                                        <input type="checkbox" className=" mr-2"  />
                                        <span>Remember Me</span>
                                    </div>

                                    <div className="mt-4 font-15 fontweight-bold">
                                        Lost your password
                                    </div>

                                    <button onClick={()=>{
                                        this.login_into()
                                        // this.setState({status:"login_into"});
                                    }} 
                                    className=" a-click mx-auto mb-4  mt-4 font-15 bg-button text-white font-weight-bold w-75  border-0  p-2    " 
                                    style={{minHeight:"45px",minWidth:"50%"}}
                                    >
                                        Login
                                    </button>

                                    {/* <button onClick={async ()=>{
                                            
                                            axios.post('http://localhost:4000/send', {}, {
                                                headers: {
                                                'Content-Type': 'application/json'
                                                },
                                                withCredentials: true,
                                            },
                                            { withCredentials: true }
                                            )
                                                .then((res) => {
                                                console.log(res);
                                                })
                                                .catch((error) => {
                                                console.log(error);
                                                this.setState({
                                                    errorMessage: `Server Error`,
                                                    loading: false
                                                });
                                                });
                                    }} 
                                    className=" a-click mx-auto mb-4  mt-4 font-15 bg-button text-white font-weight-bold w-75  border-0  p-2    " 
                                    style={{minHeight:"45px",minWidth:"50%"}}
                                    >
                                        SEND
                                    </button>
                                    <button onClick={()=>{
                                            axios.post('http://localhost:4000/read', {}, {
                                                headers: {
                                                'Content-Type': 'application/json'
                                                },
                                                withCredentials: true,
                                            },
                                                { withCredentials: true }
                                            )
                                            .then((res) => {
                                            console.log(res);
                                            })
                                            .catch((error) => {
                                                console.log(error);
                                                this.setState({
                                                    errorMessage: `Server Error`,
                                                    loading: false
                                                });
                                            });
                                    }} 
                                    className=" a-click mx-auto mb-4  mt-4 font-15 bg-button text-white font-weight-bold w-75  border-0  p-2    " 
                                    style={{minHeight:"45px",minWidth:"50%"}}
                                    >
                                        READ
                                    </button> */}
                                </div>                          
                            </React.Fragment>
                        }





    {
        this.state.status == "register" &&
        <React.Fragment> 
            <div className="card-header p-0 border-bottom-0">
                <div className="d-flex menu_top border-bottom-0">
                    <div onClick={()=> this.setState({status:"login"})} className=" a-click w-50 bg-white   border-bottom-0 font-weight-bold  d-flex  justify-content-center align-items-center  "> Login </div>
                    <div onClick={()=> this.setState({status:"register"})} 
                    className= { (this.state.status == "register" ? "  bg-active text-white " : " bg-white text-dark ")+" a-click w-50  border-bottom-0 font-weight-bold  d-flex  justify-content-center align-items-center "}> Register </div>
                </div>
            </div>
            <div className="  register  font-13 card-body px-5" style={{minWidth:"400px",maxWidth:"400px"}} >
                <div className="text-center font-weight-bold font-18">
                    สมัครบัญชีผู้ใช้ด้วยอีเมล
                </div>
                <div className=" mt-1 text-center font-weight-bold font-13">กรุณากรอกข้อมูลให้ครบถ้วน</div>
                
                <div className="mt-4">
                    <input placeholder="อีเมล" 
                    value={this.state.register.email}
                    onChange={(event)=>this.set_value("register",event.target.value,"email") }
                    type="text" style={{borderRadius:"0px"}} className=" border-top-0 border-left-0 border-right-0 form-control" />
                </div>
                <div className="mt-4">
                    <input 
                    value={this.state.register.email_cf}
                    onChange={(event)=>this.set_value("register",event.target.value,"email_cf") }
                    placeholder="ยืนยันอีเมล" type="text" style={{borderRadius:"0px"}} className=" border-top-0 border-left-0 border-right-0 form-control" />
                </div>
                <div className="mt-4 d-flex">
                    <input 
                    value ={this.state.register.name}
                    onChange={(event)=>this.set_value("register",event.target.value,'name')}
                    placeholder="ชื่อจริง" type="text" style={{borderRadius:"0px"}} className=" mr-3 border-top-0 border-left-0 border-right-0 form-control" />
                    <input 
                    value ={this.state.register.suranme}
                    onChange={(event)=>this.set_value("register",event.target.value,'surname')}
                    placeholder="นามสกุล" type="text" style={{borderRadius:"0px"}} className=" border-top-0 border-left-0 border-right-0 form-control" />
                </div>
                <div className="mt-4">
                    <input 
                    value ={this.state.register.username}
                    onChange={(event)=>this.set_value("register",event.target.value,'username')}
                    placeholder="username" type="text" style={{borderRadius:"0px"}} className=" border-top-0 border-left-0 border-right-0 form-control" />
                
                </div>
                <div className="mt-4 d-flex">
                    <input 
                    type="password"
                    value ={this.state.register.password}
                    onChange={(event)=>this.set_value("register",event.target.value,'password')}
                    placeholder="password" 
                    style={{borderRadius:"0px"}} className=" mr-3 border-top-0 border-left-0 border-right-0 form-control" />
                    
                    <input 
                    type="password"
                    value ={this.state.register.password_cf}
                    onChange={(event)=>this.set_value("register",event.target.value,'password_cf')}
                    placeholder="re-password"  style={{borderRadius:"0px"}} 
                    className=" border-top-0 border-left-0 border-right-0 form-control" />
               
                </div>
                <div className="text-center text-danger font-weigh-bold mt-3 font-10 d-flex ">
                    เมื่อกดสมัครแล้วจะมีpopupเด้งขึ้นมาให้กดยืนยันผ่านอีเมล
                </div>
                <button
                onClick={()=>this.save_member()}
                className=" a-click  mt-4 w-100 mt-4 font-15 bg-button text-white font-weight-bold  border-0  p-2  "  >
                    สมัครบัญชีผู้ใช้
                </button>
                <div className="mt-4 font-10">
                    <span className="mr-2">หากเป็นสมาชิกอยู่แล้ว</span> 
                    <span className="font-10 a-click " style={{color:"#7AA4F7"}} >คลิกเพื่อเข้าสู่ระบบ</span>
                </div>
            </div>              
        </React.Fragment>
    }



                        {/* <div class="card-footer text-muted">
                            Footer
                        </div> */}
                    </div>
                </div>
                
            </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(LoginTemplate)