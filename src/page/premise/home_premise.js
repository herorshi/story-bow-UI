import React,{Component} from 'react';
import { Route,Link,withRouter } from 'react-router-dom'
import '../../stylesheet.css'
import rn from '../../module-function/module-default'
import Popup from '../component/popup'
import { HexGrid, Layout, Hexagon, Text, GridGenerator, HexUtils } from 'react-hexgrid';
import configs from './configurations';
import './App.css';
import './index.css'
import './hight-popup.css'
class HomePremise extends Component {
  
  constructor(props){
    super(props);
    const config = configs['hexagon'];
    const generator = GridGenerator.getGenerator(config.map);
    const hexagons = generator.apply(this, config.mapProps);
    this.state = { hexagons, config,  
    
      data_premise:[ 
        [
          {title:"จะเกิดอะไรขึ้นถ้า",txt:""}, 
          {title:"",txt:""},
          {title:"",txt:""}
        ],
      ],
      check_value:0,
      select_data:0,
      t1:true,
      t2:true
    };
  }
  
  changeType(event) {
    const name = event.currentTarget.value;
    const config = configs[name];
    const generator = GridGenerator.getGenerator(config.map);
    const hexagons = generator.apply(this, config.mapProps);
    this.setState({ hexagons, config });
  }
  
  state = {

  };


  plus_idea = ()=>{
        this.setState({
          data_premise: [...this.state.data_premise  ,
          [
            {title:"จะเกิดอะไรขึ้นถ้า",txt:""}, 
            {title:"",txt:""},
            {title:"",txt:""}
          ]
        ]  });
  }

  save_word = ()=>{
     let token_premise = [...this.state.data_premise];
     token_premise[this.state.select_data][0] = {title:"จะเกิดอะไรขึ้นถ้า",txt:"รุ่นพี่"} 
    //  [
    //   {title:"จะเกิดอะไรขึ้นถ้า",txt:"รุ่นพี่"}, 
    //   {title:"",txt:""},
    //   {title:"",txt:""}
    //  ]
     console.log(token_premise,'token_premise');
      this.setState({data_premise:token_premise});
      this.setState({t1:true});
      rn.hide_popup("idea-premise-title")
  }

  save_detail = (status)=>{
    if(status==2) {
      let token_premise = [...this.state.data_premise];
      token_premise[this.state.select_data][1]['title'] =  document.getElementById('title_two').value   
      token_premise[this.state.select_data][1]['txt'] =  "ทำงาน"
      console.log(token_premise,'token_premise');
      this.setState({data_premise:token_premise,t2:true,t1:true});
       
       document.getElementById('title_two').value = "";
       rn.hide_popup("idea-premise-detail");
    }
    else if(status==3) {
      let token_premise = [...this.state.data_premise];
      token_premise[this.state.select_data][2]['title'] =  document.getElementById('title_two').value   
      token_premise[this.state.select_data][2]['txt'] =  "ที่ไหน"
      console.log(token_premise,'token_premise');
       this.setState({data_premise:token_premise});
       this.setState({data_premise:token_premise,t2:true,t1:true});
       document.getElementById('title_two').value = "";
       rn.hide_popup("idea-premise-detail");
    }

 }


  componentDidMount(){
    document.querySelectorAll('.hexagon-group').forEach(element => {
      element.children[0].children[1].style.fill = "white";
      element.style.fill = "rgb(255, 255, 255)"
    });
    document.querySelectorAll('.hexagon-group')[18].style.fill = "#2d8cd6"; 
    let middle = document.querySelectorAll('.hexagon-group')[18].children[0].children[1]    
    middle.style.fill = 'white';
    middle.innerHTML = 'นักเรียน';
 }



