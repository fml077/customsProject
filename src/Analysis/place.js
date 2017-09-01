import React, { PropTypes } from 'react';
import { Input } from 'antd';
import { Menu, Dropdown, Icon, Button , Table} from 'antd';
import { DatePicker } from 'antd';

import * as d3 from 'd3'



const  bar_data =[
    {
        country : "俄罗斯联邦",
        proportion: 0.5 ,
        value : { "饲料用鱼粉": 12, "其他调味品":12, '供人食用的鱼粉及团粒': 0 }
    },
    {
        country : "墨西哥",
        proportion: 0.2 ,
        value : { "饲料用鱼粉": 11, "其他调味品":13, '供人食用的鱼粉及团粒': 0 }
    },
    {
        country : "摩洛哥",
        proportion: 0.16 ,
        value : { "饲料用鱼粉": 13, "其他调味品":12, '供人食用的鱼粉及团粒': 0 }
    },
    {
        country : "厄瓜多尔",
        proportion: 0.08 ,
        value : { "饲料用鱼粉": 3, "其他调味品":3, '供人食用的鱼粉及团粒': 12 }
    },
    {
        country : "西班牙",
        proportion: 0.04 ,
        value : { "饲料用鱼粉": 0, "其他调味品":3, '供人食用的鱼粉及团粒': 2 }
    },
    {
        country : "澳大利亚",
        proportion: 0.03 ,
        value : { "饲料用鱼粉": 0, "其他调味品":12, '供人食用的鱼粉及团粒': 4 }
    },
]

const  history_bar_data =[
  {
      country : "澳大利亚",
      proportion: 0.41 ,
      value : { "饲料用鱼粉": 8, "其他调味品":9, '供人食用的鱼粉及团粒': 0 }
  },
  {
      country : "俄罗斯联邦",
      proportion: 0.22 ,
      value : { "饲料用鱼粉": 10, "其他调味品":11, '供人食用的鱼粉及团粒': 0 }
  },
  {
      country : "厄瓜多尔",
      proportion: 0.18 ,
      value : { "饲料用鱼粉": 10, "其他调味品":13, '供人食用的鱼粉及团粒': 1 }
  },
  {
      country : "墨西哥",
      proportion: 0.1 ,
      value : { "饲料用鱼粉": 5, "其他调味品":12, '供人食用的鱼粉及团粒': 8 }
  },
  {
      country : "奥地利",
      proportion: 0.06 ,
      value : { "饲料用鱼粉": 8, "其他调味品":12, '供人食用的鱼粉及团粒': 1 }
  },
  {
      country : "芬兰",
      proportion: 0.03 ,
      value : { "饲料用鱼粉": 10, "其他调味品":4, '供人食用的鱼粉及团粒': 2 }
  },
]

const columns = [{
  title: '原产地占比',
  dataIndex: '原产地占比',
  key: '原产地占比'
}, {
  title: '原产地',
  dataIndex: '原产地',
  key: '原产地',
}, {
  title: <div style={{textAlign:"center"}}><div>12121110</div><div>饲料用鱼粉</div><div>饲料用鱼粉</div></div>,
  dataIndex: '饲料用鱼粉',
  key: '饲料用鱼粉',
}, {
  title: <div style={{textAlign:"center"}}><div>12121110</div><div>其他</div><div>其他调味品</div></div>,
  dataIndex: '其他调味品',
  key: '其他调味品',
}, {
  title: <div style={{textAlign:"center"}}><div>12121110</div><div>适合供人食用的细粉、粗粉及团粒</div><div>供人食用的鱼粉及团粒</div></div>,
  dataIndex: '供人食用的鱼粉及团粒',
  key: '供人食用的鱼粉及团粒',
}
];



class Place extends React.Component {
  constructor(){
    super()
    this.state ={
      place : "A",
      money : "china",
      columns : columns,
      bar_data : bar_data,
      tableData : [],
      data_type : "当前报关"
    }
  }

