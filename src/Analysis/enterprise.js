import React, { PropTypes } from 'react';
import { Input, Icon } from 'antd';

import echarts from 'echarts'

import * as d3 from 'd3'

import Message from './message/message'


class Enterprise extends React.Component {
  constructor(){
    super()
    this.state ={
      company: ""
    }
  }


  getStyles(){
   return {
     content: {
       fontSize: '14px',
       display: 'flex',
       width: '1200px',
       margin:"0 auto",
       alignItems :'space-between'
     },
     chart:{
       display:'content-box',
       minWidth: '600px',
       height: '360px',
       backgroundColor: "#eee"
     },
     table:{
       display:'content-box',
       width: '600px',
       height: '360px',
       marginLeft: '50px',
       backgroundColor: "#fff"
     }
   }
 }

draw(){
  var myChart = echarts.init(this.refs.container)
  var option = {
    tooltip: {
        trigger: 'axis'
    },
    backgroundColor: "#fff",
    textStyle: {
        color: 'rgba(0, 0, 0, 0.8)'
    },
    title: {
      text: '企业风险(中风险)',
      left: 'center',
      textStyle: {
          color: '#000'
      },
      zlevel: 2
    },
    radar: [
        {
            indicator: [
                {text: ' 经营行为风险', max: 100},
                {text: '企业舆情风险', max: 100},
                {text: '关联企业风险', max: 100},
                {text: '企业信用风险', max: 100},
                {text: '企业税收风险', max: 100}
            ],
            center: ['50%','50%'],
            radius: 80
        }

    ],
    series: [
        {
            type: 'radar',
             tooltip: {
                trigger: 'item'
            },
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
                {
                    value: [60,73,85,40, 60],
                    name: '中风险'
                }
            ]
        }

    ]
};

myChart.setOption(option)
}
componentDidMount(){
  this.draw()
}
  render () {
     let styles=this.getStyles();
      return <div style={{width: '100%'}}>
              <div style={styles.content} id="e-content">
                <div className ="e-card basic">
                  <h4>企业基本情况</h4>
                  <div className="detail-table">
                      <div className="tab"><Input placeholder="荣成市宝海鱼粉贸易有限公司" style={{width:"200px",margin:"5px auto"}}/></div>
                      <div className="_tab"><span className="type">历史报告单数</span><span className="result">15</span></div>
                      <div className="_tab"><span className="type">主要报关商品</span><span className="result">红鱼粉、白鱼粉</span></div>
                      <div className="_tab"><span className="type">历史补税情况</span><span className="result">15</span></div>
                      <div className="_tab"><span className="type">主要报关关口</span><span className="result">北京、天津</span></div>
                      <div className="_tab"><span className="type">企业欠税情况</span><span className="result">15</span></div>
                      <div className="_tab"><span className="type">经营异常情况</span><span className="result">15</span></div>
                  </div>
                </div>
                <div className ="e-blank"></div>
                <div className ="e-card radar" >
                  <h4>风险雷达图</h4>
                  <div className="card-content" ref= "container" ></div>
                </div>
                <div className ="e-blank"></div>
                <div className ="e-card danger">
                  <h4>风险提示</h4>
                  <div style={{overflowY:"scroll",height:"300px", padding:"8px", paddingRight:"2px"}} className="card-content">
                  <div className="e-danger-title"><Icon type="exclamation-circle" style={{ fontSize: 14, color: 'red', paddingRight:3 }}/>企业税收风险(2)</div>
                    <div>
                        <div>企业存在历史补税情况<span style={{float:"right", paddingRight:'10px'}}>5次</span></div>
                        <div>企业存在欠税情况<span style={{float:"right", paddingRight:'10px'}}>1次</span></div>
                        
                    </div>
                  <div className="e-danger-title"><Icon type="exclamation-circle" style={{ fontSize: 14, color: 'red', paddingRight:3 }}/>经营行为风险(4)</div>
                    <div>
                        <div>公司成立时间较短<span style={{float:"right", paddingRight:'10px'}}>700天</span></div>
                        <div>法人代表变更频繁<span style={{float:"right", paddingRight:'10px'}}></span></div>
                        <div>股东变更频繁<span style={{float:"right", paddingRight:'10px'}}>2次</span></div>
                        <div>注册资本变更频繁<span style={{float:"right", paddingRight:'10px'}}>2次</span></div>
                    </div>
                  <div className="e-danger-title"><Icon type="exclamation-circle" style={{ fontSize: 14, color: 'red', paddingRight:3 }}/>企业信用风险(6)</div>
                  <div>
                      <div>企业诉讼文书数量较多<span style={{float:"right", paddingRight:'10px'}}>10条</span></div>
                      <div>企业存在“民间借贷类”诉讼文书<span style={{float:"right", paddingRight:'10px'}}>10条</span></div>
                      <div>企业受到行政处罚<span style={{float:"right", paddingRight:'10px'}}>10条</span></div>
                      <div>企业存在被执行人信息<span style={{float:"right", paddingRight:'10px'}}>10条</span></div>
                      <div>企业存在失信被执行人信息<span style={{float:"right", paddingRight:'10px'}}>10条</span></div>
                      <div>企业存在经营异常信息<span style={{float:"right", paddingRight:'10px'}}>10条</span></div>
                  </div>
                  <div className="e-danger-title"><Icon type="exclamation-circle" style={{ fontSize: 14, color: 'red', paddingRight:3 }}/>关联企业风险(3)</div>
                      <div>关联方中存在黑名单企业<span style={{float:"right", paddingRight:'10px'}}>15家</span></div>
                      <div>关联方中存在失信被执行企业<span style={{float:"right", paddingRight:'10px'}}>6家</span></div>
                      <div>关联方中存在吊销企业<span style={{float:"right", paddingRight:'10px'}}>6家</span></div>
                  <div className="e-danger-title"><Icon type="exclamation-circle" style={{ fontSize: 14, color: 'red', paddingRight:3 }}/>企业舆情风险(1)</div>
                      <div>企业存在负面舆情<span style={{float:"right", paddingRight:'10px'}}>3条</span></div>
                  <div className="e-danger-title"><Icon type="exclamation-circle" style={{ fontSize: 14, color: 'red', paddingRight:3 }}/>企业欠税风险(1)</div>
                        <div>企业存在欠税情况<span style={{float:"right", paddingRight:'10px'}}>3次</span></div>
                  </div>
                </div>
              </div>
              <div style={styles.content}><Message /></div>
             </div>
  }
}

export default Enterprise;
