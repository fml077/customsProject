
//tab3 data

export const DETAIL_TAB3_COLUMNS = [
	{
	  title: '状态数值',
	  dataIndex: 'stateNum',
	  key: 'stateNum',
	}, {
	  title: '状态描述',
	  dataIndex: 'stateDes',
	  key: 'stateDes',
	}
];

export const DETAIL_TAB3_DATA = [
	{
		"key":"1",
		"stateNum":"0506","stateDes":"企业类型属于其他型"},
	{
		"key":"2",
		"stateNum":"6",
		"stateDes":"企业类型属于其他型"},
	{
		"key":"3",
		"stateNum":"0744",
		"stateDes":"经营单位为一般信用企业"},
	{
		"key":"4",
		"stateNum":"1004",
		"stateDes":"申报单位为一般信用企业"},
	{
		"key":"5",
		"stateNum":"1104",
		"stateDes":"货主单位为一般信用企业"},
	{
		"key":"6",
		"stateNum":"0093",
		"stateDes":"经营单位为一般通关企业"},
	{
		"key":"7",
		"stateNum":"0113",
		"stateDes":"申报单位为一般通关企业"},
	{
		"key":"8",
		"stateNum":"0643",
		"stateDes":"由税费，计算机可自动计算"},
	{
		"key":"9",
		"stateNum":"3",
		"stateDes":"第1项商品存在消费税"},
	{
		"key":"10",
		"stateNum":"0482",
		"stateDes":"归类标志：归类库中无对应的商品名称"},
	{
		"key":"11",
		"stateNum":"0532",
		"stateDes":"申报计量单位合法但与法定计量单位不同"},
	{
		"key":"12",
		"stateNum":"0782",
		"stateDes":"报关单与通关单对比正常"},
	{
		"key":"13",
		"stateNum":"1062",
		"stateDes":"基本电子随附单据传输正常"},
	{
		"key":"14",
		"stateNum":"0021",
		"stateDes":"进口标志正确"},
	{
		"key":"15",
		"stateNum":"0321",
		"stateDes":"监管证件：需证件并正常输入"},
	{
		"key":"16",
		"stateNum":"1021",
		"stateDes":"新舱单审核正常"
	}

];


//tab4 data

export const DETAIL_TAB4_COLUMNS = [
	{
	  title: '作业环节',
	  dataIndex: 'shuizhong',
	  key: 'shuizhong',
	}, {
	  title: '处理结果',
	  dataIndex: 'state',
	  key: 'state',
	}, {
	  title: '处理人',
	  
	dataIndex: 'shuikuan',
	  key: 'shuikuan',
	}, {
	  title: '处理岗位',
	  dataIndex: 'shuilv',
	  key: 'shuilv',
	}, {
	  title: '处理时间',
	  dataIndex: 'mianshui',
	  key: 'mianshui',
	}, {
	  title: '审核备注',
	  dataIndex: 'zhengkuan',
	  key: 'zhengkuan',
	}, {
	  title: '该岗位状态',
	  dataIndex: 'workstate',
	  key: 'workstate',
	}, {
	  title: '待处理岗位',
	  dataIndex: 'worktodo',
	  key: 'worktodo',
	}
];

