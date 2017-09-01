import React from 'react';
import IndexChartLine from '../components/indexChart';
import IndexMap from '../components/indexMap';
import './pages.less'

class IndexPage extends React.Component{	
		
    render() {
        return (
            <div className="index-page clearfix">
            	<div className='index-content'>
	            	<IndexMap />
	                <IndexChartLine />
            	</div>
            	
            </div>
        );
    }
};

export default IndexPage;
