import React from 'react';
import echarts from 'echarts';
import 'echarts/map/js/china';
import './indexMap.less';

var option2 = [
	{
        calculable: true,
        tooltip : {
            trigger: 'axis',
            backgroundColor: "rgb(255, 255, 255)",
            textStyle: {
                color: "rgb(84, 83, 83)",
                fontSize: 13,
            }
        },
        xAxis: [{
            type: 'category',
            axisLabel: {  
               interval:0,  
               color: 'rgb(134,106,194)'
            },
            axisLine: {color: '#fff',lineStyle: {color: 'rgb(57,175,239)'}},
            data: ['2017年2月','2017年3月','2017年4月','2017年5月','2017年6月','2017年7月']
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {  
               interval:0,  
               color: 'rgb(134,106,194)'
            },
            axisLine: {color: '#fff',lineStyle: {color: 'rgba(57,106,196,0)'}},
            name: '单位：亿元', //y轴名称
            nameTextStyle: { //y轴名称样式
                color: 'rgb(134,106,194)',
                align: 'left',
                left: 0
            }, 
            splitLine:{
                show:true,
                lineStyle:{
                    color:"rgb(57,175,239)"
                }
            },
            splitArea: {  //折线区域填充
                show: true, 
                areaStyle: {color: ['rgb(53,85,150)','rgb(52,83,145)']} 
            },
        }],
        title: {
            text: '',
            x: 'center',
            textStyle: {
                color: '#fff',
            }
        },
        series: [{
            name: '北京',
            type: 'line',
            stack: '总量',
            itemStyle : {  
                normal : {  
                    color:'#00FF00',  //折线点颜色
                    lineStyle:{  
                        color:'#3B76DE'  //折线线条颜色
                    }  
                }  
            }, 
            data:[1619,1980,2081,2057,1391,1972]
        }]
    },
    {
        calculable: true,
        tooltip : {
            trigger: 'axis',
            backgroundColor: "rgb(255, 255, 255)",
            textStyle: {
                color: "rgb(84, 83, 83)",
                fontSize: 13,
            }
        },
        xAxis: [{
            type: 'category',
            axisLabel: {  
               interval:0,  
               color: 'rgb(134,106,194)'
            },
            axisLine: {color: '#fff',lineStyle: {color: 'rgb(57,175,239)'}},
            data: ['2017年2月','2017年3月','2017年4月','2017年5月','2017年6月','2017年7月']
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {  
               interval:0,  
               color: 'rgb(134,106,194)'
            },
            splitLine:{
                show:true,
                lineStyle:{
                    color:"rgb(57,175,239)"
                }
            },
            axisLine: {color: '#fff',lineStyle: {color: 'rgba(57,106,196,0)'}},
            name: '单位：亿元', //y轴名称
            nameTextStyle: { //y轴名称样式
                color: 'rgb(134,106,194)',
                align: 'left',
                left: 0
            }, 
            splitArea: {  //折线区域填充
                show: true, 
                areaStyle: {color: ['rgb(53,85,150)','rgb(52,83,145)']} 
            },
        }],
        title: {
            text: '',
            x: 'center',
        },
        series: [{
            name: '上海',
            type: 'line',
            stack: '总量',
            itemStyle : {  
                normal : {  
                    color:'#00FF00',  //折线点颜色
                    lineStyle:{  
                        color:'#3B76DE'  //折线线条颜色
                    }  
                }  
            }, 
            data:[1585,1693,1876,1511,1729,1744]
        }]
    },
    {
        calculable: true,
        tooltip : {
            trigger: 'axis',
            backgroundColor: "rgb(255, 255, 255)",
            textStyle: {
                color: "rgb(84, 83, 83)",
                fontSize: 13,
            }
        },
        xAxis: [{
            type: 'category',
            axisLabel: {  
               interval:0,  
               color: 'rgb(134,106,194)'
            },
            axisLine: {color: '#fff',lineStyle: {color: 'rgb(57,175,239)'}},
            data: ['2017年2月','2017年3月','2017年4月','2017年5月','2017年6月','2017年7月']
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {  
               interval:0,  
               color: 'rgb(134,106,194)'
            },
            axisLine: {color: '#fff',lineStyle: {color: 'rgba(57,106,196,0)'}},
            name: '单位：亿元', //y轴名称
            nameTextStyle: { //y轴名称样式
                color: 'rgb(134,106,194)',
                align: 'left',
                left: 0
            }, 
            splitLine:{
                show:true,
                lineStyle:{
                    color:"rgb(57,175,239)"
                }
            },
            splitArea: {  //折线区域填充
                show: true, 
                areaStyle: {color: ['rgb(53,85,150)','rgb(52,83,145)']} 
            },
        }],
        title: {
            text: '',
            x: 'center'
        },
        series: [{
            name: '广州',
            type: 'line',
            stack: '总量',
            itemStyle : {  
                normal : {  
                    color:'#00FF00',  //折线点颜色
                    lineStyle:{  
                        color:'#3B76DE'  //折线线条颜色
                    }  
                }  
            }, 
            data:[1991,2006,1612,2081,1493,2002]
        }]
    }
]

//map

var geoCoordMap = {
    '北京': [116.4551,40.2539],
	'上海': [121.4648,31.2891],
	'广州': [113.5107,23.2196]
};

//获取城市名数据并显示
var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

