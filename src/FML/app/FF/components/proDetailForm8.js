import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

import "./proDetailForm.less";
import { DETAIL_TAB8_COLUMNS, DETAIL_TAB8_DATA } from "../data/proDetailFormDatas";


class ProDetailForm8 extends React.Component{
  render() {
    return (
      <div className='proForm proForm8'>
        <h3>申报商品信息</h3>
        <Table columns={DETAIL_TAB8_COLUMNS} dataSource={DETAIL_TAB8_DATA} pagination={false} />
      </div>
    );
  }
}

export default ProDetailForm8;