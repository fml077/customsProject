import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

import "./proDetailForm.less";
import { DETAIL_TAB10_COLUMNS, DETAIL_TAB10_DATA } from "../data/proDetailFormDatas";


class ProDetailForm10 extends React.Component{
  render() {
    return (
      <div className='proForm proForm10'>
        <p className='detailp'>
          <span>完税价：2088  欧元</span>
          <span>欧元： 275</span>
          <span>完税价：2088  欧元</span>
          <span>征免规定： 照章征税</span>
        </p>
        <Table columns={DETAIL_TAB10_COLUMNS} dataSource={DETAIL_TAB10_DATA} pagination={false}/>
      </div>
    );
  }
}

export default ProDetailForm10;