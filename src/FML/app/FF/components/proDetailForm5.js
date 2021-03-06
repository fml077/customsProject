import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

import "./proDetailForm.less";
import { DETAIL_TAB5_COLUMNS, DETAIL_TAB5_DATA } from "../data/proDetailFormDatas";

class ProDetailForm5 extends React.Component{
  render() {
    return (
      <div className='proForm proForm5'>
        <Table columns={DETAIL_TAB5_COLUMNS} dataSource={DETAIL_TAB5_DATA} pagination={false} />
      </div>
    );
  }
}

export default ProDetailForm5;