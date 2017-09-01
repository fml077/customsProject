//thData为表头数据
//tdData为表格数据
import React from 'react';
import {Link} from 'react-router'
import { connect } from 'react-redux';
		
		class Table extends React.Component {
			constructor() {
				super();
				this.state={
					display1:'none'
				}
			}
			componentDidMount ()  {
				let _this=this;
				
				
				$(".tables").on("click", "tr td", function(e){
					    _this.props.getData(e.target.value)
				})
				
				$(".tables").on("click", "tr th", function(e){
					if (e.target.checked) {
						$(".tables tr td input[type='checkbox']").attr("checked","true");
						 _this.props.getthData(e.target.checked)
					}
					
				})
				
				$(".tables tr td:nth-child(7)").mouseover(function(){
					_this.setState({
					display1:'block'
				})
					})
				
				$(".tables tr td:nth-child(7)").mouseout(function(){
					_this.setState({
					display1:'none'
				})
					})
			  }
			componentDidUpdate ()  {
				$('.tables td').html(function(i,oldHTML){
           			 return oldHTML.replace(/鱼粉/g,"<a href='/detail'><font color='red'>鱼粉</font></a>");
     			   })
				$('.tables td').html(function(i,oldHTML){
           			 return oldHTML.replace(/啤酒/g,"<a href='/detail' ><font color='red'>啤酒</font></a>");
     			   })
			  }
			render() {
				let _this=this;
				let thData=this.props.thData;
				let tdData=this.props.tdData;

				//表头
				let thHtml = [];
				thHtml = thData.map(function(item, index) {
					if(item.type == 'text') {
						return(
							<th key={index}>{item.label}</th>
						)
					}else{
						return(
							<th key={index}>
								<select>
								  {
								  	item.options.map(function (item1,index1) {
								  		return(<option key={index1}>{item1}</option>)
								  	})
								  }
								</select>
							</th>
						)
					}
				})
				
				//				表格信息
				let tdHtml = [];
				tdHtml = tdData.map(function(item, index) {
					return(
							<tr key={index}><td><input type="checkbox" name='checkboxs' value={index} /></td>
							{item.map(function (item1,index1) {
								return (<td key={index1}>{item1}</td>)
							})}
							</tr>
						)
				})
				
				let IsDisplay=this.state.display1;
				
				return(
					<div className='tableDiv'>
			            	<div style={{display:IsDisplay}} className='isdisplay'>
				            	<h6>风险信息</h6>
				            	<ol>
				            		<li>1.【h3】完税价格较高</li>
				            		<li>2.【h3】检查归类</li>
				            		<li>3.【h3】企业信用风险较高</li>
				            		<li>4.【h3】...</li>
				            		<li>5.【h3】...</li>
				            	</ol>
			            	</div>
						 	 <table className="tables">
					  		 <tr style={{background:'#f7f7f7'}}><th><input type="checkbox" /></th>{thHtml}</tr>
					  		 {tdHtml}
						  </table>
					</div>
				)
			}
		}
		
		function mapStateToProps(state) {
			return state
		};
		export default connect(mapStateToProps)(Table);