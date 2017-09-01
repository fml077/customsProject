import React, { PropTypes } from 'react';
import { Input } from 'antd';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

import BaiscTable from './BasicTable'

const Baisc = ()=>{
    return <div style={{backgroundColor:"#fff"}}>
            <h3 style={{textAlign:"center", width:"1200px",lineHeight:"60px", backgroundColor:"#fff", margin:"0 auto"}}>北京京东世纪贸易有限公司 - 企业基本信息</h3>
            <h4 style={{textAlign:"center", lineHeight:"40px", width:"1200px",backgroundColor:"#fff", margin:"0 auto"}}>工商资料</h4>
        <div style={{ width:"1200px", height:"260px", backgroundColor:"#fff", margin:"0 auto"}} className="BasicMessage">
            <table>
              <tr>
                <td className="KEY">公司名称</td>
                <td className="VALUE">北京京东世纪贸易有限公司</td>
                <td className="KEY">登记状态</td>
                <td className="VALUE">存续</td>
                <td className="KEY">公司类型</td>
                <td className="VALUE">有限责任公司</td>
                <td className="KEY">法人代表</td>
                <td className="VALUE">刘强东</td>
              </tr>
              <tr>
                <td className="KEY">统一社会信用代码</td>
                <td className="VALUE">91103026605015000</td>
                <td className="KEY">组织结构代码</td>
                <td className="VALUE">660501513</td>
                <td className="KEY">注册号</td>
                <td className="VALUE">110000450007</td>
                <td className="KEY">营业期限</td>
                <td className="VALUE">2007-04-20 - 2037-04-19</td>
              </tr>
              <tr>
                <td className="KEY">成立日期</td>
                <td className="VALUE">2007/1/20</td>
                <td className="KEY">核准日期</td>
                <td className="VALUE">2017/6/15</td>
                <td className="KEY">注册资本</td>
                <td className="VALUE">139798万人民币</td>
                <td className="KEY">实缴资本</td>
                <td className="VALUE">....</td>
              </tr>
            </table>
            <div className="b-table">
                <div className="KEY float left right bottom">登记机关</div>
                <div className="_VALUE float right bottom">北京市工商行政管理局</div>
                <div className="KEY float right bottom">企业地址</div>
                <div className="_VALUE float right bottom">北京市北京技术开发区科创十一街18号C座2层201室</div>
            </div>
            <div className="b-table">
                <div className="KEY float left right bottom " style={{lineHeight:'107px', height:'107px', marginTop:"-1px"}}>经营范围</div>
                <div className="_VALUE float right bottom" style={{width:'1090px', paddingTop:"1px", textAlign: 'left'}}>
                    批发、零售定型包装食品、保健食品（不涉及国营贸易管理商品；涉及配额许可证管理商品的按照国家有关规定办理申请手续）；批发兽药；计算机软件生产；销售自产产品；基础软件服务；技术开发、技术咨询、技术服务、技术转让、技术培训；软件开发、软件设计；计算机网络技术开发；设备安装、维修；计算机系统集成；机械设备、家用电器、电子元器件、五金交电、电子产品、文化用品、照相器材、计算机、软件及辅助设备、
                    化妆品及卫生用品、化工产品（不含危险化学品及一类易制毒化学品）、体育用品、百货、纺织品、服装、日用品、家具、金银珠宝
                </div>
            </div>
         </div>
         <h4 style={{textAlign:"center", lineHeight:"40px", backgroundColor:"#fff"}}>股东</h4>
            <div><BaiscTable  Index='jdGudong' pagination= {false}/></div>
         <h4 style={{textAlign:"center", lineHeight:"40px", backgroundColor:"#fff"}}>高管</h4>
            <div><BaiscTable  Index='jdGaoGuan' pagination= {false}/></div>
         <h4 style={{textAlign:"center", lineHeight:"40px", backgroundColor:"#fff"}}>分支机构</h4>
            <div><BaiscTable  Index='jdBranch' pagination= {false}/></div>
         <h4 style={{textAlign:"center", lineHeight:"40px", backgroundColor:"#fff"}}>董事会</h4>
            <div><BaiscTable /></div>
         <h4 style={{textAlign:"center", lineHeight:"40px", backgroundColor:"#fff"}}>监事会</h4>
            <div><BaiscTable /></div>
         <h4 style={{textAlign:"center", lineHeight:"40px", backgroundColor:"#fff"}}>海外投资机构</h4>
            <div><BaiscTable /></div>
        </div>
}

class BasicMessage extends React.Component {
  constructor(){
    super()
    this.state ={
      page: "1"
    }
  }


  getStyles(){
   return {
     content: {
       fontSize: '14px',
       display: 'flex'
     }
   }
 }


  render () {
    let self = this;
     let styles=this.getStyles();
      return <div >
                <Tabs defaultActiveKey="1" onChange={(e)=>{self.setState({page : e})}}  type="card">
                <TabPane tab="基础信息" key="1">{this.state.page ==='1' ? <Baisc />: ""}</TabPane>
                <TabPane tab="管理人员信息" key="2">{this.state.page ==='2' ? <BaiscTable />: ""}</TabPane>
                <TabPane tab="投资关系信息" key="3">{this.state.page ==='3' ? <BaiscTable Index="" />: ""}</TabPane>
                <TabPane tab="历史编码信息" key="4">{this.state.page ==='4' ? <BaiscTable />: ""}</TabPane>
                <TabPane tab="下级企业信息" key="5">{this.state.page ==='5' ? <BaiscTable />: ""}</TabPane>
                <TabPane tab="通关锁定信息" key="6">{this.state.page ==='6' ? <BaiscTable />: ""}</TabPane>
                <TabPane tab="报关人员信息" key="7">{this.state.page ==='7' ? <BaiscTable />: ""}</TabPane>
                <TabPane tab="..." key="8">{this.state.page ==='8' ? <BaiscTable />: ""}</TabPane>
                </Tabs>
             </div>
  }
}

export default BasicMessage;
