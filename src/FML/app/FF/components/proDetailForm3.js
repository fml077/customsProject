import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import "./proDetailForm.less";

import { DETAIL_TAB3_COLUMNS, DETAIL_TAB3_DATA } from "../data/proDetailFormDatas";

class ProDetailForm3 extends React.Component{
  render() {
    return (
      <div className='proForm proForm3'>
        <h3>状态信息</h3>
        <Table columns={DETAIL_TAB3_COLUMNS} dataSource={DETAIL_TAB3_DATA} pagination={false} />
      </div>
    );
  }
}

export default ProDetailForm3;