import React from 'react';
import { connect } from 'react-redux';
import QueryCondition from '../components/queryCondition.js';
import './queryConditionStyle.css';
import { Button }  from 'antd'

import Table from '../components/table.js';
//  	查询结果目录
    	let conditiondata1=[{type:'inputs',label:'商品名称',placeholder:'请输入商品名称...'},{type:'selects',label:'处置状态'},{type:'inputs',label:'收发货人'},{type:'inputs',label:'申报单位/代码',placeholder:'请输入申报单位/代码...'},
		{type:'selects',label:'进出口'},{type:'inputs',label:'消费使用单位'},{type:'ranges',label:'税号范围'},{type:'selects',label:'原产国'},
		{type:'selects',label:'监管方式'},{type:'inputs',label:'派单日期'},{type:'inputs',label:'岗位代码'},{type:'selects',label:'按标记风险类别'},
		{type:'selects',label:'风险参数类别'},{type:'selects',label:'申报口岸'},{type:'ranges',label:'申报单价'},{type:'inputs',label:'报关单号'},
		{type:'selects',label:'进出口岸'},{type:'selects',label:'运输方式'},{type:'selects',label:'征免规定'}]
//		鱼粉数据    	
		let tdData1=[["2017/7/1", "饲料用红鱼粉", "","2301201000", "广东XX饲实业股份有限公司", "5", "3214345234", "墨西哥", "19", "17", "USD","--","--","--","--","--","--","--"],
		["2017/5/2", "红鱼粉（饲料用）", "", "2301201000", "广州XX鱼粉贸易有限公司", "2", "5676445243", "俄罗斯联邦", "12", "15", "USD", "--","--","--","--","--","--","--"],
		["2017/4/3", "白鱼粉（饲料用）", "", "2301201000", "厦门XX国际贸易有限公司", "2", "7645446545", "厄瓜多尔", "19", "11", "USD", "--","--","--","--","--","--","--"],
		["2017/3/20", "鱼粉", "", "2301201000", "广东XX饲料实业股份有限公司", "1", "3345444564", "墨西哥", "20", "16", "USD", "--","--","--","--","--","--","--"],
		["2017/2/5", "白鱼粉", "", "2301201000", "XXXX饲料有限公司", "1", "6733244322", "摩洛哥", "13", "11", "USD", "--","--","--","--","--","--","--"],
		["2017/6/3", "饲料用白鱼粉", "", "2301201000", "沈阳XX牧贸易有限公司", "4", "3452534345", "摩洛哥", "14", "13", "EUR", "--","--","--","--","--","--","--"],
		["2017/6/3", "饲料用白鱼粉", "", "2301201000", "沈阳XX牧贸易有限公司", "4", "3452534345", "摩洛哥", "14", "13", "EUR", "--","--","--","--","--","--","--"],
		["2017/6/3", "饲料用白鱼粉", "", "2301201000", "沈阳XX牧贸易有限公司", "4", "3452534345", "摩洛哥", "14", "13", "EUR", "--","--","--","--","--","--","--"],
		["2017/6/3", "饲料用白鱼粉", "", "2301201000", "沈阳XX牧贸易有限公司", "4", "3452534345", "摩洛哥", "14", "13", "EUR", "--","--","--","--","--","--","--"],
		["2017/2/1", "饲料用红鱼粉", "", "2301201000", "上海XX贸易有限公司", "1", "4335664445", "墨西哥", "11", "19", "USD", "--","--","--","--","--","--","--"]
		];
//		啤酒数据
		let tdData2=[["2017/8/2", "啤酒", "生啤酒", "2203000000", "上海市XXX商贸有限公司","", "222126171008", "德国", "４３５美元／吨","", "美元", "升", "升", "1308","", "3000","", "751.50"],
		["2017/8/2", "啤酒", "生啤酒", "2203000000", "上海XX贸易有限公司", "","222126171009", "德国", "５８０美元／吨", "","美元", "升", "升", "2906", "","5000","", "1252.51"],
		["2017/8/2", "德国啤酒", "黑色小麦啤酒", "2203000000", "上海XX进出口有限公司","", "223256171038", "德国", "４５０美元／吨", "","美元", "升", "升", "4509", "","10000", "","2505.0"],
		["2017/8/2", "荷兰啤酒", "喜力啤酒", "2203000000", "XXX商贸（武汉）有限公司","", "222126172315	", "荷兰	", "４００美元／吨", "","美元", "升", "升", "2405","", "6000", "","1503.01"],
		["2017/8/2", "啤酒", "全麦啤酒", "2203000000", "温州XX贸易有限公司","", "223026171023", "比利时", "３６５美元／吨", "","美元", "升", "升", "1097", "","3000", "","601.20"],
		["2017/8/2", "啤酒桶", "橡木啤酒桶", "7310100090", "XX（昆山）酒业有限公司","", "222226171026", "德国", "４０００美元／吨","", "美元", "千克", "千克", "2000", "","500", "","0.00"],
		["2017/8/2", "台湾啤酒", "全麦啤酒", "2203000000", "江苏省XX酒业有限公司", "","222426171014", "台湾", "３００美元／吨","", "美元", "升", "升", "601", "","2000", "","400.80"],
		["2017/8/3", "啤酒酶", "啤酒专用复合酶", "3507909000", "深圳XX酒业有限公司", "","222726171125", "德国", "６００００美元／吨","", "美元", "千克", "千克", "6000","", "100", "","0.00"],
		["2017/8/3", "荷兰啤酒", "喜力啤酒", "2203000000", "上海XX贸易有限公司", "","222226171229", "荷兰", "４５６美元／吨", "","美元", "升", "升", "2285", "","5000", "","1252.51"],
		["2017/8/3", "德国啤酒", "德国黑啤", "2203000000", "XXX（上海）商贸有限公司","", "221926171104", "德国", "４８０美元／吨","", "美元", "升", "升", "1443","", "3000", "","751.50"]];
