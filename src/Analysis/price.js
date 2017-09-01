import React, { PropTypes } from 'react';
import { Input } from 'antd';
import { Menu, Dropdown, Icon, Button, Table } from 'antd';

import * as d3 from 'd3'

const  line_data = [
  {
      type: "历史平均",
      value: [
              ['2016/09', 1.84],
              ['2016/10', 1.78],
              ['2016/11', 1.76],
              ['2016/12', 1.54],
              ['2017/01', 1.67],
              ['2017/02', 1.65],
              ['2017/03', 1.72],
              ['2017/04', 1.63],
              ['2017/05', 1.8],
              ['2017/06', 1.54],
              ['2017/07', 1.66],
              ['2017/08', 1.68]
           ]
  },
  {
      type: "行业平均",
      value: [
              ['2016/09', 1.6],
              ['2016/10', 1.93],
              ['2016/11', 1.82],
              ['2016/12', 1.93],
              ['2017/01', 1.89],
              ['2017/02', 1.81],
              ['2017/03', 1.66],
              ['2017/04', 1.67],
              ['2017/05', 1.97],
              ['2017/06', 1.74],
              ['2017/07', 1.94],
              ['2017/08', 1.79]
           ]
  },
  {
    type: "当前商品",
    value: [
            ['2016/09', 1.6],
            ['2016/10', 1.83],
            ['2016/11', 1.62],
            ['2016/12', 1.73],
            ['2017/01', 1.79],
            ['2017/02', 1.88],
            ['2017/03', 1.76],
            ['2017/04', 1.68],
            ['2017/05', 1.87],
            ['2017/06', 1.79],
            ['2017/07', 1.84],
            ['2017/08', 1.99]
         ]
}

]


const columns = [{
  title: '时间',
  dataIndex: 'time',
  key: 'time'
}, {
  title: '历史平均',
  dataIndex: 'history',
  key: 'history',
}, {
  title: '行业平均',
  dataIndex: 'works',
  key: 'works',
}, {
  title: '最高',
  dataIndex: 'max',
  key: 'max',
}, {
}, {
  title: '当前商品',
  dataIndex: 'current',
  key: 'current',
}, {
  title: '最低',
  dataIndex: 'min',
  key: 'min',
}
];


const max_min = [
  ['2016/09', 2.39, 1.44],
  ['2016/10', 2.5, 1.12],
  ['2016/11', 2.33, 1.28],
  ['2016/12', 2.34, 1.15],
  ['2017/01', 2.75, 1.02],
  ['2017/02', 2.22, 0.87],
  ['2017/03', 2.3, 0.77],
  ['2017/04', 2.25, 1.31],
  ['2017/05', 2.34, 1.15],
  ['2017/06', 2.37, 1.4],
  ['2017/07', 2.41, 1.16],
  ['2017/08', 2.67, 1.23]
]


// {
//   key: '1',
//   time: '2017/08',
//   history: 1.84,
//   works: 1.6,
//   max: 2.39,
//   min: 1.44
// },
const  tableData = max_min.map((e, i) =>{
  let obj = {};
  obj.key = i;
  obj.time = e[0];
  obj.max = e[1];
  obj.min = e[2];
  line_data.forEach((EV, index)=>{
     switch (EV.type) {
       case "历史平均":
            obj.history = EV.value.find((ev)=>{
              return ev[0] == obj.time
            })[1]
         break;
       case "行业平均":
             obj.works = EV.value.find((ev)=>{
               return ev[0] == obj.time
             })[1]
         break;
       case "当前商品":
            obj.current = EV.value.find((ev)=>{
              return ev[0] == obj.time
            })[1]
         break;

     }
  })
  return obj
})

