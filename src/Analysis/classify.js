import React, { PropTypes } from 'react';
import { Menu, Dropdown, Icon, Button, Table , Input, DatePicker} from 'antd';



import * as d3 from 'd3'


const columns = [{
  title: '归类占比',
  dataIndex: 'glzb',
  key: 'glzb'
}, {
  title: '税号',
  dataIndex: 'sh',
  key: 'sh',
}, {
  title: '货品名称(税制)',
  dataIndex: 'hpmc',
  key: 'hpmc',
}, {
  title: '商品名称(综合分类表)',
  dataIndex: 'spmc',
  key: 'spmc',
}, {
  title: '最惠国税率',
  dataIndex: 'zhgsl',
  key: 'zhgsl',
},
{
  title: '普通税率',
  dataIndex: 'ptsl',
  key: 'ptsl'
},
{
  title: '增值税率',
  dataIndex: 'zzsl',
  key: 'zzsl'
},
{
  title: '计量单位',
  dataIndex: 'jldw',
  key: 'jldw'
}
];

const  tableData = [
      {
        key: '1',
        glzb: '40%',
        sh:12121110,
        hpmc: '饲料用鱼粉',
        spmc: "饲料用鱼粉",
        zhgsl: 2,
        ptsl: 11,
        zzsl: 0,
        jldw: "kg",
      },
      {
        key: '2',
        glzb: '35%',
        sh:12121111,
        hpmc: '其他',
        spmc: "其他调味品",
        zhgsl: 21,
        ptsl: 90,
        zzsl: 17,
        jldw: "kg",
      },
      {
        key: '3',
        glzb: '25%',
        sh:12121112,
        hpmc: '适合供人食用的细粉、粗粉及团粒',
        spmc: "供人食用的鱼粉及团粒",
        zhgsl: 10,
        ptsl: 80,
        zzsl: 13,
        jldw: "kg",
      }
    ]


class Classify extends React.Component {
  constructor(){
    super()
    this.state = {
      data: [
               ["供人食用的鱼粉及团粒", 40000],
               ["饲料用鱼粉", 35000],
               ["其他调味品", 25000]
             ],
      tableData: tableData,
      columns: columns
    }
  }

  componentDidMount(){
 
     this.draw(this.state.data)
   }

  draw(data){
           d3.select(this.refs.container).html("")
           const width = 360
           const height = 360
           const innerRadius = width / 8
           const outerRadius = width / 2.8
           const innerRadiusFinal = width / 10
           const outerRadiusFinal =  width / 2.6
           // 进行数据转换
           var pie =d3.pie()
                      .sort(null)
                      .value(function(d){ return d[1] })

           var pieData = pie(data)
           var svg = d3.select(this.refs.container)
               .append("svg")
               .attr("width", width)
               .attr("height",height)
           //创建一个弧生成器
           var arc = d3.arc()
                           .innerRadius(innerRadius)
                           .outerRadius(outerRadius)
           // for animation
            var arcFinal = d3.arc()
                           .innerRadius(innerRadiusFinal)
                           .outerRadius(outerRadiusFinal);
           var color = d3.scaleOrdinal(d3.schemeCategory20)
           //添加路径
             //添加对应的弧组，即对应的弧元素<g>
             var arcs = svg.selectAll("g")
                           .data(pieData)
                           .enter()
                           .append("g")
                           .attr("transform", function(){
                               return `translate(${ width /2 }, ${ height / 2})`
                           })
            //添加弧的路径元素
            var colors = ["rgb(0, 188, 212)", "rgb(255, 64, 129)", '#955694']
             arcs.append("path")
                  .attr("fill", function (d, i) { return colors[i]})
                  .attr("d", function (d) { return arc(d) })
                  .on("click",function(d){
                       console.log(d.data)
                  })
                  .on("mouseover", function(d){
                      
                      d3.select(this).transition()
                                       .duration(150)
                                       .attr("d", arcFinal)
                  })
                  .on("mouseout", function(){
                       d3.select(this).transition()
                                       .duration(150)
                                       .attr("d", arc)
                       
                  })

           //添加文字
             arcs.append("text")
                  .attr("transform", function(d){
                      var x = arc.centroid(d)[0]
                      var y = arc.centroid(d)[1]
                      return `translate(${x}, ${y})`
                  })
                 .text(function(d){
                       var percent =  Number(d.value) / d3.sum(data, function(d){ return d[1]}) *100
                       return percent.toFixed(2) + "%"
                 })
                 .attr("text-anchor", "middle")
                 .attr("fill", "#fff")
                 .style("font-size", "14px")

              //添加图例
              var cover =svg.append("g")
              cover.selectAll("rect")
                  .data(data)
                  .enter()
                  .append("rect")
                  .attr("width", 10)
                  .attr("height", 10)
                  .attr("fill", function(d, i){
                    return colors[i]
                  })
                  .attr("transform", function(d, i){
                      return `translate(${0}, ${20*i+40})`
                  })
              
              cover.selectAll("text")
                  .data(data)
                  .enter()
                  .append("text")
                  .text(function(d, i){
                    return d[0]
                  })
                  .attr("transform", function(d, i){
                      return `translate(${0}, ${20*i+40})`
                  })
                  .attr("font-size", '12px')
                  .attr("dy",function(){
                    return '0.75em'
                  })
                  .attr("dx",function(){
                    return '1em'
                  })
                  .attr("fill", function(){
                    return '#333'
                  })
 }

componentWillUnmount(){
 
}
  getStyles(){
   return {
     content: {
       fontSize: '14px',
       display: 'flex'
     },
     chart:{
       display:'content-box',
       minWidth: '360px',
       height: '360px',
       marginTop: "-30px"
     },
     table:{
       display:'content-box',
       width: '800px',
       height: '360px',
       marginLeft: '50px'
     }
   }
 }
  render () {
    console.log(this.state.tableData)
     let styles=this.getStyles();
      return <div>
                <div style={styles.content}>
                  <div className="example-input">
                   <span style={{marginRight: '5px'}}>商品名称</span>
                   <Input.Search
                        placeholder="鱼粉"
                        style={{ width: 160 }}
                        onSearch={value => console.log(value)}
                      />
                  </div>
                  <div className="example-input">
                    <span style={{marginRight: '5px'}}>统计时间</span>
                    <span className="DatePicker"><DatePicker placeholder="起始时间"/></span>
                    <span className="DatePicker"><DatePicker placeholder="结束时间" /></span>
                  </div>
                </div>
                <div style={styles.content}>
                <div style={{height:"340px"}}>
                  <div style={{width: '360px', textAlign:"center", lineHeight: "50px"}}>历史归类情况占比图</div>
                  <div style={styles.chart} ref= "container" ></div>
                </div>
                <div style={{height:"340px"}}>
                  <div style={{width: '800px', textAlign:"center", lineHeight: "50px"}}>历史归类情况表</div>
                  <div style={styles.table}>
                    <Table columns={this.state.columns} dataSource={this.state.tableData} />
                  </div>
                </div>
                </div>
             </div>
  }
}

export default Classify;
