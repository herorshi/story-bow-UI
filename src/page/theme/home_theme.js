import React,{Component} from 'react';
import { Route,Link,withRouter } from 'react-router-dom'
import '../../stylesheet.css'
import { CircularProgressbar } from 'react-circular-progressbar';
import rn from '../../module-function/module-default'
import Popup from '../component/popup'

class HomeTheme extends Component {
  
    state = {
      positive1:["",""],
      positive2:["",""],
      positive3:["",""],
      select_positive:1,
      txt_positive:"",
      positive_check:[],



      negative1:["",""],
      negative2:["",""],
      negative3:["",""],
      select_negative:1,
      txt_negative:"",
      negative_check:[],
      my_check:1,
      my_data:[""],
      final_theme:"",
      value_final_theme:"",
      theme_generate:""
   };

   componentDidMount(){
        this.setState({my_data:["นักเรียน","มีความรัก","กับคุณครู"]});
   }

  positive_plus = (number = 1)=>{
        
    if(number==1){
        let token = [...this.state.positive1];
        token.push("");
        this.setState({positive1:token});
    }
    else if(number==2){
        let token = [...this.state.positive2];
        token.push("");
        this.setState({positive2:token});
    }
    else if(number==3){
        let token = [...this.state.positive3];
        token.push("");
        this.setState({positive3:token});
    }
  }

  negative_plus = (number = 1)=>{
    if(number==1){
        let token = [...this.state.negative1];
        token.push("");
        this.setState({negative1:token});
    }
    else if(number==2){
        let token = [...this.state.negative2];
        token.push("");
        this.setState({negative2:token});
    }
    else if(number==3){
        let token = [...this.state.negative3];
        token.push("");
        this.setState({negative3:token});
    }
  }

  positive_set_txt(index1,index2,event){
       let tag =  event.target.tagName;
       
    if(tag=="I"){
        if(rn.ckvalue(this.state.negative_check)) {
            alert("มีการเลือกเป็น Negative แล้ว");
            return
        }

        if(index1 == "1"){
            if(!rn.ckvalue(this.state.positive1[index2])){
               alert("กรุณาระบุข้อความ") 
               return 
            }
        }
        else if(index1 == "2"){
            if(!rn.ckvalue(this.state.positive2[index2])){
                alert("กรุณาระบุข้อความ") 
                return 
                }
        }
        else if(index1 == "3"){
            if(!rn.ckvalue(this.state.positive3[index2])){
                alert("กรุณาระบุข้อความ") 
                return 
                }
        }

        console.log(event.target);
        let circle_element = event.target.parentElement
        console.log(circle_element,'circle_element');
        rn.set_uni_array(this,"positive_check",index1+"_"+index2)
        
        let str = "";
        this.state.positive_check.forEach(element => {
            let token_check = element.split("_");
            console.log(token_check);
            if(token_check[0]=="1") {
                str+= this.state.positive1[token_check[1]]+" " 
            }
            else if(token_check[0]=="2") {
                str+= this.state.positive2[token_check[1]]+" "
            }
            else if(token_check[0]=="3") {
                str+= this.state.positive3[token_check[1]]+" "
            }            
        });
         console.log(str,'str');
         this.setState({theme_generate:str});
        

        setTimeout(() => {
            console.log(this.state.positive_check,'positive_check');
        }, 1000);
    }
    else {
        this.setState({select_positive:{colum:index1,row:index2}},()=>{ 
            console.log(this.state.select_positive);
            rn.show_popup('set_positive');
        });
        console.log(index1,index2);
    }
  }

negative_set_txt(index1,index2,event){
    let tag =  event.target.tagName;
    if(tag=="I"){
        if(rn.ckvalue(this.state.positive_check)){
            alert("มีการเลือก Positive แล้ว");
            return
        }
        
        if(index1 == "1"){
             if(!rn.ckvalue(this.state.negative1[index2])){
                alert("กรุณาระบุข้อความ") 
                return 
             }
        }
        else if(index1 == "2"){
            if(!rn.ckvalue(this.state.negative2[index2])){
                alert("กรุณาระบุข้อความ") 
                return 
             }
        }
        else if(index1 == "3"){
            if(!rn.ckvalue(this.state.negative3[index2])){
                alert("กรุณาระบุข้อความ") 
                return 
             }
        }

        console.log(event.target);
        let circle_element = event.target.parentElement
        console.log(circle_element,'circle_element');
        rn.set_uni_array(this,"negative_check",index1+"_"+index2)
        let str = ""
        this.state.negative_check.forEach(element => {
            // console.log(element,'element');
            let token_check = element.split("_");
            console.log(token_check);
            if(token_check[0]=="1") {
                str+= this.state.negative1[token_check[1]]+" " 
            }
            else if(token_check[0]=="2") {
                str+= this.state.negative2[token_check[1]]+" "
            }
            else if(token_check[0]=="3") {
                str+= this.state.negative3[token_check[1]]+" "
            }            
        });
        console.log(str,'str');
        this.setState({theme_generate:str});
        // console.log(this.state.negative_check,'this.state.negative_check');        
        setTimeout(() => {
            // console.log(this.state.negative_check,'negative_check');
        }, 1000);
        
    }
    else {
        this.setState({select_negative:{colum:index1,row:index2}},()=>{ 
            console.log(this.state.select_negative);
            rn.show_popup('set_negative');
        });
        console.log(index1,index2);
    }
}



