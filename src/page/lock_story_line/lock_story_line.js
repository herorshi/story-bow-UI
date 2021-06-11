import React,{Component} from 'react';
import { Route,Link,withRouter } from 'react-router-dom'
import rn from '../../module-function/module-default'
import Popup from '../component/popup'
import '../../stylesheet.css'
class LockStoryLine extends Component {
  state = {
      location:{name:"",data:["","",""],txt:"",target:0},
      time:{name:"",data:["","",""],txt:"",target:0},
      terms:{name:"",data:["","",""],txt:"",target:0},
      have:{name:"",data:["","",""],txt:"",target:0},
      he_was:{name:"",data:["","",""],txt:"",target:0},
      but:{name:"",data:["","",""],txt:"",target:0},
      final:{name:"",data:["","",""],txt:"",target:0},
  };

  remove_card_black = (key)=>{
    
    let token = {...this.state[key]}
    token.data = token.data.filter((value,index)=>{
        if(index >2 ){
            if(rn.ckvalue(value)) {
                return true
            }
            else {
                return  false
            }
        }
        else {
            return true
        }
    })

    function getUnique(array){
        var uniqueArray = [];
        for(var value of array){
            if(uniqueArray.indexOf(value) === -1){
                uniqueArray.push(value);
            }
        }
        return uniqueArray;
    }
    
    token.data = getUnique(token.data)
    if(token.data.indexOf(token.txt)!= -1){
        console.log('');
        token.target = token.data.indexOf(token.txt);
    }
    //  console.log(token.data.indexOf(token.txt));
    //  console.log(token,'token');
     this.setState({[key]:token});
  }

  value_location = (str)=>{
    let token = {...this.state.location}
       token.txt = str;
        this.setState({location:token},()=>{
            
            rn.hide_popup("location");
            this.remove_card_black("location");
            
        });
  }
  ran_dom_str(key){
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    let token = {...this.state[key]}
    let number_random = getRandomInt( token.data.length  )
    token.target = number_random
    console.log(number_random);
    console.log(token.data[number_random],'number_random');
    token.txt = token.data[number_random]
    this.setState({[key]:token});
  }

  random_all = ()=>{
    //   let el = document.querySelectorAll('.box-random');
        // console.log(el,'el');
        this.ran_dom_str("location");
        this.ran_dom_str("time");
        this.ran_dom_str("terms");
        this.ran_dom_str("have");
        this.ran_dom_str("he_was");
        this.ran_dom_str("but");
        this.ran_dom_str("final");

  }
  
  value_time = (str)=>{
    let token = {...this.state.time}
    token.txt = str;
     this.setState({time:token},()=>{
        //  console.log(this.state.time,'time');
         this.remove_card_black("time");
        rn.hide_popup("time");
     });
  }

  value_terms = (str)=>{
    let token = {...this.state.terms}
    token.txt = str;
     this.setState({terms:token},()=>{
        //  console.log(this.state.terms,'terms');
        this.remove_card_black("terms");
        rn.hide_popup("terms");
     });
  }

  value_have = (str)=>{
    let token = {...this.state.have}
    token.txt = str;
    this.setState({have:token},()=>{
        //  console.log(this.state.have,'have');
        this.remove_card_black("have");
        rn.hide_popup("have");
    });
  }

  value_he_was = (str)=>{
    let token = {...this.state.he_was}
    token.txt = str;
    this.setState({he_was:token},()=>{
        //  console.log(this.state.he_was,'he_was');
        this.remove_card_black("he_was");
        rn.hide_popup("he_was");
    });
  }

  
  value_but = (str)=>{
    let token = {...this.state.but}
    token.txt = str;
    this.setState({but:token},()=>{
        //  console.log(this.state.but,'but');
        this.remove_card_black("but");
        rn.hide_popup("but");
    });
  }

