import React from 'react';
import { Table, Tabs } from 'antd';
import 'antd/dist/antd.css';
const TabPane = Tabs.TabPane;

import "./proDetailForm.less";

// 合并表格占0列不显示
const renderContent0 = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 1) {
    obj.props.colSpan = 0;
  }
  if (index === 2) {
    obj.props.colSpan = 0;
  }
  if (index === 3) {
    obj.props.colSpan = 0;
  }
  return obj;
};
//合并表格占5列
const renderContent5 = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 1) {
    obj.props.colSpan = 5;
  }
  if (index === 2) {
    obj.props.colSpan = 5;
  }
  if (index === 3) {
    obj.props.colSpan = 5;
  }
  return obj;
};

const columns0 = [
{
  title: 'number1',
  dataIndex: 'number1',
}, {
  title: 'number2',
  dataIndex: 'number2',
  render: renderContent5
}, {
  title: 'number3',
  dataIndex: 'number3',
  render: renderContent0
}, {
  title: 'number4',
  dataIndex: 'number4',
  render: renderContent0
},{
  title: 'number5',
  dataIndex: 'number5',
  render: renderContent0
}, {
  title: 'number6',
  dataIndex: 'number6',
  render: renderContent0
},{
  title: 'number7',
  dataIndex: 'number7',
}, {
  title: 'number8',
  dataIndex: 'number8',
}];

const data0 = [{
  key: '1',
  number1: '海关编号',
  number2: 'XXXXXX',
  number3: '申报号',
  number4: 'XXXXXX',
  number5: '备案号',
  number6: '',
  number7: '备案口岸',
  number8: '內港滘心',

}, {
  key: '2',
  number1: '申报单位',
  number2: 'XXXXXX',
  number3: '',
  number4: '',
  number5: '',
  number6: '',
  number7: '申报日期',
  number8: '2017-07-12',
}, {
  key: '3',
  number1: '收发货人',
  number2: 'XXXXXX',
  number3: '',
  number4: '',
  number5: '',
  number6: '',
  number7: '进口口岸',
  number8: '內港滘心',
}, {
  key: '4',
  number1: '进口日期',
  number2: '2017-06-26',
  number3: '',
  number4: '',
  number5: '',
  number6: '',
  number7: '启运国',
  number8: '荷兰',
}];


const renderContent00 = (value, row, index) => {
  const obj = {
    children: value,
    props: {},
  };
  if (index === 0) {
    obj.props.colSpan = 0;
  }
  return obj;
};


const columns1 = [{
  title: 'number1',
  dataIndex: 'number1',
  key: 'number1',

}, {
  title: 'number2',
  dataIndex: 'number2',
  key: 'number2',
  render: (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 0) {
      obj.props.colSpan = 5;
    }
    return obj;
  }
}, {
  title: 'number3',
  dataIndex: 'number3',
  key: 'number3',
  render: renderContent00
}, {
  title: 'number4',
  dataIndex: 'number4',
  key: 'number4',
  render: renderContent00
}, {
  title: 'number5',
  dataIndex: 'number5',
  key: 'number5',
  render: renderContent00
}, {
  title: 'number6',
  dataIndex: 'number6',
  key: 'number6',
  render: renderContent00
}, {
  title: 'number7',
  dataIndex: 'number7',
  key: 'number7',
}, {
  title: 'number8',
  dataIndex: 'number8',
  key: 'number8',
}, {
  title: 'number9',
  dataIndex: 'number9',
  key: 'number9',
}, {
  title: 'number10',
  dataIndex: 'number10',
  key: 'number10',
}];