export const DETAIL_TAB4_DATA = [
	{
	  key: '1',
	  shuizhong: '电子申报',
	  state: '',
	  shuikuan: '9999',
	  shuilv: '0000',
	  mianshui: '2017-07-12 11:14:30',
	  zhengkuan: 'XXXXXX',
	  workstate: '***********************************',
	  worktodo: 'XXXXXX'
	},{
	  key: '2',
	  shuizhong: '电脑审单',
	  state: '该单经审核确定交审单中心处理{M};该单…',
	  shuikuan: '9999',
	  shuilv: '0000',
	  mianshui: '2017-07-12 11:14:35',
	  zhengkuan: 'XXXXXX',
	  workstate: '*011*******************************',
	  worktodo: 'X091'
	},{
	  key: '3',
	  shuizhong: '人工审单',
	  state: '该单经审核确定交现场接单审核{G}；该单舱…',
	  shuikuan: '515564',
	  shuilv: 'X091',
	  mianshui: '2017-07-12 16:49:28',
	  zhengkuan: '确定办理税费及证…',
	  workstate: '***4*******************************',
	  worktodo: '0000'
	},{
	  key: '4',
	  shuizhong: '现场接单',
	  state: '该单已经现场接单审核{G}；',
	  shuikuan: '9999',
	  shuilv: 'XXXXXX',
	  mianshui: '2017-07-12 16:49:30',
	  zhengkuan: 'XXXXXX',
	  workstate: 'XXXXXX',
	  worktodo: 'XXXXXX'
	},{
	  key: '5',
	  shuizhong: '计税处理',
	  state: '该单由税费已打印{P}；该单税费为先征后放…',
	  shuikuan: '515564',
	  shuilv: 'XXXXXX',
	  mianshui: '2017-07-13 09:31:00',
	  zhengkuan: 'XXXXXX',
	  workstate: 'XXXXXX',
	  worktodo: 'XXXXXX'
	},{
	  key: '6',
	  shuizhong: '单证打印',
	  state: 'XXXXXX',
	  shuikuan: '511149',
	  shuilv: 'XXXXXX',
	  mianshui: '2017-07-13 09:31:00',
	  zhengkuan: 'XXXXXX',
	  workstate: 'XXXXXX',
	  worktodo: 'XXXXXX'
	},{
	  key: '7',
	  shuizhong: '单证放行',
	  state: '该单正常放行{1}；该单放行时无未处理查验…',
	  shuikuan: '9999',
	  shuilv: 'XXXXXX',
	  mianshui: '2017-07-13 09:31:03',
	  zhengkuan: 'XXXXXX',
	  workstate: 'XXXXXX',
	  worktodo: 'XXXXXX'
	},{
	  key: '8',
	  shuizhong: '货物放行',
	  state: 'XXXXXX',
	  shuikuan: '9999',
	  shuilv: 'XXXXXX',
	  mianshui: '2017-07-13 09:31:03',
	  zhengkuan: 'XXXXXX',
	  workstate: 'XXXXXX',
	  worktodo: 'XXXXXX'
	},{
	  key: '9',
	  shuizhong: '理单处理',
	  state: 'XXXXXX',
	  shuikuan: '8888',
	  shuilv: 'XXXXXX',
	  mianshui: '2017-07-13 09:31:03',
	  zhengkuan: 'XXXXXX',
	  workstate: '*88888888888888888888*********',
	  worktodo: 'XXXXXX'
	}
];

//tab5 data

export const DETAIL_TAB5_COLUMNS = [
	{
	  title: '作业环节',
	  dataIndex: 'shuizhong',
	  key: 'shuizhong',
	}, {
	  title: '处理结果',
	  dataIndex: 'state',
	  key: 'state',
	}, {
	  title: '处理人',
	  dataIndex: 'shuikuan',
	  key: 'shuikuan',
	}, {
	  title: '处理岗位',
	  dataIndex: 'shuilv',
	  key: 'shuilv',
	}, {
	  title: '审核备注',
	  dataIndex: 'mianshui',
	  key: 'mianshui',
	}, {
	  title: '上一处理人岗位',
	  dataIndex: 'zhengkuan',
	  key: 'zhengkuan',
	}
];

export const DETAIL_TAB5_DATA = [
	{
	  key: '1',
	  shuizhong: 'XXXXXX',
	  state: 'XXXXXX',
	  shuikuan: 'XXXXXX',
	  shuilv: 'XXXXXX',
	  mianshui: 'XXXXXX',
	  zhengkuan: 'XXXXXX',
	},{
	  key: '2',
	  shuizhong: 'XXXXXX',
	  state: 'XXXXXX',
	  shuikuan: 'XXXXXX',
	  shuilv: 'XXXXXX',
	  mianshui: 'XXXXXX',
	  zhengkuan: 'XXXXXX',
	}
];

export const DETAIL_TAB6_COLUMNS1 = [
	{
	  title: '指令编号',
	  dataIndex: 'shuizhong',
	  key: 'shuizhong',
	}, {
	  title: '商品项号',
	  dataIndex: 'state',
	  key: 'state',
	}, {
	  title: '商品名称',
	  dataIndex: 'shuikuan',
	  key: 'shuikuan',
	}, {
	  title: '风险提示',
	  dataIndex: 'shuilv',
	  key: 'shuilv',
	}, {
	  title: '处置建议',
	  dataIndex: 'mianshui',
	  key: 'mianshui',
	}, {
	  title: '核查结果',
	  dataIndex: 'zhengkuan',
	  key: 'zhengkuan',
	}, {
	  title: '布控处理',
	  dataIndex: 'bukong',
	  key: 'bukong',
	}
];

