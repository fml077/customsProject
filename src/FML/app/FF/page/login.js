import React, { render } from 'react';
import LoginForm from '../components/loginForm';
import './login.less';

class LoginPage extends React.Component{
	render() {
		return(
			<div className='loginWrap'>
				<div className='loginBg'></div>
				<div className='login-page' >
					<h2>海关智能化数据展示平台</h2>
					<LoginForm />
				</div>
			</div>
		)
	}
}

export default LoginPage;