const data1 = [{
  key: '1',
  number1: '消费使用单位',
  number2: '广州德颂行贸易有限公司/4401963B2N',
  number3: '',
  number4: '',
  number5: '',
  number6: '',
  number7: '境内目的地',
  number8: '广州其他',
  number9: '装货港',
  number10: '香港',
},{
  key: '2',
  number1: '运输方式',
  number2: '水路运输',
  number3: '监管方式',
  number4: '一般贸易',
  number5: '成交方式',
  number6: 'CIF',
  number7: '件数',
  number8: '2002',
  number9: '运输工具',
  number10: '5341554',
},{
  key: '3',
  number1: '许可证号',
  number2: '',
  number3: '征免性质',
  number4: '一般征税',
  number5: '运费率',
  number6: '',
  number7: '毛重',
  number8: '244992',
  number9: '合同号',
  number10: '',
},{
  key: '4',
  number1: '航次',
  number2: '510901706240',
  number3: '征税比例',
  number4: '0%',
  number5: '保费/率',
  number6: '',
  number7: '净重',
  number8: '22060.08',
  number9: '',
  number10: '',
},{
  key: '5',
  number1: '随附单证',
  number2: 'A',
  number3: '提单',
  number4: 'XXXXXX',
  number5: '杂税/率',
  number6: '',
  number7: '集装箱数',
  number8: '2',
  number9: '包装种类',
  number10: '纸箱',
},{
  key: '6',
  number1: '保税/监管场所',
  number2: '',
  number3: '关联报关单号',
  number4: '',
  number5: '关联备案',
  number6: '',
  number7: '备注',
  number8: '',
  number9: '內港滘心',
  number10: '',
}]

const columns2 = [{
  title: '商品序号',
  dataIndex: 'number1',
  key: 'number1',

}, {
  title: '商品编号',
  dataIndex: 'number2',
  key: 'number2',
}, {
  title: '商品名称',
  dataIndex: 'number3',
  key: 'number3',
}, {
  title: '申报数量',
  dataIndex: 'number4',
  key: 'number4',
}, {
  title: '成交总价',
  dataIndex: 'number5',
  key: 'number5',
}, {
  title: '成交币制',
  dataIndex: 'number6',
  key: 'number6',
}, {
  title: '征免',
  dataIndex: 'number7',
  key: 'number7',
}, {
  title: '规格型号',
  dataIndex: 'number8',
  key: 'number8',
}, {
  title: '申报计量单位',
  dataIndex: 'number9',
  key: 'number9',
}, {
  title: '申报单价',
  dataIndex: 'number10',
  key: 'number10',
}, {
  title: '申报总额',
  dataIndex: 'number11',
  key: 'number11',
}];

const data2 = [{
  key: '1',
  number1: '1',
  number2: '2203000000',
  number3: 'XXXXXX',
  number4: '90.00000',
  number5: 'XXXXXX',
  number6: 'EUR',
  number7: '照章征税',
  number8: 'XXXXXX',
  number9: '箱',
  number10: 'XXXXXX',
  number11: '2151.00',
},{
  key: '2',
  number1: '2',
  number2: '2203000000',
  number3: 'XXXXXX',
  number4: '112.00000',
  number5: 'XXXXXX',
  number6: 'EUR',
  number7: '照章征税',
  number8: 'XXXXXX',
  number9: '箱',
  number10: 'XXXXXX',
  number11: '1444.80',
},{
  key: '3',
  number1: '3',
  number2: '2202910099',
  number3: 'XXXXXX',
  number4: '49.00000',
  number5: 'XXXXXX',
  number6: 'EUR',
  number7: '照章征税',
  number8: 'XXXXXX',
  number9: '箱',
  number10: 'XXXXXX',
  number11: '254.80',
},{
  key: '4',
  number1: '4',
  number2: '2203000000',
  number3: 'XXXXXX',
  number4: '50.00000',
  number5: 'XXXXXX',
  number6: 'EUR',
  number7: '照章征税',
  number8: 'XXXXXX',
  number9: '箱',
  number10: 'XXXXXX',
  number11: '275.00',
},{
  key: '5',
  number1: '5',
  number2: '2203000000',
  number3: 'XXXXXX',
  number4: '162.00000',
  number5: 'XXXXXX',
  number6: 'EUR',
  number7: '照章征税',
  number8: 'XXXXXX',
  number9: '箱',
  number10: 'XXXXXX',
  number11: '1231.20',
},{
  key: '6',
  number1: '6',
  number2: '2203000000',
  number3: 'XXXXXX',
  number4: '162.00000',
  number5: 'XXXXXX',
  number6: 'EUR',
  number7: '照章征税',
  number8: 'XXXXXX',
  number9: '箱',
  number10: 'XXXXXX',
  number11: '1231.20',
},{
  key: '7',
  number1: '7',
  number2: '2203000000',
  number3: 'XXXXXX',
  number4: '1377.00000',
  number5: 'XXXXXX',
  number6: 'EUR',
  number7: '照章征税',
  number8: 'XXXXXX',
  number9: '箱',
  number10: 'XXXXXX',
  number11: '10465.20',
}]