  sortData(data){ //为表格
    let temp_tableData = []
    data.forEach((e, i)=>{
      let obj={}
      obj['key'] = i;
      obj['原产地占比'] = e.proportion *100 + '%';
      obj['原产地'] = e.country;
      let t = e.value
      for( let k in t){
          obj[k] = t[k]
      }
      temp_tableData.push(obj)
    })

    this.setState({tableData: temp_tableData})
  }

componentWillMount(){
   this.sortData(this.state.bar_data)  //把数据处理成表格可显示的格式
}

componentDidMount(){
  this.draw(this.state.bar_data)   //绘制图形
}
draw(data){
    var initWidth = 600
    var initHeight = 400
    var padding = { left:100, top:10, right:10, bottom: 20}
    var height = initHeight - padding.top - padding.bottom
    var width  = initWidth - padding.left - padding.right
    var svg = d3.select(this.refs.container)
                .html("")
                .append("svg")
                .attr("width", initWidth)
                .attr("height", initHeight)
                .style("padding-left", padding.left)
                .style("padding-right", padding.right)
                .style("padding-top", padding.top)
                .style("padding-bottom", padding.bottom)
     //添加y轴坐标轴
        //y轴比例尺
        let ydata = data.map(function(e, i){ return e.country })
        let yScale = d3.scaleBand()
                       .domain(ydata)
                       .rangeRound([0, height])
                       .padding(0.6)
        //定义y轴
        let yAxis = d3.axisLeft(yScale).ticks(0).tickSize(0)
        //添加y轴
        svg.append("g")
            .attr("class","axis-y")
            .call(yAxis);
       let xData = data.map(function(e, i){ return e.proportion })
        let xScale = d3.scaleLinear()
                      .domain([0, d3.max(xData)*1.2])
                      .range([0, width])
      //添加网格
      // gridlines in x axis function
      function make_x_gridlines() {
          return d3.axisBottom(xScale)
              .ticks(5)
      }
      // add the X gridlines
      svg.append("g")
          .attr("class", "grid")
          .attr("transform", "translate(0," + height + ")")
          .call(make_x_gridlines()
              .tickSize(-height)
              .tickFormat("")
          )
      var rect =svg.append("g")
               rect.selectAll("rect")
                    .data(data)
                    .enter()
                    .append("rect")
                    .attr("x", 0)
                    .attr("y", function(d, i){ return yScale(d.country)})
                    .attr("height", yScale.bandwidth())
                    .attr("width", function(d){
                        return 0
                    })
                    .attr("fill", "steelBlue")
                    .transition()
                    .duration(800)
                    .attr("width", function(d){
                      return xScale(d.proportion)
                  })


    var text = rect.selectAll("text")
                    .data(data)
                    .enter()
                    .append("text")
                    .attr("x", function(d, i){return 0 })
                    .attr("y", function(d, i){return yScale(d.country)})
                    .text(function(d, i){ return d.proportion*100 +"%"})
                    .attr("fill", function(){
                      return '#333'
                    })
                    .attr("font-size", '12px')
                    .attr("text-anchor", "middle")
                    .attr("dy","1.2em" )
                    .attr("dx","2em" )
                    .transition()
                    .duration(800)
                    .attr("x", function(d, i){return xScale(d.proportion)})
                    

      d3.selectAll(".axis-y .tick text").attr('font-size', 14).attr("dx", '-0.4em')
}


  getStyles(){
   return {
     content: {
       fontSize: '14px',
       display: 'flex'
     },
     chart:{
       display:'content-box',
       minWidth: '600px',
       height: '400px',
       backgroundColor: "#fff"
     },
     table:{
       display:'content-box',
       width: '600px',
       height: '400px',
       marginLeft: '50px',
       backgroundColor: "#fff"
     }
   }
 }

handleChange(e){
  if(e.key == "1"){
      this.setState({ bar_data : history_bar_data , data_type:"历史统计"})
      this.sortData(history_bar_data)
      this.draw(history_bar_data)
    }else{
      this.setState({ bar_data : bar_data , data_type:"当前报关"})
      this.sortData(bar_data)
      this.draw(bar_data)
    }
}

  render () {
    const self = this;
    const bar_menu = <Menu onClick={(e)=>{self.handleChange(e)}}>
          <Menu.Item key="1">历史统计</Menu.Item>
          <Menu.Item key="2">当前报关</Menu.Item>
        </Menu>
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
                  <div id="barChart">
                    <div id="drop_change">
                      <Dropdown overlay={bar_menu}>
                        <span className="ant-dropdown-link" style={{cursor:"pointer", fontSize:"12px", color:"steelblue"}}>
                          历史统计与当前报关切换<Icon type="down" />
                        </span>
                      </Dropdown>
                    </div>
                    <div style={{width: '600px', textAlign:"center", lineHeight: "50px"}}>{`原产地分布占比图(${this.state.data_type})`}</div>
                    <div style={styles.chart} ref= "container" ></div>
                  </div>
                  <div>
                    <div style={{width: '600px', textAlign:"center", lineHeight: "50px", marginTop:"20px"}}>{`原产地税率表(${this.state.data_type})`}</div>
                    <div style={styles.table} >
                      <Table columns={this.state.columns} dataSource={this.state.tableData} />
                    </div>
                  </div>
                </div>
             </div>
  }
}

export default Place;
