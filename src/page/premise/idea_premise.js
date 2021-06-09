import React,{Component} from 'react';
import rn from '../../module-function/module-default'
import CONS from '../../global-variable'
import   '../../stylesheet.css'
import Popup from '../component/popup'
import Header from '../component/header_page'
import { Route,Link,withRouter } from 'react-router-dom'
import { HexGrid, Layout, Hexagon, Text, GridGenerator, HexUtils } from 'react-hexgrid';
import configs from './configurations';
import './App.css';
import './index.css'

class IdeaPremise extends Component {
  
  constructor(props){
    super(props);
    const config = configs['hexagon'];
    const generator = GridGenerator.getGenerator(config.map);
    const hexagons = generator.apply(this, config.mapProps);
    this.state = { hexagons, config };
  }
  
  changeType(event) {
    const name = event.currentTarget.value;
    const config = configs[name];
    const generator = GridGenerator.getGenerator(config.map);
    const hexagons = generator.apply(this, config.mapProps);
    this.setState({ hexagons, config });
  }
  

   componentDidMount(){
      // console.log(document.querySelectorAll('.hexagon-group'));
      // console.log(document.querySelectorAll('.hexagon-group')[18]);
      document.querySelectorAll('.hexagon-group').forEach(element => {
        // console.log(element.children[0].children[1] ,'1111');
        element.children[0].children[1].style.fill = "white";
        element.style.fill = "rgb(255, 255, 255)"
      });
      document.querySelectorAll('.hexagon-group')[18].style.fill = "#2d8cd6"; 
      let middle = document.querySelectorAll('.hexagon-group')[18].children[0].children[1]    
      // console.log(middle,'children');
      middle.style.fill = 'white';
      middle.innerHTML = 'นักเรียน';
      // document.querySelectorAll('.hexagon-group')[18].style.color = "white";      
   }

  state = {};
  save_word = ()=>{
        //  console.log(document.querySelectorAll('.hexagon-group'));
         let target_data = document.querySelectorAll('.hexagon-group')[window.txt]
         let area_value = document.getElementById('area_value')
        //  console.log(area_value);
        //  console.log(window.txt);
        //  console.log(target_data,'target_data');
        //  console.log(area_value.value);
         target_data.children[0].children[1].innerHTML = area_value.value;
         target_data.style.fill =  "#ec9441";
         rn.hide_popup("idea-premise");
         area_value.value = ""
  }
  cancel_word = ()=>{
    document.getElementById('area_value').value = ""
    rn.hide_popup("idea-premise") 
  }
  render() {
    const { hexagons, config } = this.state;
    const layout = config.layout;
    const size = { x: layout.width, y: layout.height };
    console.log(React.version);
    return (
      <React.Fragment> 
        <Header/>

        <Popup id="idea-premise" > 
          <div></div>
          <div>
            <h3>Idea Premise</h3>
            <div className=" font-18 mt-3 pl-3  font-weight-bold ">
                กรุณาระบุคำสั้นๆ
            </div>
            <div className="mt-3">
                <textarea    placeholder="กรุณาระบุข้อความ..."  
                // onChange={(event)=>this.setState({value_title:event.target.value}) }   
                id="area_value"
                className="  font-weight-bold p-3  bd-blue w-100 bd-radius-10" name=""  cols="30" rows="8"></textarea>
            </div>
          </div>
          <div>
            <button onClick={()=> this.cancel_word()} style={{"minWidth":"130px"}} className="text-white btn share-top mr-2">ปิด</button>
            <button onClick={()=> this.save_word() } style={{"minWidth":"130px"}} className="text-white bg-blue btn ">ยืนยันรายการ  </button>
          </div>
        </Popup>

        <div className="content mx-auto ">
            <div className="content mx-auto mt-5 ">
                <div className="d-flex">
                    <span className="mr-auto">
                        <h3 className="font-weight-bold">Idea Premise</h3>
                    </span>
                    
                    <div>
                        <button style={{"minWidth":"150px"}} className="text-white btn share-top mr-2">share</button>
                        <button style={{"minWidth":"200px"}} className="text-white btn share-top-right">รับชมวิดีโอสอน</button>
                    </div>
                </div>
                <div className=" my-4 font-weight-bold ">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                    quos alias qui magnam recusandae ducimus, soluta tempora aut neque sapiente. 
                    Maxime, natus. Tempore, dolore quas magnam commodi cupiditate expedita aliquid.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
                    quos alias qui magnam recusandae ducimus, soluta tempora aut neque sapiente. 
                    Maxime, natus. Tempore, dolore quas magnam commodi cupiditate expedita aliquid.
                </div>

               
            </div>
        </div>
        <div  className="bg-premise-txt  mh-200 text-center  mb-4 ">
        <HexGrid width={config.width} height={config.height}>
          <Layout size={size} flat={layout.flat} spacing={layout.spacing} origin={config.origin}>
            {
              hexagons.map((hex, i) => (
                <Hexagon onClick={(event)=>{
                  rn.show_popup('idea-premise');      
                  let element = event.currentTarget.children[0]
                  let token_element = element.children[0]
                  let txt = token_element.nextElementSibling
                  window.txt = txt.innerHTML;
                  console.log(window.txt,'window.txt');
                  // txt.innerHTML = 'TEST';
                  // txt.style.fill = "black"
                  // element.style.fill =  "#ec9441";
                }}  key={config.mapProps + i} q={hex.q} r={hex.r} s={hex.s}>
                  <Text>{ i }</Text>
              ]
                  111
                </Hexagon>
              ))
            }
          </Layout>
        </HexGrid>
        </div>
        <div className="content mx-auto mb-4 ">
            <div className="d-flex">
              <button className="mw-180  btn bg-blue font-weight-bold text-white mr-auto">บันทึก</button>
              <div className="d-inline">
                <Link to="/coverage">
                  <button className=" btn mw-150 share-top text-white font-weight-bold mr-2 ">ย้อนกลับ</button>  
                </Link>
                <Link to="/premise">
                  <button className=" btn mw-180 bg-blue font-weight-bold text-white mr-auto">ถัดไป</button>
                </Link>
              </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(IdeaPremise);