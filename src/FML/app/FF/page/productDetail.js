import React from 'react';
import ProItemInfo from '../components/productItemInfo';
import ProDetailTab from '../components/productDetailTab';
import './pages.less';

class ProductDetail extends React.Component{	
		
    render() {
        return (
            <div className="productDetail-page">
	            <div className='productDetail-content'>
	            	<ProItemInfo />
	                <ProDetailTab />
	            </div>
            </div>
        );
    }
};

export default ProductDetail;