export const DETAIL_TAB6_DATA1 = [
	{
	  key: '1',
	  shuizhong: '查询数据不存在',
	  state: '',
	  shuikuan: '',
	  shuilv: '',
	  mianshui: '',
	  zhengkuan: '',
	  bukong: '',
	}
];

export const DETAIL_TAB6_DATA2 = [
	{
	  key: '2',
	  shuizhong: 'D16000000000094',
	  state: '4',
	  shuikuan: 'XXXXXX',
	  shuilv: '归类一致性50_H2_2',
	  mianshui: '',
	  zhengkuan: '30',
	  bukong: '01'
	}
];

export const DETAIL_TAB6_COLUMNS2 = [
	{
	  title: '指令编号',
	  dataIndex: 'bianhao',
	  key: 'bianhao',
	}, {
	  title: '风险提示',
	  dataIndex: 'tishi',
	  key: 'tishi',
	}, {
	  title: '处置建议',
	  dataIndex: 'chuzhi',
	  key: 'chuzhi',
	}, {
	  title: '核查结果',
	  dataIndex: 'hecha',
	  key: 'hecha',
	}, {
	  title: '布控处理结果',
	  dataIndex: 'chulijg',
	  key: 'chulijg',
	}
];

export const DETAIL_TAB6_DATA3 = [
	{
	  key: '1',
	  bianhao: '查询数据不存在',
	  tichuzhishi: '',
	  chuzhi: '',
	  hecha: '',
	  chulijg: '',
	}
];


export const DETAIL_TAB7_COLUMNS = [
	{
	  title: '单证名称',
	  dataIndex: 'shuizhong',
	  key: 'shuizhong',
	}, {
	  title: '单证类型',
	  dataIndex: 'state',
	  key: 'state',
	}
];

export const DETAIL_TAB7_DATA = [
	{
	  key: '1',
	  shuizhong: '51090000000100000000001435990947.PDF',
	  state: '发票'
	},{
	  key: '2',
	  shuizhong: '51090000000800000000001435990951.PDF',
	  state: '代理报关委托协议'
	},{
	  key: '3',
	  shuizhong: '51090000000400000000001435990949.PDF',
	  state: '合同'
	}
];

export const DETAIL_TAB8_COLUMNS = [
	{
	  title: '商品项号',
	  dataIndex: 'shuizhong',
	  key: 'shuizhong',
	}, {
	  title: '商品编号',
	  dataIndex: 'state',
	  key: 'state',
	}, {
	  title: '申报商品名称',
	  dataIndex: 'shuikuan',
	  key: 'shuikuan',
	}, {
	  title: '综合分类表商品名称',
	  dataIndex: 'shuilv',
	  key: 'shuilv',
	}
];

export const DETAIL_TAB8_DATA = [
	{
	  key: '1',
	  shuizhong: '1',
	  state: '2203000000',
	  shuikuan: 'XXXXXX',
	  shuilv: 'XXXXXX',
	},{
	  key: '2',
	  shuizhong: '2',
	  state: '2203000000',
	  shuikuan: 'XXXXXX',
	  shuilv: 'XXXXXX',
	},{
	  key: '3',
	  shuizhong: '3',
	  state: '2202910099',
	  shuikuan: 'XXXXXX',
	  shuilv: 'XXXXXX'
	},{
	  key: '4',
	  shuizhong: '4',
	  state: '2203000000',
	  shuikuan: 'XXXXXX',
	  shuilv: 'XXXXXX'
	},{
	  key: '5',
	  shuizhong: '5',
	  state: '2203000000',
	  shuikuan: 'XXXXXX',
	  shuilv: 'XXXXXX'
	},{
	  key: '6',
	  shuizhong: '6',
	  state: '2203000000',
	  shuikuan: 'XXXXXX',
	  shuilv: 'XXXXXX'
	},{
	  key: '7',
	  shuizhong: '7',
	  state: '2203000000',
	  shuikuan: 'XXXXXX',
	  shuilv: 'XXXXXX'
	}
];

