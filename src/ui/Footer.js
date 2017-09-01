import React, { PropTypes } from 'react';
import { browserHistory  } from 'react-router';

import { Icon } from 'antd'

class Footer extends React.Component {
  getStyles(){
   return {
     title: {
       height:"120px",
       backgroundColor:"#2196F3",
       width:"100%",
       color:"#fff",
       marginTop:"20px"
     },
     center:{
         textAlign: 'center',
         fontSize:"14px"
     },
     advice:{
         display:"block",
         color:"#fff",
         margin:"0 auto",
         width:"100px",
         textAlign:"center",
         fontSize:"16px",
         fontWeight:"bold",
         textDecoration:"underline",
         lineHeight:"40px",
         paddingTop:"20px"
     }
   }
 }

  render () {
      let styles = this.getStyles();
      return <div style={styles.title}>
           
      </div>
  }
}

export default Footer;
