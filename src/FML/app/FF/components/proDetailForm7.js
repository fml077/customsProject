import React from 'react';
import { Table} from 'antd';
import 'antd/dist/antd.css';

import "./proDetailForm.less";

import { DETAIL_TAB7_COLUMNS, DETAIL_TAB7_DATA } from "../data/proDetailFormDatas";


class ProDetailForm7 extends React.Component{
  render() {
    return (
      <div className='proForm proForm7'>
        <Table columns={DETAIL_TAB7_COLUMNS} dataSource={DETAIL_TAB7_DATA} pagination={false} />
      </div>
    );
  }
}

export default ProDetailForm7;