import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

import "./proDetailForm.less";
import { DETAIL_TAB9_COLUMNS, DETAIL_TAB9_DATA } from "../data/proDetailFormDatas";

class ProDetailForm9 extends React.Component{
  render() {
    return (
      <div className='proForm proForm9'>
        <Table columns={DETAIL_TAB9_COLUMNS} dataSource={DETAIL_TAB9_DATA} pagination={false} />
      </div>
    );
  }
}

export default ProDetailForm9;