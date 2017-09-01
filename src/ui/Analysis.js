import React, { PropTypes } from 'react';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


import Price from '../Analysis/price'
import Classify from '../Analysis/classify'
import Place from '../Analysis/place'
import Enterprise from '../Analysis/enterprise'
import AnalysisFooter from '../Analysis/AnalysisFooter'

import '../assets/css/common.css';

class Analysis extends React.Component {
  constructor(){
    super()
    this.state = {
      page : '1'
    }
  }
  getStyles(){
   return {
     content: {
       Width:'1000px',
       margin:'0 40px',
       fontSize: '20px'
     }
   }
 }

  render () {
      const self = this;
      let styles=this.getStyles();
      return <div>
                <div style={styles.content}>
                <Tabs defaultActiveKey="1" onChange={(e)=>{self.setState({page : e})}}>
                  <TabPane tab="价格分析" key="1">{this.state.page ==='1' ? <div><Price /><AnalysisFooter /></div>: ""}</TabPane>
                  <TabPane tab="归类分析" key="2">{this.state.page ==='2' ? <div><Classify /><AnalysisFooter /></div>: ""}</TabPane>
                  <TabPane tab="原产地分析" key="3">{this.state.page ==='3' ? <div><Place /><AnalysisFooter /></div>: ""}</TabPane>
                  <TabPane tab="企业分析" key="4">{this.state.page ==='4' ? <Enterprise />: ""}</TabPane>
                </Tabs>

                </div>
             </div>
  }
}

export default Analysis;
