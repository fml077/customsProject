import React, { PropTypes } from 'react';

import BasicTable from './message/BasicTable'

class AnalysisFooter extends React.Component {
  constructor(props){
    super(props)
  }

  render () {
      return <div >
                  <h4 style={{textAlign:"center",lineHeight:"30px",padding:"20px", fontSize:"16px"}}>历史商品信息列表</h4>
                  <BasicTable Index='FooterData' />
             </div>
  }
}



export default AnalysisFooter;
