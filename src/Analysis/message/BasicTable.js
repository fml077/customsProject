import React, { PropTypes } from 'react';
import { Table } from 'antd';

import { MessageTotalData }  from './MessageData'

class BasicTable extends React.Component {
  getStyles(){
   return {
     title: {
       textAlign: 'center',
       lineHeight:"30px"
     }
   }
 }
  render () {
      let dataSource = [], columns = [];
      if(MessageTotalData[this.props.Index]){
          let currentData = MessageTotalData[this.props.Index];
          dataSource = currentData.map((e, i)=>{ return e})
          for(let k in currentData[0]){
            let o = {
                  title: k,
                  dataIndex: k,
                  key: k,
                  width:'5%',
                  render: (text) => <span className="col-sql">{text}</span>,
                }
            columns.push(o)
          }
      }
      let styles = this.getStyles();
      return <div >
                  <Table dataSource={dataSource} columns={columns} pagination={this.props.pagination}/>
             </div>
  }
}

export default BasicTable