  positive_txt_confirm(str){
    // console.log(str,'str');
    // console.log(this.state.select_positive,'select_positive');
    rn.hide_popup("set_positive")
    if(this.state.select_positive.colum=="1"){
        let pt1 = [...this.state.positive1]
        pt1[this.state.select_positive.row] = str
         this.setState({
             positive1:pt1,
             txt_positive:""
        });
    }

    else if(this.state.select_positive.colum=="2"){
        let pt2 = [...this.state.positive2]
        pt2[this.state.select_positive.row] = str
         this.setState({
             positive2:pt2,
             txt_positive:""
        });
    }

    else if(this.state.select_positive.colum=="3"){
        let pt3 = [...this.state.positive3]
        pt3[this.state.select_positive.row] = str
         this.setState({
             positive3:pt3,
             txt_positive:""
        });
    }
  }



  negative_txt_confirm(str){

    rn.hide_popup("set_negative")
    
    if(this.state.select_negative.colum=="1"){
        let pt1 = [...this.state.negative1]
        pt1[this.state.select_negative.row] = str
         this.setState({
             negative1:pt1,
             txt_negative:""
        });
    }

    else if(this.state.select_negative.colum=="2"){
        let pt2 = [...this.state.negative2]
        pt2[this.state.select_negative.row] = str
         this.setState({
             negative2:pt2,
             txt_negative:""
        });
    }

    else if(this.state.select_negative.colum=="3"){
        let pt3 = [...this.state.negative3]
        pt3[this.state.select_negative.row] = str
         this.setState({
             negative3:pt3,
             txt_negative:""
        });
    }
  }


