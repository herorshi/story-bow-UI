import React,{Component} from 'react';
import rn from '../../module-function/module-default'
import "../../stylesheet.css"
import Popup from '../component/popup'



class CardBow extends Component {
  state = {
      
  };
  render() {
      console.log(this.props.store.number - 1);
      console.log('thus');
      let { myreact } = this.props
    return (
      <React.Fragment> 
        {/* <div className="font-weight-bold font-25 color-og position-absolute txt-bowl debate"> */}
            {
                this.props.store.status  ? 
                <div className="position-relative card-box-show a-click ">
                    <div className="position-absolute poition_card_bowl z10001" >
                        <div className=" position-relative card text-center card-bowl bd-8  border-0 sh">
                            
                            
                            
                            <div className="card-header bg-card-bow4 text-white pl-2">
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="nubmer_card color-bow4 font-weight-bold mr-auto d-flex justify-content-center align-items-center font-15 ">
                                        {this.props.store.number}
                                    </div>
                                    <span className="text-white font-weight-bold font-18">{this.props.store.title}</span>
                                </div>
                            </div>



                            <div onClick={()=>{
                                console.log(this.props.store.number ,'this.props.store.number - 1');
                                myreact.setState({
                                    detail_story_value:this.props.store.txt,
                                    select_story:this.props.store.number - 1,
                                    number_udpate:this.props.store.number - 1},()=>{
                                    rn.show_popup("update_card")
                                });
                            }}  className="card-body pl-2 pt-2">
                                <div className="font-weight-bold font-15 text-left text-dark">
                                    {this.props.store.txt}
                                </div>
                            </div>



                            <i  
                            style={{"color":"#cbcbcb" , bottom:"9px",right:"7px"}} 
                            class="fas fa-pen position-absolute font-15 a-click" ></i>
                        </div>
                    </div>
                </div>                                
                : ""
            }
        {/* </div> */}
      </React.Fragment>
    );
  }
}
export default CardBow