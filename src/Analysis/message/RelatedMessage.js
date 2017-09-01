import React from 'react';
import { Button } from 'antd'


import { Input } from 'antd';
const Search = Input.Search;

class RelatedMessage extends React.Component {
  constructor(){
    super();
    this.state = {
      level: 0,
      type: 0,
      searchValue: ""
    }
  }

handlechange(level){
  this.setState({level})
}
_handlechange(type){
  this.setState({type})
}
  render () {
    let self = this;
    const Du = ['一度', '二度', '三度'].map((e, i) =>{
      return <div className={ i === this.state.level ? "selected" : "du"} onClick={this.handlechange.bind(this, i)}>{e}</div>
    })
    const De = ['全部', '投资目标', '股东'].map((e, i) =>{
      return <div className={ i === this.state.type ? "selected" : "du"} onClick={this._handlechange.bind(this, i)}>{e}</div>
    })
    let TotalData = [
      '1.北京京东世纪贸易有限公司',
      '2.上海原迈贸易有限公司',
      '3.沈阳京东世纪贸易有限公司',
      '4.武汉京东金德贸易有限公司',
      '5.重庆京东海嘉电子商务有限公司',
      '6.山东供销京东农贸发展有限公司',
      '7.上海京汇小额贷款有限公司',
      '8.北京京东晟禾农业科技有限公司',
      '9.武汉京东世纪贸易有限公司',
      '10.天津京东海荣贸易有限公司',
     ]

     if(this.state.searchValue!==""){
       TotalData = TotalData.filter((e,i)=>{
         return e.indexOf(this.state.searchValue) !== -1
       })
     }

     let TotalDataDIV = TotalData.map((e, i)=>{
       return <div style={{lineHeight:"40px", textIndent:"5px",backgroundColor:"#fff", borderBottom:"1px solid #bbb"}}>{e}</div>
     })
      return <div style={{display:"flex"}} className="RelatedMessage">
                <div style={{width:"900px", height:"600px"}}>
                  <img  src={require("../../assets/1.png")} style={{width:"900px"}} />
                </div>
                <div style={{width:"300px", height:"600px"}}>
                  <div style={{height:"40px", width:"298px", display:"flex", justifyContent:"space-between"}}>
                      {Du}
                  </div>
                  <div style={{height:"40px", width:"298px", display:"flex", justifyContent:"space-between"}}>
                    {De}
                  </div>
                  <Button type="primary" icon="download" style={{width:'296px',height:"40px", marginTop:"2px", marginBottom:"2px"}}>下载关联方列表</Button>
                  <Search
                    placeholder="请选择您要查询的关联方"
                    style={{ width: 296 , height:40, marginTop:"2px", marginBottom:"2px"}}
                    onSearch={value => self.setState({searchValue: value})}
                  />
                  <div style={{width:'100%', overflowY:'scroll'}}>
                    {TotalDataDIV}
                  </div>
                </div>
             </div>
  }
}



export default RelatedMessage;
