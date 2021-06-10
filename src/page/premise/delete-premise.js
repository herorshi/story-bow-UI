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
class DeletePremise extends Component {
  
  constructor(props){
    super(props);
    const config = configs['hexagon'];
    const generator = GridGenerator.getGenerator(config.map);
    const hexagons = generator.apply(this, config.mapProps);
    this.state = { hexagons, config,  
    
      data_premise:[ 
        [
          {title:"จะเกิดอะไรขึ้นถ้า",txt:"นักเรียน"}, 
          {title:"มีความรัก",txt:"กับคุณครู"},
          {title:"แล้วแต่",txt:"นักเรียนต้องสอบได้อันดับ1"}
        ],

        [
            {title:"จะเกิดอะไรขึ้นถ้า",txt:"นักเรียน"}, 
            {title:"มีความรัก",txt:"กับคุณครู"},
            {title:"แล้วแต่",txt:"นักเรียนต้องสอบได้อันดับ1"}
        ],

        [
            {title:"จะเกิดอะไรขึ้นถ้า",txt:"นักเรียน"}, 
            {title:"มีความรัก",txt:"กับคุณครู"},
            {title:"แล้วแต่",txt:"นักเรียนต้องสอบได้อันดับ1"}
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


  delete_premise = (index)=>{
      let token = [...this.state.data_premise];
      token.splice(index,1);
      this.setState({data_premise:token});
    //  array.splice(start_number,0,value_insert)
  }


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

  }
  render() {
    const { hexagons, config } = this.state;
    const layout = config.layout;
    const size = { x: layout.width, y: layout.height };
    return (
      <React.Fragment> 
        <Popup id="delete-premise"> 
          <div></div>
          <div>
            <div className="text-center">
                <h3>คุณต้องการลบ idea Premise ใช่หรือไม่</h3>
            </div>
            
            <div className="mt-3 pl-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-5 text-center">
                <div className="circle-delete-premise mx-auto  "></div>
            </div>
            <div className="mt-5 text-center">
                <button onClick={()=>rn.hide_popup("delete-premise")} className="text-white   mw-150 btn share-top font-weight-bold font-18 mr-2">ย้อนกลับ</button>
                <Link to="/premise">
                    <button className="text-white mw-150  btn bg-blue font-18 font-weight-bold">
                        ยืนยันรายการ
                    </button>  
                </Link>
            </div>
          </div>
        </Popup>
        <div id="header_blue"></div>
        <div className="content mx-auto ">
            <div className="d-flex my-4  justify-content-between">
                <div className=" d-inline font-30 font-weight-bold mr-auto">
                    Idea Premise
                </div>
                <div className="d-inline">
                    <button className=" mr-2 btn mw-180 share-top-right text-white font-weight-bold">
                        รับชื่อวีดีโอสอน
                    </button>
                    <button    className=" mr-2 btn mw-180 bg-blue text-white font-weight-bold">
                        + เพิ่มรายการ
                    </button>
                    <button className="  btn mw-180 bg-bow text-white font-weight-bold">
                        แก้ไขรายการ
                    </button>
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
                                    <div   onClick={()=>this.delete_premise(index)} className="delete_premise d-flex align-items-center justify-content-center ">
                                        <div className="bg-white" style={{ width:"10px" , height:"5px" }}></div>
                                    </div> 
                              </div>
                              <div  className="col-md-3 a-click">
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


                              <div  className="col-md-3 a-click">
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

                              <div   className="col-md-5 a-click ">
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
            <div className="text-right mb-5">
                <Link to="/coverage">
                  <button className="btn text-white share-top mw-150 font-weight-bold  mr-2 ">
                    ย้อนกลับ
                  </button>                  
                </Link>
                  <button onClick={()=>rn.show_popup("delete-premise")} className="btn text-white bg-blue mw-150 font-weight-bold">
                    ยืนยันรายการ
                  </button>    
            </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(DeletePremise);