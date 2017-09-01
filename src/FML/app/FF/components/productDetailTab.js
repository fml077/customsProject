import React from 'react';
import { Tabs } from 'antd';
import ProDetailTab from '../data/proDetailTab';
import 'antd/dist/antd.css';
const TabPane = Tabs.TabPane;
import Message from '../../../../Analysis/message/message';


import ProDetailForm1 from './proDetailForm1';
import ProDetailForm3 from './proDetailForm3';
import ProDetailForm4 from './proDetailForm4';
import ProDetailForm5 from './proDetailForm5';
import ProDetailForm6 from './proDetailForm6';
import ProDetailForm7 from './proDetailForm7';
import ProDetailForm8 from './proDetailForm8';
import ProDetailForm9 from './proDetailForm9';
import ProDetailForm10 from './proDetailForm10';


class ProDedailTab extends React.Component {
  
  render() {
    return (
      <Tabs type="card">
        <TabPane tab="报关单信息" key="1"><ProDetailForm1 /></TabPane>
        <TabPane tab="企业信息" key="2"><Message /></TabPane>
        <TabPane tab="审单结果" key="3"><ProDetailForm3 /></TabPane>
        <TabPane tab="报关单环节历史" key="4"><ProDetailForm4 /></TabPane>
        <TabPane tab="环节历史" key="5"><ProDetailForm5 /></TabPane>
        <TabPane tab="风险信息" key="6"><ProDetailForm6 /></TabPane>
        <TabPane tab="随附单据" key="7"><ProDetailForm7 /></TabPane>
        <TabPane tab="归类复核" key="8"><ProDetailForm8 /></TabPane>
        <TabPane tab="规范申报" key="9"><ProDetailForm9 /></TabPane>
        <TabPane tab="税单信息" key="10"><ProDetailForm10 /></TabPane>
      </Tabs>
    );
  }
}

export default ProDedailTab;