const renderContent3 = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 0) {
      obj.props.colSpan = 3;
    }
    if (index === 4) {
      obj.props.colSpan = 7;
    }
    return obj;
  }
//第一行和第四行都不显示的列
const renderContent30 = (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 0) {
      obj.props.colSpan = 0;
    }
    if (index === 4) {
      obj.props.colSpan = 0;
    }
    return obj;
  };

const columns3 = [{
  title: 'number1',
  dataIndex: 'number1',
  key: 'number1',

}, {
  title: 'number2',
  dataIndex: 'number2',
  key: 'number2',
}, {
  title: 'number3',
  dataIndex: 'number3',
  key: 'number3',
}, {
  title: 'number4',
  dataIndex: 'number4',
  key: 'number4',
  render: (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 0) {
      obj.props.colSpan = 3;
    }
    if (index === 4) {
      obj.props.colSpan = 7;
    }
    return obj;
  }
}, {
  title: 'number5',
  dataIndex: 'number5',
  key: 'number5',
  render: renderContent30
}, {
  title: 'number6',
  dataIndex: 'number6',
  key: 'number6',
  render: renderContent30
}, {
  title: 'number7',
  dataIndex: 'number7',
  key: 'number7',
  render: (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 4) {
      obj.props.colSpan = 0;
    }
    return obj;
  }
}, {
  title: 'number8',
  dataIndex: 'number8',
  key: 'number8',
  render: (value, row, index) => {
    const obj = {
      children: value,
      props: {},
    };
    if (index === 0) {
      obj.props.colSpan = 3;
    }
    if (index === 4) {
      obj.props.colSpan = 0;
    }
    return obj;
  }
}, {
  title: 'number9',
  dataIndex: 'number9',
  key: 'number9',
  render: renderContent30
}, {
  title: 'number10',
  dataIndex: 'number10',
  key: 'number10',
  render: renderContent30
}];



const data3 = [{
  key: '1',
  number1: '商品编码',
  number2: '2203000000',
  number3: '商品名称',
  number4: 'XXXXXX',
  number5: '',
  number6: '',
  number7: '规格型号',
  number8: 'XXXXXX',
  number9: '',
  number10: '',
},{
  key: '2',
  number1: '申报数量',
  number2: '90',
  number3: '申报计量单位',
  number4: '箱',
  number5: '申报单价',
  number6: 'XXXXXX',
  number7: '申报总价',
  number8: '2151',
  number9: '币制',
  number10: 'EUR',
},{
  key: '3',
  number1: '法定数量',
  number2: '360',
  number3: '法定单位',
  number4: '升',
  number5: '海关单价',
  number6: 'XXXXXX',
  number7: '海关总价',
  number8: '2151',
  number9: '征免',
  number10: '照章征税',
},{
  key: '4',
  number1: '第二数量',
  number2: '360',
  number3: '第二单位',
  number4: '千克',
  number5: '备案序号',
  number6: '0',
  number7: '版本号',
  number8: '',
  number9: '原产地',
  number10: '荷兰',
},{
  key: '5',
  number1: '统计人民币价',
  number2: 'XXXXXX',
  number3: '统计美元价',
  number4: 'XXXXXX',
  number5: '',
  number6: '',
  number7: '',
  number8: '',
  number9: '',
  number10: '',
}]

class ProDetailForm1 extends React.Component{
  render() {
    return (
      <div className='proForm proForm3'>
        <Table columns={columns0} dataSource={data0} pagination={false} bordered showHeader={false} />
        <Table columns={columns1} dataSource={data1} pagination={false} bordered showHeader={false} />
        <Table columns={columns2} dataSource={data2} pagination={false} bordered />
        <Table columns={columns3} dataSource={data3} pagination={false} bordered showHeader={false} />
      </div>
    );
  }
}

export default ProDetailForm1;