//tab9 data

export const DETAIL_TAB9_COLUMNS = [
	{
	  title: '商品项号',
	  dataIndex: 'shuizhong',
	  key: 'shuizhong',
	}, {
	  title: '商品编号',
	  dataIndex: 'state',
	  key: 'state',
	}, {
	  title: '申报商品名称',
	  dataIndex: 'shuikuan',
	  key: 'shuikuan',
	}, {
	  title: '规范申报商品要求',
	  dataIndex: 'shuilv',
	  key: 'shuilv',
	}, {
	  title: '规范申报商品',
	  dataIndex: 'mianshui',
	  key: 'mianshui',
	}
];

export const DETAIL_TAB9_DATA = [
	{
	  key: '1',
	  shuizhong: '4',
	  state: '2203000000',
	  shuikuan: '场蔚德迈柠檬味啤酒',
	  shuilv: '品名（中文及外文名称）',
	  mianshui: '蔚德迈柠檬味啤酒WEIDMANN'
	},{
	  key: '2',
	  shuizhong: '4',
	  state: '2203000000',
	  shuikuan: '场蔚德迈柠檬味啤酒',
	  shuilv: '是否麦芽酿造',
	  mianshui: '是麦芽酿造'
	},{
	  key: '3',
	  shuizhong: '4',
	  state: '2203000000',
	  shuikuan: '场蔚德迈柠檬味啤酒',
	  shuilv: '酒精含量',
	  mianshui: '2.4%'
	},{
	  key: '4',
	  shuizhong: '4',
	  state: '2203000000',
	  shuikuan: '场蔚德迈柠檬味啤酒',
	  shuilv: '麦芽浓度',
	  mianshui: '?'
	},{
	  key: '5',
	  shuizhong: '4',
	  state: '2203000000',
	  shuikuan: '场蔚德迈柠檬味啤酒',
	  shuilv: '包装规格',
	  mianshui: '330MLX24/'
	},{
	  key: '6',
	  shuizhong: '4',
	  state: '2203000000',
	  shuikuan: '场蔚德迈柠檬味啤酒',
	  shuilv: '品牌（中文及外文名称）',
	  mianshui: '蔚德迈WEIDMANN'
	}
];

//tab10 data

export const DETAIL_TAB10_COLUMNS = [
	{
	  title: '税种',
	  dataIndex: 'shuizhong',
	  key: 'shuizhong',
	}, {
	  title: '征税标准',
	  dataIndex: 'state',
	  key: 'state',
	}, {
	  title: '实征税款',
	  dataIndex: 'shuikuan',
	  key: 'shuikuan',
	}, {
	  title: '法定税率',
	  dataIndex: 'shuilv',
	  key: 'shuilv',
	}, {
	  title: '减免税额',
	  dataIndex: 'mianshui',
	  key: 'mianshui',
	}, {
	  title: '实征税款',
	  dataIndex: 'zhengkuan',
	  key: 'zhengkuan',
	}, {
	  title: '实征从量税率',
	  dataIndex: 'shishui',
	  key: 'shishui',
	}, {
	  title: '法定',
	  dataIndex: 'statute',
	  key: 'statute',
	}
];

export const DETAIL_TAB10_DATA = [
	{
	  key: '1',
	  shuizhong: '关税',
	  state: '从量',
	  shuikuan: '0.00',
	  shuilv: '0.00%',
	  mianshui: '0.00%',
	  zhengkuan: '0.00',
	  shishui: '0.00',
	  statute: 0
	},{
	  key: '2',
	  shuizhong: '增值税',
	  state: '从价',
	  shuikuan: '371.99',
	  shuilv: '17.00%',
	  mianshui: '0.00%',
	  zhengkuan: '0.00',
	  shishui: '0.00',
	  statute: 0
	},{
	  key: '3',
	  shuizhong: '消费税',
	  state: '控量',
	  shuikuan: '100.19',
	  shuilv: '0.00%',
	  mianshui: '0.00%',
	  zhengkuan: '0.00',
	  shishui: '0.25',
	  statute: 0
	}
];
