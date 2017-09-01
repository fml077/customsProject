import React, { PropTypes } from 'react';
import { Input } from 'antd';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import BaiscTable  from './BasicTable'

class CreditMessage extends React.Component {
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
      return <div >
                <Tabs defaultActiveKey="1" onChange={(e)=>{self.setState({page : e})}} style={{ width: 1200, height: 900 }} type="card" >
                <TabPane tab="开庭公告 8" key="1" >{this.state.page ==='1' ?<BaiscTable  Index='courtAnnounce' />: ""}</TabPane>
                <TabPane tab="裁判文书 499" key="2">{this.state.page ==='2' ?<BaiscTable  Index='refereeBook' />: ""}</TabPane>
                <TabPane tab="法院公告 5" key="3">{this.state.page ==='3' ?<BaiscTable  Index='courtNotice' />: ""}</TabPane>
                <TabPane tab="行政处罚 10" key="4">{this.state.page ==='4' ?<BaiscTable  Index='punishMent' />: ""}</TabPane>
                <TabPane tab="被执行人 8" key="5">{this.state.page ==='5' ?<BaiscTable  Index='executed' />: ""}</TabPane>
                <TabPane tab="失信被执行人 1" key="6">{this.state.page ==='6' ?<BaiscTable  Index='executedForCredit' />: ""}</TabPane>
                <TabPane tab="司法拍卖 0" key="7">{this.state.page ==='7' ?<BaiscTable  Index={this.state.page}/>: ""}</TabPane>
                <TabPane tab="经营异常 0" key="8">{this.state.page ==='8' ?<BaiscTable  Index={this.state.page}/>: ""}</TabPane>
                <TabPane tab="欠税情况 0" key="9">{this.state.page ==='9' ?<BaiscTable  Index={this.state.page}/>: ""}</TabPane>
                <TabPane tab="清算情况 0" key="10">{this.state.page ==='10' ?<BaiscTable  Index={this.state.page}/>: ""}</TabPane>
                <TabPane tab="股权出质 0" key="11">{this.state.page ==='11' ?<BaiscTable  Index={this.state.page}/>: ""}</TabPane>
                <TabPane tab="动产抵押 0" key="12">{this.state.page ==='12' ?<BaiscTable  Index={this.state.page}/>: ""}</TabPane>
                </Tabs>
             </div>
  }
}

export default CreditMessage;