  value_final = (str)=>{
    let token = {...this.state.final}
    token.txt = str;
    this.setState({final:token},()=>{
        //  console.log(this.state.final,'final');
        this.remove_card_black("final");
        rn.hide_popup("final");
    });
  }

  
  add_card = (key)=>{
    let token = {...this.state[key]}
    token.data.push("")
    this.setState({[key]:token});
  }


  
  remove_list = (str,index)=>{
    let str_token = this.state[str];
    console.log(str_token,'str_token');
    if(str_token.target == index){
        alert("ลบข้อความที่ไม่ได้เลือก");
        return
    }

    str_token.data.splice(index, 1)
    this.setState({[str]:str_token}); 
  }
  render() {
    return (
      <React.Fragment> 
        <div id="header_blue"></div>



        <Popup id="location" > 
          <div></div>
          <div>
            <h3>สถานที่</h3>
            <div className="mt-3 pl-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus,
             reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-3">
                {
                    this.state.location.data.map((content,index)=>{
                        return(
                            <div className="row mt-4">
                                <div onClick={()=>{
                                     this.setState({location:{...this.state.location,target:index}});
                                }} className="col-md-1  px-0 a-click ">
                                    <div className={ 
                                        (index == this.state.location.target ? " valid_premise_normal " : "color_uncheck_small_normal" )
                                        +" mt-4 ml-auto   d-flex align-items-center justify-content-center "
                                    }>
                                        <i class="fas fa-check text-white "></i>
                                    </div>
                                </div>
                                <div className="col-md-11">
                                    <div className={" card mh-100 bd-lock-line bd-8 "+ (index == this.state.location.target ? "bd-lock-line-active" : "bd-lock-line" ) } style={{ }} >
                                      <div className="card-body pt-2">
                                        <div className="d-flex">
                                            <div className="font-18 font-weight-bold text-dark mr-auto ">
                                                สถานที่
                                            </div>
                                            <span>
                                                <i  style={{"color":"#cbcbcb"}} class="a-click fas fa-pen mr-2 font-20"></i>
                                                <i onClick={()=>this.remove_list("location",index)} style={{"color":"#cbcbcb"}} class="a-click fas fa-backspace font-20"></i>
                                            </span>
                                        </div>
                                        <input 
                                        value={  this.state.location.data[index]  } 
                                        onChange={(event)=>{
                                            let token =  {...this.state.location} 
                                            this.state.location.data[index] = event.target.value
                                            this.setState({location:token});
                                        }}
                                        placeholder="กรุณาระบุข้อความ..." type="text" 
                                        className="font-weight-bold  placeo-blue color-header-board form-control border-0" />
                                      </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
          </div>
          <div className="d-flex">
            <button onClick={()=> this.add_card("location")} style={{"minWidth":"130px"}} className=" font-weight-bold text-white btn bg-bow mr-auto"> 
            <span className="font-weight-bold font-20 ">+</span> เพิ่มการ์ด</button>
            <div className="d-inline">
                <button onClick={()=> {
                    this.remove_card_black("location");
                    rn.hide_popup("location");
                }} style={{"minWidth":"130px"}}
                 className="font-weight-bold text-white btn share-top mr-2">ปิด</button>
                <button onClick={()=> this.value_location(this.state.location.data[this.state.location.target]) }
                 style={{"minWidth":"130px"}} 
                 className =" font-weight-bold text-white bg-blue btn ">  ยืนยันรายการ  </button>
            </div>
          </div>
        </Popup>





        <Popup id="time" > 
          <div></div>
          <div>
            <h3>ยุคสมัย</h3>
            <div className="mt-3 pl-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus,
             reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-3">
                {
                    this.state.time.data.map((content,index)=>{
                        return(
                            <div className="row mt-4">
                                <div onClick={()=>{
                                     this.setState({time:{...this.state.time,target:index}});
                                }} className="col-md-1  px-0 a-click ">
                                    <div className={ 
                                        (index == this.state.time.target ? " valid_premise_normal " : "color_uncheck_small_normal" )
                                        +" mt-4 ml-auto   d-flex align-items-center justify-content-center "
                                    }>
                                        <i class="fas fa-check text-white "></i>
                                    </div>
                                </div>
                                <div className="col-md-11">
                                    <div className={" card mh-100 bd-lock-line bd-8 "+ (index == this.state.time.target ? "bd-lock-line-active" : "bd-lock-line" ) } style={{ }} >
                                      <div className="card-body pt-2">
                                        <div className="d-flex">
                                            <div className="font-18 font-weight-bold text-dark mr-auto ">
                                                ยุคสมัย
                                            </div>
                                            <span>
                                                <i  style={{"color":"#cbcbcb"}} class="a-click fas fa-pen mr-2 font-20"></i>
                                                <i onClick={()=>this.remove_list("time",index)} style={{"color":"#cbcbcb"}} class="a-click fas fa-backspace font-20"></i>
                                            </span>
                                        </div>
                                        <input 
                                        value={  this.state.time.data[index]  } 
                                        onChange={(event)=>{
                                            let token =  {...this.state.time} 
                                            this.state.time.data[index] = event.target.value
                                            this.setState({time:token});
                                        }}
                                        placeholder="กรุณาระบุข้อความ..." type="text" 
                                        className="font-weight-bold  placeo-blue color-header-board form-control border-0" />
                                      </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
          </div>
          <div className="d-flex">
            <button onClick={()=> this.add_card("time")} style={{"minWidth":"130px"}} className=" font-weight-bold text-white btn bg-bow mr-auto"> 
            <span className="font-weight-bold font-20 ">+</span> เพิ่มการ์ด</button>
            <div className="d-inline">
                <button onClick={()=> {
                    this.remove_card_black("time");
                    rn.hide_popup("time")
                }
                    } style={{"minWidth":"130px"}} className="font-weight-bold text-white btn share-top mr-2">ปิด</button>
                <button onClick={()=> this.value_time(this.state.time.data[this.state.time.target]) } style={{"minWidth":"130px"}} className=" font-weight-bold text-white bg-blue btn ">ยืนยันรายการ  </button>
            </div>
          </div>
        </Popup>



        <Popup id="terms" > 
          <div></div>
          <div>
            <h3>เงื่อนไข</h3>
            <div className="mt-3 pl-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus,
             reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-3">
                {
                    this.state.terms.data.map((content,index)=>{
                        return(
                            <div className="row mt-4">
                                <div onClick={()=>{
                                     this.setState({terms:{...this.state.terms,target:index}});
                                }} className="col-md-1  px-0 a-click ">
                                    <div className={ 
                                        (index == this.state.terms.target ? " valid_premise_normal " : "color_uncheck_small_normal" )
                                        +" mt-4 ml-auto   d-flex align-items-center justify-content-center "
                                    }>
                                        <i class="fas fa-check text-white "></i>
                                    </div>
                                </div>
                                <div className="col-md-11">
                                    <div className={" card mh-100 bd-lock-line bd-8 "+ (index == this.state.terms.target ? "bd-lock-line-active" : "bd-lock-line" ) } style={{ }} >
                                      <div className="card-body pt-2">
                                        <div className="d-flex">
                                            <div className="font-18 font-weight-bold text-dark mr-auto ">
                                                เงื่อนไข
                                            </div>
                                            <span>
                                                <i  style={{"color":"#cbcbcb"}} class="a-click fas fa-pen mr-2 font-20"></i>
                                                <i onClick={()=>this.remove_list("terms",index)} style={{"color":"#cbcbcb"}} class="a-click fas fa-backspace font-20"></i>
                                            </span>
                                        </div>
                                        <input 
                                        value={  this.state.terms.data[index]  } 
                                        onChange={(event)=>{
                                            let token =  {...this.state.terms} 
                                            this.state.terms.data[index] = event.target.value
                                            this.setState({terms:token});
                                        }}
                                        placeholder="กรุณาระบุข้อความ..." type="text" 
                                        className="font-weight-bold  placeo-blue color-header-board form-control border-0" />
                                      </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
          </div>
          <div className="d-flex">
            <button onClick={()=> this.add_card("terms")} style={{"minWidth":"130px"}} className=" font-weight-bold text-white btn bg-bow mr-auto"> 
            <span className="font-weight-bold font-20 ">+</span> เพิ่มการ์ด</button>
            <div className="d-inline">
                <button onClick={()=>{
                    this.remove_card_black("terms");
                    rn.hide_popup("terms")
                }} style={{"minWidth":"130px"}} className="font-weight-bold text-white btn share-top mr-2">ปิด</button>
                <button onClick={()=> this.value_terms(this.state.terms.data[this.state.terms.target]) } style={{"minWidth":"130px"}} className=" font-weight-bold text-white bg-blue btn ">ยืนยันรายการ  </button>
            </div>
          </div>
        </Popup>




        <Popup id="have" > 
          <div></div>
          <div>
            <h3>มี</h3>
            <div className="mt-3 pl-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus,
             reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-3">
                {
                    this.state.have.data.map((content,index)=>{
                        return(
                            <div className="row mt-4">
                                <div onClick={()=>{
                                     this.setState({have:{...this.state.have,target:index}});
                                }} className="col-md-1  px-0 a-click ">
                                    <div className={ 
                                        (index == this.state.have.target ? " valid_premise_normal " : "color_uncheck_small_normal" )
                                        +" mt-4 ml-auto   d-flex align-items-center justify-content-center "
                                    }>
                                        <i class="fas fa-check text-white "></i>
                                    </div>
                                </div>
                                <div className="col-md-11">
                                    <div className={" card mh-100 bd-lock-line bd-8 "+ (index == this.state.have.target ? "bd-lock-line-active" : "bd-lock-line" ) } style={{ }} >
                                      <div className="card-body pt-2">
                                        <div className="d-flex">
                                            <div className="font-18 font-weight-bold text-dark mr-auto ">
                                                มี
                                            </div>
                                            <span>
                                                <i  style={{"color":"#cbcbcb"}} class="a-click fas fa-pen mr-2 font-20"></i>
                                                <i onClick={()=>this.remove_list("have",index)} style={{"color":"#cbcbcb"}} class="a-click fas fa-backspace font-20"></i>
                                            </span>
                                        </div>
                                        <input 
                                        value={  this.state.have.data[index]  } 
                                        onChange={(event)=>{
                                            let token =  {...this.state.have} 
                                            this.state.have.data[index] = event.target.value
                                            this.setState({have:token});
                                        }}
                                        placeholder="กรุณาระบุข้อความ..." type="text" 
                                        className="font-weight-bold  placeo-blue color-header-board form-control border-0" />
                                      </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
          </div>
          <div className="d-flex">
            <button onClick={()=> this.add_card("have")} style={{"minWidth":"130px"}} className=" font-weight-bold text-white btn bg-bow mr-auto"> 
            <span className="font-weight-bold font-20 ">+</span> เพิ่มการ์ด</button>
            <div className="d-inline">
                <button onClick={()=> {
                    this.remove_card_black("have");
                    rn.hide_popup("have")
                } } style={{"minWidth":"130px"}} className="font-weight-bold text-white btn share-top mr-2">ปิด</button>
                <button onClick={()=> this.value_have(this.state.have.data[this.state.have.target]) } style={{"minWidth":"130px"}} className=" font-weight-bold text-white bg-blue btn ">ยืนยันรายการ  </button>
            </div>
          </div>
        </Popup>




        <Popup id="he_was" > 
          <div></div>
          <div>
            <h3>เขาต้อง</h3>
            <div className="mt-3 pl-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus,
             reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-3">
                {
                    this.state.he_was.data.map((content,index)=>{
                        return(
                            <div className="row mt-4">
                                <div onClick={()=>{
                                     this.setState({he_was:{...this.state.he_was,target:index}});
                                }} className="col-md-1  px-0 a-click ">
                                    <div className={ 
                                        (index == this.state.he_was.target ? " valid_premise_normal " : "color_uncheck_small_normal" )
                                        +" mt-4 ml-auto   d-flex align-items-center justify-content-center "
                                    }>
                                        <i class="fas fa-check text-white "></i>
                                    </div>
                                </div>
                                <div className="col-md-11">
                                    <div className={" card mh-100 bd-lock-line bd-8 "+ (index == this.state.he_was.target ? "bd-lock-line-active" : "bd-lock-line" ) } style={{ }} >
                                      <div className="card-body pt-2">
                                        <div className="d-flex">
                                            <div className="font-18 font-weight-bold text-dark mr-auto ">
                                                เขาต้อง
                                            </div>
                                            <span>
                                                <i  style={{"color":"#cbcbcb"}} class="a-click fas fa-pen mr-2 font-20"></i>
                                                <i onClick={()=>this.remove_list("he_was",index)} style={{"color":"#cbcbcb"}} class="a-click fas fa-backspace font-20"></i>
                                            </span>
                                        </div>
                                        <input 
                                        value={  this.state.he_was.data[index]  } 
                                        onChange={(event)=>{
                                            let token =  {...this.state.he_was} 
                                            this.state.he_was.data[index] = event.target.value
                                            this.setState({he_was:token});
                                        }}
                                        placeholder="กรุณาระบุข้อความ..." type="text" 
                                        className="font-weight-bold  placeo-blue color-header-board form-control border-0" />
                                      </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
          </div>
          <div className="d-flex">
            <button onClick={()=> this.add_card("he_was")} style={{"minWidth":"130px"}} className=" font-weight-bold text-white btn bg-bow mr-auto"> 
            <span className="font-weight-bold font-20 ">+</span> เพิ่มการ์ด</button>
            <div className="d-inline">
                <button onClick={()=>
                    {
                        this.remove_card_black("he_was");
                        rn.hide_popup("he_was")
                    }
                    } style={{"minWidth":"130px"}} className="font-weight-bold text-white btn share-top mr-2">ปิด</button>
                <button onClick={()=> this.value_he_was(this.state.he_was.data[this.state.he_was.target]) } style={{"minWidth":"130px"}} className=" font-weight-bold text-white bg-blue btn ">ยืนยันรายการ  </button>
            </div>
          </div>
        </Popup>



        <Popup id="but" > 
          <div></div>
          <div>
            <h3>แต่</h3>
            <div className="mt-3 pl-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus,
             reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-3">
                {
                    this.state.but.data.map((content,index)=>{
                        return(
                            <div className="row mt-4">
                                <div onClick={()=>{
                                     this.setState({but:{...this.state.but,target:index}});
                                }} className="col-md-1  px-0 a-click ">
                                    <div className={ 
                                        (index == this.state.but.target ? " valid_premise_normal " : "color_uncheck_small_normal" )
                                        +" mt-4 ml-auto   d-flex align-items-center justify-content-center "
                                    }>
                                        <i class="fas fa-check text-white "></i>
                                    </div>
                                </div>
                                <div className="col-md-11">
                                    <div className={" card mh-100 bd-lock-line bd-8 "+ (index == this.state.but.target ? "bd-lock-line-active" : "bd-lock-line" ) } style={{ }} >
                                      <div className="card-body pt-2">
                                        <div className="d-flex">
                                            <div className="font-18 font-weight-bold text-dark mr-auto ">
                                                แต่
                                            </div>
                                            <span>
                                                <i  style={{"color":"#cbcbcb"}} class="a-click fas fa-pen mr-2 font-20"></i>
                                                <i onClick={()=>this.remove_list("but",index)} style={{"color":"#cbcbcb"}} class="a-click fas fa-backspace font-20"></i>
                                            </span>
                                        </div>
                                        <input 
                                        value={  this.state.but.data[index]  } 
                                        onChange={(event)=>{
                                            let token =  {...this.state.but} 
                                            this.state.but.data[index] = event.target.value
                                            this.setState({but:token});
                                        }}
                                        placeholder="กรุณาระบุข้อความ..." type="text" 
                                        className="font-weight-bold  placeo-blue color-header-board form-control border-0" />
                                      </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
          </div>
          <div className="d-flex">
            <button onClick={()=> this.add_card("but")} style={{"minWidth":"130px"}} className=" font-weight-bold text-white btn bg-bow mr-auto"> 
            <span className="font-weight-bold font-20 ">+</span> เพิ่มการ์ด</button>
            <div className="d-inline">
                <button onClick={()=>{
                    this.remove_card_black("but");
                    rn.hide_popup("but")
                }
                } style={{"minWidth":"130px"}} className="font-weight-bold text-white btn share-top mr-2">ปิด</button>
                <button onClick={()=> this.value_but(this.state.but.data[this.state.but.target]) } style={{"minWidth":"130px"}} className=" font-weight-bold text-white bg-blue btn ">ยืนยันรายการ  </button>
            </div>
          </div>
        </Popup>



        <Popup id="final" > 
          <div></div>
          <div>
            <h3>สุดท้ายแล้ว</h3>
            <div className="mt-3 pl-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus,
             reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-3">
                {
                    this.state.final.data.map((content,index)=>{
                        return(
                            <div className="row mt-4">
                                <div onClick={()=>{
                                     this.setState({final:{...this.state.final,target:index}});
                                }} className="col-md-1  px-0 a-click ">
                                    <div className={ 
                                        (index == this.state.final.target ? " valid_premise_normal " : "color_uncheck_small_normal" )
                                        +" mt-4 ml-auto   d-flex align-items-center justify-content-center "
                                    }>
                                        <i class="fas fa-check text-white "></i>
                                    </div>
                                </div>
                                <div className="col-md-11">
                                    <div className={" card mh-100 bd-lock-line bd-8 "+ (index == this.state.final.target ? "bd-lock-line-active" : "bd-lock-line" ) } style={{ }} >
                                      <div className="card-body pt-2">
                                        <div className="d-flex">
                                            <div className="font-18 font-weight-bold text-dark mr-auto ">
                                                สุดท้ายแล้ว
                                            </div>
                                            <span>
                                                <i  style={{"color":"#cbcbcb"}} class="a-click fas fa-pen mr-2 font-20"></i>
                                                <i onClick={()=>this.remove_list("final",index)} style={{"color":"#cbcbcb"}} class="a-click fas fa-backspace font-20"></i>
                                            </span>
                                        </div>
                                        <input 
                                        value={  this.state.final.data[index]  } 
                                        onChange={(event)=>{
                                            let token =  {...this.state.final} 
                                            this.state.final.data[index] = event.target.value
                                            this.setState({final:token});
                                        }}
                                        placeholder="กรุณาระบุข้อความ..." type="text" 
                                        className="font-weight-bold  placeo-blue color-header-board form-control border-0" />
                                      </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
          </div>
          
          <div className="d-flex">
            <button onClick={()=> this.add_card("final")} style={{"minWidth":"130px"}} className=" font-weight-bold text-white btn bg-bow mr-auto"> 
            <span className="font-weight-bold font-20 ">+</span> เพิ่มการ์ด</button>
            <div className="d-inline">
                <button onClick={()=>{
                    this.remove_card_black("final");
                    rn.hide_popup("final")
                }} style={{"minWidth":"130px"}} className="font-weight-bold text-white btn share-top mr-2">ปิด</button>
                <button onClick={()=> this.value_final(this.state.final.data[this.state.final.target]) } style={{"minWidth":"130px"}} className=" font-weight-bold text-white bg-blue btn ">ยืนยันรายการ  </button>
            </div>
          </div>
        </Popup>

        <Popup id="confirm-story-line"> 
          <div></div>
          <div>
            <div className="text-center">
                <h3>คุณต้องการเปลี่ยนแปลง Theme ในระบบ ใช่หรือไม่</h3>
            </div>
            <div className="mt-3 pl-3">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-5 text-center">
                <div className="circle-delete-premise mx-auto  "></div>
            </div>
            <div className="mt-5 text-center">
                <button onClick={()=>rn.hide_popup("confirm-story-line")} className="text-white   mw-150 btn share-top font-weight-bold font-18 mr-2">ย้อนกลับ</button>
                <Link to="/coverage">
                    <button  onClick={()=>{
                         document.getElementsByTagName("BODY")[0].style.overflow = "scroll"
                    }} className="text-white mw-150  btn bg-blue font-18 font-weight-bold">
                        ยืนยันรายการ
                    </button>  
                </Link>
            </div>
          </div>
        </Popup>




        <div className="content mx-auto mt-5 ">
            <div className="d-flex">
                <span className="mr-auto d-flex">
                    {/* <div className="circle-progress mr-3 text-center pt-2 position-relative "></div> */}
                    <div class="row d-flex justify-content-center align-items-center ">
                        <h3 className="font-weight-bold font-30">
                            Lock Story Line Pipe Tools
                        </h3>
                    </div>
                </span>
                <div>
                    {/* <button className="text-white btn share-top mr-2 font-weight-bold " style={{"minWidth":"150px"}} >share</button> */}

                    <button className="share-top text-white btn  font-weight-bold mr-2 " style={{"minWidth":"140px"}}>
                        Share
                    </button>                   
                    <button className="text-white btn share-top-right font-weight-bold  mr-2 " style={{"minWidth":"200px"}}>
                        รับชมวิดีโอสอน
                    </button>
                    <button onClick={()=>this.random_all()} className="text-white btn color-bowl font-weight-bold bg-bow " style={{"minWidth":"200px"}}>
                        สุ่มรายการทั้งหมด
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

            <div class="card bg-card-board  border-0  mb-5 ">
              <div class="card-body">
                <div className="row">
                    <div className="col-md-1 d-flex justify-content-end align-items-center ">
                        <div className="circle_line"></div>
                    </div>
                    <div onClick={(event)=> {
                        if(event.target.tagName == "I"){
                            if(rn.search_class(event.target,'fa-dropbox')    ){
                                this.ran_dom_str('location')
                                
                            }
                            return
                        }
                        // ran_dom_str
                        rn.show_popup("location")
                    }} className="col-md-3 a-click box-random ">
                        <div className="card mh-120 border-0 bd-8" >
                            <div class="card-body">
                                <div className = "d-flex align-items-center justify-content-between">
                                    <div className="font-20 font-weight-bold"> สถานที่ </div>
                                    <div className="d-inline">
                                        <i   style={{"color":"#cbcbcb"}} class="fab fa-dropbox  mr-2  "></i>
                                        <i  style={{"color":"#cbcbcb"}}  class="fas fa-pen a-click"></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    {
                                        rn.ckvalue(this.state.location.txt) ? 
                                        <div  className = "  mt-3 font-20 font-weight-bold color-header-board pl-3 " >{this.state.location.txt}</div>
                                        :
                                        <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div>
                                    }
                                    
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-4 a-click box-random" 
                    onClick={(event)=>{
                        if(event.target.tagName == "I"){
                            if(rn.search_class(event.target,'fa-dropbox')    ){
                                this.ran_dom_str('time')       
                            }
                            return
                        }
                        rn.show_popup("time")
                    }
                    }>
                        <div className="card mh-120 border-0 bd-8" >
                            <div class="card-body">
                                <div className = "d-flex align-items-center justify-content-between">
                                    <div className="font-20 font-weight-bold"> ยุคสมัย </div>
                                    <div className="d-inline">
                                        <i  style={{"color":"#cbcbcb"}}  class="fab fa-dropbox  mr-2 "></i>
                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    {/* <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div> */}
                                    {
                                        rn.ckvalue(this.state.time.txt) ? 
                                        <div  className = "  mt-3 font-20 font-weight-bold color-header-board pl-3 " >{this.state.time.txt}</div>
                                        :
                                        <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div>
                                    }
                                </div>
                            </div>
                        </div>                        
                    </div>
                    
                    <div className="col-md-4 a-click box-random"  onClick={(event)=>{
                        if(event.target.tagName == "I"){
                            if(rn.search_class(event.target,'fa-dropbox')    ){
                                this.ran_dom_str('terms')       
                            }
                            return
                        }
                        rn.show_popup("terms")
                    } }>
                        <div className="card mh-120 border-0 bd-8" >
                            <div class="card-body">
                                <div className = "d-flex align-items-center justify-content-between">
                                    <div className="font-20 font-weight-bold"> เงื่อนไข </div>
                                    <div className="d-inline">
                                        <i  style={{"color":"#cbcbcb"}}  class="fab fa-dropbox  mr-2"></i>
                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                {
                                    rn.ckvalue(this.state.terms.txt) ? 
                                    <div  className = "  mt-3 font-20 font-weight-bold color-header-board pl-3 " >{this.state.terms.txt}</div>
                                    :
                                    <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div>
                                }
                                    {/* <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div> */}
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>




                <div  className="row mt-4  a-click "   >
                    <div className="col-md-1 d-flex justify-content-end align-items-center ">
                        <div className="circle_line"></div>
                    </div>
                    <div className="col-md-11">
                        <div className="  tab_story_map tab_story tl-radius  p-1 font-weight-bold pl-3  d-inline-block  ">                          
                                <Link to="/character" replace>
                                    <div className="d-flex  pr-2 text-white ">
                                        <div className="span mr-auto">
                                            Character's Maps&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        </div>
                                        <div className=" d-inline span ml-3 text-white  ">
                                            <i   class="fas fa-pen a-click"></i>
                                        </div>
                                    </div>
                                </Link>

                        </div>
                        <div className="card mh-120 border-0 bd-8 box-random"  onClick={(event)=>{
                            if(event.target.tagName == "I"){
                                if(rn.search_class(event.target,'fa-dropbox')    ){
                                    this.ran_dom_str('have')       
                                }
                                return
                            }
                            rn.show_popup("have")
                        }} >
                            <div class="card-body">
                                <div className = "d-flex align-items-center justify-content-between">
                                    <div className="font-20 font-weight-bold"> มี </div>
                                    <div className="d-inline">
                                        <i  style={{"color":"#cbcbcb"}}  class="fab fa-dropbox  mr-2"></i>
                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    {/* <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div> */}
                                    {
                                        rn.ckvalue(this.state.have.txt) ? 
                                        <div  className = "  mt-3 font-20 font-weight-bold color-header-board pl-3 " >{this.state.have.txt}</div>
                                        :
                                        <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                

                <div  onClick={(event)=>{
                    if(event.target.tagName == "I"){
                        if(rn.search_class(event.target,'fa-dropbox')    ){
                            this.ran_dom_str('he_was')       
                        }
                        return
                    }
                    rn.show_popup("he_was")
                }} className="row mt-4 a-click box-random ">
                    <div className="col-md-1 d-flex justify-content-end align-items-center ">
                        <div className="circle_line"></div>
                    </div>
                    <div className="col-md-11">
                        <div className="card mh-120 border-0 bd-8" >
                            <div class="card-body">
                                <div className = "d-flex align-items-center justify-content-between">
                                    <div className="font-20 font-weight-bold"> เขาต้อง </div>
                                    <div className="d-inline">
                                        <i  style={{"color":"#cbcbcb"}}  class="fab fa-dropbox  mr-2"></i>
                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    {
                                        rn.ckvalue(this.state.he_was.txt) ? 
                                        <div  className = "  mt-3 font-20 font-weight-bold color-header-board pl-3 " >{this.state.he_was.txt}</div>
                                        :
                                        <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div>
                                    }
                                    {/* <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" row mt-4  a-click box-random" onClick={(event)=>{
                    if(event.target.tagName == "I"){
                        if(rn.search_class(event.target,'fa-dropbox')    ){
                            this.ran_dom_str('but')       
                        }
                        return
                    }
                    rn.show_popup("but")
                }}>
                    <div className="col-md-1 d-flex justify-content-end align-items-center ">
                        <div className="circle_line"></div>
                    </div>
                    <div className="col-md-11">
                        <div className="card mh-120 border-0 bd-8" >
                            <div class="card-body">
                                <div className = "d-flex align-items-center justify-content-between">
                                    <div className="font-20 font-weight-bold"> แต่ </div>
                                    <div className="d-inline">
                                        <i  style={{"color":"#cbcbcb"}}  class="fab fa-dropbox  mr-2"></i>
                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    {/* <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div> */}
                                    {
                                        rn.ckvalue(this.state.but.txt) ? 
                                        <div  className = "  mt-3 font-20 font-weight-bold color-header-board pl-3 " >{this.state.but.txt}</div>
                                        :
                                        <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row mt-4  a-click box-random" onClick={(event)=>{
                    if(event.target.tagName == "I"){
                        if(rn.search_class(event.target,'fa-dropbox')){
                            this.ran_dom_str('final')       
                        }
                        return
                    }
                    rn.show_popup("final")
                } } >
                    <div className="col-md-1 d-flex justify-content-end align-items-center ">
                        <div className="circle_line"></div>
                    </div>
                    <div className="col-md-11">
                        <div className="card mh-120 border-0 bd-8" >
                            <div class="card-body">
                                <div className = "d-flex align-items-center justify-content-between">
                                    <div className="font-20 font-weight-bold"> สุดท้ายแล้ว </div>
                                    <div className="d-inline">
                                        <i  style={{"color":"#cbcbcb"}}  class="fab fa-dropbox  mr-2"></i>
                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    {/* <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div> */}
                                    {
                                        rn.ckvalue(this.state.final.txt) ? 
                                        <div  className = "  mt-3 font-20 font-weight-bold color-header-board pl-3 " >{this.state.final.txt}</div>
                                        :
                                        <div  className = " op-harf mt-3 font-20 font-weight-bold color-header-board pl-3 " >กรุณาระบุข้อความ...</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-4 ">
                    <div className="col-md-1 d-flex justify-content-end align-items-center ">
                        <div className="circle_line"></div>
                    </div>
                    <div className="col-md-11">
                        <div className="card mh-120 border-0 bd-8  color-blue-light " >
                            <div class="card-body">
                                <div className = "d-flex align-items-center justify-content-between">
                                    <div className="font-20 font-weight-bold"> และเขาได้เรียนรู้ว่า (Final Theme) </div>
                                    <div className="d-inline">
                                        <i  style={{"color":"#cbcbcb"}}  class="fab fa-dropbox  mr-2"></i>
                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div  className = "  mt-3 font-20 font-weight-bold color-header-board pl-3 " >
                                        นักเรียนทุกคนทำตามคำสั่งสองของผู้ปกครอง แต่บางครั้งผู้ปกครองก็ดุด่า และทำร้ายร่างกายนักเรียน อีกทัังงานเยอะและเครียด
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




              </div>
            </div>
            <div className="d-flex mb-5 ">
                <button className="btn mw-150 mr-auto text-white bg-blue ">บันทึกข้อมูล</button>
                <div className="d-inline-block">
                    <Link to="/coverage">
                        <button  className="btn mw-150  share-top text-white bg-blue mr-2 ">ย้อนกลับ</button>
                    </Link>
                    <button onClick={()=>rn.show_popup("confirm-story-line")} className="btn mw-150  text-white bg-blue  ">ยืนยันรายการ</button>
                    
                </div>
            </div>
            
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(LockStoryLine)