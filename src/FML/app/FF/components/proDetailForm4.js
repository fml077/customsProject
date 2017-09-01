import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';
import "./proDetailForm.less";

import { DETAIL_TAB4_COLUMNS, DETAIL_TAB4_DATA } from "../data/proDetailFormDatas";


class ProDetailForm4 extends React.Component{
  render() {
    return (
      <div className='proForm proForm4'>
        <h3>环节历史</h3>
        <Table columns={DETAIL_TAB4_COLUMNS} dataSource={DETAIL_TAB4_DATA} pagination={false} />
      </div>
    );
  }
}

export default ProDetailForm4;