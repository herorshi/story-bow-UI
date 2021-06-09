import React,{Component} from 'react';
import rn from '../../module-function/module-default'
class Popup extends Component {
  state = {};
  render(props) {
    return (
      <React.Fragment> 
        <div id={this.props.id}  style={{overflow:"scroll"}} className=" d-none">
          <div className="">
            <div   id={"card-popup-"+this.props.id} class=" t1 card  position-relative   mx-auto border-0" style={{minHeight: "400px"}} >
              <div class=" card-header  border-blue border-0 "   style={{minHeight:"30px"}}></div>
              <div class="card-body">
                {this.props.children[1]}
              </div>
              <div class="card-footer bg-white text-right   border-top-0">
                {this.props.children[2]}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Popup