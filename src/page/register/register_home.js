import React,{Component} from 'react';
import rn from '../../module-function/module-default'
import CONS  from '../../global-variable/'
import '../../stylesheet.css'
import { Route,Link,withRouter } from 'react-router-dom'
import HeaderPage from '../component/header_page'
import Popup from '../component/popup'
class RegisterHome extends Component {
  state = {};
  render() {
    return (
      <React.Fragment> 
        <HeaderPage/>
        
        

        
      </React.Fragment>
    );
  }
}
export default withRouter(RegisterHome)