let option1 = {
    title: {
        text: '',
        left: 'center',
        textStyle: {
            color: '#fff'
        },
        zlevel: 2
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
        	// console.log(params);
            return params.name + ' : ' + params.value[2];
        },
        backgroundColor: "rgb(255, 255, 255)",
        textStyle: {
            color: "rgb(84, 83, 83)",
            fontSize: 13,
            align: "left"
        },
    },
    geo: {
        map: 'china',
        zoom:1.2,
        label: {
            emphasis: {
                show: false
            },
            
        },
        itemStyle: {
            normal: {
                areaColor: '#00A9C7', //地图区域块填充色 #345391  #15E2FA # #0F84C2 #00A9C7
                borderColor: '#345391'
            },
            emphasis: {
                areaColor: '#077A91' //鼠标移上去的颜色
            }
        }
    },
    series: [
        {
            name: '',
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData([
                {name: "北京", value: '<br>本月收税总额:1722亿元,<br>本月审单量:50万笔,<br>本月补缴金额:47亿元'},
                {name: "上海", value: '<br>本月收税总额:1691亿元,<br>本月审单量:51万笔,<br>本月补缴金额:49亿元'},
                {name: "广州", value: '<br>本月收税总额:1709亿元,<br>本月审单量:54万笔,<br>本月补缴金额:49亿元'}
            ]),
            symbolSize: 16,
            label: {
                normal: {
                        formatter: '{b}',   //城市模式下在地图上显示该城市名称
                        textStyle: {
                            color: '#fff', //城市名称颜色
                            fontSize: 14,
                            fontWeight: 700,
                        },
                        show: true,
                    },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#FFFF00'
                },
                emphasis: {
                    borderColor: '#fff',
                    borderWidth: 1
                }
            },
            grid: {
                left: '10px',
                top: '10px',
            }
        }
    ]
};

class IndexMap extends React.Component {
  
  componentDidMount() {
  	const chartDom1 = this.refs.mapDom1;
  	const myChart1 = echarts.init(chartDom1);
  	myChart1.setOption(option1);

        
    const city = this.refs.city;
  	const yuezongNum = this.refs.yuezongNum;
  	const yueshenNum = this.refs.yueshenNum;
  	const rishenNum = this.refs.rishenNum;
  	const budanNum = this.refs.budanNum;
  	const bujinNum = this.refs.bujinNum;
  	

  	const chartDom2 = this.refs.mapDom2;
  	const myChart2 = echarts.init(chartDom2);
  	myChart2.setOption(option2[0])

  	myChart1.on('click', function(param) {
        console.log(param);
	    let name = param.data.name;
        console.log(name);
	    switch (name) {
	    	case '北京':
	    		myChart2.setOption(option2[0]);
                city.innerHTML = '京津税管中心';
	    		yuezongNum.innerHTML="1722亿元";
	    		yueshenNum.innerHTML= "50万笔";
	    		rishenNum.innerHTML= "9932笔";
				budanNum.innerHTML= "1.2万笔";
				bujinNum.innerHTML= "47亿元"
	    		break;
	    	case '上海':
	    		myChart2.setOption(option2[1]);
                city.innerHTML = '上海税管中心';
	    		yuezongNum.innerHTML="1691亿元";
	    		yueshenNum.innerHTML= "51万笔";
	    		rishenNum.innerHTML= "10793笔";
				budanNum.innerHTML= "1.3万笔";
				bujinNum.innerHTML= "49亿元"
	    		break;
	    	case '广州':
	    		myChart2.setOption(option2[2]);
                city.innerHTML = '广州税管中心';
	    		yuezongNum.innerHTML="1709亿元";
	    		yueshenNum.innerHTML= "54万笔";
	    		rishenNum.innerHTML= "9802笔";
				budanNum.innerHTML= "9938万笔";
				bujinNum.innerHTML= "49亿元"
	    		break;
	    	default:
	    		myChart2.setOption(option2[0]);
                city.innerHTML = '京津税管中心';
	    		yuezongNum.innerHTML="1722亿元";
	    		yueshenNum.innerHTML= "50万笔";
	    		rishenNum.innerHTML= "9932笔";
				budanNum.innerHTML= "1.2万笔";
				bujinNum.innerHTML= "47亿元"
	    		break;
	    }

	});

  }

  render() {
  	
    return (
    	<div className='mapWrap clearfix'>
	    	<div className='indexLeft'>
                <p style={{textAlign:"center",fontSize:'16px',position:"relative",top:"50px", color:"#fff"}}>本月税收总计:&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:"#15E2FA", fontWeight:"bold"}}>5167亿元</span></p>
	    	  <div ref='mapDom1' className='mapDom1'></div>
	    	</div>
	    	<div className='indexRight'>
		      <div className='indexRightTop'>
                <h2 ref='city'>京津税管中心</h2>
		      	<h3 >本月税收总金额：<i ref='yuezongNum'>1722亿元</i></h3>
		      	<ul className='indexNumbers'>
		      		<li><span>本月审单量：<i ref='yueshenNum'>50万笔</i></span><span>本月补缴单数：<i ref='budanNum'>1.2万笔</i></span></li>
		      		<li><span>今日审单量：<i ref='rishenNum'>9932笔</i></span><span>本月补缴金额：<i ref='bujinNum'>47亿元</i></span></li>
		      	</ul>
		      </div>
		      <div ref='mapDom2' className='mapDom2'></div>
	    	</div>
        </div>
    );
  }
}

export default IndexMap;