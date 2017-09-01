import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css';

import "./proDetailForm.less";
import { DETAIL_TAB6_COLUMNS1, DETAIL_TAB6_COLUMNS2, DETAIL_TAB6_DATA1, DETAIL_TAB6_DATA2,DETAIL_TAB6_DATA3} from "../data/proDetailFormDatas";

DETAIL_TAB6_COLUMNS1

class ProDetailForm6 extends React.Component{
  render() {
    return (
      <div className='proForm proForm3'>
        <h3>针对商品项的C指令</h3>
        <Table columns={DETAIL_TAB6_COLUMNS1} dataSource={DETAIL_TAB6_DATA1} pagination={false} />
        <h3>针对企业或报关单的C指令</h3>
        <Table columns={DETAIL_TAB6_COLUMNS2} dataSource={DETAIL_TAB6_DATA3} pagination={false} />
        <h3>针对商品项的D指令</h3>
        <Table columns={DETAIL_TAB6_COLUMNS1} dataSource={DETAIL_TAB6_DATA2} pagination={false} />
        <h3>针对企业或报关单的D指令</h3>
        <Table columns={DETAIL_TAB6_COLUMNS2} dataSource={DETAIL_TAB6_DATA3} pagination={false} />
      </div>
    );
  }
}

export default ProDetailForm6;