  render() {
    return (
      <React.Fragment> 
        <div id="header_blue"></div>

        <Popup id="set_positive" > 
          <div></div>
          <div className="content mx-auto">
            <h3>Positive POV</h3>
            <div className="mt-3 pl-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-3">
                <textarea   placeholder = "กรุณาระบุข้อความ..." 
                value ={this.state.txt_positive} 
                onChange={(event)=>this.setState({txt_positive:event.target.value})}   
                className=" color-header-board font-weight-bold p-3  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="8"></textarea>
            </div>
          </div>
          <div className="text-center pt-0 ">
            <button onClick={()=> {
                this.setState({txt_positive:""},()=>{rn.hide_popup("set_positive")});
            }} style={{"minWidth":"130px"}} 
               className="text-white btn share-top mr-2">ปิด
            </button>
            <button 
                onClick={()=> this.positive_txt_confirm(this.state.txt_positive) } 
                style={{"minWidth":"130px"}}
                className="text-white bg-blue btn ">ยืนยันรายการ  
            </button>
          </div>
        </Popup>


        <Popup id="set_negative" > 
          <div></div>
          <div className="content mx-auto">
            <h3>negative POV</h3>
            <div className="mt-3 pl-3">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            <div className="mt-3">
                <textarea   placeholder = "กรุณาระบุข้อความ..." 
                value ={this.state.txt_negative} 
                onChange={(event)=>this.setState({txt_negative:event.target.value})}   
                className=" color-header-board font-weight-bold p-3  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="8"></textarea>
            </div>
          </div>
          <div className="text-center pt-0 ">
            <button onClick={()=> {
                this.setState({txt_negative:""},()=>{rn.hide_popup("set_negative")});
            }} style={{"minWidth":"130px"}} 
               className="text-white btn share-top mr-2">ปิด
            </button>
            <button 
                onClick={()=> this.negative_txt_confirm(this.state.txt_negative) } 
                style={{"minWidth":"130px"}}
                className="text-white bg-blue btn ">ยืนยันรายการ  
            </button>
          </div>
        </Popup>


        <Popup id="con_firm_theme" > 
          <div></div>
          <div className="content mx-auto">
            <h3>
                Final Theme
            </h3>
            <div className="mt-3 ">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur eaque aspernatur dicta eveniet obcaecati saepe distinctio nostrum, minus consequuntur natus, reprehenderit voluptate quas deserunt eum totam? Maiores quibusdam laboriosam perferendis.
            </div>
            
            <div className="mt-3 font-weight-bold font-18">Generate Theme</div>
            <div className="mt-3">
                <div 
                // disabled={true}
                // placeholder = "กรุณาระบุข้อความ..." 
                // value ={this.state.txt_negative} 
                // onChange={(event)=>this.setState({txt_negative:event.target.value})}   
                className=" color-header-board font-weight-bold p-3  bd-blue w-100 bd-radius-10 mh-150 color-popup-gray" ></div>
            </div>



            <div className="mt-3 font-weight-bold font-18">Final Theme</div>
            <div className="mt-3">
                <textarea   placeholder = "กรุณาระบุข้อความ..." 
                value ={this.state.value_final_theme} 
                onChange={(event)=>this.setState({value_final_theme:event.target.value})}   
                className=" color-header-board font-weight-bold p-3  bd-blue w-100 bd-radius-10" name="" id="" cols="30" rows="5"></textarea>
            </div>


          </div>
          <div className="text-right pt-0 ">
            <button 
            onClick={()=> {rn.hide_popup("con_firm_theme")}} 
            style={{"minWidth":"130px"}} 
               className="text-white btn share-top mr-2">ปิด
            </button>
            <button 
                onClick={()=>{
                     this.setState({
                         final_theme:this.state.value_final_theme,
                         value_final_theme:""
                    });
                    rn.hide_popup("con_firm_theme")
                }
                // this.negative_txt_confirm(this.state.txt_negative)
                } 
                style={{"minWidth":"130px"}}
                className="text-white bg-blue btn ">ยืนยันรายการ  
            </button>
          </div>
        </Popup>



        <div className="content mx-auto mt-5 ">
            <div className="d-flex">
                <span className="mr-auto d-flex">
                    {/* <div className="circle-progress mr-3 text-center pt-2 position-relative "></div> */}
                    <div class="row d-flex justify-content-center align-items-center ">
                        <h3 className="font-weight-bold font-30">Theme</h3>
                    </div>
                </span>
                <div>
                    {/* <button className="text-white btn share-top mr-2 font-weight-bold " style={{"minWidth":"150px"}} >share</button> */}
                    <button className="text-white btn share-top-right font-weight-bold " style={{"minWidth":"200px"}}>
                    {/* <i class="fab fa-dropbox  mr-2"></i> */}
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
                <div class="card bg-card-board border-0  mb-5 ">
                  <div class="card-body px-0">
                  <div class="px-3">
                    <div className="row">
                        <div onClick={()=>this.positive_plus(1)} className="col-md-4 a-click ">
                            <div class="card border-0 ">
                              <div class="card-body p-2">
                              <p className="  font-20 text-center mb-0 font-weight-bold color_text_theme">
                                + เพิ่ม position POV
                                </p>
                              </div>
                            </div>
                        </div>
                        <div onClick={()=>this.positive_plus(2)} className="col-md-4 a-click ">
                            <div class="card border-0 ">
                              <div class="card-body p-2">
                              <p className="  font-20 text-center mb-0 font-weight-bold color_text_theme">
                                + เพิ่ม position POV
                                </p>
                              </div>
                            </div>
                        </div>
                        <div onClick={()=>this.positive_plus(3)} className="col-md-4 a-click ">
                            <div class="card border-0 ">
                              <div class="card-body p-2">
                              <p className="  font-20 text-center mb-0 font-weight-bold color_text_theme">
                                + เพิ่ม position POV
                                </p>
                              </div>
                            </div>
                        </div>
                    </div>
                  </div>

                    <div className="w-100 box-positive my-3 border-0 pl-3  ">
                        
                        {
                            // positive.map((content,index)=>{})
                        }
                        
                        
                        <div className="row">   
                            <div className="col-md-4 ">

                                {
                                    this.state.positive1.map((content,index)=>{
                                        return(
                                            <div key={index} onClick={(event)=>this.positive_set_txt(1,index,event)}  className= {" a-click  px-0 col-md-12 "+(index>0 ? " mt-3 " : "")}>
                                                <div class="card mh-120 border-0 bd-8" >
                                                    <div class="card-body">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div 
                                                                className= {
                                                                     (this.state.positive_check.indexOf("1_"+index)  >= 0 ? " valid_premise " : "color_uncheck_small" )+
                                                                     " mr-3  d-flex align-items-center justify-content-center"}>
                                                                    <i class="fas fa-check text-white "></i>
                                                                </div>
                                                                <div className="font-20 font-weight-bold"> Positive Pov</div>
                                                            </div>
                                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                                    <i class="fas fa-check text-white "></i>
                                                                </div>
                                                                {   rn.ckvalue(content)  ? 
                                                                    <div className="mt-3 font-20 font-weight-bold text_pov_plus_active pl-3 "  >  {content} </div>
                                                                    : 
                                                                    <div className="mt-3 font-20 font-weight-bold text_pov_plus pl-3 ">  กรุณาระบุข้อความ...</div>
                                                                }
                                                            
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }    
                            </div>
                            <div className="col-md-4 ">
                                {
                                    this.state.positive2.map((content,index)=>{
                                        return(
                                            <div onClick={(event)=>this.positive_set_txt(2,index,event)}  className= {" a-click px-0 col-md-12 "+(index>0 ? " mt-3 " : "")}> 
                                                <div class="card mh-120 border-0  bd-8" >
                                                    <div class="card-body">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div className= {
                                                                    (this.state.positive_check.indexOf("2_"+index)  >= 0 ? " valid_premise " : "color_uncheck_small")+
                                                                    " mr-3  d-flex align-items-center justify-content-center"}>
                                                                    <i class="fas fa-check text-white "></i>
                                                                </div>
                                                                <div className="font-20 font-weight-bold"> Positive Pov</div>
                                                            </div>
                                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                                    <i class="fas fa-check text-white "></i>
                                                                </div>
                                                                {   rn.ckvalue(content)  ? 
                                                                    <div className="mt-3 font-20 font-weight-bold text_pov_plus_active pl-3 "  >  {content} </div>
                                                                    : <div className="mt-3 font-20 font-weight-bold text_pov_plus pl-3 ">  กรุณาระบุข้อความ...</div>
                                                                }
                                                                {/* <div className="mt-3 font-20 font-weight-bold text_pov_plus pl-3 "> กรุณาระบุข้อความ...</div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>                                   
                                        )
                                    })
                                }
                            </div>




                            <div className="col-md-4 ">
                                {
                                    this.state.positive3.map((content,index)=>{
                                        return(
                                        <div  onClick={(event)=>this.positive_set_txt(3,index,event)} className= {" a-click px-0 col-md-12 "+(index>0 ? " mt-3 " : "")}>
                                            <div class="card mh-120 border-0  bd-8" >
                                                <div class="card-body">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div className={ 
                                                                (this.state.positive_check.indexOf("3_"+index)  >= 0 ? " valid_premise " : "color_uncheck_small" )
                                                                +" mr-3  d-flex align-items-center justify-content-center"
                                                                }>
                                                                <i class="fas fa-check text-white "></i>
                                                            </div>
                                                            <div className="font-20 font-weight-bold"> Positive Pov</div>
                                                        </div>
                                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                                <i class="fas fa-check text-white "></i>
                                                            </div>
                                                            {/* <div className=" pl-3 mt-3 font-20 font-weight-bold text_pov_plus">  กรุณาระบุข้อความ...</div> */}
                                                            {   
                                                                    rn.ckvalue(content)  ? 
                                                                    <div className="mt-3 font-20 font-weight-bold text_pov_plus_active pl-3 "  >  {content} </div>
                                                                    : <div className="mt-3 font-20 font-weight-bold text_pov_plus pl-3 ">  กรุณาระบุข้อความ...</div>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })
                                }
                            </div>
                        </div>


                    </div>







                    <div className="  my-box my-3 border-0   ">
                        <div className=" d-flex   flex-wrap ">
                        <div className="col-md-4 my-3 ">                            
                            <div class="card mh-120 border-0 bd-8" >
                                <div class="card-body">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div 
                                                onClick={()=>{this.setState({my_check:0});}}
                                                className= { 
                                                (this.state.my_check==0 ? "valid_premise" : "color_uncheck_small" )
                                                +" mr-3  d-flex align-items-center justify-content-center"}>
                                                <i class="fas fa-check text-white "></i>
                                            </div>
                                            <div className="font-20 font-weight-bold"> Element </div>
                                        </div>
                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                <i class="fas fa-check text-white "></i>
                                            </div>
                                            <div className=" pl-3 mt-3 font-20 font-weight-bold color-header-board"> 
                                                    {
                                                        this.state.my_data[0]
                                                    }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                            <div className="col-md-4 my-3 ">
                                <div class="card mh-120 border-0  bd-8" >
                                    <div class="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div 
                                                 onClick={()=>{this.setState({my_check:1});}}
                                                className= { 
                                                    (this.state.my_check==1 ? "valid_premise" : "color_uncheck_small" )
                                                    +" mr-3  d-flex align-items-center justify-content-center"}>
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="font-20 font-weight-bold"> Element </div>
                                            </div>
                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className=" pl-3 mt-3 font-20 font-weight-bold color-header-board"> {
                                                    this.state.my_data[1]
                                                } </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4 my-3 ">
                                <div class="card mh-120 border-0  bd-8" >
                                    <div class="card-body">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div 
                                                    onClick={()=>{this.setState({my_check:2});}}
                                                    className= { 
                                                    (this.state.my_check==2 ? "valid_premise" : "color_uncheck_small" )
                                                    +" mr-3  d-flex align-items-center justify-content-center"}>
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className="font-20 font-weight-bold"> Element </div>
                                            </div>
                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                        </div>
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                    <i class="fas fa-check text-white "></i>
                                                </div>
                                                <div className=" pl-3 mt-3 font-20 font-weight-bold color-header-board">  
                                                    { this.state.my_data[2] } 
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className=" d-flex   flex-wrap ">
                            <div className="col-md-4 my-3 ">
                            {
                                this.state.negative1.map((content,index)=>{
                                    return(
                                        <div  onClick={(event)=>this.negative_set_txt(1,index,event)} className= {" a-click px-0 col-md-12 "+(index>0 ? " mt-3 " : "")}>
                                            <div class="card mh-120 border-0 bd-8">
                                                <div class="card-body">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            {/* <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                                <i class="fas fa-check text-white "></i>
                                                            </div> */}

                                                            <div className={ 
                                                                (this.state.negative_check.indexOf("1_"+index)  >= 0 ? " valid_premise " : "color_uncheck_small" )
                                                                +" mr-3  d-flex align-items-center justify-content-center"
                                                            }>
                                                                <i class="fas fa-check text-white "></i>
                                                            </div>

                                                            <div className="font-20 font-weight-bold"> Negative POV </div>
                                                        </div>
                                                        <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                                    </div>
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                                <i class="fas fa-check text-white "></i>
                                                            </div>
                                                            {/* <div className=" share-top-right-text pl-3 op-harf mt-3 font-20 font-weight-bold ">  กรุณาระบุข้อความ </div> */}
                                                        
                                                            {   
                                                                    rn.ckvalue(content)  ? 
                                                                    <div className="mt-3 font-20 font-weight-bold share-top-right-text pl-3 "  >  {content} </div>
                                                                    : <div className="mt-3 font-20 font-weight-bold share-top-right-text op-harf pl-3 ">  กรุณาระบุข้อความ...</div>
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </div>

                            <div className="col-md-4 my-3 ">
                                {
                                    this.state.negative2.map((content,index)=>{
                                        return(
                                            <div onClick={(event)=>this.negative_set_txt(2,index,event)} className= {" a-click px-0 col-md-12 "+(index>0 ? " mt-3 " : "")}> 
                                                <div class="card mh-120 border-0  bd-8" >
                                                    <div class="card-body">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div className={ 
                                                                    (this.state.negative_check.indexOf("2_"+index)  >= 0 ? " valid_premise " : "color_uncheck_small" )
                                                                    +" mr-3  d-flex align-items-center justify-content-center"
                                                                    }>
                                                                    <i class="fas fa-check text-white "></i>
                                                                </div>
                                                                <div className="font-20 font-weight-bold"> Negative POV  </div>
                                                            </div>
                                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                                    <i class="fas fa-check text-white "></i>
                                                                </div>
                                                                {   
                                                                    rn.ckvalue(content)  ? 
                                                                    <div className="mt-3 font-20 font-weight-bold share-top-right-text pl-3 "  >  {content} </div>
                                                                    : <div className="mt-3 font-20 font-weight-bold share-top-right-text op-harf pl-3 ">  กรุณาระบุข้อความ...</div>
                                                                }

                                                                {/* <div className=" share-top-right-text pl-3 op-harf mt-3 font-20 font-weight-bold ">  กรุณาระบุข้อความ </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>



                            <div className="col-md-4 my-3 ">
                                {
                                    this.state.negative3.map((content,index)=>{
                                        return(
                                            <div onClick={(event)=>this.negative_set_txt(3,index,event)} className= {" a-click px-0 col-md-12 "+(index>0 ? " mt-3 " : "")}>
                                                <div class="card mh-120 border-0  bd-8" >
                                                    <div class="card-body">
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                {/* <div className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                                    <i class="fas fa-check text-white "></i>
                                                                </div> */}
                                                            <div className={ 
                                                                (this.state.negative_check.indexOf("3_"+index)  >= 0 ? " valid_premise " : "color_uncheck_small" )
                                                                +" mr-3  d-flex align-items-center justify-content-center"
                                                                }>
                                                                <i class="fas fa-check text-white "></i>
                                                            </div>
                                                                <div className="font-20 font-weight-bold"> Negative POV </div>
                                                            </div>
                                                            <i  style={{"color":"#cbcbcb"}} class="fas fa-pen a-click"></i>
                                                        </div>
                                                        <div className="d-flex align-items-center justify-content-between">
                                                            <div className="d-flex align-items-center">
                                                                <div  style={{"visibility": "hidden"}} className=" mr-3 color_uncheck_small d-flex align-items-center justify-content-center">
                                                                    <i class="fas fa-check text-white "></i>
                                                                </div>
                                                                {   
                                                                    rn.ckvalue(content)  ? 
                                                                    <div className="mt-3 font-20 font-weight-bold share-top-right-text pl-3 "  >  {content} </div>
                                                                    : <div className="mt-3 font-20 font-weight-bold share-top-right-text pl-3 op-harf ">  กรุณาระบุข้อความ...</div>
                                                                }
                                                                {/* <div className=" share-top-right-text pl-3 op-harf mt-3 font-20 font-weight-bold ">  กรุณาระบุข้อความ </div> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>




                            <div className="w-100">
                                <div class="px-3">
                                    <div className="row">
                                        <div onClick={()=>this.negative_plus(1)}  className="col-md-4 a-click ">
                                            <div class="card border-0 ">
                                                <div class="card-body p-2">
                                                    <p className="  font-20 text-center mb-0 font-weight-bold color_text_theme">
                                                        + เพิ่ม Negative POV
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div onClick={()=>this.negative_plus(2)} className="col-md-4 a-click ">
                                            <div class="card border-0 ">
                                                <div class="card-body p-2">
                                                    <p className="  font-20 text-center mb-0 font-weight-bold color_text_theme">
                                                        + เพิ่ม Negative POV
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div onClick={()=>this.negative_plus(3)} className="col-md-4 a-click ">
                                            <div class="card border-0 ">
                                            <div class="card-body p-2">
                                            <p className="  font-20 text-center mb-0 font-weight-bold color_text_theme">
                                                + เพิ่ม Negative POV
                                                </p>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                  </div>
                </div>
                
            <div className="font-30 font-weight-bold mt-5 mb-2">Final Theme</div>
            <div className=" color-blue-light mb-3 p-3 ">
                <div class="card bg-card-board border-0" style={{borderRadius:"10px"}}>
                  <div class="card-body">
                    <div className=" font-20 font-weight-bold mb-2">Generate Theme</div>
                    {
                        rn.ckvalue(this.state.theme_generate) ?
                        <div className=" pl-5 font-20 font-weight-bold mb-2 text-dark "> 
                            {this.state.theme_generate}
                        </div> 
                        :
                         <div className=" pl-5 font-20 font-weight-bold mb-2 color_define_theme ">กรุณาระบุข้อมูล Theme...</div>
                    }
                  </div>
                </div>

                <div onClick={()=>{rn.show_popup("con_firm_theme")}}  
                 class=" a-click mt-4 card  border-0" style={{borderRadius:"10px"}}>
                  <div class="card-body">
                    <div className=" font-20 font-weight-bold mb-2">Final Theme</div>
                    {
                        rn.ckvalue(this.state.final_theme) ? 
                        <div className=" pl-5 font-20 font-weight-bold mb-2 color-header-board  ">{this.state.final_theme}</div>
                        :
                        <div className=" pl-5 font-20 font-weight-bold mb-2 color-header-board op-harf ">กรุณาระบุข้อมูล Theme...</div>
                    }
                    
                  </div>
                </div>
            </div>
            {/* color-header-board op-harf */}
            <div className="text-right mb-5">
                <Link to="/coverage">
                    <button className="btn text-white share-top mw-150 font-weight-bold  mr-2 ">
                        ย้อนกลับ
                    </button>
                </Link>
                <Link to="/coverage">
                    <button   
                     className="btn text-white   bg-blue mw-150 font-weight-bold">
                        ยืนยันรายการ
                    </button>
                </Link>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withRouter(HomeTheme)