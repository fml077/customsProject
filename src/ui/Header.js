import React, { PropTypes } from 'react';
import { browserHistory  } from 'react-router';

import { Icon } from 'antd'
class Header extends React.Component {
  getStyles(){
   return {
     title: {
       height:"80px",
       backgroundColor:"#108ee9",
       width:"100%",
       color:"#fff"
     },
     right:{
       float:"right",
       width:"500px",
       boxSizing: "border-box",
     },
     link:{
       fontSize:"18px",
       lineHeight:"80px",
       // paddingRight:"10px",
       cursor:"pointer",
       border: "1px solid #fff",
       padding: "5px",
       borderRadius: '5px',
       marginRight: '10px'
     }, 
     email:{
       fontSize:"18px",
       lineHeight:"80px",
       paddingRight:"10px",
       cursor:"pointer",
     }, 
   }
 }

  render () {
      let styles = this.getStyles();
      return <nav style={styles.title}>
           <div style={{fontSize:"24px",lineHeight:"80px",paddingLeft:"20px", cursor:"pointer", float:"left"}} onClick={()=>{browserHistory.push("/")}}> 海关智能化批量审批平台 </div> 
           <div style={styles.right}> 
              <span style={styles.link} className="Header_index" >参数模型管理平台</span>  
              <span style={styles.link}  className="Header_index" onClick={()=>{browserHistory.push("/analysis")}}>智能化批量管理平台</span>  
              <Icon type="mail" style={styles.email} /> 
              <Icon type="user-add" style={{fontSize: 20, cursor:"pointer"}} /> Hi,admin
              <Icon type="poweroff" style={{fontSize: 18, paddingRight:"15px", paddingLeft:"15px",  cursor:"pointer"}}  onClick={()=>{browserHistory.push("/login")}} />
           </div>
      </nav>
  }
}

export default Header;
