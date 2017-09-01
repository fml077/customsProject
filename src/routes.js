import React from 'react';
import { Router, Route, browserHistory,IndexRoute } from 'react-router';


//store
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import approvalPlateformReducer from './Form/reducer/approvalPlateformReducer.js';


let createStoreWithMiddleware;
if (__DEV__) {
    createStoreWithMiddleware = applyMiddleware( reduxThunk)(createStore);
} else {
    createStoreWithMiddleware = applyMiddleware( reduxThunk)(createStore);
}
const store = createStoreWithMiddleware(approvalPlateformReducer);


//引入组件
import App from './ui/App';
import Analysis from './ui/Analysis';
import ApprovalPlatform from './Form/page/approvalPlatform'
import IndexPage from './FML/app/FF/page/index';
import LoginPage from './FML/app/FF/page/login';
import ProductDetailPage from './FML/app/FF/page/productDetail';


const _indexPage = React.createClass({
  render() {
    return (
      <div style={{minHeight:"1100px"}}>
        <IndexPage />
        {this.props.children}
      </div>  
    )
  }
})

const _loginPage = React.createClass({
  render() {
    return (
      <div>
        <LoginPage />
        {this.props.children}
      </div>  
    )
  }
})

const Login = ()=>{
  return <div>这是登录页</div>
}

const Home = ()=>{
  return <div>这是主页</div>
}

const _Analysis = ()=>{
  return <div><div style={{width:"1300px", margin:"0 auto", paddingTop:"30px", overflow:"hidden"}}><ApprovalPlatform /></div><div style={{marginTop:"100px"}}><Analysis /></div></div>
}

const Detail = () =>{
  return <div><div style={{width:"1240px",display:"content-box", margin:"0 auto", paddingTop:"30px", overflow:"hidden"}}><ProductDetailPage /></div></div>
}
export const renderRoutes = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute  component={_indexPage} />
        <Route path='/analysis' component={_Analysis} />
        <Route path='/detail' component={Detail} />
      </Route>
      <Route path='/login' component={_loginPage} />
    </Router>
  </Provider>
);
