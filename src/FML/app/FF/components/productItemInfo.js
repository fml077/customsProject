import React from 'react';
import ProductDetail from '../data/productDetail';
import './productItemInfo.less';

class ProductItemInfo extends React.Component{	
		
    render() {
        return (
            <div className="productItemInfo">
                <div className="information">
                	<h3>{ProductDetail.name}</h3>

                	<ul>
                		<li><strong>{ProductDetail.dutyParagraph.alias}: </strong>{ProductDetail.dutyParagraph.value}</li>
                		<li><strong>{ProductDetail.riskInf.alias}: </strong>{ProductDetail.riskInf.value}</li>
                		<li><strong>{ProductDetail.declarePrice.alias}: </strong>{ProductDetail.declarePrice.value}</li>
                		<li><strong>{ProductDetail.declareNnit.alias}: </strong>{ProductDetail.declareNnit.value}</li>
                	</ul>
                	<ul>
                		<li><strong>{ProductDetail.type.alias}: </strong>{ProductDetail.type.value}</li>
                		<li><strong>{ProductDetail.oddNumber.alias}: </strong>{ProductDetail.oddNumber.value}</li>
                		<li><strong>{ProductDetail.customsPrice.alias}: </strong>{ProductDetail.customsPrice.value}</li>
                		<li><strong>{ProductDetail.legalPrice.alias}: </strong>{ProductDetail.legalPrice.value}</li>
                	</ul>
                	<ul>
                		<li><strong>{ProductDetail.applicatioCompany.alias}: </strong>{ProductDetail.applicatioCompany.value}</li>
                		<li><strong>{ProductDetail.origin.alias}: </strong>{ProductDetail.origin.value}</li>
                		<li><strong>{ProductDetail.currency.alias}: </strong>{ProductDetail.currency.value}</li>
                		<li><strong>{ProductDetail.declareTotalPrice.alias}: </strong>{ProductDetail.declareTotalPrice.value}</li>
                	</ul>
                    <img src={require('./proDetail1.png')} className="proDetailImg"/>
                </div>
            </div>
        );
    }
};

export default ProductItemInfo;