console.log(tableData)
class Price extends React.Component {
  constructor(){
    super()
    this.state ={
      place : "A",
      money : "china",
      tableData: tableData,
      columns: columns
    }
  }
  getStyles(){
   return {
     content: {
       fontSize: '14px',
       display: 'flex'
     },
     chart:{
       display:'content-box',
       marginTop:"20px",
       minWidth: '600px',
       height: '360px',
       backgroundColor: '#eee'
     },
     table:{
       display:'content-box',
       width: '600px',
       height: '360px',
       marginLeft: '50px'
     }
   }
 }

componentDidMount(){
  this.draw(line_data)
}
 draw(data, map){
   d3.select(this.refs.container).html("")
    var initWidth = 600
    var initHeight = 360
    var padding = { left:40, top:20, right:20, bottom: 40}
    var height = initHeight - padding.top - padding.bottom
    var width  = initWidth - padding.left - padding.right
    var svg = d3.select(this.refs.container)
                .append("svg")
                .attr("id", "chart")
                .attr("width", initWidth)
                .attr("height", initHeight)
                .style("padding-left", padding.left)
                .style("padding-right", padding.right)
                .style("padding-top", padding.top)
                .style("padding-bottom", padding.bottom)
     //添加y轴坐标轴
        //y轴比例尺
        let nums = [...data[0]["value"], ...data[1]["value"]].map(function(e){
            return e[1]
        })
        let yScale = d3.scaleLinear()
         .domain([0, d3.max(nums)*2])
         .range([height , 0]);
         let _yScale = d3.scaleLinear()
         .domain([0, d3.max(nums)*2])
         .range([0, height]);
        //定义y轴
        let yAxis = d3.axisLeft(yScale).ticks(6).tickSize(0.5);
        //添加y轴
        svg.append("g")
        .attr("class","axis")
        .attr("transform","translate(" + 0 + "," + 0 + ")")
        .call(yAxis);
     //添加x轴坐标轴
         //x轴比例尺
         let years = data[0]["value"].map(function(e){
                    return e[0]
          })
         const step = width / years.length

         let xScale = d3.scaleBand()
                        .domain(years)
                        .rangeRound([0, width])

        let _xScale =  d3.scaleBand()
                       .domain([0, width])
                       .rangeRound(years)
        //定义x轴
        let xAxis = d3.axisBottom(xScale).ticks(0)
        //添加x轴
         svg.append("g")
            .attr("class","axis-x")
            .attr("transform","translate(" + "0 ," + height + ")")
            .call(xAxis);
        //添加
       // gridlines in y axis function
       function make_y_gridlines() {
        return d3.axisLeft(yScale)
            .ticks(6)
    }
          // add the Y gridlines
        var grid =  svg.append("g")
            .attr("id", "grid")
            .call(make_y_gridlines()
                .tickSize(-width)
                .tickFormat("")
            )
        //--------------以下是绘制图形-------------
        //创建一个直线生成器
        var linePath = d3.line()
                         .x( function(d){ return xScale(d[0]) + step/2 })
                         .y( function(d){ return yScale(d[1])})
        var colors = ["rgb(0, 188, 212)", "rgb(255, 64, 129)", '#955694']
        //添加路径
        svg.append("g").selectAll("path")
            .data(data)
            .enter()
            .append("path")
            .attr("transform","translate(0, 0)")
            .attr("d", function(d){
                return linePath(d.value)
            })
            .attr("fill", "none")
            .attr("stroke-width", "2px")
            .attr("stroke", function(d, i){
              return colors[i]
            })
        // 添加节点
        var circles = svg.append("g")
                        .selectAll("g")
                        .data(data)
                        .enter()
                        .append("g")
                        .attr("class", function(d,i){return d.type})

          circles.selectAll("circle")
              .data(function(d){
                 return d.value
              })
              .enter()
              .append("circle")
              .attr("cx", function(d){
                 return xScale(d[0]) + step/2
                })
              .attr("cy", function(d){
                 return height - _yScale(d[1])
               })
              .attr("r", 4)
              .attr("fill", function(d, i){
                 var type = d3.select(d3.select(this)._groups[0][0].parentNode).attr("class")
                 var ii = data.findIndex((val, index) =>{
                            return val.type == type
                         }
                        )
                return colors[ii]
              })
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
                    return `translate(${(i)*77+144}, ${(i)*0})`
                })
            cover.selectAll("text")
                  .data(data)
                  .enter()
                  .append("text")
                  .text(function(d, i){
                    return d.type
                  })
                  .attr("transform", function(d, i){
                      return `translate(${(i)*77+157}, ${(i)*0})`
                  })
                  .attr("font-size", '12px')
                  .attr("dy",function(){
                    return '0.75em'
                  })
                  .attr("fill", function(){
                    return '#333'
                  })
       // 偏移文字
       d3.selectAll('.axis-x .tick text')
         .attr("dy",'1em')
         .attr('dx', '-2em')

        // 添加河流
        var areaPath = d3.area()
                          .x(function(d){ return xScale(d[0]) + step/2 })
                          .y0(function(d){  return yScale(d[2]) })
                          .y1(function(d){  return yScale(d[1]) })

        var river = svg.append("path")
                        .attr("d", areaPath(max_min) )
                        .attr('fill', "rgba(0,0,255,0.2)")


 }
 OnChange(ev){
   this.setState({ place: ev})
 }
 OnChangeMoney(ev){
   this.setState({ money: ev})
 }
  render () {
     let styles=this.getStyles();
     const menu1 = (
      <Menu onClick={()=>{}}>
        <Menu.Item key="1">厄瓜多尔</Menu.Item>
        <Menu.Item key="2">墨西哥</Menu.Item>
        <Menu.Item key="3">芬兰</Menu.Item>
        <Menu.Item key="4">奥地利</Menu.Item>
      </Menu>
    );
    const menu2 = (
      <Menu onClick={()=>{}}>
        <Menu.Item key="1">USD</Menu.Item>
        <Menu.Item key="2">EUR</Menu.Item>
        <Menu.Item key="3">GBP</Menu.Item>
      </Menu>
    );
      return <div>
                <div style={styles.content}>
                  <div className="example-input fix">
                   <span style={{marginRight: '5px'}}>商品名称</span>
                   <Input.Search
                        placeholder="鱼粉"
                        style={{ width: 200 }}
                        onSearch={value => console.log(value)}
                      />
                  </div>
                  <div className="example-input">
                   <span style={{marginRight: '5px'}}></span>
                   <Dropdown.Button onClick={()=>{}} overlay={menu1}>
                      原产地
                    </Dropdown.Button>
                  </div>
                  <div className="example-input">
                   <span style={{marginRight: '5px'}}></span>
                   <Dropdown.Button onClick={()=>{}} overlay={menu2}>
                   币制
                 </Dropdown.Button>
                  </div>
                  <div className="example-input">
                   <span style={{marginRight: '5px'}}>统计力度</span>
                   <Button>年</Button>
                   <Button>月</Button>
                   <Button>日</Button>
                  </div>
                </div>
                <div style={styles.content}>
                  <div id="priceChart">
                    <div style={{width: '600px', textAlign:"center", lineHeight: "50px"}}>单价趋势图</div>
                    <div style={styles.chart} ref= "container" ></div>
                  </div>
                  <div>
                    <div style={{width: '600px', textAlign:"center", lineHeight: "50px"}}>单价趋势图</div>
                    <div style={styles.table} >
                      <Table columns={this.state.columns} dataSource={this.state.tableData} pagination={{pageSize:5}}/>
                    </div>
                  </div>
                </div>
             </div>
  }
}

export default Price;
