import React, { render } from 'react';
import { Router, IndexRoute, Link, Route, browserHistory, hashHistory} from 'react-router';
import 'antd/dist/antd.css';

import LoginPage from './page/login';
import ApprovePage from './page/approve';
import IndexPage from './page/index';
import ProductDetailPage from './page/productDetail';


const indexPage = React.createClass({
  render() {
    return (
      <div>
        <IndexPage />
        {this.props.children}
      </div>  
    )
  }
})
const approvePage = React.createClass({
  render() {
    return (
      <div>
        <ApprovePage />
        {this.props.children}
      </div>  
    )
  }
})
const productDetailPage = React.createClass({
  render() {
    return (
      <div>
        <ProductDetailPage />
        {this.props.children}
      </div>  
    )
  }
})
const loginPage = React.createClass({
  render() {
    return (
      <div>
        <LoginPage />
        {this.props.children}
      </div>  
    )
  }
})

const App = React.createClass({
   render() {
    return (
      <div>
        <LoginPage />
        {this.props.children}
      </div>  
    )
  }
})

let Root = React.createClass({
	render() {
	    return (
		    <Router history={browserHistory}>
		        <Route path='/'>
			        <IndexRoute component={loginPage} />
              <Route path="login" component={loginPage} />
              <Route path="productDetail" component={productDetailPage} />
              <Route path="approve" component={approvePage} />
			        <Route path="index" component={indexPage} />
		    	</Route>
		    </Router>
		);
	}
});

export default Root;