//      目录数据
        let thData1 = [{type: 'text',label: '日期'}, {type: 'text',label: '商品名称'}, {type: 'text',label: '规格型号'}, {type: 'selects',options: ['税号','2301201000','2301201001']},
        {type: 'selects',options: ['申报单位','俄罗斯联邦','墨西哥','摩洛哥','摩洛哥']},{type: 'selects',options: ['风险信息（条）','5','4','3','2','1','0']}, {type: 'text',label: '报关单号'},
        {type: 'selects',options: ['原产地','俄罗斯联邦','墨西哥','摩洛哥','摩洛哥']}, {type: 'text',label: '申报单价'}, {type: 'text',label: '海关单价'}, {type: 'text',label: '币制'}, 
        {type: 'text',label: '申报计量单位'}, {type: 'text',label: '法定单位'}, {type: 'text',label: '申报总价'}, {type: 'text',label: '海关总价'}, {type: 'text',label: '申报数量'}, {type: 'text',label: '法定数量'}, {type: 'text',label: '征免'}];

class ApprovalPlatform extends React.Component{
    constructor(){
        super();
        this.state={
        	checkedIndexs:[],
        	fishMealData:tdData1,
        	beerData:tdData2,
        	getthData:false
        }
        this.judge=this.judge.bind(this);
        this.getData=this.getData.bind(this);
        this.getthData=this.getthData.bind(this);
    }
    getData(params){
    	let newArr=[...this.state.checkedIndexs,params];
    	this.setState({
    		checkedIndexs:newArr
    	})
    }
    getthData(params){
    	this.setState({getthData:params})
    }
    judge(){
    	
    		let indexArr=this.state.checkedIndexs;
    	
//  	当搜索啤酒的时候对表格进行的一些操作
    	if (this.props.queryConditionData=='啤酒') {
	    	let beerData1=this.state.beerData;
	    	for (var i in indexArr) {
	    		delete beerData1[indexArr[i]];
	    	}
	    	
	    	let newArr0=[];
	    	for (var j=0;j<beerData1.length;j++) {
	    		if (typeof(beerData1[j])!=="undefined") {
	    			newArr0.push(beerData1[j])
	    		} 
	    	}
	    	this.setState({
	    		beerData:newArr0,
	    		checkedIndexs:''
	    	})
    	
    	} else{
//  	当搜索鱼粉的时候对表格进行的一些操作
    		let fishMealData1=this.state.fishMealData;
    		for (var i in indexArr) {
    		delete fishMealData1[indexArr[i]];
	    	}
	    	let newArr=[];
	    	for (var j=0;j<fishMealData1.length;j++) {
	    		if (typeof(fishMealData1[j])!=="undefined") {
	    			newArr.push(fishMealData1[j])
	    		} 
	    	}
	    	this.setState({
	    		fishMealData:newArr,
	    		checkedIndexs:''
	    	})
    	}
    	if (this.state.getthData) {
    		this.setState({
	    		fishMealData:[],
	    		beerData:[]
	    	})
    	}
    	
    	
    }
    
    render(){
		return(
			<div>
				<div style={{marginLeft:"10px"}}><QueryCondition conditiondata={conditiondata1} /></div>
				 <p className="nums">共查询到 <span>{this.props.queryConditionData=='啤酒' ? this.state.beerData.length:this.state.fishMealData.length}</span> 条商品信息</p>
				<Table thData={thData1} tdData={this.props.queryConditionData=='啤酒' ? this.state.beerData:this.state.fishMealData} getData={this.getData} getthData={this.getthData}/>
				<p className="btns">
					<Button onClick={this.judge} type="primary">挂起</Button>
					<Button onClick={this.judge} type="primary">验估</Button>
					<Button onClick={this.judge} type="primary" >通过</Button>
				</p>
			</div>
		)}
};
function mapStateToProps(state) {
    return state
};
export default connect(mapStateToProps)(ApprovalPlatform);