import React from 'react';
import { connect } from 'react-redux';
import { Button }  from 'antd'

class QueryCondition extends React.Component{
    constructor(){
        super();
        this.query=this.query.bind(this);
        this.reset=this.reset.bind(this);
    }
    query(){
    	let value=this.refs[0].value;
    	this.props.dispatch({type:'QUERYCONDITION_DATA',data:value})
    }
    reset(){
    		this.refs[0].value='';
    }
    render(){
    	
		let data=this.props.conditiondata;  	
    	let LiHtml=[];
    	LiHtml=data.map(function(item,index){
    		if(item.type=='inputs'){
	    			return(
	    			<li key={index}><b>{item.label}:</b>
	    			<span><input type="text" placeholder={item.placeholder||''} ref={index} list='inputtips'/>
	    				<datalist id="inputtips">  
						    <option value="啤酒" />  
						    <option value="德国啤酒" />  
						    <option value="荷兰啤酒" />  
						    <option value="黑啤酒" />  
						    <option value="鱼粉" />  
						    <option value="红鱼粉" />  
						    <option value="红鱼粉" />  
						    <option value="饲料用白鱼粉" />  
						</datalist>  
	    			</span></li>
	    		)
    		}else if(item.type=='selects'){
    			return(
	    			<li key={index}>
	    			<b>{item.label}:</b>
					<span>
						<select>
							<option>选项一</option>	
							<option>选项二</option>	
						</select>
					</span>
	    			</li>
	    		)
    		}else{
    			return(
	    			<li key={index}>
	    			<b>{item.label}:</b>
					<em>
						<input /><span style={{textAlign:'center'}}>&nbsp;&nbsp;&nbsp;&nbsp;----&nbsp;</span><input /> 
					</em>
	    			</li>
	    		)
    		}
    		
    		
    	})
    	
    	

	return(
		<div>
			<ul className="queryConditionUL">
				{LiHtml}
			</ul>
			<div className="btnsDiv">
				<div>
				<Button onClick={this.query} type="primary">查询</Button>
				<Button onClick={this.reset} type="primary">重置</Button>
				</div>
			</div>
		</div>
	)
    }
};
function mapStateToProps(state) {
    return state
};
export default connect(mapStateToProps)(QueryCondition);