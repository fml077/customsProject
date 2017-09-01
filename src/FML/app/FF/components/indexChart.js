import React from 'react';
import echarts from 'echarts';
// import { IndexChart2 } from '../data/indexChart2';

const	myindexChart = {
    title : {
        text: '全国税管中心税收情况总览',
        subtext: '单位：亿元',
        left: '50px',
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['京津','上海','广州','总计']
    },
    toolbox: {
        show : true,
        right: '50px',
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    
    xAxis : [
        {
            type : 'category',
            axisLabel: {  
			   interval:0,  
			   rotate:40  
			}, 
            data : ['2017年2月','2017年3月','2017年4月','2017年5月','2017年6月','2017年7月']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'京津',
            type:'bar',
            itemStyle: {
                normal: {
                    color:"rgb(0,46,66)"
                }
            },
            data:[1619,1980,2081,2057,1391,1972],
        },
        {
            name:'上海',
            type:'bar',
            itemStyle: {
                normal: {
                    color:"rgb(0,112,135)"
                }
            },
            data:[1585,1693,1876,1511,1729,1744],
        },
        {
            name:'广州',
            type:'bar',
            itemStyle: {
                normal: {
                    color:"rgb(0,191,224)"
                }
            },
            data:[1991,2006,1612,2081,1493,2002],
        },
        {
            name:'总计',
            type:'line',
            itemStyle: {
                normal: {
                    color:"#345391"
                }
            },
            data:[5195,5679,5569,5649,4613,5718],
        },
    ]
};

class IndexChartLine extends React.Component {
  componentDidMount() {
  	const chartDom = this.refs.chartDom;
  	const myChart = echarts.init(chartDom);
  	myChart.setOption(myindexChart);
  }

  render() {
    let style = {
        width: '100%',
        height: '500px',
        paddingTop: '30px'
    }
  	
    return (
    	<div>
	      <div ref='chartDom' className='indexChart' style={style}>
	      </div>
        </div>
    );
  }
}

export default IndexChartLine;