  render() {
    const { hexagons, config } = this.state;
    const layout = config.layout;
    const size = { x: layout.width, y: layout.height };
    return (
      <React.Fragment> 
        <div id="header_blue"></div>
        <div id="word-high" style={{ overflow:"scroll" }} className="backdrop-high  d-none ">
          <div className="rounded content mx-auto mb-4 "> 
            <div className=" rounded card t1 position-relative border-0" style={{marginTop:"1%"}}>
            <div className="  card-header  border-blue  border-0  "   style={{  minHeight:"30px"}}></div>
              <div className=" rounded card-body bg-premise-txt mh-400 text-center">
              <HexGrid width={config.width} height={config.height}>
                <Layout size={size} flat={layout.flat} spacing={layout.spacing} origin={config.origin}>
              {
                hexagons.map((hex, i) => (
                  <Hexagon onClick={(event)=>{
                    // rn.show_popup('idea-premise');      
                    // let element = event.currentTarget.children[0]
                    // let token_element = element.children[0]
                    // let txt = token_element.nextElementSibling
                    // window.txt = txt.innerHTML;
                    // console.log(window.txt,'window.txt');
                    // txt.innerHTML = 'TEST';
                    // txt.style.fill = "black"
                    // element.style.fill =  "#ec9441";
                  }}  key={config.mapProps + i} q={hex.q} r={hex.r} s={hex.s}>
                    <Text>{ i }</Text>
                ]
                    
                  </Hexagon>
                ))
              }
              </Layout>
            </HexGrid>
              
              </div>
              
              <div className="mt-4 mb-2 ">
                <div className="content mx-auto mb-4 ">
                  <div className="d-flex">
                    
                    <span className="font-weight-bold font-18 mr-auto">
                      กรุณาเลือกคำจากช่องว่าง Premise
                    </span>
                     <div className="d-inline">
                       {/* <button className="btn text-white font-weight-bold bg-bow mr-2"></button> */}
                       <button className="btn text-white font-weight-bold font-18 share-top mr-2">ย้อนกลับ</button>
                       <button onClick={()=>{
                         console.log( this.state.select_data ,'select_data');
                         this.setState({t1:false,t2:false},()=>{console.log(this.state.t1,'t1');});
                         rn.add_class(document.getElementById('word-high'),'d-none')
                       }} className="btn text-white font-weight-bold font-18 bg-blue mr-2">ยืนยันรายการ</button>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </div>
        <Popup id="idea-premise-title" > 
          <div></div>
          <div>
            <h3>Idea Premise</h3>

            <div className="content mx-auto mb-4 ">
              <div className=" font-18 mt-3  mb-2  font-weight-bold ">หัวข้อ</div>
              <div className="bd-8 bd-blue ml-3  font-weight-bold pl-4 bg-card-board  p-2"> จะเกิดอะไรขึ้น... ถ้า </div>
            </div>

            <div className="content mx-auto mb-4 ">
              <div className=" font-18 mt-3  mb-2  font-weight-bold ">เนื้อหา</div>
              {/*  */}
              {
                this.state.t1  ? 
                <div onClick={()=> {rn.remove_class(document.getElementById('word-high'),'d-none')}}
                 className=" font-18 color-gray font-weight-bold d-flex justify-content-center align-items-center a-click mh-100 bd-8 bd-blue ml-3  font-weight-bold pl-4 bg-card-board  p-2">
                  <i class="fas fa-plus mr-4  " style={{fontSize:"25px"}} ></i>  กดเพื่อเลือกเนื้อหาจาก Premise
                </div>
                :
                <div  className=" font-18 ml-3   text-dark font-weight-bold  a-click mh-100 bd-8 bd-blue   font-weight-bold pl-4 bg-card-board  p-2">
                   รุ่นพี่
                </div>
              }
            </div>
            <div className="mt-3">
            </div>
          </div>
          <div>
            <button onClick={()=> rn.hide_popup("idea-premise-title")} style={{"minWidth":"130px"}} className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=> this.save_word() } style={{"minWidth":"130px"}} className="text-white bg-blue btn "> ยืนยันรายการ  </button>
          </div>
        </Popup>


        <Popup id="idea-premise-detail" > 
          <div></div>
          <div>
            <h3>Idea Premise</h3>
            
            <div className="content mx-auto mb-4 ">
              <div className=" font-18 mt-3  mb-2  font-weight-bold ">หัวข้อ</div>
              <input id="title_two" type="text" className=" w-100 bd-8 bd-blue ml-3  font-weight-bold pl-4   p-2"   />
              <div className=" font-18 mt-3  mb-2  font-weight-bold ">เนื้อหา</div>

