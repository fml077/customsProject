import React, { PropTypes } from 'react';
import { Input } from 'antd';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;


import BasicMessage from './BasicMessage'
import CreditMessage from './CreditMessage'
import RelatedMessage from './RelatedMessage'


class Message extends React.Component {
  constructor(){
    super()
    this.state ={
      page: "1"
    }
  }


  getStyles(){
   return {
     content: {
       fontSize: '14px',
       display: 'flex'
     }
   }
 }


  render () {
    let self = this;
     let styles=this.getStyles();
      return <div style={{marginTop:'20px', width:'1200px', minHeight:'500px'}}>
                <Tabs defaultActiveKey="1" onChange={(e)=>{self.setState({page : e})}}>
                <TabPane tab="基本信息" key="1">{this.state.page ==='1' ? <BasicMessage />: ""}</TabPane>
                <TabPane tab="关联方信息" key="2">{this.state.page ==='2' ? <RelatedMessage />: ""}</TabPane>
                <TabPane tab="历史报关信息" key="3">{this.state.page ==='3' ? '暂无信息': ""}</TabPane>
                <TabPane tab="信用信息" key="4">{this.state.page ==='4' ? <CreditMessage />: ""}</TabPane>
                <TabPane tab="财务信息" key="5">{this.state.page ==='5' ? '暂无信息': ""}</TabPane>
                <TabPane tab="欠税信息" key="6">{this.state.page ==='6' ? '暂无信息': ""}</TabPane>
                </Tabs>
             </div>
  }
}

export default Message;