              { 
                this.state.t2 ?  
                <div 
                onClick={()=> {rn.remove_class(document.getElementById('word-high'),'d-none')}}
                className=" w-100  font-18 color-gray font-weight-bold d-flex justify-content-center align-items-center a-click mh-100 bd-8 bd-blue ml-3  font-weight-bold pl-4   p-2">
                  <i class="fas fa-plus mr-4  " style={{fontSize:"25px"}} ></i>  กดเพื่อเลือกเนื้อหาจาก Premise
              </div> :
              <div  className=" font-18 ml-3   text-dark font-weight-bold  a-click mh-100 bd-8 bd-blue   font-weight-bold pl-4 bg-card-board  p-2">
                ทดสอบ
              </div>
              }             
            </div>
          </div>
          <div>
            <button onClick={()=>{
              document.getElementById('title_two').value = "";
              rn.hide_popup("idea-premise-detail")
            }} style={{"minWidth":"130px"}} className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=>this.save_detail(window.detail) } style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ  </button>
          </div>
        </Popup>
        

        <div className="content mx-auto ">
            <div className="d-flex my-4  justify-content-between">
                <div className=" d-inline font-30 font-weight-bold mr-auto">
                    Idea Premise
                </div>
                <div className="d-inline">
                    <button className=" mr-2 btn mw-180 share-top-right text-white font-weight-bold">
                        รับชื่อวีดีโอสอน
                    </button>
                    <button   onClick={()=>this.plus_idea()} className=" mr-2 btn mw-180 bg-blue text-white font-weight-bold">
                        + เพิ่มรายการ
                    </button>
                    <Link to="/delete-premise">
                    <button className="  btn mw-180 bg-bow text-white font-weight-bold">
                        แก้ไขรายการ
                    </button>  
                    </Link>
                    
                </div>
            </div>
            <div class="card bg-card-board  mb-4 ">
              <div class="card-body " style={{ overflow:"scroll", maxHeight:"700px"}}>

                
                {
                  this.state.data_premise.map((content,index)=>{
                    return (
                      <React.Fragment> 
                            <div className="row">
                              <div className="col-md-1 text-center d-flex justify-content-end align-items-center a-click ">
                                  {
                                    this.state.check_value == index  ?  
                                  <div className="valid_premise d-flex align-items-center justify-content-center ">
                                      <i class="fas fa-check text-white "></i>
                                  </div> :
                                  <div onClick={()=>this.setState({check_value:index})} className="color_uncheck_small d-flex align-items-center justify-content-center">
                                      <i class="fas fa-check text-white "></i>
                                  </div>
                                  }
                              </div>
                              <div onClick={()=> {
                                this.setState({select_data:index});
                                rn.show_popup("idea-premise-title")
                              } }  className="col-md-3 a-click">
                                  <div class="card mh-120 shasow_card bd-8" >
                                    <div class="card-body">
                                      <div className="d-flex align-items-center justify-content-between">
                                          <div className="font-20 font-weight-bold"> จะเกิดอะไรขึ้น ถ้า</div>
                                          <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                      </div>
                                    {  
                                       
                                      rn.ckvalue(content[0]["txt"]) ? 
                                          <div className=" mt-3 font-20 font-weight-bold color-header-board ">
                                                {content[0]["txt"]}     
                                          </div> :
                                          <div className=" mt-3 font-20 font-weight-bold color-header-board op-harf">
                                            กรุณาระบุเนื้อหา        
                                          </div>  
                                    }
                                    </div>
                                  </div>
                              </div>


                              <div onClick={()=> {rn.show_popup('idea-premise-detail'); window.detail = 2; }} className="col-md-3 a-click">
                                  <div class="card mh-120 shasow_card bd-8" >
                                    <div class="card-body">
                                      { rn.ckvalue(content[1]["title"]) ?  
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="font-20 font-weight-bold  text-dark ">
                                            {content[1]["title"]}
                                          </div>
                                          <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                      : 
                                      <div className="d-flex align-items-center justify-content-between">
                                        <div className="font-20 font-weight-bold color_text_pm "> กรุณาระบุหัวข้อ</div>
                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                      </div>
                                      
                                      }

                                      {
                                        rn.ckvalue(content[1]["txt"]) ? 
                                        <div className=" mt-3 font-20 font-weight-bold color-header-board ">
                                          {content[1]["txt"]}
                                        </div>
                                        :
                                        <div className=" mt-3 font-20 font-weight-bold color-header-board op-harf">
                                          กรุณาระบุเนื้อหา
                                        </div>
                                      }
                                    </div>
                                  </div>
                              </div>

                              <div  onClick={()=>{rn.show_popup('idea-premise-detail'); window.detail = 3; }} className="col-md-5 a-click ">
                                  <div class="card mh-120 shasow_card bd-8" >
                                    <div class="card-body">
                                      
                                      {/* <div className="d-flex align-items-center justify-content-between">
                                          <div className="font-20 font-weight-bold color_text_pm "> กรุณาระบุหัวข้อ...</div>
                                          <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                      </div> */}
                                      { rn.ckvalue(content[2]["title"]) ?  
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="font-20 font-weight-bold  text-dark ">
                                            {content[2]["title"]}
                                          </div>
                                          <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                      : 
                                        <div className="d-flex align-items-center justify-content-between">
                                          <div className="font-20 font-weight-bold color_text_pm "> กรุณาระบุหัวข้อ</div>
                                          <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                      }

{
                                        rn.ckvalue(content[2]["txt"]) ? 
                                        <div className=" mt-3 font-20 font-weight-bold color-header-board ">
                                          {content[2]["txt"]}
                                        </div>
                                        :
                                        <div className=" mt-3 font-20 font-weight-bold color-header-board op-harf">
                                          กรุณาระบุเนื้อหา
                                        </div>
                                      }
                                      {/* <div className=" mt-3 font-20 font-weight-bold color-header-board op-harf">
                                          กรุณาระบุเนื้อหา...
                                      </div> */}
                                    </div>
                                  </div>
                              </div>
                          </div>
                          <div className="w-100 line_gray my-4 "></div>
                      </React.Fragment>
                    )
                  })  
                }
              </div>
            </div>
            <div className="font-30 font-weight-bold mt-5 mb-2">Final Premise</div>
            <div className=" color-blue-light mb-3 p-3 ">
                <div class="card bg-card-board">
                  <div class="card-body">
                    <div className=" font-20 font-weight-bold mb-2">จะเกิดอะไรขึ้น... ถ้า</div>
                    {
                      rn.ckvalue(
                        this.state.data_premise[this.state.check_value][0]['txt'] &&
                        this.state.data_premise[this.state.check_value][1]['title'] &&
                        this.state.data_premise[this.state.check_value][1]['txt'] &&
                        this.state.data_premise[this.state.check_value][2]['title'] &&
                        this.state.data_premise[this.state.check_value][2]['txt'] 
                      ) ? 
                      <div className=" pl-5 font-20 font-weight-bold mb-2 color-header-board ">
                        {
                          this.state.data_premise[this.state.check_value][0]['txt']+" "+
                          this.state.data_premise[this.state.check_value][1]['txt']+" "+
                          this.state.data_premise[this.state.check_value][2]['txt']
                        }
                      </div>                      
                      :
                      <div className=" pl-5 font-20 font-weight-bold mb-2 color-header-board op-harf">
                        จะเกิดอะไรขึ้น... ถ้า
                      </div>
                    }
                  </div>
                </div>
            </div>
            <div className="text-right mb-5">
                <Link to="/coverage">
                  <button className="btn text-white share-top mw-150 font-weight-bold  mr-2 ">
                      ย้อนกลับ
                  </button>                  
                </Link>
                <Link to="/coverage"> 
                  <button className="btn text-white   bg-blue mw-150 font-weight-bold">
                      ยืนยันรายการ
                  </button>                
                </Link>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(HomePremise);
